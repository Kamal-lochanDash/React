import { CDN_URL } from "../utils/constant";
const ResturantCard = (props) => {
  {
    /* we can destructure the prop as:-  (props)===({resName,cuisine}) */
  }

  const { restData } = props;
  // const { name , cuisines, avgRating} = restData?.info; //object destructuring
  const { name, cuisines, avgRating, costForTwo } = restData?.info;
  const { deliveryTime } = restData?.info?.sla;

let cusinesArr=[];
  cuisines.map((currEle,index)=>{
    if(index===0 || index===1){
      cusinesArr.push(currEle)
    }
    return cusinesArr
  })
  /* 
    <c3> Output give me two objects
      -->{resName: 'payal', cuisine: 'Biriyani'}
      -->{resName: 'Kfc', cuisine: 'HOC Chicken , Burger'}             😺Here we have demonstrated the architecture 

    */
  return (
    <div className="card m-5  bg-slate-50 rounded-md shadow-md w-[300px] overflow-hidden h-96 ">
      <img
        className="w-[100%] h-64"
        src={CDN_URL + restData.info.cloudinaryImageId}
        alt="Card Image"
      />
      <div className="styleLine ring-2 ring-orange-400">
        <div className=" h-1 w-[100%] bg-black  "></div>
        <div className=" h-1 w-[100%] bg-orange-400 "></div>
      </div>
      <div className="card-content m-2 p-2  ">
        <div className="flex">
          <div className="card-title font-bold text-lg">{name}</div>
          <div className="ml-3 w-12 h-6 text-center rounded-md  ring-1 ring-green-600   bg-[#3AB757] text-white">
            {avgRating}★
          </div>
        </div>
        {/* We can use the props insside the curley braces */}
<div className="flex justify-between">
        <div className="card-business  text-gray-500 ">
          {cusinesArr.join(",")}
        </div>
        <div className="card-price text-gray-600  text-sm">{costForTwo}</div>
        </div>

        <div className="card-diliveryTime text-slate-600">
         🛵 {
            deliveryTime //restData.info.sla.deliveryTime
          }{" "}
          minutes
        </div>
      </div>
    </div>
  );
};


//Higher order component

// input-resturant card
//output - resturant open or not

export const withIsOpenLabel=(ResturantCard)=>{
  // an higer order function must return a component
  return (props)=>{
    // a component must return some jsx
    return (
      <div>
      <label className=" flex absolute bg-black text-lime-400 p-2 m-2 rounded-md">
        <div className="w-2 h-2 bg-lime-400 mt-2 mr-2 rounded-lg"></div>
         <div>Open</div>
         </label>
      <ResturantCard {...props}/>
      </div>
    )
  }
}

export default ResturantCard;
