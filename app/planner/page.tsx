'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin, Menu, X, ExternalLink, Heart, Sparkles, Camera, Music, Utensils, Flower2, Star } from 'lucide-react';
import Image from 'next/image';

const EventPlannerWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Services Data ---
  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Full-service coordination from engagement to \"I do.\"",
      icon: <Heart size={32} />,
    },
    {
      id: 2,
      title: "Event Design",
      description: "Custom styling that reflects your unique vision.",
      icon: <Sparkles size={32} />,
    },
    {
      id: 3,
      title: "Venue Selection",
      description: "Curated venues that match your style and needs.",
      icon: <MapPin size={32} />,
    },
    {
      id: 4,
      title: "Catering",
      description: "Gourmet experiences crafted by top chefs.",
      icon: <Utensils size={32} />,
    },
    {
      id: 5,
      title: "Entertainment",
      description: "Live music, DJs, and performances to remember.",
      icon: <Music size={32} />,
    },
    {
      id: 6,
      title: "Photography",
      description: "Capturing every moment with artistry and grace.",
      icon: <Camera size={32} />,
    },
  ];

  // --- Past Weddings Data ---
  const pastWeddings = [
    {
      id: 1,
      title: "Emily & James",
      location: "Villa Montalvo, CA",
      image: "/image/pic1.jpg",
    },
    {
      id: 2,
      title: "Sarah & Michael",
      location: "Ritz-Carlton, Half Moon Bay",
      image: "/image/pic2.jpg",
    },
    {
      id: 3,
      title: "Jessica & David",
      location: "Fairmont Hotel, SF",
      image: "/image/pic3.jpg",
    },
  ];

  // --- Testimonials ---
  const testimonials = [
    { quote: "Every detail was perfection. Our dream wedding came to life.", author: "Emily & James" },
    { quote: "The most magical day of our lives. Thank you for everything!", author: "Sarah & Michael" },
    { quote: "You made our celebration truly unforgettable.", author: "Jessica & David" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#1A1A1A] antialiased">
      {/* --- NAVIGATION --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light tracking-[0.3em] text-[#1A1A1A]">TIMELESS</span>
            <span className="text-2xl font-serif text-[#C9A96E]">CELEBRATIONS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] font-light">
            <a href="#services" className="hover:text-[#C9A96E] transition-colors">Services</a>
            <a href="#past-weddings" className="hover:text-[#C9A96E] transition-colors">Past Weddings</a>
            <a href="#testimonials" className="hover:text-[#C9A96E] transition-colors">Testimonials</a>
            <a href="#contact" className="px-8 py-3 bg-[#C9A96E] text-white rounded-full hover:bg-[#A8884E] transition-all shadow-md hover:shadow-lg text-xs tracking-widest">
              Inquire Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#1A1A1A] p-1 rounded-full hover:bg-[#F0ECE6] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-sm shadow-2xl border-t border-[#F0ECE6]">
            <div className="flex flex-col items-start p-8 space-y-6 text-sm font-light tracking-wider">
              <a href="#services" className="hover:text-[#C9A96E] transition-colors w-full border-b border-[#F0ECE6] pb-3" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#past-weddings" className="hover:text-[#C9A96E] transition-colors w-full border-b border-[#F0ECE6] pb-3" onClick={() => setIsMenuOpen(false)}>Past Weddings</a>
              <a href="#testimonials" className="hover:text-[#C9A96E] transition-colors w-full border-b border-[#F0ECE6] pb-3" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="mt-2 w-full text-center px-6 py-3 bg-[#C9A96E] text-white rounded-full hover:bg-[#A8884E] transition-all text-xs tracking-widest" onClick={() => setIsMenuOpen(false)}>
                Inquire Now
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
            backgroundImage: 'url(/image/pic4.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="space-y-3">
            <h1 className="font-light text-4xl sm:text-5xl md:text-7xl tracking-[0.3em] uppercase">
              TIMELESS
            </h1>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl text-[#C9A96E]">
              CELEBRATIONS
            </h1>
          </div>
          
          <div className="mt-8 space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
              infused with
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#C9A96E] tracking-wider">
              STYLE. SOPHISTICATION and SOUL
            </p>
          </div>

          <p className="mt-8 text-lg md:text-xl font-light tracking-widest max-w-2xl mx-auto text-white/90">
            Every element, every detail and every decision is tailored to YOU
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#services" className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C9A96E] hover:bg-[#A8884E] text-white rounded-full transition-all shadow-xl hover:shadow-2xl text-sm tracking-widest uppercase">
              Explore Services <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#past-weddings" className="inline-flex items-center justify-center px-10 py-4 border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white rounded-full transition-all text-sm tracking-widest uppercase backdrop-blur-sm">
              Past Weddings
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-10 text-xs tracking-[0.15em] uppercase text-white/80">
            <span className="flex items-center gap-2"><Star size={16} className="text-[#C9A96E]" /> 200+ Events</span>
            <span className="flex items-center gap-2"><Heart size={16} className="text-[#C9A96E]" /> 10+ Years Experience</span>
            <span className="flex items-center gap-2"><Flower2 size={16} className="text-[#C9A96E]" /> Award-Winning Design</span>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#C9A96E] rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 bg-[#FAF8F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#1A1A1A]">Tailored to YOU</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4" />
            <p className="mt-4 text-[#1A1A1A]/70 max-w-2xl mx-auto font-light">
              Every element, every detail and every decision is crafted with your vision in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#F0ECE6]">
                <div className="text-[#C9A96E] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-2">{service.title}</h3>
                <p className="text-[#1A1A1A]/70 text-sm font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PAST WEDDINGS SECTION --- */}
      <section id="past-weddings" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">Portfolio</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#1A1A1A]">Past Weddings</h2>
            <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastWeddings.map((wedding) => (
              <div key={wedding.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="aspect-4/3">
                  <Image
                    src={wedding.image}
                    alt={wedding.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-serif">{wedding.title}</h3>
                    <p className="text-sm font-light text-white/80">{wedding.location}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#C9A96E] text-white px-3 py-1.5 rounded-full text-xs tracking-wider uppercase shadow-lg">
                  Featured
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-24 px-6 bg-[#FAF8F6]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#C9A96E] font-semibold">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 text-[#1A1A1A]">Kind Words</h2>
          <div className="w-16 h-1 bg-[#C9A96E] mx-auto mt-4 mb-12" />

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-[#F0ECE6] hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4 text-[#C9A96E]">★★★★★</div>
                <p className="text-[#1A1A1A]/80 italic font-light leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-serif text-[#C9A96E]">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT / CTA SECTION --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/pic7.jpg"
            alt="Celebration"
            width={1600}
            height={600}
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
          <span className="inline-block px-6 py-2 border border-white/20 backdrop-blur-sm rounded-full text-xs tracking-[0.3em] uppercase bg-black/20 mb-6">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Let&apos;s Create Something<br />
            <span className="text-[#C9A96E]">Beautiful Together</span>
          </h2>
          <p className="mt-6 text-lg font-light text-white/80 max-w-2xl mx-auto">
            Every celebration deserves to be extraordinary. Let&apos;s bring your vision to life.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#C9A96E] hover:bg-[#A8884E] text-white rounded-full transition-all shadow-xl hover:shadow-2xl text-sm tracking-widest uppercase font-medium">
              Inquire Now <ExternalLink size={18} />
            </a>
            <a href="#" className="inline-flex items-center justify-center px-10 py-4 border border-white/40 hover:border-white bg-transparent hover:bg-white/10 text-white rounded-full transition-all text-sm tracking-widest uppercase backdrop-blur-sm">
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-white/70 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-light tracking-[0.3em] text-white">TIMELESS</span>
            <span className="text-2xl font-serif text-[#C9A96E]">CELEBRATIONS</span>
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-xs font-light tracking-wider">
            &copy; {new Date().getFullYear()} Timeless Celebrations · All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EventPlannerWebsite;