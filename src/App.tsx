import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./components/Home/About";
import Login from "./pages/Login";
import ProtectedRoute from "./utilities/ProtectedRoute";
import MarketPlace from "./pages/MarketPlace";
import Vegetables from "./pages/Vegetables";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login";

  return (
    
    <div className="app">
      {!hideNavbar && <Navbar />}
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<About />} />
        <Route path="/features" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketplace" element={<MarketPlace/>} />
        <Route path="/vegetables" element={<Vegetables/>} />
        
      </Routes>
      </main>
    </div>
  );
}

export default App;
