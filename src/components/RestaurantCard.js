import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-300 rounded-lg hover:bg-gray-500 h-96">
            <div>
                <img className="res-logo py-2 h-48 w-52" 
                src={CDN_URL+props.resData.info.cloudinaryImageId} alt="img"></img>
            </div>
            <h3 className="font-bold">{props.resData.info.name}</h3>
            <h4 className="overflow-auto">{props.resData.info.cuisines.join(",")}</h4>
            <h4>{props.resData.info.costForTwo}</h4>
            <h4>{props.resData.info.avgRating}</h4>
        </div>
    )
}

export default RestaurantCard;