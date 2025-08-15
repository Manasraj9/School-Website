import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-10">Welcome to Our School!</h1>
      <p className="text-center mt-4">This is the homepage of our school website.</p>
    </div>
  );
}
