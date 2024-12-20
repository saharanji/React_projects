import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
// import { Navigate } from "react-router-dom";
import "./CardPayment.css";

export default function CardPayment() {
  const {total}=useContext(CartContext);
  const navigate=useNavigate()
  const [user,setUser]=useState({
    cardnumber:"",
    month:"",
    year:"",
    carsholder:"",
    cvv:"",
  })

  const handleChange=e=>{
    const {name,value}=e.target
    setUser ({
      ...user,
      [name]:value
  
    })
  
  
  }


  const purchase=()=>{
    const {cardnumber,month,year,cardholder,cvv}=user
    if((cardnumber && month && year && cardholder && cvv)){
      alert("purchase succesfull");
      navigate('/Home')
      // history("/home")
    }else{
      alert("fill the all details")
    }
  }
  
  return (
    <>
      <div>
          
        <div className="card-details-container">
          <h3 className="ha2">ENTER YOUR CARD DETAILS</h3>
          <img
            class="img"
            src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
            alt=""
          />
          <form action="" className="card-detail">
            <input type="number" name="cardnumber"  value={user.cardnumber} onChange={handleChange}  placeholder="CARD NUMBER"  />
            <input type="month" name="month" value={user.month} onChange={handleChange}  placeholder="MONTH" />
            <input type="number" name="year" value={user.year} onChange={handleChange}  placeholder="YEAR" />
            <br />
            <input type="text" className="card-holder-input" name="cardholder" value={user.cardholder} onChange={handleChange}  placeholder="CARD HOLDER" />
            <input type="text" name="cvv" value={user.cvv} onChange={handleChange} placeholder="CVV2 SECURITY CODE" />
          </form>
          
        </div>

        <div className="cards">
          <div className="pr">
            <div className="price">
              TOTAL : <span>{total}</span>
            </div>
            <button onClick={purchase}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
