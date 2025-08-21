"use client"
import { FaBookOpen, FaCalculator, FaPaintBrush, FaRunning, FaUsers } from "react-icons/fa";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const academics = [
  {
    title: "Language and Literacy",
    focus: "Developing a love for reading and communication.",
    activities: [
      "Storytelling, nursery rhymes, puppet shows",
      "Show and tell",
      "Early phonics games",
      "Introducing new vocabulary in fun, natural ways",
    ],
    icon: <FaBookOpen className="text-pink-600 text-3xl" />,
  },
  {
    title: "Numeracy and Logic",
    focus: "Building a solid foundation in math concepts.",
    activities: [
      "Counting games",
      "Sorting blocks by shape and color",
      "Puzzles and problem-solving",
      "Building with different materials",
    ],
    icon: <FaCalculator className="text-blue-600 text-3xl" />,
  },
  {
    title: "Creative Arts and Expression",
    focus: "Fostering imagination and self-expression.",
    activities: [
      "Painting, drawing, clay modeling",
      "Music and movement sessions",
      "Dramatic play",
    ],
    icon: <FaPaintBrush className="text-green-600 text-3xl" />,
  },
  {
    title: "Motor Skills Development",
    focus: "Enhancing both fine and gross motor skills.",
    activities: [
      "Fine Motor: Bead stringing, lacing, finger painting, safety scissors",
      "Gross Motor: Running, jumping, climbing, balancing, ball play",
    ],
    icon: <FaRunning className="text-orange-600 text-3xl" />,
  },
  {
    title: "Social and Emotional Development",
    focus: "Teaching empathy, cooperation, and self-regulation.",
    activities: [
      "Group play and sharing toys",
      "Turn-taking games",
      "Structured circle time for feelings expression",
    ],
    icon: <FaUsers className="text-purple-600 text-3xl" />,
  },
];

export default function Academics() {
  return (
    <div>
      <Navbar /> 
       <div className="w-full">
        <img
          src="/images/Upper.png"
          alt="Design"
          className="w-full object-cover"
        />
      </div>
    <section className="px-4 py-10 md:px-10 bg-[#ffd5af]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Academics
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 flex flex-col hover:shadow-xl transition-shadow rounded-2xl shadow-xl border-2 border-[#FE7743]"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              <span className="font-medium">Focus:</span> {item.focus}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {item.activities.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </div>
  );
}

