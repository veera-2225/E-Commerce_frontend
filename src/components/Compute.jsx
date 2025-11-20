import { api_url } from "../data/api_url";
import StarRating from "../pages/StarRating";

function Computer({ products }) {

  const mobile = products
    .filter((item) => item.product.includes("Computer"))
    .slice(0, 5);

  return (
    <>
      <h2>{mobile[0].product}</h2>
      <div className="products">
        {mobile.map((item) => {
          return (
            <div key={`${item._id}`} className="product">
              <div className="image">
                <img
                  src={`${api_url}/uploads/${item.image}`}
                  alt={`${item.product}`}
                />
              </div>
              <div className="namePrice">
                <div><h3>{item.company} </h3><h4>{" "} - {item.model}</h4></div>
                <span>₹ {item.price * 100}</span>
              </div>
              <p>{item.description}</p>
              <div className="stars">
               <StarRating rating={item.rating}/>
              </div>
              <div className="buy">
                <button>Buy Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Computer;
