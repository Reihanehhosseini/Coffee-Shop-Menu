import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import "./CardProduct.css";
import { MdAddShoppingCart } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import ContextData from "../../Context/ContextData";

export default function CardProduct(props) {
  const contextProducts = useContext(ContextData);
  const [displayNone, setDisplayNone] = useState(true);
  const [borderImg, setBorderImg] = useState("");

  useEffect(() => {
    if (props.count === 0) {
      setDisplayNone(true);
    }
  }, [props.count]);

  return (
    <div className="cardProducts">
      <img src={props.img} className={`car-img ${borderImg}`} />
      <div className="cardProducts-buttons">
        {displayNone && (
          <button
            onClick={() => {
              contextProducts.addToSelectProduct(props);
              setDisplayNone(false);
              setBorderImg("borderImg");   
            }}
            className="add-to-cart-btn"
          >
            <MdAddShoppingCart />
            <span>Add to Cart</span>
          </button>
        )}
        {!displayNone && (
          <button className="added-to-cart">
            <CiCircleMinus
              onClick={() => {
                if (props.count > 0) {
                  contextProducts.setnumberBasket((prev) => prev - 1);
                  contextProducts.selectProducts.map((product) => {
                    if (product.title === props.title) {
                      product.count = product.count - 1;
                    }
                  });
                  contextProducts.allProducts.map((product) => {
                    if (product.title === props.title) {
                      product.count = product.count - 1;
                    }
                  });
                }
                if(props.count === 1){
                  setBorderImg("")
                }
                
              }}
            />
            <span style={{ color: "#fff" }}>{props.count}</span>
            <CiCirclePlus
              style={{ cursor: "pointer" }}
              onClick={() => {
                contextProducts.setnumberBasket((prev) => prev + 1);
                contextProducts.plusHander(props);
              }}
            />
          </button>
        )}
      </div>
      <div className="title-product">{props.title}</div>
      <div className="desc-product">{props.desc}</div>
      <div className="price-product">${props.price}</div>
    </div>
  );
}
