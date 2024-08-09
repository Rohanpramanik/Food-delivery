import { useEffect, useState } from "react";
import ItemsList from "./ItemList";

//controlled component
const RestaurantCategory = ({ data, showItem, setShowIndex, showIndex }) => {
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
    }
    // useEffect(()=>{
    //     if(showIndex === )
    // },[setShowIndex])
    // console.log(data);
    // console.log(data.itemCards);

    return (
        <div className="w-6/12 mx-auto my-2 bg-gray-100 shadow-lg p-4 " >
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
            {showItem && <ItemsList items={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;