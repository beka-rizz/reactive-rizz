import React from "react";
import ProductItem from "./ProductItem";
import { products } from "../products";

const ProductList = () => {
  return (
    <ul>
      <h1>Products</h1>
      {products.map((item) => {
        return <ProductItem id={item.id} name={item.name} />;
      })}
    </ul>
  );
};

export default ProductList;
