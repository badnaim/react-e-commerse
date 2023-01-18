import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../util/data"
import "../styles/main.css";

export default function Main() {
  // const test = useNavigate();
  // console.log(test);
  // data.map((product) => {
  //   if (product.id === test.id) {
  //     console.log(product.spec);
  //   }
  // })
  return (
    <main>
      <div className="popProducts">
        <div className="lineOne">
          <div><h1>Popular products</h1></div>
          <div></div>
        </div>
        {/* <div>
          <img src={product.image} />
          <h1>{product.name}</h1>
        </div> */}
      </div>
    </main>
  );
}
