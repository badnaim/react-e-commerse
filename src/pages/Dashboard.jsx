import React from "react";
import "../styles/dashBoard.css";
import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";
import { useContext } from "react";
import { prodContext } from "../layout/prodContext";
import { useState } from "react";
import Img13 from "../images/Img13";

export default function Dashboard() {
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  // const [products, setProducts] = useState(ProductsList);

  function decrement() {
    if (score > 0) {
      setScore(score - 1);
    }
  }
  function increment() {
    if (score < 30) setScore(score + 1);
  }
  // function add() {
  //   setNumber(number + 1);
  // }

  const { data } = useContext(prodContext);
  let { id } = useParams();
  // console.log(id);

  // console.log("dashboard", data);

  const onProduct = data.filter((one) => {
    return one.id === id;
  });

  return (
    <div className="allCardOfProduct">
      <div className="categoryOfHead">b</div>
      <div className="twoSideInf">
        <div className="leftSideOfDashBoard">
          <img src={onProduct[0]?.image} alt={onProduct.image} />
        </div>
        <div className="rightSideOfDashBoard">
          <div>{onProduct[0]?.name}</div>
          <div>{onProduct[0]?.price}</div>
          <div id="flex1">
            <div>Availability:</div>
            <Img13 />
          </div>
          <div>Hurry up! {onProduct[0]?.stock} product left in stock!</div>
          <div className="myLineYo"></div>
          <div className="quantityOfProd">
            <div>Quantity: </div>
            <div className="incDec">
              <button onClick={decrement}>-</button>
              {score}
              <button onClick={increment}>+</button>
            </div>
          </div>
          <div>
            <button>Add to card</button>
            <button>Buy it now</button>
          </div>
          <div className="myLineYo"></div>
        </div>
      </div>
    </div>
  );
}
