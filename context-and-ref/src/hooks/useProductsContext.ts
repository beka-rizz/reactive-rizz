import React from 'react'
import { ProductsContext } from '../context/ProductsContext';

const useProductsContext = () => {
  const products = React.useContext(ProductsContext);

  if (products === undefined) {
    throw new Error("error has occured");
  }
  return products;
}

export default useProductsContext;