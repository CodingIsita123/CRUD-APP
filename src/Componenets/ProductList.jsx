// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "https://dummyjson.com/products/";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(API);
//         setProducts(response.data.products); // Accessing the "products" array
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError("An error occurred while fetching products.");
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

//       {error && <p className="text-red-500 text-center">{error}</p>}

//       {!error && products.length === 0 && (
//         <p className="text-center text-gray-500">Loading...</p>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
//           >
//             {/* Product Image */}
//             <div className="mb-4">
//               <img
//                 src={product.images[0]}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//             </div>

//             {/* Product Title */}
//             <h2 className="text-lg font-bold mb-2">{product.title}</h2>

//             {/* Product Description */}
//             <p className="text-gray-700 mb-2">{product.description}</p>

//             {/* Price */}
//             <p className="text-gray-800 font-bold mb-2">
//               Price: ${product.price}
//             </p>

//             {/* Category */}
//             <p className="text-sm text-gray-500 mb-2">
//               Category: {product.category}
//             </p>

//             {/* Rating */}
//             <p className="text-sm text-yellow-500">
//               Rating: {product.rating} ★
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form1 from './Form1';

const API = "https://jsonplaceholder.typicode.com/posts";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API);

        setProducts(response.data); // Use response.data to access the product data
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('An error occurred while fetching products.');
      }
    };

    fetchProducts();
  }, []);

// Handle Delete
  const HandleDelete=async(id)=>{

    try{
      const res=await axios.delete(`${API}/${id}`);
    if(res.status===200){
      const UpdatesData=products.filter((curElem)=>{
        return curElem.id!==id;
      })
      setProducts(UpdatesData);
    }
    else
    {
      console.log("can not fetch",res.status);
    }
    }
    catch(error){
      console.log(error);
    }
    
  }

  return (
    <>
      <section>
    <Form1 products={products} setProducts={setProducts}/>
  </section>

    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0,20).map((product) => (
           
            <>
          
            {/* <Link to="/create">Create Product</Link> */}
            <li key={product.id}>
            <Link to={`/ProductDetails/${product.id}`}>
              <h2 className="text-lg font-bold mb-2">{product.title}</h2>
              <p className="text-gray-700">{product.body}</p>
            </Link>
            <button  onClick={()=>HandleDelete(product.id)}>Delete</button>
            </li>

            </>

          ))}
        </div>
      </div>
    </div>
    </>
  
  );
};

export default ProductList;
