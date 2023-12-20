// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border flex  p-4 mb-4 rounded-xl">
      
      <div className='flex gap-6'>

      <div><img src={product.src} alt="Product photo" className=' w-full h-[20vh]' /></div>
      
      <div className='flex flex-col w-full'>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p>Total Stock: {product.totalStock}</p>
      <p>Sold Stock: {product.soldStock}</p>
      <p>Total Revenue: ${product.totalRevenue}</p>
      <p>Product price: ${product.Price}</p>
      <p>New Stock: {product.newstock}</p>
      </div>
      
      </div>

      <div>
          
      </div>
    </div>
  );
};

export default ProductCard;
