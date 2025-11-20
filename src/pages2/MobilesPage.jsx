import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { api_url } from "../data/api_url";
import { ThreeCircles } from "react-loader-spinner";
import StarRating from "../pages/StarRating";

function MobilesPage({ products, loading }) {
  const [selected, setSelected] = useState([]);

  const filterHandler = (apple) => {
    if (selected.includes(apple)) {
      setSelected(selected.filter((item) => item !== apple));
    } else {
      setSelected([...selected, apple]);
    }
  };

  const mobiles = products.filter((item) => item.product.includes("Mobile"));

  const filteredMobiles =
    selected.length > 0
      ? mobiles.filter((item) => selected.includes(item.company))
      : mobiles;

  const uniqueCompanies = [...new Set(mobiles.map((item) => item.company))];

  return (
    <>
      <Navbar />

      <div className="full-section">
        <div className="pro-selected">
          <h4>filter by company</h4>
          <br />
          {uniqueCompanies &&
            uniqueCompanies.map((company) => {
              return (
                <div className="filters">
                  <label>
                    <input
                      type="checkbox"
                      checked={selected.includes(company)}
                      onChange={() => filterHandler(company)}
                    />{" "}
                    {company}
                  </label>
                </div>
              );
            })}
        </div>

        {loading ? (
          <div className="pageSpinner">
            <ThreeCircles
              visible={true}
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="ind-section">
        {filteredMobiles.map((item) => {
          return (
            <div key={`${item._id}`} className="product">
              <div className="image">
                <img
                  src={`${api_url}/uploads/${item.image}`}
                  alt={`${item.product}`}
                />
              </div>
              <div className="namePrice">
                <div><h3>{item.company.trim()} </h3><h4>{""}-{item.model.trim()}</h4></div>
                <span>₹ {item.price * 10}</span>
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
        )}
      </div>
    </>
  );
}

export default MobilesPage;
