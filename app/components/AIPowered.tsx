import Image from 'next/image';
import Button from './Button';

const aiPoweredContent = {
  header: 'NEXT-GEN AVIATION TECH',
  title: {
    line1: 'AI-Powered',
    line2: 'Communication Training'
  },
  subtitle: 'Neural Speech Processing',
  description: 'Advanced AI understands context, accent, and intent in real-time communication',
  supportingText: 'Revolutionary machine learning algorithms analyze real ATC patterns to create the most realistic training environment ever built.',
  buttons: {
    readMore: 'Read More',
    viewAll: 'View All'
  },
  image: {
    src: '/Images/ai-powered-image.jpg',
    alt: 'AI-Powered Communication Training'
  }
};

export default function AIPowered() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#F5F7FB] overflow-hidden">
     
      <div className="absolute inset-x-2 top-4 bottom-4 bg-white rounded-[32px]"></div>
      

     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-8 sm:pt-12">
         
          <div className="space-y-8">
           
            <div className="text-[#484AF6] text-sm font-medium uppercase tracking-wider">
              {aiPoweredContent.header}
            </div>

            
            <div className="space-y-2">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                {aiPoweredContent.title.line1}
              </h2>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#484AF6]">
                {aiPoweredContent.title.line2}
              </h2>
            </div>

            
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {aiPoweredContent.subtitle}
            </h3>

          
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              {aiPoweredContent.description}
            </p>

         
            <div className="pt-4">
              <Button
                href="#read-more"
                size="lg"
                className="bg-[#484AF6] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
              >
                {aiPoweredContent.buttons.readMore}
              </Button>
            </div>
          </div>

         
          <div className="space-y-8 relative">
            {/* Supporting Text */}
            <p className="text-lg text-gray-600 leading-relaxed text-right">
              {aiPoweredContent.supportingText}
            </p>

          
            <div className="relative lg:ml-auto lg:w-[560px]">
              <Image
                src={aiPoweredContent.image.src}
                alt={aiPoweredContent.image.alt}
                width={680}
                height={520}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

           
            <div className="flex justify-end">
              <Button
                href="#view-all"
                size="lg"
                className="bg-[#484AF6] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
              >
                {aiPoweredContent.buttons.viewAll}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
