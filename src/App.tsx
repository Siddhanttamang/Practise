import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import { loginUser,LoginRequest,LoginResponse,User } from './services/auth'
import Home from './pages/Home';
import {Route,Routes, Navigate } from 'react-router-dom';


function App() {
  // const userData=localStorage.getItem("user");
  // const isLoggedIn=!!userData

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} /> */}
        {/* <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} /> */}
      </Routes>
 
  );
}

export default App;
