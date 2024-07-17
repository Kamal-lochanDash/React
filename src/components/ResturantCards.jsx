
import { CDN_URL } from "../utils/constant";
const ResturantCard = (props) => {
    {
      /* we can destructure the prop as:-  (props)===({resName,cuisine}) */
    }
  
    const { restData } = props;
    const { name , cuisines, avgRating, costForTwo,deliveryTime} = restData?.data; //object destructuring
  
    /* 
    <c3> Output give me two objects
      -->{resName: 'payal', cuisine: 'Biriyani'}
      -->{resName: 'Kfc', cuisine: 'HOC Chicken , Burger'}                                            😺some Important changes are here
    */
    return (
      <div className="card">
        <img
          src={CDN_URL+restData.data.cloudinaryImageId}
          alt="Card Image"
        />
        <div className="card-content">
          <div className="card-title">{name}</div>{" "}
          {/* We can use the props insside the curley braces */}
          <div className="card-business">{cuisines.join(" , ")}</div>
          <div className="card-rating">Rating:{avgRating}</div>
          <div className="card-diliveryTime">{deliveryTime} minutes</div>
        <div className="card-price">price:{costForTwo/100}</div>
        
          <a href="#" className="card-button">
           Buy
          </a>
        </div>
      </div>
    );
  };

  export default ResturantCard;