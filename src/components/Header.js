import React from "react";
import "./Header.css";
import logo from "../assets/cuisineLogo.jpg";
import {Link} from "react-router-dom";


const Header = () => {
  return (
    <div className="headerContainer">
      <div className="menuLeft">
        <div className="imgContainer">
          <Link to="/">
            <img src= {logo} alt="My Logo" />
          </Link>
        </div>  
      </div>
      <nav className="menuRight">
        <ul className="myunlist">
          <li className="home">
            <Link to= "/">Home</Link> 
          </li>
          <li className="about">
            <Link to= "/about">About Us</Link> 
          </li>   
        </ul>
      </nav>
    </div>
  );
};

export default Header;