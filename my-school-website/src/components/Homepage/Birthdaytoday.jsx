"use client";
import { useEffect, useState, useRef } from "react";
import Confetti from "react-confetti";
import {
  databases,
  DATABASE_ID,
  COLLECTION_ID_BIRTHDAYS,
} from "@/lib/appwrite";

export default function BirthdayShowcase() {
  const [todaysBirthdays, setTodaysBirthdays] = useState([]);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    fetchTodaysBirthdays();
  }, []);

  const fetchTodaysBirthdays = async () => {
    try {
      const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_BIRTHDAYS
      );

      const today = new Date();
      const todayMonthDay = `${today.getMonth() + 1}-${today.getDate()}`;

      const filtered = res.documents.filter((b) => {
        if (!b.birthday) return false;
        const bday = new Date(b.birthday);
        const bdayMonthDay = `${bday.getMonth() + 1}-${bday.getDate()}`;
        return bdayMonthDay === todayMonthDay;
      });

      setTodaysBirthdays(filtered);
    } catch (err) {
      console.error("Error fetching today's birthdays:", err);
    }
  };

  // Update confetti dimensions based on container size
  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, [todaysBirthdays]);

  // 🎓 Map backend class values to custom names
  const classMap = {
    playgroup: "Playgroup",
    nursery: "Neev Nursery",
    lkg: "Neev Junior",
    ukg: "Neev Senior",
  };

  return (
    <div className="bg-[#ffd5af] px-4 py-6">
      {/* 🎂 Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6">
        🎂 Today's Birthdays
      </h1>

      <div
        ref={containerRef}
        className="relative flex flex-wrap justify-center gap-4 sm:gap-6 p-4 bg-[#ffd5af] rounded-lg"
        style={{ minHeight: "150px" }}
      >
        {todaysBirthdays.length > 0 ? (
          todaysBirthdays.map((b) => (
            <div
              key={b.$id}
              className="relative w-full sm:w-60 p-4 bg-white shadow-lg rounded-lg flex flex-col items-center border-2 border-[#FF9B00] overflow-hidden"
            >
              {/* 🎉 Confetti restricted to this card */}
              <div className="absolute inset-0 pointer-events-none">
                <Confetti
                  width={dimensions.width > 0 ? dimensions.width : 200}
                  height={dimensions.height > 0 ? dimensions.height : 200}
                  numberOfPieces={80}
                  recycle={true}
                />
              </div>

              {b.image && (
                <img
                  src={b.image}
                  alt={b.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover relative z-10"
                />
              )}
              <h2 className="mt-2 font-bold text-lg sm:text-xl text-center relative z-10">
                🎉 Happy Birthday {b.name}!
              </h2>
              <p className="text-gray-600 text-sm sm:text-base relative z-10">
                {classMap[b.class?.toLowerCase()] || b.class}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center text-sm sm:text-base">
            No birthdays today 🎂
          </p>
        )}
      </div>
    </div>
  );
}
