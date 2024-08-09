import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo.jpg";
import { LOGO_URL } from "../utils/constants";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import store from "../appStore/store";
import {useSelector} from "react-redux";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {LoggedInUser} = useContext(UserContext);
    console.log(LoggedInUser);

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img className="w-20" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status {onlineStatus ?  ("✅") : ("🔴")}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4"> 
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li className="px-4 flex">
                        <Link to="/Cart">
                            <FaCartPlus data-testid="cart-icon" className="h-6 w-6 items-center"/>
                        </Link>
                        <div className="font-bold">{cartItems.length}</div>
                    </li>
                    <button className="login-btn" 
                        onClick={()=>{
                            btnName == "Login"? setbtnName("Loggout") : setbtnName("Login");
                            console.log(btnName);
                        }}
                        >
                        {btnName}
                    </button>
                    <li className="px-4">{LoggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;