'use client';

import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";
import WhatsIncludedSection from "@/components/WhatsIncludedSection/WhatsIncludedSection";
import WhyTakeAssessmentSection from "@/components/WhyTakeAssessmentSection/WhyTakeAssessmentSection";

export default function Home() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <LandingPage />
      </div>

      <WhatsIncludedSection />
      <WhyTakeAssessmentSection />
    </>
  );
}