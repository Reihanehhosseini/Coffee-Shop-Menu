import React, { useContext } from "react";
import "./Header.css";
import { TbShoppingCart } from "react-icons/tb";
import ContextData from "../../Context/ContextData";

export default function Header() {
  const contextProducts = useContext(ContextData)
  return (
    <div className="Header">
      <span className="desserts">Desserts</span>
      <div className="shoppingIcon">
        <TbShoppingCart />
        <span>{contextProducts.numberBasket}</span>
      </div>
    </div>
  );
}
