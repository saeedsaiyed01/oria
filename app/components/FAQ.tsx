'use client'
import { useState } from 'react';
import Button from './Button';

const faqContent = {
  title: {
    line1: 'FAQ',
    line2: 's'
  },
  description: 'Find answers to commonly asked questions about our platform, features, and services. Can\'t find what you\'re looking for?',
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
      line1: 'Join Our',
      line2: 'Mobile App',
      line3: 'Today'
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
    <section id="faq" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
   
          <div className="space-y-6 sm:space-y-8">
      
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="text-gray-900">{faqContent.title.line1}</span>
                <span className="text-blue-600">{faqContent.title.line2}</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-md">
                {faqContent.description}
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
              >
                {faqContent.button.text}
              </Button>
            </div>
          </div>

          
          <div className="relative">
            <div className="relative rounded-[24px] border border-gray-200 shadow-sm p-8 lg:p-10 bg-white">
              <div className="space-y-8 max-w-xl">
                {/* Title */}
                <div className="space-y-2">
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {faqContent.mobileApp.title.line1}
                  </h3>
                  <h3 className="text-4xl sm:text-5xl font-bold text-blue-600">
                    {faqContent.mobileApp.title.line2}
                  </h3>
                  <h3 className="text-4xl sm:text-5xl font-bold text-gray-900">
                    {faqContent.mobileApp.title.line3}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {faqContent.mobileApp.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Email Form */}
                  <div className="space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={faqContent.mobileApp.placeholder}
                        className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                        required
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-xl"
                      >
                        {faqContent.mobileApp.button.text}
                      </Button>
                    </form>
                  </div>

                  {/* Countdown */}
                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                      {faqContent.mobileApp.countdown.title}
                    </h4>
                    <div className="grid grid-cols-4 gap-3">
                      {[{
                        label: 'Days', value: faqContent.mobileApp.countdown.days
                      }, {
                        label: 'Hours', value: faqContent.mobileApp.countdown.hours
                      }, {
                        label: 'Mins', value: faqContent.mobileApp.countdown.minutes
                      }, {
                        label: 'Sec', value: faqContent.mobileApp.countdown.seconds
                      }].map((item) => (
                        <div key={item.label} className="rounded-xl bg-white border border-gray-200 px-3 py-2 text-center shadow-sm">
                          <div className="text-xl font-semibold text-blue-600">{item.value}</div>
                          <div className="text-[11px] text-gray-600">{item.label}</div>
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
    </section>
  );
}
