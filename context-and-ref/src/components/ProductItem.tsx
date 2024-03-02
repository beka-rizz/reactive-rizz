import React from 'react'
import { Product } from '../models/Product'

const ProductItem = ({id, name}: Product) => {
  return (
    <li key={id}>{name}</li>
  )
}

export default ProductItem