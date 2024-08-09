import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { restroData } = props;
    //destructuring
    console.log(restroData);
    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = restroData?.info;
    //restroData?.info ? mark means it check wheather info is avilable or not
    return (
        <div className="restro-card m-4 p-4 w-52 items-center rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="restro-logo w-[100%] h-[100] rounded-md" alt="res logo" src={ CDN_URL + cloudinaryImageId } />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

//Higherorder component
export const RestaurantWithDisscount = (RestaurantCard) => {
    return (props)=> {
        // const { restroData } = props;
        if(props.restroData.info.aggregatedDiscountInfoV3===undefined) return <ShimmerUI /> ;
        const { header, subHeader } = props?.restroData?.info?.aggregatedDiscountInfoV3;
        // console.log(header);

        return (
            <div>
                <label className="absolute text-center bg-black text-white text-l px-4 m-4 font-bold">{header+" "+subHeader}</label>
                <RestaurantCard {...props}/>
                
                {/* <label className="absolute bg-black text-white px-4 m-4 rounded-lg">Open</label> */}
            </div>
        )
    }
};

export default RestaurantCard;