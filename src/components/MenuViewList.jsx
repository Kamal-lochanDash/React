import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const MenuViewList = (props) => {
  // console.log(props);
  // const { itemCards } = props;
  // const item1 = itemCards[0];
  // console.log(item1);

  // const imageId1 = item1?.card?.info?.imageId;

  //--> for dispatch we have an another hoock that is use dispatch, which help us to access the actions

  const dispatch=useDispatch();

const handleAddItems=(item)=>{
  //dispatch an action
  dispatch(addItem(item))

}

const {item}=props;

const {name,price,defaultPrice, imageId,description}=item?.card?.info;



  return (
    <div>
    <div className="grid-container border-gray-200 border-b-2 ">
      <div className="header" >
      <div className="name text-slate-600 font-bold">{/*item1?.card?.info?.name*/name}</div>
      <div className="price">₹{price ? price/100 : defaultPrice/100}</div>
      </div>

      <div className="Image ml-10 relative">
  <div >
    { imageId!=undefined ? <img className="w-40 h-[154px] rounded-xl" src={CDN_URL + imageId} alt="not found" />: <div>
    <button className="w-32 border bg-white h-10 rounded-lg shadow-sm text-green-600 font-bold hover:bg-gray-200 mt-12"
    onClick={()=>handleAddItems(item)}
    >ADD</button></div>}
  </div>

  <div className="Button flex justify-center absolute inset-x-0 bottom-0 z-10 mb-2">
   { imageId!=undefined?<button className="w-32 border bg-white h-10 rounded-lg shadow-sm text-green-600 font-bold hover:bg-gray-200"
   onClick={()=>handleAddItems(item)}
   >ADD</button>:<div></div>}
  </div>
</div>





      <div className="description text-slate-400">
      <p>{/*item1?.card?.info?.description*/description}</p>
      </div>

      
    </div>

    
 

  
   
    </div>
  );
};

export default MenuViewList;
