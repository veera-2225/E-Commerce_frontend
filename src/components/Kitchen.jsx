import { useEffect, useState } from "react";
import { getProducts } from "../data/data";
import { api_url } from "../data/api_url";

function Kitchen() {
  const [products, setProducts] = useState([]);

  const product = products
    .filter((item) => item.product.includes("Kitchen"))
    .slice(0, 5);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <>
      <h2>Kitchen</h2>
      <div className="proSection">
        {product.map((item) => {
          return (
            <div key={`${item._id}`} className="imgBox">
              <img
                src={`${api_url}/uploads/${item.image}`}
                alt={`${item.product}`}
                className="proImgMobile"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Kitchen;
