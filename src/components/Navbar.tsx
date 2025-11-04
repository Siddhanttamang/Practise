import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import "../index.css";

const Navbar = () => {
  const auth = useContext(AuthContext);
  if (!auth) return null; // safety check

  return (
    <nav className='nav-bar'>
      <div className="nav-brand">
        <Link to="/" className='nav-link'>Smart Krishi</Link> 
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>

      {!auth.isLoggedIn ? (
        <div className="navbar-login">
          <button><Link to="/login">Login</Link></button>
        </div>
      ) : (
        <div className="navbar-login">
          <button onClick={auth.logout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
