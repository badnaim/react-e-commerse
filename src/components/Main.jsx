import React from "react";
// import { useNavigate } from "react-router-dom";
import { data } from "../util/data";
import Product from "./subcomp/Product";
import Info1 from "./Info1"
import "../styles/main.css";

export default function Main() {

  return (
    <main>
      <div className="popProducts">
        <div className="lineOne">
          <div>
            <h1>Popular products</h1>
          </div>
          <div id="filters">
            <button>Cameras</button>
            <button>Cameras</button>
            <button>Cameras</button>
            <button>Cameras</button>
            <button>Cameras</button>
          </div>
        </div>

        <div className="products">
          {data.slice(0, 8).map((content) => (
             <Product key={content.id} image={content.image} name={content.name} category={content.category} price={content.price} sales={content.sale} /> 
          ))}
        </div>
        
        <div className="imgWithButton">
          <img src="Group3.png" />
          <button id="buttonOneF">New laptop</button>
          <button id="buttonTwoF">Shop now</button>
        </div>

        <Info1 />

        <div className="logos">
          <div><img src="brand-4.png" /></div>
          <div><img src="brand-5.png" /></div>
          <div><img src="brand-6.png" /></div>
          <div><img src="brand-7.png" /></div>
          <div><img src="brand-8.png" /></div>
        </div>
      </div>
    </main>
  );
}
