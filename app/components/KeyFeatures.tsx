import Image from "next/image";

const keyFeaturesContent = {
  header: "OUR KEY FEATURES",
  title: {
    line1: "Key Features to ",
    line2: "Master ATC",
    line3: "Communication",
  },
  description:
    "Master aviation communication with our advanced training platform designed for real-world scenarios.",
  feature: {
    title: {
      line1: "Real Time Voice",
      line4: "Recognition",
    },
    description:
      "Advanced AI analyzes your speech patterns and provides instant feedback on pronunciation, clarity, and communication effectiveness.",
    icon: "((o))",
  },
  background: {
    src: "/Images/keyFeaturebg.png",
    alt: "Key Features Background",
  },
  mobileImage: {
    src: "/Images/mobilephone2.png",
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
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-[#484AF6] text-xs sm:text-sm font-medium uppercase tracking-wider">
              {keyFeaturesContent.header}
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {keyFeaturesContent.title.line1}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                {keyFeaturesContent.title.line2}
              </h2>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#484AF6] leading-tight">
                {keyFeaturesContent.title.line3}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              {keyFeaturesContent.description}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src={keyFeaturesContent.mobileImage.src}
                alt={keyFeaturesContent.mobileImage.alt}
                width={900}
                height={1500}
                className="w-[1000px] sm:w-[1200px] md:w-[1600px] lg:w-[2200px] xl:w-[2400px] 2xl:w-[2600px] h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="w-16 h-16 bg-[#484AF6] rounded-full flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">
                {keyFeaturesContent.feature.icon}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {keyFeaturesContent.feature.title.line1}
              </h3>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
                {keyFeaturesContent.feature.title.line4}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              {keyFeaturesContent.feature.description}
            </p>

            <div className="flex space-x-4 pt-4">
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
    </section>
  );
}
