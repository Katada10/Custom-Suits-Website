import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Shop from "./pages/shop";
import Measure from "./pages/measure";
import ItemView from "./pages/itemview";

import Navigation from './navigation';
import ViewShop from './pages/viewshop';

import ShopAR from './pages/shopar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
 //   <App />
 // </React.StrictMode>

<Router>
    <Navigation  />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/measure" element={<Measure />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shopar" element={<ShopAR />} />
      <Route path="/viewshop" element={<ViewShop />} />
      <Route path="/itemview" element={<ItemView />} />
    </Routes>
</Router>

 );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
