import Image from "next/image";
import Button from "./Button";

const blogContent = {
  header: "BLOG",
  title: {
    line1: "Aviation Training",
    line2: "Blog",
  },
  description:
    "Stay updated with the latest tips, techniques, and insights from aviation professionals and training experts.",
  featuredPost: {
    category: "Safety",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    title: "Common ATC Communication Mistakes and How to Avoid Them",
    summary:
      "Discover the most frequent communication errors pilots make and practical strategies to prevent them in your training.",
    author: "By Michael Rodriguez",
    image: {
      src: "/Images/aeroplan.jpg",
      alt: "Airplane wing over clouds",
    },
  },
  button: {
    text: "View All",
    href: "#blog",
  },
};

export default function Blog() {
  return (
    <section id="blog" className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <div className="space-y-6 lg:flex-1 lg:pr-12">
            <div className="text-blue-600 text-sm font-medium uppercase tracking-wider">
              {blogContent.header}
            </div>

            <div className="space-y-2 flex gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                {blogContent.title.line1}
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">
                {blogContent.title.line2}
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              {blogContent.description}
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <Button
              href={blogContent.button.href}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg"
            >
              {blogContent.button.text}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-[-22px]">
          <div className="space-y-6">
            <div className="relative">
              <Image
                src={blogContent.featuredPost.image.src}
                alt={blogContent.featuredPost.image.alt}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-lg"
                priority
              />
            </div>

            <div className="flex justify-center space-x-4">
              <button className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
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
              <button className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
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

          <div className="space-y-6">
            <div className="flex justify-end">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-sm font-medium mr-128">
                {blogContent.featuredPost.category}
              </span>
            </div>

            <div className="flex items-center space-x-6 text-gray-600 text-sm">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{blogContent.featuredPost.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{blogContent.featuredPost.readTime}</span>
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {blogContent.featuredPost.title}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed">
              {blogContent.featuredPost.summary}
            </p>

            <p className="text-gray-600 font-medium">
              {blogContent.featuredPost.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
