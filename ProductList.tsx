// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from your backend API (GET request)
    // Replace the dummyProducts with actual data
    axios.get('/api/products') // Adjust the endpoint as needed
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Farmer: {product.farmer}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

// Define the Product type (adjust as per your actual data structure)
type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  farmer: string;
};
