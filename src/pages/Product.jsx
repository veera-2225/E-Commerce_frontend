import React, { useEffect, useState } from "react";
import Ac from "../components/Ac";
import Mobile from "../components/Mobile";
import Computer from "../components/Compute";
import Refrigerator from "../components/Refrigerator";
import Furniture from "../components/Furniture";
import Kitchen from "../components/Kitchen";
import Menswear from "../components/Menswear";
import Speaker from "../components/Speaker";
import TV from "../components/TV";
import Watch from "../components/Watch";
import WomanWear from "../components/WomanWear";
import { getProducts } from "../data/data";
import { api_url } from "../data/api_url";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function getProducts() {
      axios
        .get(`${api_url}/getProducts`)
        .then((res) => {
          console.log(res.data.response);
          setProducts(res.data.response);
          setLoading(false);
        })
        .catch((error) => {
          alert("Something went wrong");
          setLoading(true);
        });
    }
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner">
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
        <div>
          <Mobile products={products} />
          <Computer products={products} />
          <Furniture products={products} />
          <Kitchen products={products} />
          {/* 
          
          
          <Menswear products={products} />
          <Refrigerator products={products} />
          <Speaker products={products} />
          <TV products={products} />
          <Watch products={products} />
          <WomanWear products={products} />
          <Ac products={products} /> */}
        </div>
      )}
    </>
  );
};

export default Product;
