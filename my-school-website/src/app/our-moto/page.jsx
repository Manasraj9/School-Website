"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Lightbulb, BookOpen, Home, Gamepad2 } from "lucide-react"; // playful icons

const mottoSpeech = [
  {
    text: "Where little learners become big thinkers.",
    icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
  },
  {
    text: "Learning is a lifelong adventure. Let's start here.",
    icon: <BookOpen className="w-10 h-10 text-blue-500" />,
  },
  {
    text: "A home away from home, where every child shines.",
    icon: <Home className="w-10 h-10 text-green-500" />,
  },
  {
    text: "Let's play and learn together!",
    icon: <Gamepad2 className="w-10 h-10 text-pink-500" />,
  },
];

export default function OurMoto(){
  return(
  <div className="min-h-screen bg-[#ffd5af]">
    <Navbar />
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>

    <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center mt-5">
      Our Motto
    </h2>

    {/* Motto Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 pb-10">
      {mottoSpeech.map((motto, idx) => (
        <div
          key={idx}
          className="bg-white border-2 border-[#FE7743] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-xl"
        >
          <div className="mb-4">{motto.icon}</div>
          <p className="text-lg font-medium text-gray-700">{motto.text}</p>
        </div>
      ))}
    </div>

    <Footer />
  </div>
  )
};


