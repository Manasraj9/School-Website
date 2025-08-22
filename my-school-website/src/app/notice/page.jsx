"use client";
import { useEffect, useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID_NOTICES } from "@/lib/appwrite";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function NoticePage() {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const res = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_NOTICES
            );
            setNotices(res.documents);
        } catch (err) {
            console.error("Error fetching notices:", err);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB"); // dd/mm/yyyy
    };

    return (
        <div className="bg-[#ffd5af]">
            <Navbar />

            {/* Banner Image */}
            <div className="w-full">
                <img
                    src="/images/Upper.png"
                    alt="Design"
                    className="w-full object-cover"
                />
            </div>
            <div className="min-h-screen py-10 px-4">
                <h1 className="text-3xl font-bold text-center text-[#010066] mb-8">
                    📢 Notices
                </h1>

                <div className="max-w-3xl mx-auto space-y-4">
                    {loading ? (
                        <p className="text-gray-500 text-center">Loading notices...</p>
                    ) : notices.length > 0 ? (
                        notices.map((notice) => (
                            <div
                                key={notice.$id}
                                className="p-4 bg-white border border-gray-200 rounded-lg shadow-md"
                            >
                                <h2 className="font-semibold text-lg text-[#FF6600]">
                                    {notice.title}
                                </h2>
                                <p className="text-gray-700 mt-2">{notice.content}</p>
                                <p className="text-xs text-gray-500 mt-3">
                                    📅 {formatDate(notice.date || notice.$createdAt)}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-center">No notices available 📭</p>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
}
