"use client";
import Image from "next/image";
import Button from "./Button";

const newsletterContent = {
  title: "Subscribe to Our",
  title2: "Newsletter",
  placeholder: "Enter your email",
  button: {
    text: "Subscribe",
    href: "#subscribe",
  },
  image: {
    src: "/Images/qr.jpg",
    alt: "Smartphone scanning product barcode in retail environment",
  },
  background: {
    src: "/Images/subtract3.png",
    alt: "Dark irregular shape background",
  },
};

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section
      id="newsletter"
      className="relative py-16 sm:py-24 overflow-hidden rounded-3xl"
    >
      <div className="absolute inset-0">
        <Image
          src="/Images/subtract3.png"
          alt="Newsletter background"
          width={1500}
          height={1500}
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ml-auto mr-0 overflow-hidden rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden">
          <div className="relative text-white px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-14 mb-38 mr-10 flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 text-start">
              {newsletterContent.title}
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 text-start">
              {newsletterContent.title2}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row w-full max-w-xl items-stretch sm:items-start gap-3">
                <input
                  type="email"
                  placeholder={newsletterContent.placeholder}
                  className="flex-1 h-12 sm:h-14 px-4 sm:px-5 bg-[#F0F2F5] rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#5B42F3] focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-7 bg-indigo-600 text-white font-semibold rounded-lg sm:rounded-xl"
                >
                  {newsletterContent.button.text}
                </Button>
              </div>
            </form>
          </div>

          <div className="flex justify-start items-center">
            <div className="relative w-[705px] h-full min-h-[500px] lg:min-h-[300px] mb-42 ">
              <Image
                src="/Images/qr.jpg"
                alt="Smartphone scanning product barcode in retail environment"
                fill
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
