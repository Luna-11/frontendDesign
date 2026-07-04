"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Type definitions
interface SlideDetails {
  bedrooms: string;
  bathrooms: string;
  livingRoom: string;
  kitchen: string;
  balcony: string;
}

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  details: SlideDetails;
  description: string;
  comfort?: string;
}

export default function Home() {
  // Slideshow data with proper typing
  const slides: Slide[] = [
    {
      id: 1,
      image: "/image/pic4.jpg",
      title: "VILLA 410",
      subtitle: "BALI, INDONESIA",
      details: {
        bedrooms: "4",
        bathrooms: "2",
        livingRoom: "1",
        kitchen: "1",
        balcony: "1"
      },
      description: "Perfect tropical beauty crafted with attention to every detail.",
      comfort: "Luxury Living"
    },
    {
      id: 2,
      image: "/image/pic2.jpg",
      title: "VILLA 205",
      subtitle: "SANTORINI, GREECE",
      details: {
        bedrooms: "3",
        bathrooms: "2",
        livingRoom: "1",
        kitchen: "1",
        balcony: "2"
      },
      description: "White-washed elegance overlooking the Aegean Sea.",
      comfort: "Island Romance"
    },
    {
      id: 3,
      image: "/image/pic3.jpg",
      title: "VILLA 308",
      subtitle: "KYOTO, JAPAN",
      details: {
        bedrooms: "5",
        bathrooms: "3",
        livingRoom: "2",
        kitchen: "1",
        balcony: "2"
      },
      description: "Traditional Japanese architecture meets modern luxury.",
      comfort: "Cultural Heritage"
    }
  ];

  // Travel inspiration images
  const travelImages = ["picVer1.jpg", "picVer2.jpg", "picVer3.jpg", "picVer4.jpg","picVer5.jpg"];
  
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentInspirationIndex, setCurrentInspirationIndex] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(3);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Handle responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Travel inspiration navigation
  const nextInspiration = (): void => {
    setCurrentInspirationIndex((prev) => 
      (prev + 1) % (travelImages.length - itemsPerPage + 1)
    );
  };

  const prevInspiration = (): void => {
    setCurrentInspirationIndex((prev) => 
      (prev - 1 + (travelImages.length - itemsPerPage + 1)) % (travelImages.length - itemsPerPage + 1)
    );
  };

  // Get current visible images for travel inspiration
  const getVisibleImages = (): string[] => {
    const start = currentInspirationIndex;
    const end = start + itemsPerPage;
    return travelImages.slice(start, end);
  };

  return (
    <main className="bg-[#f5f1e8] text-[#1a1a1a]">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/image/pic1.jpg"
          alt="Tropical paradise beach"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl tracking-widest font-light">
            DISCOVER YOUR DREAM DESTINATION
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 tracking-wide font-light">
            Curated Travel Experiences Around the World
          </p>

          <button className="mt-6 px-8 py-3 border border-white text-white tracking-widest hover:bg-white hover:text-black transition">
            EXPLORE NOW
          </button>
        </div>
      </section>

      {/* INTRO SECTION - Redesigned */}
      <section className="py-24 px-6 md:px-20 bg-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-px bg-[#1a1a1a]"></div>
          </div>

          {/* Main heading - smaller, elegant */}
          <h2 className="text-center text-lg tracking-[0.3em] text-gray-900 mb-12 font-light">
            WANDERLUST TRAVELS
          </h2>

          {/* Description with refined typography */}
          <div className="text-center">
            <p className="text-sm leading-loose text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
              Welcome to Wanderlust Travels — a sanctuary of discovery illustrated by the heart of exploration. 
              We offer a rare blend of authentic experiences and natural beauty. Every journey is meticulously 
              crafted with complication and built to the highest standard of luxury.
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex justify-center mt-12">
            <div className="w-12 h-px bg-[#1a1a1a]"></div>
          </div>

          {/* Brand name at bottom */}
          <p className="text-center text-xs tracking-[0.2em] text-gray-500 mt-6 font-light">
            WANDERLUST TRAVELS
          </p>
        </div>
      </section>

      {/* FEATURED DESTINATION SLIDESHOW */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Slider */}
            <div className="relative h-125 md:h-150 overflow-hidden rounded-lg">
              {slides.map((slide, index: number) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentSlide ? "bg-white w-6" : "bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide Content */}
            <div className="space-y-6">
              {slides.map((slide, index: number) => (
                <div
                  key={slide.id}
                  className={`transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "hidden"
                  }`}
                >
                  {/* Villa Title */}
                  <div className="border-b border-gray-200 pb-4">
                    <h3 className="text-4xl font-light tracking-wide">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{slide.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed py-4">
                    {slide.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3 py-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">LAND</span>
                      <span className="text-sm font-medium">1,500 sqm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">BEDROOMS</span>
                      <span className="text-sm font-medium">{slide.details.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">BATHROOMS</span>
                      <span className="text-sm font-medium">{slide.details.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">LIVING ROOM</span>
                      <span className="text-sm font-medium">{slide.details.livingRoom}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">KITCHEN</span>
                      <span className="text-sm font-medium">{slide.details.kitchen}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-400">BALCONY</span>
                      <span className="text-sm font-medium">{slide.details.balcony}</span>
                    </div>
                  </div>

                  {/* Comfort Section */}
                  {slide.comfort && (
                    <div className="py-4 border-t border-gray-200">
                      <p className="text-xs text-gray-400">COMFORT</p>
                      <p className="text-sm font-medium mt-1">{slide.comfort}</p>
                    </div>
                  )}

                  {/* Slide Counter */}
                  <div className="mt-6 text-sm text-gray-400">
                    {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-center text-4xl mb-12 tracking-wide">
          POPULAR DESTINATIONS
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: "pic4.jpg", name: "BALI, INDONESIA", desc: "Tropical Paradise" },
            { img: "pic2.jpg", name: "SANTORINI, GREECE", desc: "Island Romance" },
            { img: "pic3.jpg", name: "KYOTO, JAPAN", desc: "Cultural Heritage" }
          ].map((dest, i: number) => (
            <div key={i} className="relative h-75 overflow-hidden group cursor-pointer">
              <Image
                src={`/image/${dest.img}`}
                alt={dest.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
                <p className="text-sm font-semibold">{dest.name}</p>
                <p className="text-xs text-gray-600">{dest.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UNIQUE EXPERIENCES */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl md:text-5xl tracking-widest">
          CURATED EXPERIENCES
        </h2>
        <p className="mt-4 text-gray-600">Tailored journeys for the discerning traveler</p>

        <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <Image
              src="/image/pic5.jpg"
              alt="Luxury travel experience"
              width={600}
              height={400}
              className="object-cover"
            />
            <p className="mt-4 text-sm text-gray-600">
              Private yacht charters, exclusive villa stays, and personalized itineraries.
            </p>
          </div>

          <div>
            <Image
              src="/image/pic6.jpg"
              alt="Cultural travel experience"
              width={600}
              height={400}
              className="object-cover"
            />
            <p className="mt-4 text-sm text-gray-600">
              Immersive cultural tours, local cuisine experiences, and hidden gems.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 px-6 md:px-20 bg-[#f2ecdf]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6 tracking-wide">OUR MISSION</h2>
          <p className="text-black leading-relaxed">
            Wanderlust Travels is dedicated to crafting exceptional travel 
            experiences that inspire, rejuvenate, and create lasting memories. 
            We combine local expertise with global standards, ensuring every 
            journey is seamless, authentic, and uniquely yours.
          </p>
        </div>
      </section>

      {/* TRAVEL INSPIRATION - Updated with Slideshow */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-center text-4xl mb-12 tracking-wide">
          TRAVEL INSPIRATION
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevInspiration}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
            aria-label="Previous images"
            disabled={currentInspirationIndex === 0}
            style={{ opacity: currentInspirationIndex === 0 ? 0.3 : 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextInspiration}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-10"
            aria-label="Next images"
            disabled={currentInspirationIndex >= travelImages.length - itemsPerPage}
            style={{ opacity: currentInspirationIndex >= travelImages.length - itemsPerPage ? 0.3 : 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-12">
            {getVisibleImages().map((img, i: number) => (
              <div 
                key={i} 
                className="relative h-120 overflow-hidden cursor-pointer rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              >
                <Image
                  src={`/image/${img}`}
                  alt="Travel inspiration"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-end justify-center pb-6 opacity-0 hover:opacity-100">
                  <span className="bg-white/90 text-black px-4 py-2 text-sm tracking-wider">
                    EXPLORE
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-8 text-sm text-gray-400">
            {String(currentInspirationIndex + 1).padStart(2, '0')} / {String(travelImages.length - itemsPerPage + 1).padStart(2, '0')}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: travelImages.length - itemsPerPage + 1 }).map((_, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentInspirationIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentInspirationIndex ? "bg-black w-6" : "bg-black/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-600 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-semibold text-gray-800 mb-2">Wanderlust Travels</p>
          <p className="mb-1">info@wanderlusttravels.com | +1 (555) 123-4567</p>
          <p className="text-xs">© 2026 Wanderlust Travels. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-6 text-xs">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Contact Us</span>
          </div>
        </div>
      </footer>
    </main>
  );
}