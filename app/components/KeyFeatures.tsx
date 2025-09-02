"use client";
import Image from "next/image";
import { useState } from "react";

const keyFeaturesContent = {
  header: "OUR KEY FEATURES",
  title: {
    line1: "Key Features to ",
    line2: "Master ATC",
    line3: "Communication",
  },
  description:
    "Master aviation communication with our advanced training platform designed for real-world scenarios.",
  feature: {
    title: {
      line1: "Real Time Voice",
      line4: "Recognition",
    },
    description:
      "Advanced AI analyzes your speech patterns and provides instant feedback on pronunciation, clarity, and communication effectiveness.",
    icon: "((o))",
  },
  background: {
    src: "/Images/keyFeaturebg.png",
    alt: "Key Features Background",
  },
  mobileImage: {
    src: "/Images/mobilephone2.png",
    alt: "Mobile Phone Scanning Interface",
  },
};

export default function KeyFeatures() {
  const slides = [
    {
      title1: keyFeaturesContent.feature.title.line1,
      title2: keyFeaturesContent.feature.title.line4,
      description: keyFeaturesContent.feature.description,
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
    {
      title1: "Context-Aware",
      title2: "Feedback",
      description:
        "Real‑time coaching adapts to intent and phraseology so you learn the right call at the right moment.",
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
    {
      title1: "Scenario-Based",
      title2: "Training",
      description:
        "Practice realistic ATC exchanges across weather, traffic, and airspace variations to build proficiency.",
      image: keyFeaturesContent.mobileImage.src,
      alt: keyFeaturesContent.mobileImage.alt,
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section
      id="key-features"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-24 sm:pb-32 md:pb-40 lg:pb-48 bg-white"
    >
      <div className="absolute inset-0">
        <Image
          src={keyFeaturesContent.background.src}
          alt={keyFeaturesContent.background.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-[#484AF6] text-xs sm:text-sm font-medium uppercase tracking-wider">
              {keyFeaturesContent.header}
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {keyFeaturesContent.title.line1}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                {keyFeaturesContent.title.line2}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#484AF6] leading-tight">
                {keyFeaturesContent.title.line3}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
              {keyFeaturesContent.description}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative scale-125 sm:scale-150 md:scale-[1.75] lg:scale-[2] xl:scale-[2.25] mr-5">
              <Image
                src={slides[current].image}
                alt={slides[current].alt}
                width={600}
                height={1200}
                className="w-[400px] sm:w-[450px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 bg-[#484AF6] rounded-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">
                {keyFeaturesContent.feature.icon}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {slides[current].title1}
              </h3>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                {slides[current].title2}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
              {slides[current].description}
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-12 h-12 bg-[#484AF6] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-12 h-12 bg-[#484AF6] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
