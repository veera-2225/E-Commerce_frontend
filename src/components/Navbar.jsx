import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navSection">
      <div className="title">
        <h2>E-Mart</h2>
      </div>
      <div className="search">
        <input type="text" placeholder="search..." />
      </div>
      <div className="user">
        <div className="user-details">SingIn/SingUp</div>
        <div className="cart">Cart</div>
      </div>
    </div>
    

    {/* <div className="subMenu">
      <ul>
        <Link to="/mobile"><li>Mobiles</li></Link>
        <Link to="/ac"><li>Ac's</li></Link>
        <Link to="/computer"><li>Computers</li></Link>
        <Link to="/kitchen"><li>Kitchen</li></Link>
        <Link to="/furniture"><li>Furniture</li></Link>        
        <Link to="/tv"><li>Tv's</li></Link>
        <Link to="/fridge"><li>Fridge's</li></Link>
        <Link to="/speaker"><li>Speaker's</li></Link>
        <Link to="/watch"><li>Watche</li></Link>
        <Link to="/menswear"><li>Men's</li></Link>
        <Link to="/woman"><li>Women's</li></Link>
      </ul>
    </div> */}
    </>
  );
};

export default Navbar;
