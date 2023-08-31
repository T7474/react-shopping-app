import { createContext, useContext } from "react";
//การสร้าง context
const CartContext = createContext();
//การนำเอา context ไปใช้งานด้านนอก
export const useCart = () => {
  return useContext(CartContext);
};
