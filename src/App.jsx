import React from 'react'
import Posts from './Componenets/Posts'


const App = () => {
  return (
   <Posts/>
  ) 
}

export default App



 
        




// Here is the Code of Dynamic Routing when I click on a single Product it will show me that product only.

// import React from 'react';
// import ProductList from './Componenets/ProductList';
// import {  Routes,Route, BrowserRouter } from 'react-router-dom';
// import ProductDetails from './Componenets/ProductDetails';
// import Form1 from './Componenets/Form1';




// const App = () => {
//   return (
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<ProductList/>}></Route>
//     <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>
//     <Route path="/create" element={<Form1/>}></Route>
//     </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
