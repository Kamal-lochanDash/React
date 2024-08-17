import { useState } from "react";
import MenuViewList from "./MenuViewList";

const Nestedcards = (props) => {
  console.log(props);
  const { title, itemCards } = props;

  console.log(title, itemCards.length);

  const [showItems, setShowItems] = useState(false);

  const handelClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div>
      <div className="items-overview   w-[770px] bg-white  shadow-md  text-base text-gray-800 mx-auto  border-gray-200 border-b-2 ">
        <div
          className="flex justify-between cursor-pointer items-center h-14"
          onClick={handelClick}>
          <h2 className="ml-2 text-base font-semibold  mt-2 ">
            {title + " ("}
            {itemCards.length + ")"}
          </h2>

          <div className="p-2 mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
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
    </div>
  );
};

export default Nestedcards;
