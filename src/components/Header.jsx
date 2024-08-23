import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ({onShowCard}) => {
  //let btnName="Login"
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const[isActive,setIsActive]=useState(false)
  const data = useContext(UserContext);
  console.log(data);
  console.log(onShowCard)

  console.log("header rerendered");






  

  useEffect(() => {
    console.log("use effect called");
  }, [btnNameReact]);

  const handelClick=()=>{
    setIsActive(!isActive)
  }
  


  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex  justify-between shadow-lg h-28 mb-2">
      <div className="logo-container">
        <img className=" logo w-28 h-28 ml-3" src={LOGO_URL} />
      </div>

      <div className="nav-items flex items-center mr-10">
        <ul className="flex mr-4 font-bold ">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:text-red-400">
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
          
          <li className="px-4  hover:text-orange-200">
            <button
              className="login-btn  bg-gray-200 w-20 h-7 rounded-md hover:bg-gray-400"
              onClick={() => {
                btnNameReact === "Login"
                  ? setBtnNameReact("LogOut")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>

          <li>
            <button id="profile-btn" className={`border border-gray-400 border-solid w-10 h-7 flex justify-center items-center rounded-3xl  ring-1 ring-gray-300 `}
             style={{borderColor:isActive?"gray":"darkGray"}}
            //  onClick={handelClick}
            onClick={onShowCard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="gray"
                className="bi bi-people"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
              </svg>
            </button>
          </li>




          <li className="  px-4  hover:text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="ml-2 bi bi-bag-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>



          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
