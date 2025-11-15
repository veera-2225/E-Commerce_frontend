import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function MobilesPage() {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState([]);

  const filterHandler = (apple) => {
    if (selected.includes(apple)) {
      setSelected(selected.filter((item) => item !== apple));
    } else {
      setSelected([...selected, apple]);
    }
  };

  const products = async () => {
    const respond = await fetch("http://localhost:8080/getProducts");

    const newResponse = await respond.json();

    setProduct(newResponse.response);
  };
  const mobiles = product.filter((item) => item.product.includes("Mobile"));

  const filteredMobiles =
    selected.length > 0
      ? mobiles.filter((item) => selected.includes(item.company))
      : mobiles;

  useEffect(() => {
    products();
  }, []);

  const uniqueCompanies = [...new Set(mobiles.map((item) => item.company))];

  console.log(uniqueCompanies);

  return (
    <>
      <Navbar />

      <div className="full-section">
        <div className="pro-selected">
          <h4>filter by company</h4><br />
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

      <div className="ind-section">
        {filteredMobiles.map((item) => {
          return (
            <Link to={`/mobilePage/${item._id}`}>
              <div key={`${item._id}`} className="page-div">
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

export default MobilesPage;
