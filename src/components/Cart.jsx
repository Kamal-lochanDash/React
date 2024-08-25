import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constant";
import CardList from "./CardList";
import { clearCart, removeItem } from "../utils/cartSlice";





const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch=useDispatch()
 
  const handelRemoveItems=()=>{
    dispatch(removeItem())
    
  }

  const hadelRemoveAll=()=>{
    dispatch(clearCart())
  }
if(cartItems.length!=0){
    return (
    
      <div className="w-full text-center ">

        <h1 className=" text-2xl font-bold mt-6 mb-8">Cart</h1>
       
       
        <div className="w-[700px]   shadow-md  mx-auto">

        <div className="flex justify-end">

        <button className="mr-3 shadow-sm bg-gray-100 w-16 rounded-md hover:bg-gray-300 hover:text-red-300"
       onClick={hadelRemoveAll}> Clear</button>
       <button className="mr-3 shadow-sm bg-gray-100 w-32 rounded-md hover:bg-gray-300 hover:text-red-300"
       onClick={handelRemoveItems}
       >remove Items</button>

       
       </div>
       
          {cartItems.map((currentCard,index)=>{
            return <CardList key={index}card={currentCard}/>
          })}
     
          
        </div>
        
      </div>
    );

  }else{
    return (
      <div className="flex justify-center  h-screen mt-60 text-gray-500 text-2xl">
      <h1>Looks like Your Cart is Empty</h1>
    </div>
    )
  }

  

 
};
export default Cart;
