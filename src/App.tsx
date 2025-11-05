import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/Home/About";
import Login from "./pages/Login";

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
      </Routes>
      </main>
    </div>
  );
}

export default App;
