import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Management = () => (
  <div>
    <Navbar />

    {/* Banner Image */}
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>

    {/* Management Section */}
    <section className="bg-[#ffd5af] px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
        Management
      </h2>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 border-4 border-[#FE7743] hover:shadow-xl transition">
        <p className="text-gray-600 text-lg leading-relaxed text-center pb-5">
          Our play school is a vibrant community dedicated to fostering a love for
          learning in every child. We believe that play is the most powerful tool
          for education, and our curriculum is designed to be a joyful blend of
          structured activities and free exploration. Our dedicated educators create
          a safe and nurturing environment where children can freely discover,
          imagine, and grow at their own pace.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed text-center pt-5">
          Through a variety of activities—from storytelling and art to sensory play
          and outdoor adventures—we help children build essential social, emotional,
          and cognitive skills that will serve as the foundation for a lifetime of
          success.
        </p>
      </div>
    </section>

    <Footer />
  </div>
);

export default Management;
