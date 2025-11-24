import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import "../../styles/index.css";
import "../../styles/app.css";
import logo from '../../assets/logo.png'
import Profile from './Profile';
import Weather from './Weather';
import { Input } from '../ui/input';

const Navbar = () => {
  const location = useLocation();
  const auth=useContext(AuthContext);
  const city=(auth?.user)?(auth?.user?.address):"Kathmandu";

  return (
    <nav className='nav-bar' >
      <div className="nav-brand">
        <Link to="/" className='nav-link'>
        <img
          src={logo}
          alt="Smart Krishi Logo"
          className="logo"
        /></Link> 
      </div>
      <div>
        {
        <Weather  city={city}/>
        }
      </div>
      <div className="navbar-links">
        <Link to="/" className={`nav-link cursor-pointer  hover:border-green-400 transition-all duration-300 ease-linear   ${
            location.pathname === "/" && " border-green-400 border-b-4"
          }`}>Home</Link>
        <Link to="/marketplace" className={`nav-link cursor-pointer hover:border-green-400 transition-all duration-300 ease-linear   ${
            location.pathname === "/marketplace" && " border-green-400 border-b-4"
          }`}>Market Place</Link>
        <Link to="/vegetables" className={`nav-link cursor-pointer hover:border-green-400 transition-all duration-300 ease-linear  ${
            location.pathname === "/vegetables" && " border-green-400 border-b-4"
          }`}>Vegetables Prices</Link>
      </div>
      <div>
     <Profile/>
      </div>

    
    </nav>
  );
};

export default Navbar;
