import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";





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
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);