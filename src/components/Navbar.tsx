import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import "../styles/index.css";
import "../styles/app.css";

const Navbar = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null;

  return (
    <nav className='nav-bar'>
      <div className="nav-brand">
        <Link to="/" className='nav-link'>Smart Krishi</Link> 
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Pricing</Link>
        <Link to="/features" className="nav-link">Features</Link>
      </div>

      {!auth.isLoggedIn ?(<div className="navbar-button">
        <button className='signup-button'>Sign Up</button>
        <Link to="/login" className='nav-link'>
        <button className='login-button'>Login</button></Link>
      </div>
      ): (
        <div className="navbar-logout">
          <button className="logout-button"onClick={auth.logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
