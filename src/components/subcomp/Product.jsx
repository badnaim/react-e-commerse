import "../subcomp-style/product.css";
import { useNavigate } from "react-router-dom";

export default function Product({ detail, key }) {
  const navigate = useNavigate();
  // const { detail } = prop;
  return (
    <div key={key}
      className="card"
      onClick={() => {
        navigate(`../product/${detail.id}`);
      }}
    >
      <img src={detail.image} alt="product-image" className="prodImg"></img>
      <div className="prodContent">
        <div className="leftSide">
          <h3 className="prodCategory">{detail.category}</h3>
          <h4 className="prodName">{detail.name}</h4>
          <div className="prodPrice">${detail.price}</div>
          {/* <div className="prodSales">{detail.sale}</div> */}
        </div>
        <div className="prodInto">
          <img src="Frame36.png"></img>
        </div>
      </div>
    </div>
  );
}
