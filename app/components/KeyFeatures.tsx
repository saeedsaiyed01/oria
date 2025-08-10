import Image from "next/image";

const keyFeaturesContent = {
  header: "OUR KEY FEATURES",
  title: {
    line1: "Key Features to Master ATC",
    line2: "Communication",
  },
  description:
    "Master aviation communication with our advanced training platform designed for real-world scenarios.",
  feature: {
    title: "Real-Time Voice Recognition",
    description:
      "Advanced AI analyzes your speech patterns and provides instant feedback on pronunciation, clarity, and communication effectiveness.",
    icon: "((o))",
  },
  background: {
    src: "/Images/Subtract2.png",
    alt: "Key Features Background",
  },
  mobileImage: {
    src: "/Images/mobilephone1.png",
    alt: "Mobile Phone Scanning Interface",
  },
};

export default function KeyFeatures() {
  return (
    <section
      id="key-features"
      className="relative py-16 sm:py-24 bg-white min-h-screen"
    >
      <div className="absolute inset-0">
        <Image
          src={keyFeaturesContent.background.src}
          alt={keyFeaturesContent.background.alt}
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>

      <div className="absolute top-0 left-1/2 w-px h-full bg-gray-200 transform -translate-x-1/2"></div>
      <div className="absolute top-0 left-1/2 w-full h-px bg-gray-200 transform -translate-x-1/2 rotate-45 origin-top-left"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-[#484AF6] text-xs sm:text-sm font-medium uppercase tracking-wider">
              {keyFeaturesContent.header}
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                {keyFeaturesContent.title.line1}
              </h2>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#484AF6]">
                {keyFeaturesContent.title.line2}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {keyFeaturesContent.description}
            </p>
          </div>

          <div className="flex justify-center lg:col-span-1">
            <div className="relative lg:-mt-8">
              <Image
                src={keyFeaturesContent.mobileImage.src}
                alt={keyFeaturesContent.mobileImage.alt}
                width={680}
                height={1000}
                className="w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] xl:w-[680px] 2xl:w-[820px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#484AF6] rounded-full flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl font-bold">
                {keyFeaturesContent.feature.icon}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {keyFeaturesContent.feature.title}
            </h3>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {keyFeaturesContent.feature.description}
            </p>

            <div className="flex space-x-3 sm:space-x-4 pt-4">
              <button className="w-12 h-12 bg-[#484AF6] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
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
              <button className="w-12 h-12 bg-[#484AF6] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
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

      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-gray-300 rounded-br-full"></div>
    </section>
  );
}
