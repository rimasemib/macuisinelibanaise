import React from "react";
import "./Header.css";
import logo from "../assets/cuisineLogo.jpg";
import {Link} from "react-router-dom";


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
          <li className="home">
            <Link to= "home">Home</Link> 
          </li>
          <li className="about">
            <Link to= "about">About Ussss</Link> 
          </li>   
        </ul>
      </nav>
    </div>
  );
};

export default Header;