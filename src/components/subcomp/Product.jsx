import "../subcomp-style/product.css";
import { useNavigate } from "react-router-dom";
// import { DATA } from "../../util/data"
import React from "react";

export default function Products(props) {
  const navigate = useNavigate();
  const { detail } = props;
  return (
    <div
      key={props.id}
      className="card"
      onClick={() => {
        navigate(`../product/${detail.id}`);
      }}
    >
      <img src={props.image} alt="product-image" className="prodImg"></img>
      <div className="prodContent">
        <div className="leftSide">
          <h3 className="prodCategory">{props.category}</h3>
          <h4 className="prodName">{props.name}</h4>
          <div className="prodPrice">${props.price}</div>
          <div className="prodSales">{props.sale}</div>
        </div>
        <div className="prodInto">
          <img src="Frame36.png"></img>
        </div>
      </div>
    </div>
  );
}
