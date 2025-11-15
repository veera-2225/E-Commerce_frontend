import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AcPage() {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleFilters = (company) => {
    if (selected.includes(company)) {
      setSelected(selected.filter((apple) => apple !== company));
    } else {
      setSelected([...selected, company]);
    }
  };

  const products = async () => {
    const respond = await fetch("http://localhost:8080/getProducts");

    const newResponse = await respond.json();

    setProduct(newResponse.response);
  };

  const items = product.filter((item) =>
    item.category.includes("Electronics_Ac")
  );

  useEffect(() => {
    products();
  }, []);

  const filteredcompanies = [...new Set(items.map((item) => item.company))];

  const filteredAc =
    selected.length > 0
      ? items.filter((item) => selected.includes(item.company))
      : items;

  return (
    <>
      <Navbar />
      <div className="full-section">
        <div className="pro-selected">
          {filteredcompanies.map((comapny) => {
            return (
              <div className="filters">
                <label>
                  <input
                    type="checkbox"
                    checked={selected.includes(comapny)}
                    onChange={() => handleFilters(comapny)}
                  />{" "}
                  {comapny}
                </label>
              </div>
            );
          })}
        </div>

        <div className="ind-section">
          {filteredAc.map((item) => {
            return (
              <Link key={item._id} to={`/mobilePage/${item._id}`}>
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

export default AcPage;
