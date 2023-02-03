import Header from './components/layout/Header';
import Home from './pages/Home.js';
import './App.css';
import React from 'react';
import { Router,Navigate,Routes, Route, Link,BrowserRouter,createBrowserRouter,RouterProvider} from "react-router-dom";
import Custom from './pages/Custom.js';
import Products from './pages/Products.js';
import Product from './pages/Product.js';
import ContextProvider from "./components/context/Context.js"
function App() {
  
  
  
  return (
    <ContextProvider>

      <div className="App">
        <Header />
      
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/list" element={<Custom/>}/>
          <Route path="/products/:item" element={<Products/>}/>
          <Route path="/product/:prod" element={<Product/>}/>
        </Routes>

      </div>
    </ContextProvider>
  );
}

export default App;
