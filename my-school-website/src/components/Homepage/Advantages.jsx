import { useRef, useEffect } from "react";

const advantages = [
  {
    title: "Curriculum",
    desc: "We offer internationally advanced and scientifically designed iCan Learning System",
    img: "/images/curriculum.jpg",
  },
  {
    title: "Teaching Methodology",
    desc: "We impart knowledge through innovative teaching methodologies",
    img: "/images/methodology.jpg",
  },
  {
    title: "Learning Partners",
    desc: "We empower a child to acquire knowledge through the process of self exploration",
    img: "/images/partners.jpg",
  },
];

export default function AdvantageSection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    let currentIndex = 0;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 0;
    const totalCards = advantages.length;

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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Advantages
        </h2>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-yellow-400 rounded-2xl shadow-sm hover:shadow-lg transition p-5 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div
          className="lg:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[90vw] max-w-[90vw] mx-2 snap-center bg-white border-2 border-yellow-400 rounded-xl shadow-md hover:shadow-lg transition p-5 flex flex-col items-center text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-5"
              />
              <h3 className="text-xl font-bold text-purple-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
