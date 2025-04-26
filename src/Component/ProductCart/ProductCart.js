import React, { useContext, useEffect } from "react";
import "./ProductCart.css";
import ContextData from "../../Context/ContextData";

export default function ProductCart(props) {
  const contextProducts = useContext(ContextData);
  return (
    <>
      {props.count > 0 && (
    <div className="product-cart">
      <div>{props.desc}</div>
      <div className="product-cart-price">
        <div className="product-cart-price-spans">
          <span>{props.count}x</span>
          <span>@${props.price}</span>
          <span>${props.count * props.price}</span>
        </div>
      </div>
    </div>
      )}
    </>
  );
}
