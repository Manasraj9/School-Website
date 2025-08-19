import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrincipalMessage = () => (
  <div className="bg-[#ffd5af]">
    <Navbar />
    <div className="w-full">
      <img
        src="/images/Upper.png"
        alt="Design"
        className="w-full object-cover"
      />
    </div>
    {/* Header */}
    <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center mt-10">
      Principal’s Message
    </h1>
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md border-2 border-[#FE7743] overflow-hidden">
          {/* Body */}
          <div className="p-5 sm:p-8">
            <img
              src="/images/Teachers/0.jpeg"
              alt="Principal"
              className="w-40 h-52 sm:w-48 sm:h-64 mx-auto block border-2 border-[#FE7743] rounded-xl shadow-lg mb-5 object-cover"
            />

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-5">
              <span className="font-semibold text-xl">Dear Parents and Guardians,</span>
              <br />
              <br />
              Welcome to <span className="font-semibold">“NeevBaalpan Ki”</span>.
              As the principal, I am delighted to welcome you to our vibrant school
              community. It is a true honour to partner with you in your child's
              first and most formative years of education. Our dedicated team of
              educators is passionate about creating a safe, nurturing, and
              stimulating environment where every child feels valued and excited to learn.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              At <span className="font-semibold">“NEEV BAALPAN KI”</span>, our
              philosophy is centred on <b>play-based learning</b>, as we believe that
              play school is the most powerful vehicle for a child's development.
              Our curriculum is thoughtfully designed to ignite curiosity and
              foster creativity, allowing children to explore the world around
              them through hands-on activities, art, music, and social interaction.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              We are committed to nurturing not only your child's academic skills
              but also their social and emotional well-being. We believe in
              celebrating every milestone, from the first time they share a toy to
              their first-ever masterpiece. Our goal is to lay a strong foundation
              for a lifetime of joyful learning and personal growth.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Thank you for entrusting us with your child's educational journey.
              We look forward to a wonderful and successful year ahead, filled
              with discovery, laughter, and a love for learning.
            </p>

            {/* Signature */}
            <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <p className="font-semibold text-gray-900">Sincerely,</p>
                <p className="text-gray-800">Prabha Dayal (Principal)</p>
                <p className="text-gray-600">NeevBaalpan Ki</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PrincipalMessage;
