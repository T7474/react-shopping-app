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
  return (
    <CartContext.Provider value={{...state}}>
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  return useContext(CartContext);
};
