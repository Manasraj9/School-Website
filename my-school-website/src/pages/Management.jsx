import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Management = () => (
  <div>
    <Navbar/>
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>
    <h1>Management</h1>
    <p>Management content goes here.</p>
    <Footer/>
  </div>
);

export default Management;
