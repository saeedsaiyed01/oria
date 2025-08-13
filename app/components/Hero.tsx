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
    <section id="hero" className="relative min-h-screen  pb-0 ">
      <div className="absolute inset-0">
        <Image
          src={heroContent.background.pattern}
          alt="Background pattern"
          width={1800}
          height={1800}
          className="object-cover mb-10"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-2 sm:py-16">

            
        <div className="flex flex-col items-center text-center">
          
       
          <div className="relative mb-8 sm:mb-10 lg:mt-12 flex flex-col items-center">
          <div className="inline-block z-10 mt-[-120px] ">
               <h1 className=" text-4xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl font-bold text-white bg-[#484AF6] px-12 sm:px-6 md:px-8 py-2 sm:py-3 md:py-2 rounded-3xl inline-block">
                 {heroContent.title}
               </h1>
             </div>

            <div className="relative inline-block -mt-1 sm:-mt-2 md:-mt-3">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-8xl xl:text-8xl 2xl:text-8xl text-white font-bold mt-42 sm:mt-6 md:mt-8">
                {heroContent.subtitle}
              </p>

              
                                 <span
                   aria-hidden
                   className="absolute left-[-80px] sm:left-[-120px] md:left-[-160px] top-[-16px] sm:top-[-24px] md:top-[-32px] bottom-[-50px] sm:bottom-[-80px] md:bottom-[-120px] w-[1px] sm:w-[2px] bg-white"
                 ></span>
                 <span
                   aria-hidden
                   className="absolute right-[-80px] sm:right-[-120px] md:right-[-160px] top-[-16px] sm:top-[-24px] md:top-[-32px] bottom-[-50px] sm:bottom-[-80px] md:bottom-[-120px] w-[1px] sm:w-[2px] bg-white"
                 ></span>
                                 <span
                   aria-hidden
                   className="absolute left-[-80px] sm:left-[-120px] md:left-[-160px] right-[-80px] sm:right-[-120px] md:right-[-160px] top-[-16px] sm:top-[-24px] md:top-[-32px] h-[1px] sm:h-[2px] bg-white"
                 ></span>
                                   <span
                    aria-hidden
                    className="absolute left-[-80px] sm:left-[-120px] md:left-[-160px] right-[-80px] sm:right-[-120px] md:right-[-160px] bottom-[-50px] sm:bottom-[-80px] md:bottom-[-120px] h-[1px] sm:h-[2px] bg-white"
                  ></span>

                                 <span
                   aria-hidden
                   className="absolute left-[-90px] sm:left-[-130px] md:left-[-170px] top-[-20px] sm:top-[-32px] md:top-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
                 ></span>
                 <span
                   aria-hidden
                   className="absolute right-[-90px] sm:right-[-130px] md:right-[-170px] top-[-20px] sm:top-[-32px] md:top-[-44px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
                 ></span>
                                   <span
                    aria-hidden
                    className="absolute left-[-90px] sm:left-[-130px] md:left-[-170px] bottom-[-60px] sm:bottom-[-90px] md:bottom-[-130px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
                  ></span>
                  <span
                    aria-hidden
                    className="absolute right-[-90px] sm:right-[-130px] md:right-[-170px] bottom-[-60px] sm:bottom-[-90px] md:bottom-[-130px] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#484AF6] rounded-sm"
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

 
              <div className="hidden md:block mt-20  mr-60 absolute top-4 sm:top-6 md:top-8 lg:top-10 right-[-120px] sm:right-[-160px] md:right-[-180px] lg:right-[-220px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg">
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
                  className="font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg mb-38"
                >
                  {heroContent.primaryCTA.text}
                </Button>
              </div>

              <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 right-0 sm:right-2 md:right-4 lg:right-6 z-50">
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
