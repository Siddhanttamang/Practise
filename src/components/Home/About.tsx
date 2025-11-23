import React from "react";

import '../../styles/about.css'
import AboutCard from "../About/AboutCard";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-us">
        <h1>
          Innovating the Future of <br /> Agriculture
        </h1>
        <span>
          Empowering farmers with AI-driven pest detection, <br />
          real-time weather updates, and a direct marketplace
          <br /> to connect with buyers and sellers.
        </span>
      </div>
      <div className="about-boxes">
        <AboutCard/>
        <div className="about-box2">
          <div className="about">
            <h1>100%</h1>
            <h3>Customer Satisfaction</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, iste.</p>
            
          </div>
          <div className="about">
            <h1>1 Million+ Users</h1>
            
            <p>
              To bridge the gap between technology and agriculture by helping
              farmers make data-driven decisions, reduce losses, and improve
              productivity sustainably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
