import React from "react";
import "./Header.css";
import logo from "../assets/cuisineLogo.jpg";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="menuLeft">
        <div className="imgContainer">
          <img src= {logo} alt="My Logo" />
        </div>  
      </div>
      <nav className="menuRight">
        <ul>
          <li className="home">Collection</li>
          <li className="aboutUs">About Us</li>   
        </ul>
      </nav>
    </div>
  );
};

export default Header;