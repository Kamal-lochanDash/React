import ResturantCard, {withIsOpenLabel} from "./ResturantCards";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfResturants from "../utils/useListOfResturants";
import OfflineStatus from "./OfflineStatus";
import ProfileCard from "./ProfileCard";
import { useOutletContext } from "react-router-dom";

const Body = () => {

  const { isCardVisible, handleCloseCard } = useOutletContext();

    

      const [searchText,setSearchText]=useState("");

      const ResturantCardIsOpen=withIsOpenLabel(ResturantCard);

     
      const{listOfResturant,filteredResturant,setFilteredResturant,setListOfResturant}=useListOfResturants();
      const onlineStatus=useOnlineStatus();

     

    


      if(onlineStatus===false){
        return (
        <OfflineStatus/>
        )
      }
      



    return listOfResturant.length===0?(
<Shimmer/>
    ) :(
      <div className="body">
        <div className="filter flex mb-4 ">
          <div className="search">
            <input type="text" className="search-box px-3 shadow-lg rounded-lg mr-3 ml-8 border border-solid border-gray-100 ring-1 ring-gray-300" value={searchText} onChange={(e)=>{
             setSearchText(e.target.value);
            }}/>
            <button className="search-btn   bg-orange-400 w-20 h-7 mr-3 rounded-md hover:bg-gray-300"
            onClick={()=>{
              console.log(searchText)
              const userSearchResturant=listOfResturant.filter((resturant)=>{
                return resturant.info.name.toLowerCase().includes(searchText.toLowerCase()); // <imp> .include function checks that is there any value simlar to the given value.
              });

              setFilteredResturant(userSearchResturant)


            }}
            >Search</button>
          </div>
            <button className="filter-btn bg-red-500 rounded-md p-1 hover:bg-slate-200"
            onClick={()=>{

               

                const filterList=listOfResturant.filter((resturant)=>{
                    return resturant.info.avgRating>4
                })

                setListOfResturant(filterList);  
            }}
            >Toprated Resturants</button>
        </div>
        <div className="res-container flex flex-wrap">
          {filteredResturant.map((restaurant) => {
           
  
            return (
             <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}> 

             {
            restaurant.info.isOpen ? (
            <ResturantCardIsOpen  restData={restaurant} /> 
          ) :
            (<ResturantCard  restData={restaurant} />)
             } 
             </Link>
            );
            //<c4> we need to return it, & each card object that it return must have a unique key
          })}
        </div>

<div >
  {
  isCardVisible && <ProfileCard onCloseCard={handleCloseCard}/>
}
</div>

        
        
      </div> 
    );
  };
  
  export default Body;


  