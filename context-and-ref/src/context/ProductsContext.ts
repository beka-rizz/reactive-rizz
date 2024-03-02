import React from 'react'
import { Product } from '../models/Product';

export const ProductsContext = React.createContext<Product[] | undefined>(undefined);