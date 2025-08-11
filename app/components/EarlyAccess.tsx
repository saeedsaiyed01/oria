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
      <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 -top-20 sm:-top-24 lg:-top-32">
        <Image
          src="/Images/bg-early-access.png"
          alt="Early access background"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-4 lg:px-12 lg:py-6">
      
        <div className="relative mx-auto max-w-7xl bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[22px] px-8 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-14 md:py-16 lg:py-2 overflow-hidden mb-18">
          
    
          <div className="absolute inset-0  rounded-[16px] sm:rounded-[20px] md:rounded-[22px] pointer-events-none"></div>
          
       
          <div className="absolute bottom-0 left-0 w-[15%] h-[15%] bg-white pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            <div className="relative mr-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight">
                <span className="text-gray-900">
                  {earlyAccessContent.title.line1}
                </span>
                <br />
                <span className="text-[#484AF6]">
                  {earlyAccessContent.title.line2}
                </span>
              </h2>
            </div>

            <div className="space-y-8">
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

 
        <div className="relative mx-2 max-w-6xl mt-8 sm:mt-12 ml-88 space-between">
          <div className="flex justify-center gap-8 sm:gap-12 lg:gap-38">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">Blossom</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">Volume</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">Sitemark</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">Hues</span>
          </div>
        </div>
      </div>
    </section>
  );
}
