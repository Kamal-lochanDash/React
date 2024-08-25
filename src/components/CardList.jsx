import { CDN_URL } from "../utils/constant";

const CardList=(props)=>{
    const {card}=props
    const {name,price,defaultPrice, imageId}=card?.card?.info;
    console.log(name,price,defaultPrice,imageId)

    return(
        <div className="flex w-[650px] justify-between  p-6 mx-auto border-b-2 border-gray-200 ">

        <div className="w-[30%" >
            <div >{imageId!=undefined ? <img className="w-24 h-24 rounded-lg" src={CDN_URL + imageId} alt="not found" />: <div>
     <img src="https://img.icons8.com/?size=100&id=hN9iR6FKlb5B&format=png&color=000000" className="w-24 h-24 rounded-xl" alt="" />
                 </div>}</div>

        </div>

        <div className="name text-slate-600 font-bold mt-1 w-[40%] mr-10  ">
            <div className="text-left mt-1 ">{name}</div>
           
        </div >
        <div className="flex  w-[25%]">

       
        <div><button className="w-20 bg-white h-10 rounded-lg shadow-sm text-green-600 font-bold hover:bg-gray-200 ">Add More</button></div>
        <div className="price ml-4 mt-3 font-bold">₹{price ? price/100 : defaultPrice/100}</div>
        </div>

       
        </div>

        
    )
}

export default CardList;