import React from 'react'
import { data } from "../../util/data"

export default function products() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt="product-image" className="prodImg"></img>
          <div className="prodContent">
            <div className="leftSide">
              <h3 className="prodCategory">{item.category}</h3>
              <h4 className="prodName">{item.name}</h4>
              <div className="prodPrice">${item.price}</div>
              <div className="prodSales">{item.sale}</div>
            </div>
            <div className="prodInto"><img src="Frame36.png"></img></div>
          </div>
        </div>
      ))}
    </div>
  )
}
