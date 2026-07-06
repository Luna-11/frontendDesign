"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Frontend showcase content mapping flawlessly into the grid geometry
const featuresGrid = [
  {
    type: "text",
    title: "Responsive Web Layouts",
    description: "Crafting fluid, container-first web structures that deliver seamless user experiences across mobile, desktop, and ultra-wide screens using modern CSS techniques.",
    bgClass: "bg-white",
    textColor: "text-gray-900"
  },
  {
    type: "image",
    image: "/image/pic1.jpg",
    alt: "Modern responsive web interface mockup"
  },
  {
    type: "image",
    image: "/image/pic2.jpg",
    alt: "Clean minimal workspace showcasing code execution"
  },
  {
    type: "text",
    title: "Interactive UI Micro-interactions",
    description: "Bringing web interfaces to life using fine-tuned hardware-accelerated transitions, gesture controls, and purposeful scroll animations with Framer Motion.",
    bgClass: "bg-slate-500",
    textColor: "text-white"
  },
  {
    type: "text",
    title: "Performance & SEO Analytics",
    description: "Optimizing Core Web Vitals to achieve lightning-fast performance scores, optimal server-side rendering, and production-grade search optimization with Next.js.",
    bgClass: "bg-[#111625]",
    textColor: "text-white"
  },
  {
    type: "image",
    image: "/image/pic3.jpg",
    alt: "Abstract tech graphics showcasing user workflow layout"
  }
];

// Sample Projects Slideshow Data
const showcaseProjects = [
  {
    id: 1,
    title: "Travel & Tour Platform",
    description: "Immersive travel booking experience with dynamic itineraries and destination showcases",
    image: "/image/travel1.jpg",
    category: "Travel & Tourism"
  },
  {
    id: 2,
    title: "Event Planner Dashboard",
    description: "Comprehensive event management system with real-time collaboration and scheduling",
    image: "/image/event-planner.jpg",
    category: "Event Management"
  },
  {
    id: 3,
    title: "Adventure Travel Explorer",
    description: "Curated adventure tours with interactive maps and personalized recommendations",
    image: "/image/travel2.jpg",
    category: "Travel & Tourism"
  }
];

