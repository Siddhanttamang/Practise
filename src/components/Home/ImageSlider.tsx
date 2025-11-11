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
        <h1 className="slide-text">Welcome to Smart Krishi</h1>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
      </div>
    </div>
  );
};

export default ImageSlider;
