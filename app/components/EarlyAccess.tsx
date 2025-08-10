"use client";

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
      className="relative pt-10 sm:pt-14 pb-16 sm:pb-20 mx-4 sm:mx-8 lg:mx-14 bg-white"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-10 lg:px-12 lg:py-14">
        <div className="relative mx-auto max-w-7xl bg-white border border-gray-200 rounded-[16px] sm:rounded-[20px] md:rounded-[22px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">
                  {earlyAccessContent.title.line1}
                </span>
                <br />
                <span className="text-[#484AF6]">
                  {earlyAccessContent.title.line2}
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={earlyAccessContent.placeholder}
                    className="w-full h-12 px-5 border border-gray-300 rounded-xl bg-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full text-sm"
                  >
                    {earlyAccessContent.buttons.send}
                  </Button>

                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full text-sm"
                  >
                    {earlyAccessContent.buttons.notify}
                  </Button>
                </div>
              </form>

              <p className="text-gray-600 text-sm">
                {earlyAccessContent.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">Blossom</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">Volume</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-500">Sitemark</span>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">Hues</span>
        </div>
      </div>
    </section>
  );
}
