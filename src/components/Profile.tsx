import React, { useEffect, useState } from 'react'
import { GooglePayload } from './GoogleLoginButton';
import { Link, useNavigate } from 'react-router-dom';
interface Props{
  user:GooglePayload |null;
  setUser:React.Dispatch<React.SetStateAction<GooglePayload | null>>
}
const Profile:React.FC<Props> = ({user,setUser}) => {
      
  return (
    <>
    
     {(!user)?(<div className="navbar-profile">
            <Link to="/login" className='nav-link'>
            <button className='login-button'>Login</button></Link>
            <button className='signup-button'>Sign Up</button>
          </div>):(
    <div className="navbar-profile">
        <Link to="/cart" className='nav-cart'>🛒</Link>
        <div className='profile'><img
        src={user.picture}
        alt="Profile"
        style={{ 
            borderRadius: '50%',
            width:32,
             }}
      /></div>
        <button className='logout-button' onClick={()=>{
          localStorage.removeItem("googleUser");
          setUser(null);
        }} >Logout</button>
  
      </div>)
    }
    </>
);
}

export default Profile;
