import { CDN_URL } from "../utils/constants";
import  { useDispatch } from "react-redux";
import  { addItem, decreaseItem, removeFromCart } from "../appStore/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const CartItemList = ({ items }) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleIncreaseItem = (item) => {
        dispatch(addItem(item));
    };

    const handleDecreaseItem = (item) => {
        dispatch(decreaseItem(item));
    }
    const handleDeleteItem = (item) => {
        dispatch(removeFromCart(item));
    }
    return (
        <div>
            {
                items.map((item) => (
                    <div className="border-gray-200 border-b-2 ">
                        <div key={item.card.info.id} className="p-2 m-2 text-left flex justify-between ">
                            <div className="w-9/12">
                                <div className="py-2 inline-grid">
                                    <span>{item.card.info.name}</span>
                                    <span> Price - ₹{item.card.info.price ? (item.card.info.price/100)*item.itemQuentity : (item.card.info.defaultPrice/100*item.itemQuentity)}</span>
                                </div>
                                {/* <p className="text-xs">{item.card.info.description}</p> */}
                            </div>
                            <div className="w-3/12 p-2">
                                <img src={CDN_URL+item.card.info.imageId} className="w-full h-20"/>
                            </div>
                        </div>

                        <div className="flex justify-between px-2 m-2">
                            <div className="flex">
                                <button className="flex items-center bg-red-500 rounded-lg px-1" onClick={()=>handleDeleteItem(item)}>
                                    remove
                                    <MdDelete /></button>
                            </div>
                            <div className="flex space-x-3 px-2">
                                <button className="font-bold" onClick={()=>handleDecreaseItem(item)} ><FaMinus /></button>
                                <h1>{item.itemQuentity}</h1>
                                <button onClick={()=>handleIncreaseItem(item)}><FaPlus /></button>
                            </div>
                            
                        </div>
                    </div>))
                
            }
        </div>
    )
};

export default CartItemList;