'use client'
import Image from 'next/image';
import Button from './Button';

const newsletterContent = {
  title: 'Subscribe to Our Newsletter',
  placeholder: 'Enter your email',
  button: {
    text: 'Subscribe',
    href: '#subscribe'
  },
  image: {
    src: '/Images/qr.jpg',
    alt: 'Smartphone scanning product barcode in retail environment'
  },
  background: {
    src: '/Images/subtract3.png',
    alt: 'Dark irregular shape background'
  }
};

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section id="newsletter" className="relative py-16 sm:py-24 bg-gray-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-xl bg-white">
          {/* Left panel */}
          <div className="relative bg-[#0D2030] text-white px-6 sm:px-8 md:px-12 py-10 sm:py-12 md:py-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 sm:mb-8">
              {newsletterContent.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row w-full max-w-xl items-stretch sm:items-center gap-3">
                <input
                  type="email"
                  placeholder={newsletterContent.placeholder}
                  className="flex-1 h-12 sm:h-14 px-4 sm:px-5 bg-white rounded-lg sm:rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#484AF6] focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 sm:h-14 px-6 sm:px-7 bg-[#484AF6] text-white font-semibold rounded-lg sm:rounded-xl"
                >
                  {newsletterContent.button.text}
                </Button>
              </div>
            </form>
          </div>

       
          <div className="relative min-h-[280px] sm:min-h-[360px] md:min-h-[440px] lg:min-h-[540px]">
            <Image
              src={newsletterContent.image.src}
              alt={newsletterContent.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
