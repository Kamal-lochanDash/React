
import { CDN_URL } from "../utils/constant";
const ResturantCard = (props) => {
    {
      /* we can destructure the prop as:-  (props)===({resName,cuisine}) */
    }
  
    const { restData } = props;
   // const { name , cuisines, avgRating} = restData?.info; //object destructuring
     const { name , cuisines, avgRating, costForTwo} = restData?.info
     const{deliveryTime}=restData?.info?.sla
    /* 
    <c3> Output give me two objects
      -->{resName: 'payal', cuisine: 'Biriyani'}
      -->{resName: 'Kfc', cuisine: 'HOC Chicken , Burger'}             😺Here we have demonstrated the architecture 

    */
    return (
      <div className="card">
        <img
          src={CDN_URL+restData.info.cloudinaryImageId}
          alt="Card Image"
        />
        <div className="card-content">
          <div className="card-title">{name}</div>{" "}
          {/* We can use the props insside the curley braces */}
          <div className="card-business">{cuisines.join(" , ")}</div>
          <div className="card-rating">Rating:{avgRating}</div>
          <div className="card-diliveryTime">{deliveryTime//restData.info.sla.deliveryTime
          } minutes</div>
        <div className="card-price">price:{costForTwo
}</div>

        
          <a href="#" className="card-button">
           Buy
          </a>
        </div>
      </div>
    );
  };

  export default ResturantCard;