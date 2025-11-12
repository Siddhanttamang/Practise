// src/pages/Home.tsx
import React from 'react';
import ImageSlider from '../components/Home/ImageSlider';
import '../styles/home.css';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Footer from '../components/Home/Footer';


const Home: React.FC = () => {
  return (
    <div className="home-container">
      
      <ImageSlider />
      <About/>
      <Services/>
      <Footer/>

    </div>
  );
};

export default Home;
