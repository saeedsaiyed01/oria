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
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white bg-[#484AF6] px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl inline-block">
                {heroContent.title}
              </h1>
            </div>

            <div className="relative inline-block -mt-1 sm:-mt-2 md:-mt-3">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white font-bold mt-4 sm:mt-6 md:mt-8">
                {heroContent.subtitle}
              </p>

            
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

            {/* Coming Soon card - responsive positioning */}
            <div className="hidden md:block absolute top-4 sm:top-6 md:top-8 lg:top-10 right-[-120px] sm:right-[-160px] md:right-[-180px] lg:right-[-220px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
              <div className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3">Coming Soon</div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                <div className="bg-white/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-center">
                  <div className="text-white text-sm sm:text-lg font-semibold">26</div>
                  <div className="text-white/70 text-[8px] sm:text-[10px]">Days</div>
                </div>
                <div className="bg-white/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-center">
                  <div className="text-white text-sm sm:text-lg font-semibold">18</div>
                  <div className="text-white/70 text-[8px] sm:text-[10px]">Hours</div>
                </div>
                <div className="bg-white/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-center">
                  <div className="text-white text-sm sm:text-lg font-semibold">53</div>
                  <div className="text-white/70 text-[8px] sm:text-[10px]">Mins</div>
                </div>
                <div className="bg-white/10 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-center">
                  <div className="text-white text-sm sm:text-lg font-semibold">21</div>
                  <div className="text-white/70 text-[8px] sm:text-[10px]">Sec</div>
                </div>
              </div>
            </div>
          </div>

        
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8">
            <Button
              href={heroContent.primaryCTA.href}
              variant="yellow"
              size="lg"
              className="font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg"
            >
              {heroContent.primaryCTA.text}
            </Button>
          </div>

          <div className="absolute -bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-14 right-4 sm:right-6 md:right-8 lg:right-10 z-50">
            <Image
              src={heroContent.arrow.src}
              alt={heroContent.arrow.alt}
              width={heroContent.arrow.width}
              height={heroContent.arrow.height}
              className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] xl:w-[240px] 2xl:w-[260px] h-auto rotate-[-8deg] drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
    </section>
  );
}
