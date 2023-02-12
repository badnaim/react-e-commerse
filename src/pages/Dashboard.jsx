import React from "react";
import "../styles/dashBoard.css";
import { useParams } from "react-router-dom";
import data from "../util/data"
// import { useEffect } from "react";
// import axios from "axios"
// import { useState } from "react"

export default function Dashboard() {
  let { id } = useParams()
  console.log(id)

  // let onProd = data.map((prod)=> {prod.id == id})

  // const [data, setData] = useState()
  // useEffect(() => {
  //   axios.get("http://localhost:2020/products").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  // console.log(data)

  return (
    <div className="allCardOfProduct">
      <div>
        <img src="" />
      </div>
      <div></div>
    </div>
  );
}
