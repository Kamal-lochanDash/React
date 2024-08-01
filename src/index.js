import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";





// we can add css as format of js object , this object can have css properties
/*
    const styleProp={
    backgroundColor:gray;
    border: 1px solid black etc
    }

    const div= ()=>{
      <div clssName="rough" style={styleProp}></div>
      
      }

*/
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/> {/* Outlet is filled according to the path choosen in the browser */}
    </div>
  );
};

 

const appRout = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[

      {
        path:"/",
        element:<Body/>,
        errorElement:<Error/>
      },

      {
        path:"/about",
        element:<About/>,
        errorElement:<Error/>
      },
    
      {
        path:"/contact",
        element:<Contact/>,
        errorElement:<Error/>
      },

      {
        path:"/resturant/:resId" ,    //here resId is the dyanamic data that changes according to the resturant clicked
        element:<ResturantMenu/>,
        errorElement:<Error/>
      }

    ],
    errorElement:<Error/>
  },
//Children have a higher prority
  {
    path:"/cotact",
    element:<Contact/>,
    errorElement:<Error/>
  }

 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRout} />);