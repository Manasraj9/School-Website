"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Confetti from "react-confetti";

export default function Achievement() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    { name: "Aadya", school: "Loyala High SCHOOL", photo: "/images/achievements/Aadya.jpg" },
    { name: "Abhineet", school: "D.A.V (B.S.E.B)", photo: "/images/achievements/Abhineet.jpg" },
    { name: "Advika", school: "St. Michaels High School", photo: "/images/achievements/Advika.jpg" },
    { name: "Anshul", school: "loyola high school", photo: "/images/achievements/Anshul.jpg" },
    { name: "Nitara", school: "St. Joseph Convent", photo: "/images/achievements/Nitara.jpg" },
    { name: "Nivedita", school: "Delhi Public School", photo: "/images/achievements/Nivedita.jpg" },
    { name: "Om Bhardwaj", school: "LoyolaHigh School", photo: "/images/achievements/Om Bhardwaj.jpg" },
    { name: "Prajisha", school: "Notre Dame Academy", photo: "/images/achievements/Prajisha.png" },
    { name: "Priyansh", school: "St Karens School", photo: "/images/achievements/Priyansh.jpg" },
    { name: "Saanvi Ambastha", school: "St Karens School", photo: "/images/achievements/Saanvi Ambastha.jpg" },
    { name: "Shreyansh Kishore", school: "Delhi Public School", photo: "/images/achievements/Shreyansh Kishore.jpg" },
    { name: "Shreyash", school: "DE NOBILI SCHOOL", photo: "/images/achievements/Shreyash.jpg" },
    { name: "Siddhi", school: "St Joseph Convent", photo: "/images/achievements/Siddhi.jpg" },
    { name: "Vrishank", school: "DAV (BSEB)", photo: "/images/achievements/Vrishank.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#ffd5af] flex flex-col relative overflow-hidden">

      <Navbar />
      <div className="w-full">
        <img src="/images/Upper.png" alt="Design" className="w-full object-cover" />
      </div>

      {/* 🎉 Confetti */}
      <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={250} recycle={true} />

      {/* 🎀 Ribbons */}
      <img src="/images/ribbon.png" className="ribbon left-0" />
      <img src="/images/ribbon1.png" className="ribbon right-0" />


      {/* Heading */}
      <div className="text-center py-8 px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-bounce">
          🎉 Congratulations, students! 🎊
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your hard work and dedication have paid off, and you should be
          incredibly proud of this achievement. We wish you all the best as you
          embark on this exciting new chapter of your academic journey.
        </p>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-12 py-8 relative z-10">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center border-2 border-[#FE7743] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-[#FE7743]"
            />
            <h2 className="text-xl font-semibold text-blue-800">{student.name}</h2>
            <p className="text-gray-600">{student.school}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

