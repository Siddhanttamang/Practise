// src/pages/Home.tsx
import React from 'react';
import ImageSlider from '../components/Home/ImageSlider';
import '../styles/home.css';
import About from '../components/Home/About';
import Services from '../components/Home/Services';


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
