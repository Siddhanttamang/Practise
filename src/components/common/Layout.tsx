// src/components/common/Layout.tsx
import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import Breadcrumb from "../common/BreadCrumb";

const Layout: React.FC = () => {
  const location = useLocation();
  const hideLayout = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="app">
      {!hideLayout && <Navbar />}
      <main className="main-content">
        {!hideLayout && <Breadcrumb />}
        <Outlet /> {/* Render the nested route */}
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
