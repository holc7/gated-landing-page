'use client';

import Navbar from "@/components/Navbar/Navbar";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        backgroundImage:
          "radial-gradient(circle, #d1e9f9 2.5px, transparent 2.5px), radial-gradient(circle, #d1e9f9 2.5px, transparent 2.5px)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
        position: "relative",
        padding: "0",
      }}
    >
      <Navbar />
      <LandingPage />
    </div>
  );
}