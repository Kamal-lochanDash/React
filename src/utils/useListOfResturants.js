import { useEffect, useState } from "react"
import { MENU_LIST } from "./constant";

const useListOfResturants=()=>{
    const [listOfResturant,setListOfResturant]=useState([]);
    const [filteredResturant,setFilteredResturant]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData= async()=>{
        const data= await fetch(MENU_LIST);
        const json= await data.json();
        console.log(json)
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {listOfResturant,filteredResturant,setFilteredResturant,setListOfResturant};
};

export default useListOfResturants;

