
import {useState} from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

import items from "../src/assets/data";
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter ((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">        
        <div className="title">
          <h2>Notre Cuisine Libanaise</h2>
          <div className="underline"></div>

        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />      
      </section>
    </main>   
  );
}

export default App;
