

import PoloShirt from "./components/PoloShirt"
import React, { useState } from 'react';
import DetailPage from "./components/DetailPage";
import './App.css';
import Home from './components/Home';
import Cart from './components/cart/Cart'
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import "./App.css";
import ProductPageZara from "./components/ProductPageZara";
import LinenPage from "./components/LinenPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CardPayment from "./components/CardPayment";
import Payment from "./components/Payment";
import Womenproduct from "./components/Womenproduct";
import Kidsproduct from "./components/Kidsproduct";

const App = () => {
  const [name, setName] = useState("");
  const log = (e) => {

    setName(e);
  };
  return (
    <>
      <Navbar name={name} />
   

      <Routes>
        <Route path="/" element={<Home />} />
//         <Route path="/product" element={<ProductPageZara />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LinenPage" element={<LinenPage />} />
        <Route path="/PoloPage" element={<PoloShirt />} />
        <Route path="/Polo_Shirt/:id" element={<DetailPage />} />
        <Route path="/login" element={<Login log={log} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/CardPayment" element={<CardPayment />} />
        <Route path="/CardPayment" element={<CardPayment />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/Linen_data/:id" element={<DetailPage />} />
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/womens" element={<Womenproduct />}/>
        <Route path="/KidsData" element={<Kidsproduct />} />
        <Route path="/WomenData/:id" element={<DetailPage />}/>
        <Route path="/KidsData/:id" element={<DetailPage />}/>
        
        <Route path="/mens/:id" element={<DetailPage />}/>
       
        
       
      </Routes>
    </>
  );
};

export default App;
