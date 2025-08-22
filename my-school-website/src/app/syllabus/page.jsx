"use client";
import Link from "next/link";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const syllabusData = [
    { className: "Playgroup", subject: "ALL", pdf: "/pdf/play-group.pdf" },
    { className: "Neev Nursery", subject: "ALL", pdf: "/pdf/neev-nursery.pdf" },
    { className: "Neev junior (LKG)", subject: "ALL", pdf: "/pdf/neev-junior.pdf" },
    { className: "Neev Senior (UKG)", subject: "ALL", pdf: "/pdf/neev-senior.pdf" },
];

export default function SyllabusPage() {
    return (
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
            <div className="p-10 bg-[#ffd5af]">
                <h1 className="text-4xl font-bold mb-6 text-center">School Syllabus</h1>

                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
                    {syllabusData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border-2 border-orange-500"
                        >
                            <h2 className="text-xl font-semibold">Class - {item.className}</h2>
                            <p className="text-gray-600 mb-2">Subjects - {item.subject}</p>
                            <a
                                href={item.pdf}
                                download // <-- This makes it download directly
                                className="inline-block px-4 py-2 bg-[#010066] text-white rounded hover:bg-blue-600 transition"
                            >
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
