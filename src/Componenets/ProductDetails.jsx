

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// const API = "https://jsonplaceholder.typicode.com/posts";

const ProductDetails = () => {
    const{id}=useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setProducts(response.data); // Use response.data to access the product data
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('An error occurred while fetching products.');
      }
    };
 
    fetchProducts();
  }, [id]);

  if(!products){
    return <div >product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
            <div key={products.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold mb-2">{products.title}</h2>
              <p className="text-gray-700">{products.body}</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;