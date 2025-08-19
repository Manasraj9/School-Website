"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  "/images/Homepage_banner/1.jpeg",
  "/images/Homepage_banner/2.jpeg",
  "/images/Homepage_banner/3.jpeg",
  "/images/Homepage_banner/4.jpeg",
  "/images/Homepage_banner/5.jpeg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-[#ffd5af]">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gallery</h2>

      {/* Desktop Grid - Equal Squares */}
      <div className="hidden md:grid grid-cols-3 gap-6 px-6 md:px-20">
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

      {/* Mobile Grid - Only 6 images */}
      <div className="block md:hidden px-6">
        <div className="grid grid-cols-2 gap-4">
          {galleryImages.slice(0, 6).map((src, index) => (
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
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <Link href="/gallery">
          <button className="px-6 py-3 bg-[#FF9B00] text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
            See More
          </button>
        </Link>
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
  );
}
