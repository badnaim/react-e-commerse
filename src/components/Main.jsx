import React from "react";
import Info from "./Info";
// import { data } from "../util/data";
// import Product from "./subcomp/Product";
import Info1 from "./Info1";
// import Info from "../components/Info";
import Products from "./subcomp/Products";
// import { useState } from "react"
import "../styles/main.css";

export default function Main() {
  // const  [inf, setInf] =useState(data)
  // const { search } = props;

  return (
    <main>
      {/* <Info /> */}
      <div className="popProducts">
        <Info />
        <div className="lineOne">
          <Products />
        </div>

        <div className="imgWithButton">
          <img src="Group3.png" />
          {/* <button id="buttonOneF">New laptop</button>
          <button id="buttonTwoF">Shop now</button> */}
        </div>

        <Info1 />

        <div className="logos">
          <div>
            <img src="brand-4.png" />
          </div>
          <div>
            <img src="brand-5.png" />
          </div>
          <div>
            <img src="brand-6.png" />
          </div>
          <div>
            <img src="brand-7.png" />
          </div>
          <div>
            <img src="brand-8.png" />
          </div>
        </div>
      </div>
    </main>
  );
}
