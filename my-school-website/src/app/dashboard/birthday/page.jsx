"use client";
import { useEffect, useState } from "react";
import {
    databases,
    storage,
    IDMaker,
    DATABASE_ID,
    COLLECTION_ID_BIRTHDAYS,
    BUCKET_ID,
} from "@/lib/appwrite";

export default function BirthdayPage() {
    const [birthdays, setBirthdays] = useState([]);
    const [form, setForm] = useState({
        name: "",
        class: "Playgroup",
        birthday: "",
        image: null,
    });
    const [loading, setLoading] = useState(false);
    const [editingId, setEditingId] = useState(null); // ✅ track editing

    useEffect(() => {
        fetchBirthdays();
    }, []);

    const fetchBirthdays = async () => {
        try {
            const res = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID_BIRTHDAYS
            );
            setBirthdays(res.documents);
        } catch (error) {
            console.error("Error fetching birthdays:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = form.image;

            // Upload image if new one is selected (File type)
            if (form.image && typeof form.image !== "string") {
                const file = await storage.createFile(
                    BUCKET_ID,
                    IDMaker.unique(),
                    form.image
                );
                if (file && file.$id) {
                    imageUrl = storage.getFileView(BUCKET_ID, file.$id);
                }
            }

            if (editingId) {
                // ✅ Update existing
                await databases.updateDocument(
                    DATABASE_ID,
                    COLLECTION_ID_BIRTHDAYS,
                    editingId,
                    {
                        name: form.name,
                        class: form.class,
                        birthday: form.birthday,
                        image: imageUrl,
                    }
                );
            } else {
                // ✅ Create new
                await databases.createDocument(
                    DATABASE_ID,
                    COLLECTION_ID_BIRTHDAYS,
                    IDMaker.unique(),
                    {
                        name: form.name,
                        class: form.class,
                        birthday: form.birthday,
                        image: imageUrl || "",
                    }
                );
            }

            // Reset form
            setForm({ name: "", class: "Playgroup", birthday: "", image: null });
            setEditingId(null);
            fetchBirthdays();
        } catch (error) {
            console.error("Error saving birthday:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (b) => {
        setEditingId(b.$id);
        setForm({
            name: b.name,
            class: b.class,
            birthday: b.birthday ? b.birthday.split("T")[0] : "",  // ✅ normalize date
            image: b.image,
        });
    };


    const handleDelete = async (id) => {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID_BIRTHDAYS,
                id
            );
            fetchBirthdays();
        } catch (error) {
            console.error("Error deleting birthday:", error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">🎂 Manage Birthdays</h1>

            {/* Add / Edit Birthday Form */}
            <form
                onSubmit={handleSubmit}
                className="mb-6 bg-gray-100 p-4 rounded"
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border p-2 mr-2 rounded"
                    required
                />
                <select
                    value={form.class}
                    onChange={(e) => setForm({ ...form, class: e.target.value })}
                    className="border p-2 mr-2 rounded"
                >
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                </select>
                <input
                    type="date"
                    value={form.birthday ? form.birthday.split("T")[0] : ""}  // ✅ normalize
                    onChange={(e) => setForm({ ...form, birthday: e.target.value })}
                    className="border p-2 mr-2 rounded"
                    required
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    className="border p-2 mr-2 rounded"
                />
                <button
                    type="submit"
                    className={`${editingId ? "bg-yellow-500" : "bg-green-500"
                        } text-white px-4 py-2 rounded`}
                    disabled={loading}
                >
                    {loading
                        ? "Saving..."
                        : editingId
                            ? "Update Birthday"
                            : "Add Birthday"}
                </button>
                {editingId && (
                    <button
                        type="button"
                        onClick={() => {
                            setEditingId(null);
                            setForm({
                                name: "",
                                class: "Playgroup",
                                birthday: "",
                                image: null,
                            });
                        }}
                        className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                )}
            </form>

            {/* List Birthdays */}
            <div>
                {birthdays.map((b) => (
                    <div
                        key={b.$id}
                        className="p-4 mb-2 bg-white shadow rounded flex justify-between items-center"
                    >
                        <div className="flex items-center gap-4">
                            {b.image && (
                                <img
                                    src={b.image}
                                    alt={b.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            )}
                            <div>
                                <p className="font-bold">{b.name}</p>
                                <p className="text-sm text-gray-600">
                                    {b.class} | 🎂 {b.birthday}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => handleEdit(b)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(b.$id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
