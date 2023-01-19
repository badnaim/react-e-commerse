import "../subcomp-style/product.css"
import { DATA } from "../../util/data"
import React from 'react'

export default function Products(props) {
  return (
    <div key={props.id} className="card">
      <img src={props.image} alt="product-image" className="prodImg"></img>
      <div className="prodContent">
        <h3 className="prodName">{props.name}</h3>
        <h4 className="prodCategory">{props.category}</h4>
        <div className="prodPrice">${props.price}</div>
        <div className="prodSales">{props.sale}</div>
      </div>
    </div>
  )
}
     
