import React from "react";
import "./Footer.css";
import logo from "../assets/cuisineLogo.jpg";



const Footer = () => {
    return (
    
    <div className="footer">
        <div className="footer-left col-md-4 col-sm-6">
            <div>
                <span><i class="fab fa-facebook-square ginger"></i></span>
				<span><i class="fab fa-instagram-square ginger"></i></span>
				<span><i class="fab fa-twitter-square ginger"></i></span>

			</div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span> 24 Rue Houdan</span> Paris, France</p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <p> (+33) 01 45 66 98 71 </p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p>macuisineparis@lacuisinelibanaise.fr</p>
            </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
            
            <div className="imgContainer">
                <img src= {logo} alt="My Logo" />
            </div>
            <p className="name1">La Cuisine Libanaise &copy; 2022</p>
        </div>
    </div>
      );
    };
    
    export default Footer;