// Tech stack / Client logo ticker names
const techStackLogos = ["NEXT.JS", "TAILWIND CSS", "TYPESCRIPT", "FRAMER MOTION", "ESLINT", "GIT", "Vercel"];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseProjects.length);
  };

  return (
    <main className="bg-[#fcfbfa] text-gray-900 min-h-screen font-sans antialiased">
      {/* Header Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-sm">
        <div className="font-bold text-lg tracking-tight text-[#111625]">frontend.showcase</div>
        <nav className="hidden md:flex items-center gap-8 text-gray-600">
          <a href="#" className="hover:text-black font-medium">Showcase</a>
          <a href="#" className="hover:text-black">Stack</a>
          <a href="#" className="hover:text-black">Architecture</a>
          <a href="#" className="hover:text-black">Performance</a>
          <a href="#" className="hover:text-black">Case Studies</a>
          <a href="#" className="hover:text-black">Resources ▾</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-black">Contact</button>
          <button className="bg-[#111625] text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-opacity-90 transition">
            <a href="https://github.com/Luna-11">View on GitHub</a>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center relative">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-1 rounded-md font-medium">
          Frontend Showcase v3.0
        </span>

        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-[#111625] mt-6 max-w-2xl mx-auto leading-[1.15]">
          Modern Frontend<br />Engineering Excellence
        </h1>

        <p className="mt-4 text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Explore production-ready UI components,<br />
          performance-optimized architectures, and design systems.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs">
          <button className="px-6 py-3 bg-[#111625] text-white rounded-full hover:bg-opacity-90 transition font-medium">
            Explore Showcase
          </button>
          <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full hover:bg-gray-50 transition font-medium">
            View Tech Stack
          </button>
        </div>

        {/* Social Proof / Metrics Badges */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[8px] font-bold text-slate-500">TS</div>
            <div className="w-6 h-6 rounded-full bg-slate-300 border border-white flex items-center justify-center text-[8px] font-bold text-slate-600">N9</div>
            <div className="w-6 h-6 rounded-full bg-slate-400 border border-white flex items-center justify-center text-[8px] font-bold text-white">TW</div>
          </div>
          <span className="ml-1">★★★★★ Production-grade code with 99% Core Web Vitals score</span>
        </div>
      </section>

      {/* Floating Mockup Dashboard Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 min-h-112.5 bg-slate-100">
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/pic9.jpg"
              alt="Modern workspace with coding setup"
              fill
              sizes="(max-w-1200px) 100vw, 1200px"
              className="object-cover object-center"
              priority
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-4 p-6 pt-40 md:pt-60 bg-linear-to-t from-black/40 via-black/5 to-transparent">
            {/* Card 1: Development Status Metrics */}
            <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl text-xs space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#111625] text-white flex items-center justify-center font-bold text-[10px]">⚡</div>
                <div>
                  <div className="font-semibold text-gray-800">Build Environment Ready</div>
                  <div className="text-[10px] text-gray-400">Production Mode Active</div>
                </div>
              </div>
              <div className="space-y-1.5 text-gray-500">
                <div className="flex justify-between"><span>Core Web Vitals</span><span className="font-medium text-emerald-600">99</span></div>
                <div className="flex justify-between"><span>Component Reusability</span><span className="font-medium text-gray-800">92%</span></div>
                <div className="flex justify-between"><span>Accessibility Score</span><span className="font-medium text-gray-800">AA</span></div>
                <div className="flex justify-between text-[#2d74ff] font-medium"><span>Hydration Performance</span><span>98ms</span></div>
              </div>
              <hr className="border-gray-100" />
              <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-600">
                <div>⚡ Fast Load</div>
                <div>📱 Fully Responsive</div>
                <div>🔍 SEO Optimized</div>
                <div>📦 Lightweight Bundle</div>
              </div>
              <div className="pt-2">
                <div className="font-semibold text-gray-800">Clean Architecture</div>
                <p className="text-[10px] text-gray-400 mt-0.5">Component modules built without functional clutter.</p>
              </div>
            </div>

            {/* Card 2: Interactive Animations UI Card */}
            <div className="bg-[#111625]/80 backdrop-blur-md p-6 rounded-2xl text-white flex flex-col justify-between shadow-sm min-h-55">
              <span className="text-[10px] tracking-wider text-gray-400 self-end">Animations</span>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">60</span>
                  <span className="text-[10px] text-gray-400">fps Performance</span>
                </div>
                <div className="grid grid-cols-2 gap-y-1 gap-x-3 text-[10px] text-gray-300 mt-4 border-t border-white/10 pt-3">
                  <div>Hardware Accel</div>
                  <div>Framer Motion</div>
                  <div>Layout Transitions</div>
                  <div>Zero Frame Drop</div>
                </div>
              </div>
            </div>

            {/* Card 3: Layout Structure UI Card */}
            <div className="bg-[#4a3e3d]/60 backdrop-blur-md p-6 rounded-2xl text-white flex flex-col justify-between shadow-sm min-h-55">
              <span className="text-[10px] tracking-wider text-gray-400 self-end">Responsive</span>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-light">100%</span>
                  <span className="text-[10px] text-gray-400">Fluid Layout</span>
                </div>
                <div className="grid grid-cols-2 gap-y-1 gap-x-3 text-[10px] text-gray-300 mt-4 border-t border-white/10 pt-3">
                  <div>Flexbox / Grid</div>
                  <div>Tailwind Styled</div>
                  <div>Breakpoints: 5</div>
                  <div>Adaptive Scaling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand / Tech Stack Ticker Strip */}
      <section className="border-y border-gray-100 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-gray-400 text-xs font-bold tracking-widest">
          {techStackLogos.map((logo, i) => (
            <span key={i} className="opacity-60 hover:opacity-100 transition duration-300">
              {logo}
            </span>
          ))}
        </div>
      </section>

      {/* Section Divider Header */}
      <section className="text-center pt-24 pb-12 max-w-xl mx-auto px-6">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Engineering Philosophy</span>
        <h2 className="text-4xl font-normal text-[#111625] mt-3 tracking-tight">
          Precision UI Engineering
        </h2>
        <p className="text-gray-400 text-xs mt-3 leading-relaxed">
          Review core implementation features. From programmatic component design principles to stateful interactive elements, experience frontend layouts at their best.
        </p>
      </section>

      {/* Mosaic Content Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-62.5">
          {featuresGrid.map((block, index) => {
            const layoutClass = "md:col-span-2";

            if (block.type === "text") {
              return (
                <div
                  key={index}
                  className={`${layoutClass} ${block.bgClass} ${block.textColor} rounded-3xl p-8 flex flex-col justify-between border border-gray-100/60 shadow-sm`}
                >
                  <div className="max-w-xs">
                    <h3 className="text-xl font-medium tracking-tight">{block.title}</h3>
                    <p className="text-xs opacity-70 mt-4 leading-relaxed font-light">
                      {block.description}
                    </p>
                  </div>
                  <button className="text-xs font-medium underline tracking-wide text-left self-start opacity-90 hover:opacity-100">
                    View Implementation →
                  </button>
                </div>
              );
            }

            return (
              <div key={index} className={`${layoutClass} relative rounded-3xl overflow-hidden group shadow-sm`}>
                <Image
                  src={block.image || ""}
                  alt={block.alt || ""}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 500px"
                  className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* SLIDESHOW SECTION - Featured Projects (Now under Precision UI Engineering) */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Featured Implementations</span>
          <h3 className="text-3xl font-normal text-[#111625] mt-3 tracking-tight">
            Sample Frontend Designs
          </h3>
          <p className="text-gray-400 text-xs mt-3 leading-relaxed max-w-xl mx-auto">
            Real-world applications showcasing our frontend engineering capabilities
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 bg-white">
          {/* Slideshow Container */}
          <div className="relative h-112.5 md:h-[550px]">
            {showcaseProjects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                  }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  {/* Overlay gradient for text readability */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[10px] font-medium tracking-wider uppercase mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 max-w-lg">
                      {project.description}
                    </p>
                    <button className="mt-4 px-6 py-2 bg-white text-black rounded-full text-xs font-medium hover:bg-opacity-90 transition">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {showcaseProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4 text-xs text-gray-400">
          {currentSlide + 1} / {showcaseProjects.length} • Sample Frontend Projects
        </div>
      </section>

      {/* Mission Footer Info */}
      <hr className="border-gray-200/60 max-w-5xl mx-auto" />
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 text-xs">
        <div>
          <span className="text-[9px] uppercase tracking-widest text-gray-400">Core Mission</span>
          <h2 className="text-3xl font-normal text-[#111625] mt-2 tracking-tight leading-snug">
            Building Modern Web Experiences
          </h2>
        </div>
        <div className="space-y-4 text-gray-500 leading-relaxed font-light">
          <p className="font-normal text-gray-800">
            Our showcase demonstrates production-ready frontend implementations using the latest web technologies to create performant, accessible, and beautiful user interfaces.
          </p>
          <p>
            From responsive layouts to complex animations, we build scalable solutions that prioritize developer experience, performance optimization, and maintainable codebases. Each component is crafted with attention to detail and adherence to web standards.
          </p>
          <div className="flex gap-4 pt-2">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Next.js 14</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">TypeScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">Tailwind CSS</span>
          </div>
        </div>
      </section>
    </main>
  );
}