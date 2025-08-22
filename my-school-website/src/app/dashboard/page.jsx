"use client";
import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user
  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        console.error("Not logged in:", err.message);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard 🎉</h1>

        {user ? (
          <>
            <p className="mb-6">Logged in as <b>{user.email}</b></p>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Link
                href="/dashboard/notice"
                className="bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl shadow-md transition text-lg font-semibold"
              >
                📝 Add Notice
              </Link>
              <Link
                href="/dashboard/birthday"
                className="bg-pink-500 hover:bg-pink-600 text-white py-4 rounded-xl shadow-md transition text-lg font-semibold"
              >
                🎂 Add Birthday
              </Link>
            </div>

            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        ) : (
          <p>No user found. Redirecting...</p>
        )}
      </div>
    </div>
  );
}
