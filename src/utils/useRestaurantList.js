// I haven't use this file anywhere

import { useState, useEffect } from "react";
import { RESTRO_URL } from "./constants";

const useRestaurantList = () => {
    const [ListOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch(RESTRO_URL);
        const jsonData = await data.json();
        // console.log(jsonData);
        //giving ? is called optional chaining it check data is there or not.
        const restroList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restroList);
        // setfilteredRestro(restroList);
    };

    return ListOfRestaurant;
}

export default useRestaurantList;