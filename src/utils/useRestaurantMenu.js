import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
    const [restroMenu, setRestroMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const jsonData = await data.json();
        setRestroMenu(jsonData.data);
    }

    return restroMenu;
}

export default useRestaurantMenu;