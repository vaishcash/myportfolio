"use client";

import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

import { cn } from "@/utils/cn";

const greetings = [
  { text: "Hello", lang: "en", font: "'Inter', sans-serif" },
  { text: "你好", lang: "zh", font: "'Noto Sans SC', sans-serif" },
  { text: "مرحباً", lang: "ar", font: "'Noto Sans Arabic', sans-serif" },
  { text: "こんにちは", lang: "ja", font: "'Noto Sans JP', sans-serif" },
  { text: "नमस्ते", lang: "hi", font: "'Noto Sans Devanagari', sans-serif" },
  { text: "Здравствуйте", lang: "ru", font: "'Noto Sans', sans-serif" },
  { text: "안녕하세요", lang: "ko", font: "'Noto Sans KR', sans-serif" },
  { text: "¡Hola!", lang: "es", font: "'Inter', sans-serif" },
];

export function AnimatedGreeting() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % greetings.length);
        setIsAnimating(false);
      }, 200); // Half of the transition time
    }, 800); // Total time for each greeting

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={cn(
          "text-center text-7xl max-sm:text-4xl font-bold transition-all duration-500 text-primary",
          isAnimating
            ? "opacity-0 transform translate-y-8"
            : "opacity-100 transform translate-y-0"
        )}
        style={{
          fontFamily: greetings[currentIndex].font,
          direction: greetings[currentIndex].lang === "ar" ? "rtl" : "ltr",
        }}
        lang={greetings[currentIndex].lang}
      >
        <FaCircle className="inline-block text-purple-700" size={30} />
        <span className="inline-block mx-6">
          {greetings[currentIndex].text}
        </span>
      </div>
    </div>
  );
}
