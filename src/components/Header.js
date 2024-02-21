import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
    const onlineStatus=useOnlineStatus();
    return(
        <div className="flex justify-between bg-orange-300 shadow-lg">
            <div className="logo-container">
                <img className="w-56" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="img"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-4">
                    <li className="px-4">Online Status{onlineStatus ? "✅" :"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link></li>
                    <li className="px-4"><Link to="/Contact">Contact US</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;