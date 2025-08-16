import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdOutlineChildCare } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";

const programmes = [
  {
    title: "Playgroup",
    age: "2–3 years Kids",
    schedule: "5 Days a week",
    img: "https://placehold.co/400x250?text=Playgroup",
    link: "/playgroup",
  },
  {
    title: "Nursery",
    age: "3–4 years Kids",
    schedule: "5 Days a week",
    img: "https://placehold.co/400x250?text=Playgroup",
    link: "/nursery",
  },
  {
    title: "LKG",
    age: "4–5 years Kids",
    schedule: "5 Days a week",
    img: "https://placehold.co/400x250?text=Playgroup",
    link: "/junior-kg",
  },
  {
    title: "UKG",
    age: "5–6 years Kids",
    schedule: "5 Days a week",
    img: "https://placehold.co/400x250?text=Playgroup",
    link: "/senior-kg",
  },
];

import { useEffect, useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  // Auto-scroll animation for mobile
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;
    let currentIndex = 0;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 0; // 16px margin
    const totalCards = programmes.length;
    const scrollToCard = (idx) => {
      el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
    };
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalCards;
      scrollToCard(currentIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center bg-[#010066] ">
        <img
          src="/images/banner.png"
          alt="School Banner"
          className="w-[90%] object-cover m-5"
        />
      </div>
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="School Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Our Programmes */}
      <section className="bg-[#e1e1e1] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Programmes
          </h2>
          {/* Desktop grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmes.map((program, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl overflow-hidden border-2 border-yellow-300 hover:shadow-xl transition"
              >
                <div className="flex justify-center align-center ">
                  <img
                    src={program.img}
                    alt={program.title}
                    className="w-full h-48 object-cover m-2 rounded-2xl"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-3xl font-bold text-[#010066] mb-3">
                    {program.title}
                  </h3>
                  <ul className="m-4 flex justify-around text-center">
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <MdOutlineChildCare className="text-[#010066] text-3xl" />
                      <span>{program.age}</span>
                    </li>
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <GrSchedule className="text-[#010066] text-3xl" />
                      <span>{program.schedule}</span>
                    </li>
                  </ul>

                  <Link
                    to={program.link}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile horizontal scroll, single card at a time */}
          <div
            className="lg:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {programmes.map((program, idx) => (
              <div
                key={idx}
                className="min-w-[90vw] max-w-[90vw] mx-2 snap-center bg-white shadow-md rounded-xl overflow-hidden border-2 border-yellow-300 hover:shadow-xl transition"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold text-[#010066] mb-3">
                    {program.title}
                  </h3>
                  <ul className="text-gray-700 text-sm mb-4 space-y-1">
                    <li>👶 {program.age}</li>
                    <li>📅 {program.schedule}</li>
                  </ul>
                  <Link
                    to={program.link}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
