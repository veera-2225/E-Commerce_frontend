import { api_url } from "../data/api_url";

function Computer({ products }) {

  const mobile = products
    .filter((item) => item.product.includes("Computer"))
    .slice(0, 5);

  return (
    <>
      <h2>{mobile[0].product}</h2>
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

export default Computer;
