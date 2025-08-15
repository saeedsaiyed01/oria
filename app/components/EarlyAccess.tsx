"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const earlyAccessContent = {
  title: {
    line1: "Get Early",
    line2: "Access",
  },
  description:
    "Be among the first 100 pilots to experience revolutionary training.",
  placeholder: "Enter your email",
  buttons: {
    send: "Send",
    notify: "Notify me",
  },
};

export default function EarlyAccess() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section
      id="early-access"
      className="relative pt-0 pb-16 sm:pb-20 mx-4 sm:mx-8 lg:mx-6 mt-10"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-4 sm:-top-6 lg:-top-8 w-[99%] sm:w-[96%] lg:w-[90%] h-[320px] sm:h-[380px] lg:h-[440px] z-0 pointer-events-none">
        <Image
          src="/Images/bg-early-access.png"
          alt="Early access background"
          fill
          className="object-contain object-top"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 py-3 lg:px-6 lg:py-4">
        <div className="relative mx-auto max-w-4xl bg-white border border-gray-200 rounded-[16px] sm:rounded-[20px] md:rounded-[22px] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 py-6 sm:py-8 md:py-8 lg:py-8 overflow-hidden">
          <div className="absolute inset-0  rounded-[16px] sm:rounded-[20px] md:rounded-[22px] pointer-events-none"></div>

          <div className="absolute bottom-0 left-0 w-[15%] h-[15%] bg-white pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 items-center">
            <div className="relative mr-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">
                  {earlyAccessContent.title.line1}
                </span>
                <br />
                <span className="text-[#484AF6]">
                  {earlyAccessContent.title.line2}
                </span>
              </h2>
            </div>

            <div className="space-y-8 max-w-[560px]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="pt-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={earlyAccessContent.placeholder}
                    className="w-full h-14 px-6 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-base"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#484AF6] hover:bg-[#3A3AE6] text-white font-medium px-6 py-3 rounded-full text-base"
                  >
                    {earlyAccessContent.buttons.send}
                  </Button>

                  <Button
                    size="lg"
                    className="bg-[#484AF6] hover:bg-[#3A3AE6] text-white font-medium px-6 py-3 rounded-full text-base"
                  >
                    {earlyAccessContent.buttons.notify}
                  </Button>
                </div>
              </form>

              <p className="text-gray-600 text-base">
                {earlyAccessContent.description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-8 max-w-6xl mt-4 sm:mt-6 lg:mt-12 ml-28 sm:ml-44 lg:ml-64">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="pointer-events-none absolute -left-4 -top-6 w-40 h-24 z-10 corner-fade-left" />
            <div className="flex items-center gap-16 sm:gap-24 whitespace-nowrap animate-marquee will-change-transform pl-28 sm:pl-44 lg:pl-56">
              {["Blossom", "Volume", "Sitemark", "Hues"].map((name, i) => (
                <span
                  key={`m1-${i}`}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900"
                >
                  {name}
                </span>
              ))}
              {["Blossom", "Volume", "Sitemark", "Hues"].map((name, i) => (
                <span
                  key={`m2-${i}`}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900"
                  aria-hidden="true"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
