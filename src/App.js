import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar, { NavbarWithMegaMenu } from './components/Navbar'
import ShoppingCart from './components/ShoppingCart'
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
// import NewArrivalCarousel from './components/NewArrivalCarousel';
// import NewArrivalsCarousel from './components/NewArrivalCarousel';
import Preview from './components/Preview';

function App() {
  return (
    <>

<Router>
      <Navbar />
      {/* <NewArrivalsCarousel/> */}
      <Product/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Preview" element={<Preview/>} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Preview" element={<Preview />} />

        {/* <Route path="/Preview/:productId" element={<Preview />} /> */}


      </Routes>
    </Router>
    
    
    </>
  )
}

export default App