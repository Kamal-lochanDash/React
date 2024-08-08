
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
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
  
        <div className="nav-items">
          <ul>
            <li>
              {onlineStatus?"🟢":"🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="login-btn"

            onClick={()=>{
             btnNameReact==="Login"?setBtnNameReact("LogOut"):setBtnNameReact("Login")
            }}


            >{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;