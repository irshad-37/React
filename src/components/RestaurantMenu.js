import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
    const [resInfo,setResInfo]=useState();
    const {resId}=useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[])
    const fetchMenu=async ()=>{
        const data=await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&isMenuUx4=true&submitAction=ENTER`);
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    //const {name,costForTwoMessage,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards}=resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    //console.log(itemCards);
    //if(resInfo==null){
    //    return <Shimmer/>
    //}
    return(
        <div>
            <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines}</h3>
        </div>
    )
}
export default RestaurantMenu;