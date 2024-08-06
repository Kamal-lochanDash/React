import ResturantCard from "./ResturantCards";
import restaurantList from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  console.log("rerendered")

    const [listOfResturant,setListOfResturant]=useState( []  //restaurantList    (mow we do not need this resturantmockdata instead we can use a loader)       //<imp>Update State: Use the state setter function (setListOfResturant) to update the list when filtering.
      );/* whenever we call this useState function it returns a state variable*/

      const [filteredResturant,setFilteredResturant]=useState([]);

      const [searchText,setSearchText]=useState("");

      useEffect(()=>{  // this get executed after the render cycle is finished
        fetchData();
        console.log("hi")
      },[]); 

      //if eror delete this
      const fetchData=async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log(data);
        const json= await data.json();
        console.log(json)
       console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       // Cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.id
        //now we will rerender the ui with our new data that we have got

        setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      }

      if(listOfResturant.length==0){
        return <Shimmer/>
      }
      



    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
             setSearchText(e.target.value);
            }}/>
            <button className="search-btn"
            onClick={()=>{
              console.log(searchText)
              const userSearchResturant=listOfResturant.filter((resturant)=>{
                return resturant.info.name.toLowerCase().includes(searchText.toLowerCase()); // <imp> .include function checks that is there any value simlar to the given value.
              });

              setFilteredResturant(userSearchResturant)


            }}
            >Search</button>
          </div>
            <button className="filter-btn"
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
        <div className="res-container">
          {filteredResturant.map((restaurant) => {
            //in each iteration resturant contain the resturantList objects
  
            return (
             <Link key={restaurant.info.id} to={"/resturant/"+restaurant.info.id}> <ResturantCard  restData={restaurant} /></Link>
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