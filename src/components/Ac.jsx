import { api_url } from "../data/api_url";

function Ac({products}) {
  const product = products
    .filter((item) => item.category.includes("Electronics_Ac"))
    .slice(0, 5);

  return (
    <>
      <h2>Ac's</h2>
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

export default Ac;
