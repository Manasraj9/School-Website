import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SchoolUniform() {
  const uniforms = [
    {
      title: "Summer Uniform",
      img: "images/Uniform/1.svg",
    },
    {
      title: "PT Uniform",
      img: "images/Uniform/2.svg",
    },
    {
      title: "Winter Uniform",
      img: "images/Uniform/3.svg",
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
      <div className="bg-[#ffd5af] px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          👕 School Uniforms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {uniforms.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover"
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

