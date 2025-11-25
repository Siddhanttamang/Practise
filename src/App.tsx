import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MarketPlace from "./pages/MarketPlace";
import Vegetables from "./pages/Vegetables";
import Products from "./components/marketplace/ProductList";
import Cart from "./components/marketplace/Cart";
import ProductDetails from "./components/marketplace/ProductDetails";
import SellVegetable from "./components/marketplace/SellVegetable";
import ProtectedRoute from "./utilities/ProtectedRoute";
import AuthLayout from "./pages/AuthLayout";

function App() {
  return (
    <Routes> 
       <Route path="/auth/:mode" element={<AuthLayout />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/vegetables/*" element={<Vegetables />} />
        <Route path="/marketplace/*" element={<MarketPlace />}>
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route
            path="addVegetable"
            element={
              <ProtectedRoute>
                <SellVegetable />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
