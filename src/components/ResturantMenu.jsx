import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import MenuView from "./MenuView";
import { useOutletContext, useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantmenu";
import NestedMenuView from "./NestedMenuView";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineStatus from "./OfflineStatus";
import { useState } from "react";
import ProfileCard from "./ProfileCard";


const ResturantMenu = () => {


  const { isCardVisible, handleCloseCard } = useOutletContext();
  


  const onlineStatus=useOnlineStatus();
 
  const {resId}=useParams(); //<imp> it returns a object that contain the resId that we have initilised in the index.js page
  const [showIndex,setShowIndex]=useState(0);
  


  const resInfo= useResturantMenu(resId)
  if(onlineStatus===false){
    return (
    <OfflineStatus/>
    )
  }else if (resInfo === null) {
    return <Shimmer />;
  }else{

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    totalRatingsString,
    areaName,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { deliveryTime, slaString, lastMileTravel } =
    resInfo?.cards[2]?.card?.card?.info?.sla;
  const { amount } = resInfo?.cards[2]?.card?.card?.info?.feeDetails;
  const { itemCards, title } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const {cards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(itemCards);
  console.log(title);
  console.log(resInfo?.cards[2]?.card?.card?.info?.name);
  console.log(cards)

  const category=cards.filter((currentItem)=>{
    return currentItem?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  const category2=cards.filter((currentItem)=>{
    return currentItem?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"

  })

  console.log(category)
  console.log(category2)
  

  return (
    <div className="menu-container w-full relative ">
      <div className="p-4 w-[770px] min-h-[300px] bg-white border border-gray-300 rounded-xl shadow-md m-5 text-base text-gray-800 mx-auto mb-10 mt-5">
        <div className="menu-header flex items-center justify-between">
          <div className="flex items-center">
          <img src={CDN_URL + cloudinaryImageId} className="h-20 w-20 mb-1 rounded-lg" alt="" />
          <div>
          <h1 className="ml-3 font-serif font-bold">{name}</h1>
          <h4 className="ml-3 flex"><div className="w-2 h-2 rounded-lg bg-red-400 mt-2 mr-2"></div><div className="text-gray-500">{costForTwoMessage}</div></h4>
          </div>
          </div>
          <div className="flex items-center ">
          <div className="ml-3 w-6 h-6 text-center rounded-xl  ring-1 ring-green-600   bg-[#1c8f37] text-white">
            ★
          </div>
          <div className="ml-2 font-bold">{avgRating + "(" + totalRatingsString + ")"}</div>
         
          </div>

        </div>

        <hr />
        <div className="menu-body">
          

          <div className="menu-body-2 ">
            <p className="text-[#ff6347] no-underline hover:underline">{cuisines.join(",")}</p>
          </div>

          <div className="menu-body-3 flex items-center mt-2.5 ml-7.5">
            <h3>Outlet </h3>
            <p className="ml-5 text-[rgb(190,190,190)]">📍 {areaName}</p>
          </div>

          <div className="menu-body-4 flex items-center mt-2.5 ml-7.5">
            <h3>Waiting Period</h3>
            <p className="ml-5 text-[rgb(147,147,147)]">{slaString}</p>
          </div>
        </div>
        <hr style={{ marginTop: "20px" }} />
        <div className="menu-footer flex items-center mt-2.5 text-[rgb(147,147,147)]">
          <b>{lastMileTravel} Km | </b>
          <p>₹{amount / 100} Dilivery Fees will we applied</p>
        </div>
      </div>

      
        <div className="menu-items text-center">
            <h2 className="font-bold font-serif text-red-400">Menu</h2>
           {category.map((card,index)=>{
             return(
                <MenuView key={card?.card?.card?.title} 
                title={card?.card?.card?.title} 
                itemCards={card?.card?.card?.itemCards} 
                showItems={index===showIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)} 

                 hideshowIndex={()=>setShowIndex(false)}
                 />
            )
           })}

           {
            category2.map((card,index)=>{
              return(

                <NestedMenuView key={card?.card?.card?.title} title={card?.card?.card?.title} categories={card?.card?.card?.categories}/>
              
              )
              
            })
           }
        </div>


        <div >
  {
  isCardVisible && <ProfileCard onCloseCard={handleCloseCard}/>
}
</div>
      
    </div>
  );
}
};

{
  /* <div className="menu-items">
<div className="items-overview">
    
</div>
</div> */
}

export default ResturantMenu;
