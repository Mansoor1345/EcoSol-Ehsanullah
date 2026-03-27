import { useState, useEffect, useCallback } from 'react';

interface HeroSliderProps {
  onNavigate: (page: string) => void;
}

const slides = [
  {
    image: '/images/hero-slide-1.png',
    alt: 'Solar panel farm at golden hour sunset',
    badge: "Pakistan's Premium Solar Energy Provider",
    headingLine1: 'Power Your Future',
    headingLine2: 'With Clean Energy',
    subtext: 'Premium solar panels, inverters, and complete solar solutions for homes and businesses across Pakistan',
  },
  {
    image: '/images/hero-slide-2.png',
    alt: 'Luxury villa rooftop solar installation',
    badge: '🏠 Trusted by 500+ Homeowners Across Pakistan',
    headingLine1: 'Cut Your Bills by',
    headingLine2: 'Up to 90%',
    subtext: 'Switch to solar and save lakhs every year — free site survey, transparent pricing, and professional installation in just 2–3 days',
  },
  {
    image: '/images/hero-slide-3.png',
    alt: 'Modern commercial building with solar panels',
    badge: '⚡ 50MW+ Installed Capacity Nationwide',
    headingLine1: 'Enterprise Solar',
    headingLine2: 'That Pays For Itself',
    subtext: 'Reduce operational costs by up to 60% with commercial and industrial solar solutions — net metering, smart monitoring, and 25-year warranties',
  },
];

export default function HeroSlider({ onNavigate }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const slide = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden mt-[88px]">
      {/* Background Slides */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${s.image})`,
          }}
          aria-label={s.alt}
        />
      ))}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content overlay */}
      <div className="relative z-30 flex items-center justify-center h-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center w-full">
          {/* Pill badge */}
          <div key={`badge-${animKey}`} className="hero-fade-up inline-block mb-6">
            <span className="bg-green-600/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-lg border border-green-400/30">
              {slide.badge}
            </span>
          </div>

          {/* Main headline */}
          <h1
            key={`heading-${animKey}`}
            className="hero-fade-up hero-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
          >
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              {slide.headingLine1}
            </span>
            <br />
            <span className="hero-gradient-text">
              {slide.headingLine2}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            key={`sub-${animKey}`}
            className="hero-fade-up hero-delay-2 text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.3)]"
          >
            {slide.subtext}
          </p>

          {/* CTA Buttons */}
          <div
            key={`cta-${animKey}`}
            className="hero-fade-up hero-delay-3 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Free Site Survey</span>
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/60 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 hover:border-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setAnimKey((prev) => prev + 1);
            }}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-10 bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
