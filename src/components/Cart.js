import { useSelector, useDispatch } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../appStore/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return <div className="text-center m-4 p-3">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <CartItemList items={cartItems}/>
            <button className="bg-black text-white p-2 m-2 rounded-lg" onClick={handleClearCart}>
                Clear Cart
            </button>
            {cartItems.length == 0 && <h1>Cart is empty add item to the cart</h1>}
        </div>
    </div>
}

export default Cart;