"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Achievement = () => {
  // Student data array
  const students = [
    {
      name: "Rohan Kumar",
      school: "St. Xavier's School",
      photo: "/achievements/rohan.jpg",
    },
    {
      name: "Anaya Sharma",
      school: "Delhi Public School",
      photo: "/achievements/anaya.jpg",
    },
    {
      name: "Priya Singh",
      school: "Mount Carmel School",
      photo: "/achievements/priya.jpg",
    },
    // Add more students here
  ];

  return (
    <div className="min-h-screen bg-[#ffd5af] flex flex-col">
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
        </div>

      {/* Heading */}
      <div className="text-center py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Congratulations, students!
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your hard work and dedication have paid off, and you should be
          incredibly proud of this achievement. We wish you all the best as you
          embark on this exciting new chapter of your academic journey.
        </p>
      </div>

      {/* Student cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-12 py-8">
        {students.map((student, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
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

export default Achievement;

