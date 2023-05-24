import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './Products';
import Contact from './Contact'
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Custom from './Custom';
import Auction from './Auction';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/:Id' element={<SingleProduct />} />
          <Route path='/custom' element={<Custom />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
