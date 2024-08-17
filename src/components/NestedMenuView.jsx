import { useState } from "react";
import Nestedcards from "./Nestedcards";
import MenuView from "./MenuView";

const NestedMenuView=(props)=>{
    

    const{title,categories}=props
    // console.log(props)
    // console.log(categories)
    console.log(title)
    

    const [showItems,setShowItems]=useState(true);

  const handelClick=()=>{

   setShowItems(!showItems)

  }
  
   
    return (
        <div>
          <div className="items-overview   w-[770px] bg-white  shadow-md  text-base text-gray-800 mx-auto ">
            <div className="flex justify-between cursor-pointer h-12" onClick={handelClick}>
            <h2 className="font-mono font-semibold ml-[10px] text-lg mt-2">
              {title + " ("}
              {categories.length + ")"}
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
              {/* {itemCards.map((currentItem,index)=>{
                return(
                  showItems && <MenuViewList key={index} item={currentItem}/>
                )
              })}
           */
            }

            {
              categories.map((currenelement,index)=>{
                return(
                 showItems &&<Nestedcards key={index} title={currenelement?.title} itemCards={currenelement?.itemCards}/>
                )
              })
            }
          </div>
          </div>
          
          <div className="  w-[770px] h-3 bg-gray-100 mx-auto "></div>
        </div>
      );
}

export default NestedMenuView;