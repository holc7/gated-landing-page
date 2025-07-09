'use client';

import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";
import WhatsIncludedSection from "@/components/WhatsIncludedSection/WhatsIncludedSection";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <LandingPage />
      </div>

      {/* Next section - white background below */}
      <WhatsIncludedSection />
    </>
  );
}