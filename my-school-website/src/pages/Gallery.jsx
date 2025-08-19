import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Generate gallery images 1 to 22
const galleryImages = Array.from({ length: 22 }, (_, i) => `/images/Gallery/${i + 1}.jpg`);

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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
      <section className="py-12 bg-[#ffd5af]">
        <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

        {/* Responsive Grid - Mobile & Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6 md:px-20">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="max-w-[90%] max-h-[85%] rounded-lg shadow-lg"
            />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
