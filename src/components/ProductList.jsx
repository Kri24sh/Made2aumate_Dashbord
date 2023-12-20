// components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products ,viewm }) => {
  return (
    <div className=' md:grid grid-rows-4 grid-flow-row gap-2'>
      {products.slice(0, viewm ).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
