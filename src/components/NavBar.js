import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../images/cart.png";
function NavBar() {
  const [scroll, setScroll] = useState("false");

  const changebackground = () => {
    if (window.scrollY >= 96) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changebackground);
  return (
    <div className={scroll ? "nav active z-10" : "nav z-10"}>
      <div className={scroll ? "logo logoimg" : "logo logoimg go"}></div>
      <div className="flex items-center">
        <button className="icon">
          <img className="w-6 " src={Cart} alt="nn" />
        </button>
        <button className="btn">
          <Link to="/">Home</Link>
        </button>
        <button className="btn">
          <Link to="/about"> About Us </Link>
        </button>
        <button className="btn">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
