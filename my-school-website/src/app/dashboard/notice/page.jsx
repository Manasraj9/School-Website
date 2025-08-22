"use client";
import { useState, useEffect } from "react";
import { databases, DATABASE_ID, COLLECTION_ID_NOTICES } from "@/lib/appwrite";
import { ID, Query, Permission, Role } from "appwrite";
import { toast } from "react-hot-toast";

export default function AddNoticePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [notices, setNotices] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const res = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_NOTICES,
        [Query.orderDesc("$createdAt")]
      );
      setNotices(res.documents);
    } catch (err) {
      toast.error("❌ Failed to fetch notices. Please check permissions.");
    }
  };

  const addOrUpdateNotice = async () => {
    if (!title || !content || !date) return toast("⚠️ All fields are required!");

    try {
      if (editingId) {
        await databases.updateDocument(
          DATABASE_ID,
          COLLECTION_ID_NOTICES,
          editingId,
          { title, content, date }
        );
        toast.success("✏️ Notice updated successfully!");
        setEditingId(null);
      } else {
        await databases.createDocument(
          DATABASE_ID,
          COLLECTION_ID_NOTICES,
          ID.unique(),
          { title, content, date },
          [
            Permission.read(Role.any()),
            Permission.update(Role.any()),
            Permission.delete(Role.any()),
          ]
        );
        toast.success("✅ Notice added successfully!");
      }

      setTitle("");
      setContent("");
      setDate(new Date().toISOString().split("T")[0]);
      fetchNotices();
    } catch (err) {
      toast.error("❌ Error saving notice: " + err.message);
    }
  };

  const deleteNotice = async (id) => {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_NOTICES, id);
      toast.success("🗑️ Notice deleted successfully!");
      fetchNotices();
    } catch (err) {
      toast.error("❌ Error deleting notice: " + err.message);
    }
  };

  const editNotice = (notice) => {
    setTitle(notice.title);
    setContent(notice.content);
    setDate(notice.date);
    setEditingId(notice.$id);
    toast("✏️ Editing notice...");
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      {/* Add / Edit Notice */}
      <div className="p-6 border rounded w-96 mb-8">
        <h1 className="text-xl font-bold mb-4">
          {editingId ? "✏️ Edit Notice" : "➕ Add Notice"}
        </h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={addOrUpdateNotice}
          className="bg-blue-500 text-white px-4 py-2 w-full rounded"
        >
          {editingId ? "Update Notice" : "Add Notice"}
        </button>
      </div>

      {/* Notices List */}
      <div className="w-3/4 max-w-2xl">
        <h2 className="text-lg font-bold mb-4">📢 All Notices</h2>
        {notices.length === 0 ? (
          <p>No notices found.</p>
        ) : (
          notices.map((notice) => (
            <div
              key={notice.$id}
              className="border p-4 mb-3 rounded flex justify-between items-start"
            >
              <div>
                <h3 className="font-semibold">{notice.title}</h3>
                <p className="text-gray-700">{notice.content}</p>
                <p className="text-sm text-gray-500">📅 Date: {notice.date}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => editNotice(notice)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNotice(notice.$id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
