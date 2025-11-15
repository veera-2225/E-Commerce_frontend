import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProducts } from "../data/data";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        const userData = data.data.response;

        setProducts(userData);
      } catch (error) {
        console.log("Error - ", error)
      }
    };
    loadProducts()
  }, []);

//   console.log(id, products)

  const product = products.find((item)=> item._id === id);

  return <div>
    {product && <div>
            <img src={`http://localhost:8080/uploads/${product.image}`} alt={product.product} />

            <span>{product.company}</span>

        </div>}
  </div>;
}

export default ProductPage;
