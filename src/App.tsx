import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MarketPlace from "./pages/MarketPlace";
import Vegetables from "./pages/Vegetables";
import Cart from "./components/marketplace/Cart";
import Products from "./components/marketplace/ProductList";
import ProductDetails from "./components/marketplace/ProductDetails";
import Checkout from "./components/marketplace/Checkout";
import SellVegetable from "./components/marketplace/SellVegetable";
import ProtectedRoute from "./utilities/ProtectedRoute";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    
    <div className="app">
      {!hideNavbar && <Navbar />}
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vegetables/*" element={<Vegetables/>} />
        <Route path="/marketplace/*" element={<MarketPlace/>}>
          <Route index element={<Products />} />
           <Route path="cart" element={<Cart />}/>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="addVegetable" element={
            <ProtectedRoute>
              <SellVegetable />
            </ProtectedRoute>
            } />
        </Route>
      </Routes>
      </main>
    </div>
  );
}

export default App;
