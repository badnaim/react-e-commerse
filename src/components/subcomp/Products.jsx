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
        <button onClick={filter}>All</button>
        <button onClick={filter}>Tablets</button>
        <button onClick={filter}>Appliances</button>
        <button onClick={filter}>Gaming console</button>
        <button onClick={filter}>Tablets</button>
      </div>
      <div className="products">
        {information.map((production) => (
          <Product detail={production} key={data.index} />
        ))}
      </div>
    </div>
  );
}
