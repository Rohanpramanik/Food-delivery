import RestaurantCard, { RestaurantWithDisscount } from "./RestaurantCard";
// import restroList from "../utils/mockData"
// import { RESTRO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body =() => {
    // const [ListOfRestaurant, setListOfRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [filteredRestro, setfilteredRestro] = useState([]);

    const ListOfRestaurant = useRestaurantList();
    const RestaurantWithDisscountLabel = RestaurantWithDisscount(RestaurantCard);

    useEffect(()=>{
        setfilteredRestro(ListOfRestaurant)
    },[ListOfRestaurant]);

    // const fetchData = async () => {
    //     const data = await fetch(RESTRO_URL);

    //     const jsonData = await data.json();
    //     console.log("printData");
    //     console.log(jsonData);
    //     //giving ? is called optional chaining it check data is there or not.
    //     const restroList = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     // console.log(restroList);
    //     console.log(restroList);
    // };
    
    console.log("body render",ListOfRestaurant)
    return ListOfRestaurant.length === 0 ? ( <ShimmerUI /> ) :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4">
                    <input className=" border border-black" value={searchText} onChange={(e) => {setsearchText(e.target.value)}} />
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-lg hover:bg-green-200" onClick={()=>{
                        const searchRestro = ListOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestro(searchRestro);
                    }}>search</button>
                    <button className="px-4 py-1 bg-gray-100 rounded-lg hover:bg-gray-200" 
                        onClick={()=>{
                            const filteredList = ListOfRestaurant.filter(
                                (res)=> res.info.avgRating > 4
                            );
                            setfilteredRestro(filteredList);
                            console.log(filteredList);
                        }}
                    >
                        Top Rated Restaurant 
                    </button>
                </div>
                {/* <div className="search m-4 flex items-center">
                </div> */}
                
            </div>

            <div className="restro-container flex flex-wrap">
                {
                  filteredRestro.map((restaurant) => 
                    <Link 
                        to={"/Restaurants/"+restaurant.info.id} 
                        key={restaurant.info.id}
                        style={{color: 'black'}}
                        >
                            {
                                restaurant?.info?.aggregatedDiscountInfoV3?.header !== undefined && restaurant?.info?.aggregatedDiscountInfoV3?.subHeader !== undefined ? <RestaurantWithDisscountLabel restroData={restaurant}/> : <RestaurantCard restroData={restaurant}/>
                            }
                        
                    </Link>
                  )
                }
            </div>
        </div>
    );
};

export default Body;