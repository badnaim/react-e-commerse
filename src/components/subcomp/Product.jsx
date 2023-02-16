import "../subcomp-style/product.css";
import { useNavigate } from "react-router-dom";
import { useBasketContext } from "../../layout/basketContext";

export default function Product({ detail }) {
  const navigate = useNavigate();
  const { basketProd, setBasketProd } = useBasketContext();
  const myBasketProd = () => basketProd.push(detail.id.toString());
  // console.log(myBasketProd);
  // console.log(detail.id);
  // const { detail } = prop;
  return (
    <div
      className="card"
      onClick={() => {
        navigate(`../product/${detail.id}`);
        // navigate(`../product/onProduct`);
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
          <a onClick={myBasketProd} id="addToBasket">
            <img src="Frame36.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
