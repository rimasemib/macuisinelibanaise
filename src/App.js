import logo from './logo.svg';
import {useState} from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "../src/assets/data";
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">        
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underLine"></div>

        </div>
        <Categories />
        <Menu items={menuItems} />      
      </section>
    </main>   
  );
}

export default App;
