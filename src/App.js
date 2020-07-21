import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from './componenets/Header';
import { Home } from './componenets/Home';
import { Products } from './componenets/Products';
import { ProductDetails } from './componenets/ProductDetails';
import { NotFound } from './componenets/NotFound';
import { ProductIndex } from './componenets/ProductIndex';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<Products/>}>
          <Route path="/" element={<ProductIndex/>}></Route>
          <Route path=":productID" element={<ProductDetails/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
