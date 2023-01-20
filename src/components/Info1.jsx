import React from "react";
import { data } from "../util/data";
import "../styles/info1.css";

export default function Info1(props) {
  return (
    <div className="fullInfo">
      <div className="cardInfo">
        <div key={props.id} className="info1">
          <img src={data[13].image} alt="product"></img>
          <div className="oddOne">
            <h3>{data[13].name}</h3>
            <p id="price">${data[13].price}</p>
            <p>{data[13].description}</p>
          </div>
        </div>
        <div className="info2">
          <div id="infoOne">
            <img src={data[14].image} alt="product"></img>
            <div className="sameOne">
              <h3>{data[14].name}</h3>
              <p id="price">${data[14].price} </p>
              <p>{data[14].description}</p>
            </div>
          </div>
          <div id="infoTwo">
            <img src={data[15].image} alt="product"></img>
            <div className="sameOne">
              <h3>{data[15].name}</h3>
              <p id="price">${data[15].price} </p>
              <p>{data[15].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
