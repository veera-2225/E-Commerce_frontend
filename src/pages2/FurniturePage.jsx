import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


function FurniturePage() {
  const [product, setProduct] = useState([]);

const products = async () => {
    const respond = await fetch("http://localhost:8080/getProducts");

    const newResponse = await respond.json();

    setProduct(newResponse.response);
  };

  const items = product.filter((item) =>
    item.product.includes("Furniture")
  );


  useEffect(() => {
    products();
  }, []);

  return (
    <>
        <Navbar />
        <div className="ind-section">
      {items.map((item) => {
        return (
          <div key={`${item._id}`} className="page-div">
            <img
              src={`http://localhost:8080/uploads/${item.image}`}
              alt={`${item.product}`} className="page-img" 
            />
            <div>
                {item.company}, {item.model}
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default FurniturePage;
