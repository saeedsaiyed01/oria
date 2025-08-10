import Image from "next/image";
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

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
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
              <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white bg-[#484AF6] px-8 py-4 rounded-xl inline-block">
                {heroContent.title}
              </h1>
            </div>

            <div className="relative inline-block -mt-3">
              <p className="text-3xl sm:text-4xl lg:text-8xl text-white font-bold mt-8">
                {heroContent.subtitle}
              </p>

              <span
                aria-hidden
                className="absolute left-[-64px] top-[-32px] bottom-[-32px] w-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-64px] top-[-32px] bottom-[-32px] w-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-48px] right-[-48px] top-[-32px] h-[2px] bg-white"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-48px] right-[-48px] bottom-[-32px] h-[2px] bg-white"
              ></span>

              <span
                aria-hidden
                className="absolute left-[-76px] top-[-44px] w-6 h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-76px] top-[-44px] w-6 h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute left-[-76px] bottom-[-44px] w-6 h-6 bg-[#484AF6] rounded-sm"
              ></span>
              <span
                aria-hidden
                className="absolute right-[-76px] bottom-[-44px] w-6 h-6 bg-[#484AF6] rounded-sm"
              ></span>
            </div>
          </div>

          <div className="relative">
            <Image
              src={heroContent.smartphone.src}
              alt={heroContent.smartphone.alt}
              width={heroContent.smartphone.width}
              height={heroContent.smartphone.height}
              className="w-84 h-auto lg:w-[1047px] lg:h-[1047px]"
              priority
            />

            <div className="hidden mr-82  mt-42 lg:block absolute top-10 right-[-220px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg">
              <div className="text-white/80 text-sm mb-3">Coming Soon</div>
              <div className="grid grid-cols-4 gap-3">
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-white text-lg font-semibold">26</div>
                  <div className="text-white/70 text-[10px]">Days</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-white text-lg font-semibold">18</div>
                  <div className="text-white/70 text-[10px]">Hours</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-white text-lg font-semibold">53</div>
                  <div className="text-white/70 text-[10px]">Mins</div>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2 text-center">
                  <div className="text-white text-lg font-semibold">21</div>
                  <div className="text-white/70 text-[10px]">Sec</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8">
            <Button
              href={heroContent.primaryCTA.href}
              variant="yellow"
              size="lg"
              className="font-bold px-6 py-3 rounded-full text-lg mb-38"
            >
              {heroContent.primaryCTA.text}
            </Button>
          </div>

          <div className="absolute -bottom-14 right-6 sm:-bottom-12 sm:right-10 z-50">
            <Image
              src={heroContent.arrow.src}
              alt={heroContent.arrow.alt}
              width={heroContent.arrow.width}
              height={heroContent.arrow.height}
              className="w-[140px] h-auto sm:w-[180px] md:w-[220px] lg:w-[260px] rotate-[-8deg] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
    </section>
  );
}
