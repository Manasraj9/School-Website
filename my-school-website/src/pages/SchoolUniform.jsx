import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SchoolUniform() {
  const uniforms = [
    {
      title: "Boys Summer Uniform",
      img: "/uniforms/boys-summer.jpg",
    },
    {
      title: "Girls Summer Uniform",
      img: "/uniforms/girls-summer.jpg",
    },
    
  ];

  return (
    <>
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>
      <div className="bg-[#ffd5af] min-h-screen px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          👕 School Uniforms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {uniforms.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

