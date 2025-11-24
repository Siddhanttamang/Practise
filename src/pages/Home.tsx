// src/pages/Home.tsx
import React from 'react';

import '../styles/home.css';
import ImageSlider from '../components/Home/ImageSlider';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Footer from '../components/common/Footer';




const Home: React.FC = () => {
  return (
    <div className="home-container">
      <ImageSlider />
      <About/>
      <Services/>
      

    </div>
  );
};

export default Home;
