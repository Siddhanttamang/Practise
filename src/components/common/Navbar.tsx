import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import "../../styles/index.css";
import "../../styles/app.css";
import logo from '../../assets/logo.png'
import Profile from './Profile';
import Weather from './Weather';

const Navbar = () => {
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

        <Weather city={city}/>
        }
      </div>
      <div className="navbar-links">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/marketplace" className="nav-link">Market Place</Link>
        <Link to="/vegetables" className="nav-link">Vegetables Prices</Link>
      </div>
      <div>
     <Profile/>
      </div>

    
    </nav>
  );
};

export default Navbar;
