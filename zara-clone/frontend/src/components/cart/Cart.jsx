import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../CartContext/AuthContext';
import { CartContext } from '../../CartContext/CartContext';
import CardPayment from '../CardPayment';
import '../Detail.css';
import Home from '../Home';
import Login from '../Login';
import Payment from '../Payment';
function Cart() {
      const [cartData,setCartData]=useState([]);

// /const [cart,setcart]=useState(0)

//  const [amount,setamount]=useState(0)

    const {cartCount,setCartCount,total,setTotal}=useContext(CartContext);


    const {Auth,setAuth}=useContext(AuthContext);
    useEffect(() => {
      getData();
      // cartItems();
       }, [])

       
       const cartItems=()=>{
        axios.get(`https://zaraclone.herokuapp.com/carts`)
        .then((res)=>{
           setCartData(res.data)
          console.log(res.data)
        })
       }


let  token =localStorage.getItem("token")

       let getData = async () => {
        try {
         let data = await fetch("https://zaraclone.herokuapp.com/carts", {
            method: "GET",
    
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
    
          data = await data.json();
          console.log(data);
var sum=0;
          //  setTotal(data)
         for(var i=0;i<data.length;i++){
sum=sum+data[i].price
         } 
         setCartData(data)
         setTotal(sum)
        setCartCount(data.length)
        } catch (error) {
          console.log(error);
        }
      };
     




       const handleDelete=async (user)=>{


console.log(user)

        try {
          console.log(user);
          let dat = await fetch(`https://zaraclone.herokuapp.com/carts/${user._id}`, {
            method: "DELETE",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          // flag = true;
          getData();
        } catch (error) {
          console.log(error);
        }








         console.log(user)
        if(cartCount>0){
          setCartCount(cartCount-1)

          setTotal((prev)=> prev - Number((user.price)));

        }

        // axios.delete(`https://zaraclone.herokuapp.com/carts/${user.id}`)
        // .then((res)=>{console.log("afterdelete",res); cartItems();})
        // .then(() => console.log({ status: 'Delete successful' }));
        // // setCartData(...cartData)
      
      }
 
  return (
    <>
    {Auth?<div>
    <div style={{display:"grid", marginTop:"20px",gridTemplateColumns:"repeat(2,450px)",gridTemplateRows:"repeat(200px)",justifyContent:"space-around",gap:"10px"}}>
    {cartData.map((user)=>
        <div key={user.id}  style={{display:"flex", gap:"10px"}} >
            <img className="detail_img" src={user.image} alt="" />
            <div style={{display:"flex", gap:"10px",flexDirection:"column"}}>
            <p> {user.name} </p>
            <p>Price: {user.price} </p>
            <button onClick={()=>handleDelete(user)}>Delete</button>
            </div>
            
            {/* <button onClick={(e)=>handleProduct(user)}>Add to Cart</button> */}
            </div> 
      )}
    </div>
    <div style={{float:"right"}}>
        <h4 style={{marginLeft:"20%"}}>Total: {total}</h4>
        <Link to={'/payment'}><button>Continue to Payment</button></Link>
    </div>
  
    </div>
    :
    <div>
      <Login/>
    </div>}
   
    </>
  )
}

export default Cart
