import React from "react";
import "../styles/dashBoard.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { prodContext } from "../layout/prodContext";

export default function Dashboard() {
  const { data } = useContext(prodContext);
  let { id } = useParams();
  console.log(id);

  console.log(data);

  // const onProdData = data.filter((one) => {
  //   one.id === id;
  // });

  return (
    <div className="allCardOfProduct">
      <div>
        <img
        // src={onProdData.image}
        />
      </div>
      <div></div>
    </div>
  );
}
