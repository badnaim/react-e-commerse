import { createContext, useContext, useState } from "react";
const BasketContext = createContext();
export const BasketProvider = (props) => {
  const { children } = props;
  const [basketProd, setBasketProd] = useState([]);
  return (
    <BasketContext.Provider value={{ basketProd, setBasketProd }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketContext = () => useContext(BasketContext);
