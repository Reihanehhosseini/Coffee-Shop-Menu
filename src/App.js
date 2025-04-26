import "./App.css";
import Header from "./Component/Header/Header";
import Aside from "./Component/Aside/Aside";
import Container from "./Component/Container/Container";
import products from "./data";
import { useEffect, useState } from "react";
import ContextData from "./Context/ContextData";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [numberBasket, setnumberBasket] = useState(0);
  const [selectProducts, setSelectProducts] = useState([]);

  const addToSelectProduct = (item) => {
    const isItTrue = selectProducts.some(
      (product) => product.title === item.title
    );
    if (!isItTrue) {
      const newItem = {
        id: selectProducts.length + 1,
        title: item.title,
        price: item.price,
        desc: item.desc,
        img: item.img,
        count: item.count + 1,
      };
      setSelectProducts((prev) => [...prev, newItem]);

      setnumberBasket((prev) => prev + 1);

      allProducts.map((product) => {
        if (product.title === item.title) {
          product.count = product.count + 1;
        }
      });
    } else {
      setSelectProducts((prev) => [...new Set(prev)]);
      setnumberBasket((prev) => prev + 1);
      allProducts.map((product) => {
        if (product.title === item.title) {
          product.count = product.count + 1;
        }
      });
      selectProducts.map((product) => {
        if (product.title === item.title) {
          product.count = product.count + 1;
        }
      });
    }
  };

  const plusHander = (item) => {
    selectProducts.map((product) => {
      if (product.title === item.title) {
        product.count = product.count + 1;
      }
    });
    allProducts.map((product) => {
      if (product.title === item.title) {
        product.count = product.count + 1;
      }
    });
  };

  return (
    <>
      <ContextData.Provider
        value={{
          allProducts,
          setAllProducts,
          numberBasket,
          setnumberBasket,
          selectProducts,
          setSelectProducts,
          addToSelectProduct,
          plusHander,
        }}
      >
        <div className="App">
          <section>
            <Header />
            <Container />
          </section>
          <Aside />
        </div>
      </ContextData.Provider>
    </>
  );
}

export default App;
