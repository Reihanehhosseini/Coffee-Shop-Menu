import React, { useContext } from "react";
import ContextData from "../../Context/ContextData";
import "./Container.css";
import CardProduct from "../Card/CardProduct";

export default function Container() {
  const contextProducts = useContext(ContextData);

  return (
    <div className="Container">
      {contextProducts.allProducts.map((product) =>(
        <CardProduct key={product.id}{...product}/>
      ))}
    </div>
  );
}
