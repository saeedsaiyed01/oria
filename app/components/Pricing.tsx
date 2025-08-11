"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

const pricingContent = {
  title: {
    line1: "Your",
    line2: "Membership Starts",
    line3: " Here",
  },
  toggle: {
    paid: "Paid",
    free: "Free",
  },
  button: {
    text: "View All",
    href: "#pricing",
  },
  plans: [
    {
      id: 1,
      name: "Starter Plan",
      description: "Early access, special offers, and more just for members",
      price: {
        paid: "$199",
        free: "$0",
      },
      period: "/month",
      buttons: [
        {
          text: "Get Started",
          variant: "outline",
        },
        {
          text: "Read More",
          variant: "primary",
        },
      ],
      background: "dark",
    },
    {
      id: 2,
      name: "Pro Plan",
      description: "Experience more with your membership",
      price: {
        paid: "$499",
        free: "$0",
      },
      period: "/month",
      buttons: [
        {
          text: "Discover more",
          variant: "dark",
        },
        {
          text: "Read More",
          variant: "primary",
        },
      ],
      background: "light",
    },
  ],
};

export default function Pricing() {
  const [isPaid, setIsPaid] = useState(true);

  const getButtonClass = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "outline":
        return "bg-blue-600 text-black border border-gray-300 ";
      case "dark":
        return "bg-gray-900 hover:bg-gray-800 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  return (
    <section className="relative py-16 sm:py-24 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/Images/membershipSub.png"
          alt="Membership background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-gray-900">
                {pricingContent.title.line1}
              </span>{" "}
              <span className="text-blue-600">
                {pricingContent.title.line2}
              </span>
              <br />
              <span className="text-gray-900">
                {pricingContent.title.line3}
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center bg-white rounded-xl p-1 shadow-md mx-auto ml-10">
              <button
                onClick={() => setIsPaid(false)}
                className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                  !isPaid
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-gray-900 border border-gray-300"
                }`}
              >
                {pricingContent.toggle.free}
              </button>
              <button
                onClick={() => setIsPaid(true)}
                className={`px-6 py-2 rounded-xl font-medium transition-colors ${
                  isPaid
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:text-gray-900 border border-gray-300"
                }`}
              >
                {pricingContent.toggle.paid}
              </button>
            </div>

            <Button
              href={pricingContent.button.href}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg"
            >
              {pricingContent.button.text}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {pricingContent.plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-12 shadow-xl relative overflow-hidden min-h-[500px] ${
                plan.background === "dark"
                  ? "text-white"
                  : " text-gray-900"
              }`}
            >
              {plan.background === "dark" && (
                <div className="absolute inset-0">
                  <Image
                    src="/Images/final1stcard.png"
                    alt="Dark card background"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {plan.background === "light" && (
                <div className="absolute bottom-4 right-4 text-gray-100 text-6xl font-bold opacity-20">
                  ORA
                </div>
              )}

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <span
                    className={`inline-block px-6 py-3 rounded-full text-base font-medium ${
                      plan.background === "dark"
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </span>
                </div>

                <p className="text-center mb-10 text-xl">{plan.description}</p>

                <div className="text-center mb-10">
                  <div className="text-6xl sm:text-7xl font-bold mb-3">
                    {isPaid ? plan.price.paid : plan.price.free}
                  </div>
                  <div className="text-xl opacity-80">{plan.period}</div>
                </div>

                <div className="flex gap-6">
                  {plan.buttons.map((button, index) => (
                    <Button
                      key={index}
                      href="#"
                      size="lg"
                      className={`flex-1 font-bold px-6 py-3 rounded-lg transition-colors ${getButtonClass(
                        button.variant
                      )}`}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 1 ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
