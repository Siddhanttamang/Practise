import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Profile:React.FC = () => {
  const auth=useContext(AuthContext);
  const user=(auth?.user)?(auth.user.name):(auth?.googleUser?.name);
  
      
  return (
    <>
    
     {(!user)?(<div className="navbar-profile">
            <Link to="/auth/login" className='nav-link'>
            <button className='login-button'>Login</button></Link>
            <Link to="/auth/signup" className='nav-link'>
            <button className='signup-button'>Sign Up</button>
            </Link>
          </div>):(
    <div className="navbar-profile">
        <div className='profile'><img
        src={auth?.googleUser?.picture}
        alt="Profile"
        style={{ 
            borderRadius: '50%',
            width:32,
             }}
      /></div>
        <button className='logout-button' onClick={auth?.logout}>Logout</button>
       
  
      </div>)
    }
    </>
);
}

export default Profile;
