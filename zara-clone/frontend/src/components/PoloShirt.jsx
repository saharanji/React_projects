import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PoloShirt.css";
import axios from "axios";

function PoloShirt() {
  const [polo, setPolo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/product`).then((res) => {
      setPolo(res.data);
      console.log(res.data);
    });
  }, []);
  
  // useEffect(() => {
  //   axios.get(`https://zaraclone.herokuapp.com/products`).then((res) => {
  //     // setPolo(res.data.newdata);
  //     console.log(JSON.stringify(res.data.newdata),"vikrant")
  //     // console.log(res.data);
  //   });
  // }, []);
  return (
    <div className="Main_poloShirt_tri">
      <div className="render_data_Polo">
        {polo.map((elem) => (
          <Link to={`/Polo_shirt/${elem.id}`}>
            <div>
              <img className="polo_image" src={elem.image} alt="" />
              <div className="span_div">
                <span>{elem.name} </span>
                <br />
                <span>
                  <span>₹ </span>
                  {elem.price}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PoloShirt;
