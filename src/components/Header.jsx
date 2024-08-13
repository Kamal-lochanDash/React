
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
//let btnName="Login"
  const [btnNameReact,setBtnNameReact]=useState("Login");
  console.log("header rerendered")

  useEffect(()=>{
    console.log("use effect called")
  },[btnNameReact]);
  
  const onlineStatus=useOnlineStatus();
    return (
      <div className="header flex  justify-between shadow-lg h-28 mb-2" >
        <div className="logo-container">
          <img
            className=" logo w-28 h-28 ml-3"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items flex items-center mr-10">
          <ul className="flex mr-4 font-bold " >
            <li className="px-4">
              {onlineStatus?"🟢":"🔴"}
            </li>
            <li className="px-4 hover:text-red-400" >
              <Link to="/">Home</Link>
            </li>
            <li className="px-4  hover:text-red-400">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4  hover:text-red-400">
              <Link to="/contact">Contact</Link>
            </li>

            <li className="px-4  hover:text-red-400">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4  hover:text-red-400">Cart</li>
            <li className="px-4  hover:text-orange-200"><button className="login-btn  bg-gray-200 w-20 h-7 rounded-md hover:bg-gray-400"
            onClick={()=>{
             btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login")
            }}


            >{btnNameReact}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;