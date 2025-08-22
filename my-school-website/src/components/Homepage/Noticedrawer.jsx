"use client";
import { Bell } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NoticeButton() {
  const router = useRouter();

  return (
    <>
      {/* Inline style for looping background and text color animation */}
      <style>
        {`
          @keyframes bgPulse {
            0%, 100% { background-color: #ffffff; }
            50% { background-color: #ff0000; }
          }

          @keyframes textPulse {
            0%, 100% { color: #ff0000; }
            50% { color: #ffffff; }
          }

          .animate-bg-pulse {
            animation: bgPulse 1s infinite; /* faster animation */
          }

          .animate-text-pulse {
            animation: textPulse 1s infinite;
          }
        `}
      </style>

      <button
        onClick={() => router.push("/notice")}
        className="absolute top-6 right-4 flex items-center gap-3 px-6 py-3 rounded-full shadow-lg z-[100] 
                   animate-bounce hover:scale-105 transition-transform duration-200 animate-bg-pulse"
      >
        <Bell size={22} className="animate-text-pulse" />
        <span className="font-semibold animate-text-pulse">Notice</span>
      </button>
    </>
  );
}
