import { useRef, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Parent of Arjun",
    school: "Kangaroo Kids",
    img: "/images/parent1.png",
    text: "I wish there was Kangaroo Kids when I was growing up. I’m grateful to get the opportunity to be a part of this event, my children to a school like this. I missed ICC Ceat Ranking Award Ceremony",
  },
  {
    name: "Parent of Aryan",
    school: "Kangaroo Kids",
    img: "/images/parent2.png",
    text: "I wish the school all the best and hope they continue to do such marvellous activities for the children. Actually, if not for the children, I request it for the parents sake, please.",
  },
];

export default function ParentsSpeak() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    let currentIndex = 0;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 0;
    const totalCards = testimonials.length;

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
    <section className="py-12 bg-[#e1e1e1]">
      <div className="container mx-auto px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Parents Speak
        </h2>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-yellow-400 rounded-2xl shadow-sm hover:shadow-md transition p-6 text-left flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-2 border-purple-600"
                />
                <div>
                  <h3 className="text-2xl font-bold">{t.name}</h3>
                  <p className="text-xl text-gray-500">{t.school}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <FaQuoteLeft className="inline text-yellow-500 mr-2 text-xl" />
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div
          className="lg:hidden flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={scrollRef}
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[90vw] max-w-[90vw] mx-2 snap-center bg-white border-2 border-yellow-400 rounded-xl shadow-md p-6 text-left flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-2 border-purple-600"
                />
                <div>
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.school}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                <FaQuoteLeft className="inline text-yellow-500 mr-2" />
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-8">
          <button className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full text-purple-900 font-bold shadow-md transition">
            See More →
          </button>
        </div>
      </div>
    </section>
  );
}
