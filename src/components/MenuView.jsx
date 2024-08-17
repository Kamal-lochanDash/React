import { useState } from "react";
import MenuViewList from "./MenuViewList";


const MenuView = (props) => {
  const { title, itemCards,showItems, setShowIndex,hideshowIndex} = props;
  // const [showItems,setShowItems]=useState(true);



  const handelClick=()=>{

    if(showItems===false){
      setShowIndex();
    }else{
      hideshowIndex()
    }
   

   
    

  }
  
  return (
    <div>
      <div className="items-overview   w-[770px] bg-white  shadow-md  text-base text-gray-800 mx-auto ">
        <div className="flex justify-between cursor-pointer items-center h-16" onClick={handelClick} >
        <h2 className="font-mono font-bold ml-[10px] text-xl mt-2">
          {title + " ("}
          {itemCards.length + ")"}
        </h2>
        <div className="p-2 mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
        </div>

        <div>
          {itemCards.map((currentItem,index)=>{
            return(
              showItems && <MenuViewList key={index} item={currentItem}/>
            )
          })}
        
      </div>
      </div>
      
      <div className="  w-[770px] h-3 bg-gray-100 mx-auto "></div>
    </div>
  );
};

export default MenuView;
