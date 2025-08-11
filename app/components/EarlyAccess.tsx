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
      className="relative pt-10 sm:pt-14 pb-16 sm:pb-20 mx-4 sm:mx-8 lg:mx-14"
    >
      <div className="absolute inset-0 p-8 sm:p-12 lg:p-16">
        <Image
          src="/Images/bg-early-access.png"
          alt="Early access background"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-10 lg:px-12 lg:py-14">
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none">
          
        </div>
        
                <div className="relative mb-18 mx-auto max-w-7xl  rounded-[16px] sm:rounded-[20px] md:rounded-[22px] px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
          
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight font-manrope">
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
                    className="w-full h-14 px-6 border border-gray-300 rounded-xl bg-white  focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-base"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full text-base"
                  >
                    {earlyAccessContent.buttons.send}
                  </Button>

                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full text-base"
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

                 <div className="relative mx-2 max-w-6xl mt-8 sm:mt-20">
          <div className="flex justify-center gap-4 sm:gap-6 ">
            <div className="justify-space-between ml-[300px] mb-[30px]">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-22 text-gray-300 px-10 py-20">Blossom</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 px-10 py-20">Volume</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 px-10 py-20">Sitemark</span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 px-10 py-20">Hues</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
