"use client"
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Location from '../../components/Homepage/Location';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // includes phone now
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Thank you! Your message has been sent.");
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus("❌ Failed to send: " + data.error);
      }
    } catch (error) {
      setStatus("❌ Error: " + error.message);
    }

    setTimeout(() => setStatus(""), 4000);
  };


  return (
    <div className="min-h-screen bg-[#ffd5af]">
      <Navbar />
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>
      <div className="w-full py-8 mb-4">
        <h1 className="text-4xl font-bold text-center text-black mb-2">Contact Us</h1>
        <p className="text-center text-lg text-gray-700">
          We'd love to hear from you! Reach out for any queries or feedback.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-2 md:px-8 py-4">
        <form
          className="bg-white rounded-2xl shadow-xl border-2 border-[#FE7743] p-6 md:p-10 w-full max-w-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-[#FE7743] mb-2 text-center">Get In Touch!</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name*"
            required
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE7743]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email*"
            required
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE7743]"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone*"
            required
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE7743]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message*"
            required
            rows={4}
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FE7743] resize-none"
          />

          <button
            type="submit"
            className="bg-[#FE7743] text-white font-bold py-2 rounded-md hover:bg-orange-500 transition"
          >
            Send Message
          </button>

          {status && (
            <div className={`text-center font-semibold ${status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}>
              {status}
            </div>
          )}
        </form>

        <div className="flex justify-center items-center w-full md:w-96">
          <DotLottieReact
            src="/lottiefile/Kids Studying from Home.lottie"
            autoplay
            loop
            speed={1.25}
            style={{ width: '100%', height: '360px', maxWidth: '380px' }}
          />
        </div>
      </div>

      <Location />
      <Footer />
    </div>
  );
};

export default Contact;
