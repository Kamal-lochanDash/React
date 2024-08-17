import ResturantCard, {withIsOpenLabel} from "./ResturantCards";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfResturants from "../utils/useListOfResturants";
import OfflineStatus from "./OfflineStatus";

const Body = () => {


    

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

                /*What we have done before using hooks */
                //--> listOfResturant=listOfResturant.filter((returant)=>{  |   //here listOfRestuirants got updated still in ui we did't get the filtered output 
                // -->    return returant.data.avgRating > 4                |   //because the scope of the updated listOfResturant is inside this button div and the res-container div have the has access to the global scope of the component
                //--> });                                                   |     //there fore it shows the same result
 //-->                                                                      |
                //--> console.log(listOfResturant)                          |
         
                /*After using hooks */

                const filterList=listOfResturant.filter((resturant)=>{
                    return resturant.info.avgRating>4
                })

                setListOfResturant(filterList);  //whenever a react state variable updates it triggers a rerender of the components
            }}
            >Toprated Resturants</button>
        </div>
        <div className="res-container flex flex-wrap">
          {filteredResturant.map((restaurant) => {
            //in each iteration resturant contain the resturantList objects
  
            return (
             <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}> 

             {/*if the resturant is open then add a open lebel to it */
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
      </div> 
    );
  };
  
  export default Body;


  //never ever create any harcoded data in the component folder

  /*
  <b1>Why React Doesn't Detect the Change:
<c2>Direct Mutation: In your original code, listOfResturant is being directly mutated.
<c2> React does not detect this change because it is an in-place modification.

<c5>State Management: React uses its state management system (useState, useReducer, etc.) to track changes and trigger re-renders. 
<c5>If you do not use these mechanisms, React will not know that it needs to re-render.


<imp> so basicalyy in react variables are immutable untill we specifically say any change has happen
<imp>In React, direct mutation of state does not trigger a re-render. React needs to know when the state changes so it can update the UI accordingly.

<c3>By using React's state management (useState), you ensure that any updates to the state are tracked by React,
<c3> which triggers a re-render when the state changes. Here’s the corrected approach:
  */