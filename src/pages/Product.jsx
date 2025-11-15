import React from "react";
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

const Product = () => {
  return (
    <div>
      <Mobile />
      <Computer />
      <Furniture />
      <Kitchen />
      <Menswear />
      <Refrigerator />
      <Speaker />
      <TV />
      <Watch />
      <WomanWear />
      <Ac />
    </div>
  );
};

export default Product;
