"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Button from "./Button";

const heroContent = {
  title: "WTF",
  subtitle: "We Tell Facts",
  description:
    "Revolutionary training platform that provides accurate, verified information through advanced scanning technology.",
  primaryCTA: {
    text: "Join the waitlist",
    href: "#waitlist",
  },
  smartphone: {
    src: "/Images/landingmain.png",
    alt: "WTF App on Smartphone",
    width: 600,
    height: 600,
  },
  background: {
    pattern: "/Images/Subtract.png",
    overlay: "/Images/Group.png",
    alt: "Background pattern",
  },
  arrow: {
    src: "/Images/arrow.png",
    alt: "Scroll down arrow",
    width: 60,
    height: 60,
  },
};

type TimeParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeParts(targetMs: number): TimeParts {
  const now = Date.now();
  const diffMs = Math.max(0, targetMs - now);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function TimeCell({ label, value }: { label: string; value: number }) {
  const formatted = value.toString().padStart(2, "0");

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-3 text-center border border-white/20">
      <div className="text-white text-xl font-bold leading-tight mb-1">
        {formatted}
      </div>
      <div className="text-white/70 text-sm font-medium">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const targetTime = useMemo(() => {
    // Set your launch target here (UTC). Adjust as needed.
    return new Date("2025-12-31T00:00:00Z").getTime();
  }, []);

  const [time, setTime] = useState<TimeParts>(() => getTimeParts(targetTime));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeParts(targetTime));
    }, 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pb-0">
      <div className="absolute inset-0">
        <Image
          src={heroContent.background.pattern}
          alt="Background pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroContent.background.overlay}
          alt="Background overlay"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 sm:mb-10 lg:mb-12 flex flex-col items-center">
            <div className="inline-block z-10">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white bg-[#484AF6] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl inline-block">
                {heroContent.title}
              </h1>
            </div>

            <div className="relative inline-block -mt-1 sm:-mt-2 md:-mt-3">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white font-bold mt-4 sm:mt-6 md:mt-8">
                {heroContent.subtitle}
              </p>

              {/* Frame lines */}
              <span
                aria-hidden
                className="absolute left-[-32px] sm:left-[-48px] md:left-[-64px] top-[-16px] sm:top-[-24px] md:top-[-32px] bottom-[-16px] sm:bottom-[-24px] md:bottom-[-32px] w-[1px] sm:w-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-32px] sm:right-[-48px] md:right-[-64px] top-[-16px] sm:top-[-24px] md:top-[-32px] bottom-[-16px] sm:bottom-[-24px] md:bottom-[-32px] w-[1px] sm:w-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-24px] sm:left-[-36px] md:left-[-48px] right-[-24px] sm:right-[-36px] md:right-[-48px] top-[-16px] sm:top-[-24px] md:top-[-32px] h-[1px] sm:h-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-24px] sm:left-[-36px] md:left-[-48px] right-[-24px] sm:right-[-36px] md:right-[-48px] bottom-[-16px] sm:bottom-[-24px] md:bottom-[-32px] h-[1px] sm:h-[2px] bg-white"
              ></span>

              {/* Corner markers */}
              <span
                aria-hidden
                className="absolute left-[-40px] sm:left-[-56px] md:left-[-76px] top-[-20px] sm:top-[-32px] md:top-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-40px] sm:right-[-56px] md:right-[-76px] top-[-20px] sm:top-[-32px] md:top-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-40px] sm:left-[-56px] md:left-[-76px] bottom-[-20px] sm:bottom-[-32px] md:bottom-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-40px] sm:right-[-56px] md:right-[-76px] bottom-[-20px] sm:bottom-[-32px] md:bottom-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
              ></span>
            </div>
          </div>

          <div className="relative">
            <Image
              src={heroContent.smartphone.src}
              alt={heroContent.smartphone.alt}
              width={heroContent.smartphone.width}
              height={heroContent.smartphone.height}
              className="w-64 sm:w-80 md:w-96 lg:w-[600px] xl:w-[800px] 2xl:w-[1047px] h-auto"
              priority
            />
            
            {/* Coming Soon overlay - positioned to the right of the phone */}
            <div className="absolute top-[40%] left-[55%] transform -translate-y-1/2 bg-black/40 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl border border-white/10 min-w-[280px]">
              <div className="text-white/90 text-lg font-semibold mb-4 text-center">
                Coming Soon
              </div>
              <div className="grid grid-cols-4 gap-3">
                <TimeCell label="Days" value={time.days} />
                <TimeCell label="Hours" value={time.hours} />
                <TimeCell label="Mins" value={time.minutes} />
                <TimeCell label="Sec" value={time.seconds} />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
            <Button
              href={heroContent.primaryCTA.href}
              variant="yellow"
              size="lg"
              className="font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl md:text-2xl transform hover:scale-105 transition-all duration-200 drop-shadow-lg mb-30"
            >
              {heroContent.primaryCTA.text}
            </Button>
          </div>

          <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 right-0 sm:right-2 md:right-4 lg:right-6 z-10 pointer-events-none">
            <Image
              src={heroContent.arrow.src}
              alt={heroContent.arrow.alt}
              width={heroContent.arrow.width}
              height={heroContent.arrow.height}
              className="w-[150px] mr-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] h-auto rotate-[-10deg] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-60 md:h-80 lg:h-72 bg-gradient-to-b from-transparent via-white/70 to-white"></div>
    </section>
  );
}