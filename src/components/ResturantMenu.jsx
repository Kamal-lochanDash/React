import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import MenuView from "./MenuView";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
 
  const {resId}=useParams(); //<imp> it returns a object that contain the resId that we have initilised in the index.js page
  

  useEffect(() => {
    fetchMenu();
  }, []); // we are using this empty list beacuse we do not want to render the component everTime the component renders,else it will wbe rendered infinite times untiil the web stops

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) {
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

  return (
    <div className="menu-container">
      <div className="menu-info">
        <div className="menu-header">
          <img src={CDN_URL + cloudinaryImageId} alt="" />
          <h1>{name}</h1>
        </div>

        <hr />
        <div className="menu-body">
          <div className="menu-body-1">
            <h3>{"⭐️ " + avgRating + " (" + totalRatingsString + ")"}</h3>
            <h4>{costForTwoMessage}</h4>
          </div>

          <div className="menu-body-2">
            <p>{cuisines.join(",")}</p>
          </div>

          <div className="menu-body-3">
            <h3>Outlet </h3>
            <p>📍 {areaName}</p>
          </div>

          <div className="menu-body-4">
            <h3>Waiting Period</h3>
            <p>{slaString}</p>
          </div>
        </div>
        <hr style={{ marginTop: "20px" }} />
        <div className="menu-footer">
          <b>{lastMileTravel} Km | </b>
          <p>₹{amount / 100} Dilivery Fees will we applied</p>
        </div>
      </div>

      
        <div className="menu-items">
            <h2>Menu</h2>
           {cards.map((card,index)=>{
             return(
                <MenuView key={index} title={card?.card?.card?.title} itemCards={card?.card?.card?.itemCards}   />
            )
           })}
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
