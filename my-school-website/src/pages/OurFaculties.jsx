import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurFaculties = () => {
  const faculties = [
    { name: "REETA SINGH", exp: "9+ yrs Experience" },
    { name: "SNIGDHA KUMAR", exp: "5+ yrs Experience" },
    { name: "KUMARI SWAGATA", exp: "5+ yrs Experience" },
  ];

  return (
    <div className='bg-[#ffd5af]'>
      <Navbar />

      {/* Banner Image */}
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mt-10 mb-6">
        Our Faculties
      </h2>

      {/* Faculties Section */}
      <section className="px-6 py-10 flex justify-center">
        <div className="bg-[#fff2e6] rounded-2xl shadow-lg p-8 max-w-5xl w-full">
          {/* Description */}
          <p className="text-gray-700 text-center mb-10">
            Our team of highly qualified and experienced teachers is the cornerstone
            of our academic excellence. Each educator holds advanced degrees in their
            respective fields. They bring years of practical experience and a deep
            understanding of modern techniques, ensuring a dynamic and engaging
            learning environment. Our teachers are not only experts in their subjects
            but are also dedicated mentors who inspire critical thinking, creativity,
            and a lifelong love of learning. Their commitment to personalized
            instruction and student success is unwavering, as they guide each student
            toward their full potential.
          </p>

          {/* Faculty Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {faculties.map((faculty, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center border border-gray-200 hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faculty.name}
                </h3>
                <p className="text-gray-600">{faculty.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurFaculties;
