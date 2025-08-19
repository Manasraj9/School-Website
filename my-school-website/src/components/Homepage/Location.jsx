import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Location() {
  return (
    <section className="py-12 bg-[#ffd5af]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Our School Location
        </h2>

        {/* Card */}
        <div className="grid md:grid-cols-2 gap-6 bg-white border-2 border-[#FE7743] rounded-lg p-6 shadow-md">
          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#FE7743] text-2xl mt-1" />
              <p className="text-gray-700">
                <span className="font-bold">Location</span> <br />
                Raj Lakshmi Niwas House No. 998/91, Near Kamakhya Bhawan, Road No,-0, 
                Shivpuri, Patna - 800023, Bihar
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#FE7743] text-2xl mt-1" />
              <p className="text-gray-700">
                <span className="font-bold">Phone</span> <br />
                <a
                  href="tel:+919576559666"
                  className="text-blue-600 hover:underline"
                >
                  +91-9142436076
                </a>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#FE7743] text-2xl mt-1" />
              <p className="text-gray-700">
                <span className="font-bold">Email</span> <br />
                <a
                  href="mailto:patna.boringroad@kangarookids.co.in"
                  className="text-blue-600 hover:underline"
                >
                  neevbaalpanki@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-72 md:h-full border-2 border-[#FE7743] rounded-lg">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6212569780524!2d85.10429019999999!3d25.6156475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59938b5aafc3%3A0xa65b16029b421537!2sNeev%20Baalpan%20Ki%20-%20Best%20Preschool%20in%20Shivpuri%2C%20Patna!5e0!3m2!1sen!2sin!4v1723799650000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
