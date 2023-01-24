import React from "react";
import Product from "./Product";
import { data } from "../../util/data";
import { useState } from "react";
import "../subcomp-style/products.css";

export default function Products() {
  const [information, setInformation] = useState(data);

  function filter(e) {
    if (e.target.innerText === "All") {
      setInformation(data);
    } else {
      let prod = data.filter((name) =>
        name.category.includes(e.target.innerText)
      );
      setInformation(prod);
    }
  }
  return (
    <div>
      <div id="filters">
        <div>
          <h1>Popular products</h1>
        </div>  
        <button onClick={filter}>All</button>
        <button onClick={filter}>tablets</button>
        <button onClick={filter}>appliances</button>
        <button onClick={filter}>gaming</button>
        <button onClick={filter}>Apple</button>
        <button onClick={filter}>headphones</button>
        <button onClick={filter}>telescope</button>
      </div>
      {/* <div className="inPro"> */}
        <div className="products">
          {information.map((production) => (
            <Product detail={production} key={production.index} />
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}
