

import "./Menu.css";
import {Link} from "react-router-dom";

const Menu= ({items}) => {
    return (
        <div className="section-center">
            {items.map((menuItem) => {
                const {id, title,lien, img, desc} = menuItem;
                return (
                    <article key = {id} className="menu-item">
                        <img src= {img} alt={title} className="photo" />
                        
                        <div className="item-info">
                        <header>
                        <Link to={lien} >
                           
                        <h4>{title}</h4>
                        </Link> 
                        </header>
                        <p className="item-text">{desc}</p>
                        </div>

                    </article>
                );
            })}

        </div>

    );
  
};
export default Menu;
