import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Hummos from "./pages/Hummos";
import Tabbouli from "./pages/Tabbouli";
import Mouhalabia from "./pages/Mouhalabia";

import About from "./pages/About";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="hummos" element={<Hummos />} />
        <Route path="tabbouli" element={<Tabbouli />} />
        <Route path="mouhalabia" element={<Mouhalabia />} />
      </Routes>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
