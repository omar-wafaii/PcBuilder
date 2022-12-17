import Header from './Header';
import Body from './Body';
import './App.css';
import React from 'react';
import { Router,Navigate,Routes, Route, Link,BrowserRouter,createBrowserRouter,RouterProvider} from "react-router-dom";
import Custom from './Custom.js.js';
import Products from './Products.js.js';
import Product from './Product.js';
import ContextProvider from "./Context.js"
function App() {
  
  
  
  return (
    <ContextProvider>

      <div className="App">
        <Header />
      
        <Routes>
          <Route path="*" element={<Body/>}/>
          <Route path="/list" element={<Custom/>}/>
          <Route path="/products/:item" element={<Products/>}/>
          <Route path="/product/:prod" element={<Product/>}/>
        </Routes>

      </div>
    </ContextProvider>
  );
}

export default App;
