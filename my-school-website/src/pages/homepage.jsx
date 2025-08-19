import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Advantages from '../components/Homepage/Advantages'
import Banner from '../components/Homepage/Banner'
// import Parents from '../components/Homepage/Parentsspeak'
import Gallery from '../components/Homepage/Gallery'
import Location from '../components/Homepage/Location'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";
import { MdOutlineChildCare } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";

const programmes = [
  {
    title: "Play Group",
    age: "2–3 years Kids",
    schedule: "5 Days a week",
    img: "/images/Classes_images/1.png",
    link: "/playgroup",
  },
  {
    title: "Neev Nursery",
    age: "3–4 years Kids",
    schedule: "5 Days a week",
    img: "/images/Classes_images/2.png",
    link: "/nursery",
  },
  {
    title: "Neev Junior",
    age: "4–5 years Kids",
    schedule: "5 Days a week",
    img: "/images/Classes_images/3.png",
    link: "/junior-kg",
  },
  {
    title: "Neev Senior",
    age: "5–6 years Kids",
    schedule: "5 Days a week",
    img: "/images/Classes_images/4.png",
    link: "/senior-kg",
  },
];

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
      <div className="w-full flex justify-center bg-[#010066]">
        <Banner />
      </div>
      <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>

      {/* Our Programmes */}
      <section className="bg-[#ffd5af] py-12">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Programmes
          </h2>
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmes.map((program, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl overflow-hidden border-2 border-[#FF9B00] hover:shadow-xl transition w-72 mx-auto"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-60 h-60 object-cover m-4 rounded-2xl mx-auto"
                />
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-[#010066] mb-3">
                    {program.title}
                  </h3>
                  <ul className="m-4 flex justify-around text-center gap-3">
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <MdOutlineChildCare className="text-[#010066] text-2xl" />
                      <span>{program.age}</span>
                    </li>
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <GrSchedule className="text-[#010066] text-2xl" />
                      <span>{program.schedule}</span>
                    </li>
                  </ul>
                  <Link
                    to={program.link}
                    className="inline-block bg-[#FE7743] hover:bg-[#ffac2f]/80 text-gray-900 font-semibold px-5 py-2 rounded-lg transition"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div
            className="lg:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {programmes.map((program, idx) => (
              <div
                key={idx}
                className="min-w-[90vw] max-w-[90vw] ml-2 snap-center bg-white shadow-md rounded-xl overflow-hidden border-2 border-yellow-300 hover:shadow-xl transition"
              >
                <img
                  src={program.img}
                  alt={program.title}
                  className="w-80 h-80 object-cover m-4 rounded-2xl mx-auto"
                />
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold text-[#010066] mb-3">
                    {program.title}
                  </h3>
                  <ul className="m-4 flex justify-around text-center gap-3">
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <MdOutlineChildCare className="text-[#010066] text-2xl" />
                      <span>{program.age}</span>
                    </li>
                    <li className="flex flex-col items-center gap-2 font-bold">
                      <GrSchedule className="text-[#010066] text-2xl" />
                      <span>{program.schedule}</span>
                    </li>
                  </ul>
                  <Link
                    to={program.link}
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded-lg transition"
                  >
                    Enroll Now →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Advantages />
      {/* <Parents /> */}
      <Gallery />
      <Location />

      <Footer />
    </div>
  );
}
