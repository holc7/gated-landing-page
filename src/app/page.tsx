'use client';

import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="page-container">
      <Navbar />
      <LandingPage />
    </div>
  );
}