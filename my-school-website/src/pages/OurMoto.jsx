import React from 'react';
import Navbar from '../components/Navbar';

const OurMoto = () => (
  <div>
    <Navbar />
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>
    <h1>Our Moto</h1>
    <p>Our school moto content goes here.</p>
  </div>
);

export default OurMoto;
