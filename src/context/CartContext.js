//การสร้าง context
import { createContext, useContext, useReducer } from "react";
import products from "./../data/products";
import cartReducer from "../reducer/cartReducer";
import userEvent from "@testing-library/user-event";
//การนำเอา context ไปใช้งานด้านนอก
const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amount: 0,
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  
  function formatMoney(money){ //5000 => 5,000
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return (
    <CartContext.Provider value={{...state,formatMoney}}>
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  return useContext(CartContext);
};
