import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function ComputerPage() {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState([]);

  const hanldeFilter = (company) => {
    if(selected.includes(company)){
      setSelected(selected.filter((item)=> item !== company))
    }else{
      setSelected([...selected, company])
    }
  }

  const products = async () => {
    const respond = await fetch("http://localhost:8080/getProducts");

    const newResponse = await respond.json();

    setProduct(newResponse.response);
  };

  const items = product.filter((item) => item.product.includes("Computer"));

  const uniqueValues = [...new Set(items.map((item) => item.company))];

  const filtered = selected.length === 0 ? items : items.filter((item)=> selected.includes(item.company))

  useEffect(() => {
    products();
  }, []);

  return (
    <>
      <Navbar />
      <div className="full-section">
        <div className="pro-section">
          {uniqueValues.map((company) => {
            return <div className="filters">
              <label>
                <input type="checkbox" checked={selected.includes(company)} onChange={()=>hanldeFilter(company)}/>{" "}{company}
              </label>
            </div>;
          })}
        </div>
        <div className="ind-section">
          {filtered.map((item) => {
            return (
              <Link key={`${item._id}`} to={`/mobilePage/${item._id}`}>
                <div className="page-div">
                  <img
                    src={`http://localhost:8080/uploads/${item.image}`}
                    alt={`${item.product}`}
                    className="page-img"
                  />
                  <div>
                    {item.company}, {item.model}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ComputerPage;
