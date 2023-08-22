import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShopCategory from '../pages/ShopCategory';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop-category' element ={<ShopCategory/>} />
        <Route path='/product-detail' element ={<ProductDetail/>} />
        <Route path='/cart' element ={<Cart/>} />
        <Route path='/checkout' element ={<Checkout/>} />
        <Route path='/login' element ={<Login/>} />
        <Route path='/register' element ={<Register/>} />






    </Routes> 
  )
}
