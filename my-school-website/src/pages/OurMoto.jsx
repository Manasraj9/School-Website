import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mottoSpeech = [
"Where little learners become big thinkers.",
"Learning is a lifelong adventure. Let's start here.",
"A home away from home, where every child shines.",
"Let's play and learn together!"
];

const OurMoto = () => (
  <div className="min-h-screen bg-[#ffd5af]">
    <Navbar />
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>
    <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center mt-5">Our Moto</h2>
    <div className="flex justify-center items-center lg:py-10 md:py-8 sm:py-6">
      <div className="bg-white border rounded-2xl shadow-xl flex flex-col md:flex-row items-center p-10 max-w-6xl w-full mx-auto" style={{ borderColor: "#FE7743", borderWidth: "2px" }}>
        <div className="flex-1">
          
           <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
            {mottoSpeech.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center md:ml-8 mt-8 md:mt-0">
          <img
            src="/images/logo.png"
            alt="School Logo"
            className="w-40 h-40 object-contain rounded-md"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default OurMoto;
