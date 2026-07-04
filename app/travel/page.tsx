'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Users, MapPin, Wine, Coffee, Sun, Mountain, ArrowRight, Menu, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const LaTarantellaTourWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Sample Tour Data ---
  const tours = [
    {
      id: 1,
      title: "Vineyard & Vistas",
      duration: "4 Hours",
      price: "$195",
      rating: 4.9,
      reviews: 42,
      image: "/image/pic1.jpg",
      description: "Private tour through rolling hills, three boutique wineries, and panoramic views.",
    },
    {
      id: 2,
      title: "Twilight Tasting",
      duration: "3 Hours",
      price: "$145",
      rating: 4.8,
      reviews: 38,
      image: "/image/pic1.jpg",
      description: "Golden hour wine tasting with artisanal cheese pairings as the sun sets.",
    },
    {
      id: 3,
      title: "Culinary Harvest",
      duration: "6 Hours",
      price: "$275",
      rating: 5.0,
      reviews: 27,
      image: "/image/pic1.jpg",
      description: "Farm-to-table lunch, vineyard walk, and a private cellar tour with the winemaker.",
    },
  ];

  const testimonials = [
    { quote: "An unforgettable journey through Santa Barbara's finest terroir. Pure magic.", author: "Elena R." },
    { quote: "The attention to detail and hospitality made us feel like family.", author: "Michael & Sarah K." },
    { quote: "La Tarantella is the gold standard for wine country experiences.", author: "James P." },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2E2A29] antialiased">
      {/* --- NAVIGATION --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#F9F6F0]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif tracking-wider text-[#722F37]">La Tarantella</span>
            <span className="hidden md:inline-block text-xs uppercase tracking-[0.2em] text-[#A8884E] ml-2 font-light">· Elevated Experiences</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-light">
            <a href="#tours" className="hover:text-[#722F37] transition-colors">Tours</a>
            <a href="#about" className="hover:text-[#722F37] transition-colors">About</a>
            <a href="#testimonials" className="hover:text-[#722F37] transition-colors">Testimonials</a>
            <a href="#contact" className="px-6 py-2.5 bg-[#722F37] text-[#F9F6F0] rounded-full hover:bg-[#4A1E24] transition-all shadow-md hover:shadow-lg text-xs tracking-widest">
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#2E2A29] p-1 rounded-full hover:bg-[#EAE2D6] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F9F6F0]/98 backdrop-blur-sm shadow-2xl border-t border-[#EAE2D6]">
            <div className="flex flex-col items-start p-8 space-y-6 text-lg font-light tracking-wider">
              <a href="#tours" className="hover:text-[#722F37] transition-colors w-full border-b border-[#EAE2D6] pb-3" onClick={() => setIsMenuOpen(false)}>Tours</a>
              <a href="#about" className="hover:text-[#722F37] transition-colors w-full border-b border-[#EAE2D6] pb-3" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#testimonials" className="hover:text-[#722F37] transition-colors w-full border-b border-[#EAE2D6] pb-3" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="mt-2 w-full text-center px-6 py-3 bg-[#722F37] text-[#F9F6F0] rounded-full hover:bg-[#4A1E24] transition-all text-sm tracking-widest" onClick={() => setIsMenuOpen(false)}>
                Book Your Journey
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/image/pic1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.65) saturate(1.1)',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/60 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-[#F5F0EB]">
          <div className="inline-block mb-6 px-6 py-2 border border-white/20 backdrop-blur-sm rounded-full text-xs tracking-[0.3em] uppercase bg-black/20">
            Santa Barbara Wine Country
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light leading-[1.1] tracking-tight drop-shadow-2xl">
            La Tarantella
          </h1>
          <p className="mt-6 text-xl md:text-2xl font-light tracking-widest max-w-3xl mx-auto text-white/90 drop-shadow">
            Elevated experiences, in the heart of Santa Barbara&apos;s wine country.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#tours" className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#722F37] hover:bg-[#4A1E24] text-[#F9F6F0] rounded-full transition-all shadow-xl hover:shadow-2xl text-sm tracking-widest uppercase">
              Explore Tours <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center px-10 py-4 border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white rounded-full transition-all text-sm tracking-widest uppercase backdrop-blur-sm">
              The History
            </a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-xs tracking-[0.15em] uppercase text-white/70">
            <span className="flex items-center gap-2"><Wine size={16} /> 20+ Vineyards</span>
            <span className="flex items-center gap-2"><Sun size={16} /> Year-Round Tours</span>
            <span className="flex items-center gap-2"><MapPin size={16} /> Santa Ynez Valley</span>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* --- ABOUT / HISTORY TEASER --- */}
      <section id="about" className="py-24 px-6 bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#A8884E] font-semibold">The Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6 text-[#2E2A29] leading-tight">
              The History of <br /><span className="text-[#722F37]">La Tarantella</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A96E] mb-6" />
            <p className="text-lg leading-relaxed text-[#2E2A29]/80 font-light">
              Born from a passion for the land and a reverence for Italian winemaking traditions, 
              La Tarantella offers curated journeys through the rolling hills of Santa Barbara. 
              Each tour is a symphony of flavor, history, and breathtaking landscapes — a dance 
              between the old world and the new.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2E2A29]/70 font-light italic">
              &ldquo;Where every glass tells a story.&rdquo;
            </p>
            <a href="#" className="inline-flex items-center gap-2 mt-8 text-[#722F37] font-medium border-b-2 border-[#722F37]/30 pb-1 hover:border-[#722F37] transition-all">
              Discover our heritage <ArrowRight size={18} />
            </a>
          </div>
          <div className="relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/pic1.jpg"
                alt="Vineyard landscape"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#722F37]/10 p-3 rounded-full">
                  <Wine size={24} className="text-[#722F37]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A8884E]">Est. 2012</p>
                  <p className="font-serif text-sm">Award-winning tours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOURS SECTION --- */}
      <section id="tours" className="py-24 px-6 bg-[#EAE2D6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#A8884E] font-semibold">Curated Experiences</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#2E2A29]">Signature Wine Tours</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4" />
            <p className="mt-4 text-[#2E2A29]/70 max-w-2xl mx-auto font-light">
              Each journey is thoughtfully designed to showcase the soul of Santa Barbara&apos;s wine country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#722F37] shadow-md">
                    ★ {tour.rating} ({tour.reviews})
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif text-[#2E2A29]">{tour.title}</h3>
                    <span className="text-lg font-semibold text-[#722F37]">{tour.price}</span>
                  </div>
                  <p className="text-[#2E2A29]/70 text-sm font-light leading-relaxed">{tour.description}</p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-[#2E2A29]/60 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><ClockIcon size={14} /> {tour.duration}</span>
                    <span className="flex items-center gap-1"><Users size={14} /> 2-8 guests</span>
                  </div>
                  <button className="mt-5 w-full py-3 border border-[#722F37]/20 text-[#722F37] rounded-full hover:bg-[#722F37] hover:text-[#F9F6F0] transition-all text-sm tracking-widest uppercase font-medium group-hover:shadow-md">
                    Reserve Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 px-6 bg-[#F9F6F0]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#A8884E] font-semibold">Kind Words</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#2E2A29]">What Our Guests Say</h2>
          <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4 mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-[#EAE2D6]/50 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4 text-[#C9A96E]">★★★★★</div>
                <p className="text-[#2E2A29]/80 italic font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-[#722F37]">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / BOOKING CTA --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/pic6.jpg"
            alt="Vineyard sunset"
            width={1600}
            height={600}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-[#F5F0EB]">
          <span className="inline-block px-6 py-2 border border-white/20 backdrop-blur-sm rounded-full text-xs tracking-[0.3em] uppercase bg-black/20 mb-6">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Reserve Your <br /><span className="text-[#C9A96E]">La Tarantella</span> Experience
          </h2>
          <p className="mt-6 text-lg font-light text-white/80 max-w-2xl mx-auto">
            Private tours, group tastings, and curated events. Let us craft an unforgettable day in wine country.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C9A96E] hover:bg-[#A8884E] text-[#2E2A29] rounded-full transition-all shadow-xl hover:shadow-2xl text-sm tracking-widest uppercase font-medium">
              Book Now <ExternalLink size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-4 border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white rounded-full transition-all text-sm tracking-widest uppercase backdrop-blur-sm">
              Contact Us
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-white/70">
            <span className="flex items-center gap-2"><Calendar size={18} /> Flexible scheduling</span>
            <span className="flex items-center gap-2"><Coffee size={18} /> Gourmet pairings</span>
            <span className="flex items-center gap-2"><Mountain size={18} /> Scenic routes</span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2E2A29] text-[#F5F0EB]/70 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif text-[#F5F0EB]">La Tarantella</span>
            <span className="text-xs uppercase tracking-widest text-[#A8884E]">· Est. 2012</span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-[#F5F0EB] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F5F0EB] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#F5F0EB] transition-colors">Contact</a>
          </div>
          <p className="text-xs font-light tracking-wider">
            &copy; {new Date().getFullYear()} La Tarantella · Santa Barbara Wine Country
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Helper Icon Component ---
const ClockIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default LaTarantellaTourWebsite;