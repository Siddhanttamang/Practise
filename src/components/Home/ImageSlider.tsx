// src/components/ImageSlider.tsx
import React, { useState, useEffect } from 'react';
import '../../styles/home.css';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  {
    image: 'https://plus.unsplash.com/premium_photo-1661962684717-f6ad58e7ebd4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
   
  },
  {
    image: 'https://plus.unsplash.com/premium_photo-1686529896385-8a8d581d0225?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
   
  },
  {
    image: 'https://images.unsplash.com/photo-1744230673231-865d54a0aba4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632',
    
  },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slide"
        style={{
        backgroundImage: `url(${slides[currentIndex].image})`,

        }}
      >
        <h1 className="slide-text">Welcome to Smart Krishi</h1>
      </div>
    </div>
  );
};

export default ImageSlider;
