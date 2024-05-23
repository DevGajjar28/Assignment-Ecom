import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import HomePage from './components/HomePage';
import BackButton from './BackButton';


function App() {


  return (
    <>
      <Router>

        <Navbar />
        <BackButton />
        {/* <SearchBar/> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductDetails/:productId" element={<ProductDetails />} />

          {/* Default route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
