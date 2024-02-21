import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    const [resList,setResList]=useState([]);

    const [searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
        //console.log("use-effect called")
    },[])
    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780");
        const json=await data.json();
        console.log(json);
        //console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        setResList(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus==false){
        return(
            <h1>Looks like you're offline!! Please check your internet connection...</h1>
        )
    }

    return resList.length===0?(
         <Shimmer/>
    ):(
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                        }}>
                    </input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={(e)=>{
                        //filter the res and update the UI
                        console.log(searchText);
                        const filteredRes=resList.filter(
                            (res)=>res.info.name.includes(searchText)
                        );
                        setResList(filteredRes);
                    }}>
                        Search
                    </button>
                </div>
                <div className="px-4 m-4 flex items-center ">
                    <button className="bg-green-100 px-4 py-2 rounded-lg" onClick={()=>console.log("button-clicked")}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    resList.map((x)=>(
                    <Link 
                        key={x.info.id}
                        to={"/restaurants/" + x.info.id }>
                        <RestaurantCard resData={x}/>
                    </Link>  
                    ))
                }
            </div>
        </div>
    )
}
export default Body;
