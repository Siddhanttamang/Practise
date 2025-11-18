// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import '../../styles/home.css';



const ImageSlider: React.FC = () => {
  return (
    <div className="slider-container">
      <div
        className="slide"
        style={{
        backgroundImage: `url('https://carib-export.com/static/18b032abe433bf106a55c0e81b5c7007/a9ca5/Untitled-design-7.png')`,

        }}
      >
      <div className='text-wrapper'>
        <h1 className="slide-text">Empowering farmers with AI-driven</h1>
        <h2 className='slide-text'> pest detection, real-time weather updates, and a direct marketplace</h2>
        <p style={{fontSize:10}}>To bridge the gap between technology and agriculture by helping farmers make data-driven decisions, reduce losses, and improve productivity sustainably.</p>
        <div className='slide-buttons'>
          <button className='slide-button'style={{backgroundColor:'green'}}>Learn More</button>
          <button className='slide-button 'style={{backgroundColor:'gray'}}>Contact Us</button>  
        </div>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
