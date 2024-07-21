import ResturantCard from "./ResturantCards";
import restaurantList from "../utils/mockdata";
import { useState } from "react";


const Body = () => {

    const [listOfResturant,setListOfResturant]=useState(   restaurantList          //<imp>Update State: Use the state setter function (setListOfResturant) to update the list when filtering.
      );/* whenever we call this useState function it returns a state variable*/

    //! Normal variable declaration cannot be mutated after declaration
// let listOfResturant=[
//     {
//         data:{
//            id: "74453",
//            name: "Domino's Pizza",
//          cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//          cuisines: ["Pizzas"],
//          costForTwo: 40000,
//          deliveryTime: 45,
//          avgRating: "3.8"
//  }
//     }, 

//     {
//         data:{
//             id: "410476",
//             name: "The Brooklyn Creamery - Healthy Ice Cream",
//           cloudinaryImageId: "ldtibwymvzehvmdwl8la",
//           cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
//           costForTwo: 20000,
//           deliveryTime: 31,
//           avgRating: "4.4"
//   }
//     }
// ]


    return (
      <div className="body">
        <div className="filter">
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
                    return resturant.data.avgRating>4
                })

                setListOfResturant(filterList);  //whenever a react state variable updates it triggers a rerender of the components
            }}
            >Toprated Resturants</button>
        </div>
        <div className="res-container">
          {listOfResturant.map((restaurant) => {
            //in each iteration resturant contain the resturantList objects
  
            return (
              <ResturantCard key={restaurant.data.id} restData={restaurant} />
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