"use client";

import { useEffect, useState } from "react";
import AboutMe from "@/components/About";
import Experiences from "@/components/Experiences";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { AnimatedGreeting } from "@/components/AnimatedGreeting"; // Import your animated greeting

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <AnimatedGreeting /> {/* Show animation while loading */}
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutMe />
          <Experiences />
        </>
      )}
    </>
  );
}
