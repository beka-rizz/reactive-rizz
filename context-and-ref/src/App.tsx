import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ProductsContext } from "./context/ProductsContext";
import { products } from "./products";

function App() {
  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <Cart />
      </ProductsContext.Provider>
      <ProductList />
    </div>
  );
}

export default App;
