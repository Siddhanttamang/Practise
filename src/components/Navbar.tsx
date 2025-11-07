import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import "../styles/index.css";
import "../styles/app.css";
import logo from '../assets/logo.png'
import { GooglePayload } from './GoogleLoginButton';
import Profile from './Profile';

const Navbar = () => {
  const storedUser = localStorage.getItem("googleUser");
  const [user, setUser] = useState<GooglePayload | null>(storedUser ? (JSON.parse(storedUser) as GooglePayload) : null);
   useEffect(() => {
    if (user) {
      localStorage.setItem("googleUser", JSON.stringify(user));
    }
  }, [user]);
  return (
    <nav className='nav-bar'>
      <div className="nav-brand">
        <Link to="/" className='nav-link'>
        <img
          src={logo}
          alt="Smart Krishi Logo"
          className="logo"
        /></Link> 
      </div>
      <div className="navbar-links">
        <Link to="/marketplace" className="nav-link">Market Place</Link>
        <Link to="/vegetables" className="nav-link">Vegetables Prices</Link>
      </div>
      <div>
     <Profile user={user} setUser={setUser}/>
      </div>

    
    </nav>
  );
};

export default Navbar;
