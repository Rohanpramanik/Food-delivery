import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_URL } from "../utils/constants"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    //lifting up the state
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    // console.log(resId);

    // useEffect(()=>{
    //     showIndex === setShowIndex 
    // },[setShowIndex]);
    const restroMenu = useRestaurantMenu(resId);

    if(restroMenu===null) return <ShimmerUI /> ;
    console.log("restroMenu details");
    console.log(restroMenu);
    // const { name, cuisines, costForTwo } = restroMenu.cards[0].card.card.info;
    // const { itemCards } = restroMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    const { itemCards } = restroMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const catagories = restroMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=> c.card?.card?.["@type"] === ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    
    // "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" 
    // restroMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards
    // console.log("restrolist", restroMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    // console.log("catagories", catagories);
    return(
        <div className="menu text-center">
            {/* <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-sm">{cuisines.join(", ")} - Rs. {costForTwo/100}</p> */}
            {
                catagories.map((item, index)=><RestaurantCategory key={item.card.card.title} data={item.card.card} showItem={index===showIndex} setShowIndex={()=>setShowIndex(index)} showIndex={showIndex}/>)
            }
        </div>
    );
};

export default RestaurantMenu;  