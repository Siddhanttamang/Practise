import React, { useEffect } from 'react';
import Login from './pages/Login'

import Home from './pages/Home';
import {Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';


function App() {


  return (
    <div className='app'>
    <Navbar/>
    <main className="main-content">

    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
    </Routes>
    </main>
    </div>
  );
}


export default App;
