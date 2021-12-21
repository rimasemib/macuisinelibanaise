
import {useState} from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import Header from "./components/Header";

import items from "../src/assets/data";
import './App.css';

const allCategories = ['all', ...new Set (items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter ((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <Header />
      <section className="menu section">        
        <div className="title">
          <h2>Ma Cuisine Libanaise</h2>
          <div className="underline"></div>

        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />      
      </section>
    </main>   
  );
}

export default App;
