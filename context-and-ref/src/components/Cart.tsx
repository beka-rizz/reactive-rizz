import React from "react";
import useProductsContext from "../hooks/useProductsContext";

const Cart = () => {
  const products = useProductsContext();

  return (
    <button onClick={() => alert(products?.map((item) => item.name))}>
      Cart (<span>{products?.length}</span>)
    </button>
  );
};

export default Cart;
