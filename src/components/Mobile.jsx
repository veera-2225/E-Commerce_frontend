import { useEffect, useState } from "react";
import { getProducts } from "../data/data";
import { api_url } from "../data/api_url";


function Mobile() {
  const [products, setProducts] = useState([]);

  const mobile = products
    .filter((item) => item.product.includes("Mobile"))
    .slice(0, 5);

  useEffect(()=>{
    getProducts(setProducts)
  },[]);

  console.log(products)

  return (
    <>
      <h2>Mobile</h2>
      <div className="proSection">
        {mobile.map((item) => {
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

export default Mobile;
