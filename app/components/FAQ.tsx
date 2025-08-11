'use client'
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

const faqContent = {
  title: {
    line1: 'FAQ',
    line2: 's'
  },
  questions: [
    {
      id: 1,
      question: 'What is included in the free trial?',
      answer: 'Our free trial includes full access to all training modules, AI-powered feedback, and mobile app features for 14 days.'
    },
    {
      id: 2,
      question: 'How does the AI-powered training work?',
      answer: 'Our AI analyzes your communication patterns, provides real-time feedback, and adapts training content to your specific needs.'
    },
    {
      id: 3,
      question: 'Can I use this for different types of aircraft?',
      answer: 'Yes, our platform supports training for various aircraft types including commercial, private, and military aviation.'
    },
    {
      id: 4,
      question: 'Is there mobile app support?',
      answer: 'Absolutely! Our mobile app is available for iOS and Android with full offline capabilities and seamless sync.'
    },
    {
      id: 5,
      question: 'What support options are available?',
      answer: 'We offer 24/7 customer support via chat, email, and phone, plus comprehensive documentation and video tutorials.'
    }
  ],
  button: {
    text: 'Contact Support',
    href: '#support'
  },
  mobileApp: {
    title: {
      line1: 'Join Our Mobile App',
      line2: 'Today',
    },
    description: 'Get the most out of We Tell Facts with our mobile app. Practice anywhere, anytime with offline capabilities and seamless sync across all your devices.',
    placeholder: 'Enter your email',
    button: {
      text: 'Notify me',
      href: '#notify'
    },
    countdown: {
      title: 'App Launch Countdown',
      days: 26,
      hours: 18,
      minutes: 53,
      seconds: 21
    },
    background: {
      src: '/Images/Feature Section.png',
      alt: 'White speech bubble background'
    }
  }
};

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const handleQuestionToggle = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
  };

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-white mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
   
          <div className="space-y-6 sm:space-y-8">
      
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="text-gray-900">{faqContent.title.line1}</span>
                <span className="text-blue-600">{faqContent.title.line2}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
  Find answers to commonly asked questions about our platform, features, and services. Can&apos;t find what you&apos;re looking for?
</p>

            </div>

          
            <div className="space-y-4">
              {faqContent.questions.map((item) => (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => handleQuestionToggle(item.id)}
                    className="w-full flex justify-between items-center text-left py-4 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-lg font-medium text-gray-900">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        openQuestion === item.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openQuestion === item.id && (
                    <div className="mt-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

           
            <div className="pt-8">
              <Button
                href={faqContent.button.href}
                size="lg"
                className="bg-indigo-600 hover:bg-blue-700 font-bold px-8 py-4 rounded-lg text-lg"
              >
                {faqContent.button.text}
              </Button>th
            </div>
          </div>

          
                    <div className="relative">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 mt-[38px]">
                <Image
                  src="/Images/joinmobileBG.png"
                  alt="Mobile app background"
                  width={6200}
                  height={6200}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative z-10 p-8 lg:p-10">
                <div className="space-y-8 max-w-full">
                  <div className="space-y-2 text-left mt-[-2px]">
                    <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {faqContent.mobileApp.title.line1}
                    </h3>
                    <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
                      {faqContent.mobileApp.title.line2}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed text-left">
                    {faqContent.mobileApp.description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="space-y-4">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={faqContent.mobileApp.placeholder}
                          className="w-full mt-0 h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                          required
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="w-32 bg-indigo-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl"
                        >
                          {faqContent.mobileApp.button.text}
                        </Button>
                      </form>
                    </div>

                    <div className='mt-[-32px]'>
                    <div className="rounded-xl border border-gray-200 bg-purple-50 p-3 mb-[100px]">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">
                        {faqContent.mobileApp.countdown.title}
                      </h4>
                      <div className="grid grid-cols-4 gap-2">
                        {[{
                          label: 'Days', value: faqContent.mobileApp.countdown.days
                        }, {
                          label: 'Hours', value: faqContent.mobileApp.countdown.hours
                        }, {
                          label: 'Mins', value: faqContent.mobileApp.countdown.minutes
                        }, {
                          label: 'Sec', value: faqContent.mobileApp.countdown.seconds
                        }].map((item) => (
                          <div key={item.label} className="rounded-lg bg-purple-50 border border-blue-300 px-2 py-1 text-center">
                            <div className="text-lg font-semibold text-blue-600">{item.value}</div>
                            <div className="text-[10px] text-gray-600">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
