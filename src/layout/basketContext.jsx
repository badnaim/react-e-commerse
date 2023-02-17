import { createContext, useContext, useState, useEffect } from "react";
var localStorage = require('localStorage');
const BasketContext = createContext();
export const BasketProvider = (props) => {
  const { children } = props;
  const [basketProd, setBasketProd] = useState([]);
  // const [userBasketProd, setUserBasketProd] = useState([]);
  // localStorage.setItem('myKey', JSON.stringify(basketProd));
  // let basket = localStorage.getItem('myKey')
  // useEffect(() => {
  //   const basketProd = JSON.parse(localStorage.getItem('item'));
  //   if (basketProd) {
  //     setBasketProd(basketProd);
  //   }
  // }, []);

  return (
    <BasketContext.Provider value={{ basketProd, setBasketProd }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => useContext(BasketContext);
