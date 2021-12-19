
import {useState} from "react";
import Menu from "./components/Menu";

import items from "../src/assets/data";
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  return (
    <main>
      <section className="menu section">        
        <div className="title">
          <h2>Notre Menu</h2>
          <div className="underLine"></div>

        </div>
     
        <Menu items={menuItems} />      
      </section>
    </main>   
  );
}

export default App;
