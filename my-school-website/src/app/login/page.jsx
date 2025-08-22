"use client";
import { useState } from "react";
import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      // ✅ Updated method for Appwrite v13+
      await account.createEmailPasswordSession(email, password);
      router.push("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border rounded w-80">
        <h1 className="text-xl font-bold mb-4">School Login</h1>
        {error && <p className="text-red-500">{error}</p>}
        <input
          className="border p-2 w-full mb-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 w-full rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
