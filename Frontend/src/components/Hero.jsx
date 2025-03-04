import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Welcome to IndustrialCo</h2>
        <p>Leading the industry with cutting-edge technology</p>
        <Link to="/services">
          <button className="hero-button">Explore Services</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
