import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        // we r mutating the state here, mutating the state means direacting changing the state
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex((item)=>item.card.info.id === action.payload.card.info.id); //it will return -1 if didn't match the id

            if(itemIndex >= 0) {
                state.items[itemIndex].itemQuentity += 1;
                toast.info("Increased item quentity", {
                    position: "bottom-center",
                });
            }else {
                const tempItem = {...action.payload, itemQuentity:1};
                state.items.push(tempItem);
                toast.info("Added new item to the cart", {
                    position: "bottom-center",
                });
            }
        },
        decreaseItem: (state, action) => {
            const itemIndex = state.items.findIndex((item)=>item.card.info.id === action.payload.card.info.id);
            if(state.items[itemIndex].itemQuentity > 1) {
                state.items[itemIndex].itemQuentity -= 1;
                toast.info("Decreased item quentity", {
                    position: "bottom-center",
                });
            } else if(state.items[itemIndex].itemQuentity === 1){
                const cartItem = state.items.filter((item)=>item.card.info.id !== action.payload.card.info.id)
                state.items = cartItem;
                toast.info("Removed from the cart", {
                    position: "bottom-center",
                });
            }
        },
        removeFromCart: (state, action) => {
            const cartItem = state.items.filter((item)=>item.card.info.id !== action.payload.card.info.id)
            state.items = cartItem;
            toast.info("Removed from the cart", {
                position: "bottom-center",
            });
        },
        clearCart: (state) => {
            state.items.length = 0;
           // return { items:[] };  I can use this as well
        },
    },
});

export const { addItem, decreaseItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;