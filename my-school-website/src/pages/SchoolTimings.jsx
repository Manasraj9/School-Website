import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSun, FaSnowflake, FaChild, FaClock } from "react-icons/fa";

const SchoolTimings = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#ffd5af]">
      {/* Navbar */}
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          School Timings
        </h1>

        {/* Grid for side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Summer Section */}
          <section>

            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border-2 border-[#FE7743]">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-yellow-600 justify-center">
                <FaSun /> Summer
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaChild className="text-pink-500" />
                  <span>
                    <strong>Play Group:</strong> 9:00 – 12:00
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-green-500" />
                  <span>
                    <strong>Nursery:</strong> 8:00 – 12:00
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-blue-500" />
                  <span>
                    <strong>Neev Junior (LKG):</strong> 8:05 – 1:05
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-purple-500" />
                  <span>
                    <strong>Neev Senior (UKG):</strong> 8:00 – 1:05
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Winter Section */}
          <section>

            <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border-2 border-[#FE7743]">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-blue-600 justify-center">
                <FaSnowflake /> Winter
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <FaChild className="text-pink-500" />
                  <span>
                    <strong>Play Group:</strong> 9:00 – 12:00
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-green-500" />
                  <span>
                    <strong>Nursery:</strong> 9:00 – 12:30
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-blue-500" />
                  <span>
                    <strong>Neev Junior (LKG):</strong> 9:00 – 1:00
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaChild className="text-purple-500" />
                  <span>
                    <strong>Neev Senior (UKG):</strong> 9:00 – 12:00
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SchoolTimings;

