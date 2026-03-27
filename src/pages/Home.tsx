import { useState, useEffect, useCallback } from 'react';
import { Sun, Zap, Shield, Award, ChevronRight, CheckCircle, Star, Plus, Minus } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const SolarPanelIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

const heroSlides = [
  {
    image: '/images/hero-slide-1.png',
    badge: "Pakistan's Premium Solar Energy Provider",
    headingLine1: 'Power Your Future',
    headingLine2: 'With Clean Energy',
    subtext: 'Premium solar panels, inverters, and complete solar solutions for homes and businesses across Pakistan',
  },
  {
    image: '/images/hero-slide-2.png',
    badge: 'Trusted by 500+ Homeowners Across Pakistan',
    headingLine1: 'Cut Your Bills by',
    headingLine2: 'Up to 90%',
    subtext: 'Switch to solar and save lakhs every year - free site survey, transparent pricing, and professional installation in just 2-3 days',
  },
  {
    image: '/images/hero-slide-3.png',
    badge: '50MW+ Installed Capacity Nationwide',
    headingLine1: 'Enterprise Solar',
    headingLine2: 'That Pays For Itself',
    subtext: 'Reduce operational costs by up to 60% with commercial and industrial solar solutions - net metering, smart monitoring, and long-term warranties',
  },
];


// ── Portfolio Projects Carousel ──────────────────────────────────
const portfolioProjects = [
  { title: 'Modern Home Solar Installation', location: 'DHA Phase 6, Karachi', capacity: '12 kW', type: 'Residential', image: '/images/Images/1.jpeg' },
  { title: 'Family Villa Solar Solution', location: 'Clifton, Karachi', capacity: '10 kW', type: 'Residential', image: '/images/Images/9.jpeg' },
  { title: 'Urban Apartment Solar System', location: 'Gulshan-e-Iqbal, Karachi', capacity: '8 kW', type: 'Residential', image: '/images/Images/8.jpeg' },
  { title: 'Spacious Bungalow Solar Project', location: 'Bahria Town, Karachi', capacity: '18 kW', type: 'Residential', image: '/images/Images/14.jpeg' },
  { title: 'Office Complex Solar Installation', location: 'PECHS, Karachi', capacity: '50 kW', type: 'Commercial', image: '/images/Images/b2.jpeg' },
  { title: 'Retail Outlet Solar Project', location: 'Korangi, Karachi', capacity: '35 kW', type: 'Commercial', image: '/images/Images/11.jpeg' },
];

interface ProjectsCarouselProps { onNavigate: (page: string) => void; }

function ProjectsCarousel({ onNavigate }: ProjectsCarouselProps) {
  const [active, setActive] = useState(0);
  const total = portfolioProjects.length;

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % total), 4000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setActive(p => (p - 1 + total) % total);
  const next = () => setActive(p => (p + 1) % total);

  return (
    <section className="py-24 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-green-900/60 text-green-400 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">
            Our Projects
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Powering Homes &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
              Businesses
            </span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our real-world solar installations — from residential rooftops to large commercial complexes.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Slides */}
          <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {portfolioProjects.map((p, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 10 : 0 }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/6876536/pexels-photo-6876536.jpeg'; }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {p.type}
                    </span>
                    <span className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {p.capacity}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-green-600 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Previous project"
          >
            <ChevronRight size={20} className="rotate-180" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-green-600 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active
                  ? 'w-8 h-2.5 bg-green-400'
                  : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-green-500/30 hover:scale-[1.03] transition-all"
          >
            View All Projects
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
// ─────────────────────────────────────────────────────────────────
export default function Home({ onNavigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const services = [
    {
      icon: Sun,
      title: 'Solar Panel Installation',
      description: 'Premium quality solar panels with maximum efficiency and durability for residential and commercial properties.',
    },
    {
      icon: Zap,
      title: 'Solar Inverters',
      description: 'Advanced inverter systems for on-grid, off-grid, and hybrid solar solutions with intelligent power management.',
    },
    {
      icon: Shield,
      title: 'Complete Solar Systems',
      description: 'End-to-end solar power solutions tailored to your energy needs with professional installation and support.',
    },
    {
      icon: Award,
      title: 'Batteries & Backup',
      description: 'High-capacity solar batteries and backup systems ensuring uninterrupted power supply for your home or business.',
    },
  ];

  const whyChooseUs = [
    'Premium Quality Products',
    '10+ Years Experience',
    'Professional Installation',
    'Nationwide Service',
    'After-Sales Support',
    'Competitive Pricing',
  ];

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Residential Client',
      content: 'ECO-SOL ENERGIES transformed our home with a complete solar solution. Professional service and excellent results!',
      rating: 5,
    },
    {
      name: 'Fatima Malik',
      role: 'Business Owner',
      content: 'Outstanding solar installation for our commercial facility. Significant reduction in electricity costs within months.',
      rating: 5,
    },
    {
      name: 'Hassan Ali',
      role: 'Homeowner',
      content: 'Highly recommend their services. Quality products, expert team, and transparent pricing. Very satisfied!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: 'What is the cost of a complete solar system?',
      answer: 'The cost varies based on your energy requirements. Contact us for a free site survey and customized quote.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential installations are completed within 2-3 days. Commercial projects vary based on scale.',
    },
    {
      question: 'Do you provide maintenance services?',
      answer: 'Yes, we offer comprehensive maintenance packages to ensure optimal performance of your solar system.',
    },
    {
      question: 'What warranties do you offer?',
      answer: 'Our solar panels come with many years performance warranties, and inverters also with many years warranties.',
    },
  ];

  return (
    <div className="bg-white">
      {/* 1) HERO SECTION */}
      <section className="relative h-[calc(100vh-116px)] mt-[116px] xl:mt-[120px] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden w-full max-w-full">
        {/* Background Slides */}
        {heroSlides.map((s, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}

        {/* Dark overlay for text readability over photos */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Subtle animated solar flare light rays */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,120vw)] h-[min(800px,120vw)] opacity-40 mix-blend-screen animate-spin-slow pointer-events-none z-20" style={{ background: 'radial-gradient(circle, rgba(250,204,21,0.5) 0%, rgba(250,204,21,0) 70%)' }}></div>

        {/* Floating Solar Panels */}
        <div className="absolute left-[8%] top-[25%] text-white/20 animate-float hidden lg:block z-20">
          <SolarPanelIcon className="w-16 h-16" />
        </div>
        <div className="absolute right-[8%] top-[55%] text-white/20 animate-float hidden lg:block z-20" style={{ animationDelay: '3s' }}>
          <SolarPanelIcon className="w-20 h-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-30 pt-8 sm:pt-12 w-full">
          <div key={`badge-${animKey}`} className="hero-fade-up inline-flex mb-6 max-w-full px-2">
            <span className="bg-green-600/90 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl sm:rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-lg border border-green-400/30 inline-flex items-center text-center justify-center max-w-full">
              {heroSlides[currentSlide].badge}
            </span>
          </div>
          {/* Tighter tracking and explicit leading for font size reduction */}
          <h1 key={`heading-${animKey}`} className="hero-fade-up hero-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] mb-4 leading-tight">
            {heroSlides[currentSlide].headingLine1}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {heroSlides[currentSlide].headingLine2}
            </span>
          </h1>
          <p key={`sub-${animKey}`} className="hero-fade-up hero-delay-2 text-lg md:text-xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] mb-10 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].subtext}
          </p>
          <div key={`cta-${animKey}`} className="hero-fade-up hero-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-[0_8px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.6)] text-base"
            >
              Get Free Site Survey
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="bg-white/10 backdrop-blur-md text-white border-2 border-white/60 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 hover:border-white transition-all text-base"
            >
              Explore Solutions
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setAnimKey((prev) => prev + 1);
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ${index === currentSlide
                ? 'w-10 bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]'
                : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2) WHAT WE OFFER SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-1e5828edb6bd?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-[0.06] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solar energy solutions designed for maximum efficiency and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Services <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Our Projects Carousel */}
      <ProjectsCarousel onNavigate={onNavigate} />

      {/* 5) WHY CHOOSE US SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-[0.05] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose ECO-SOL ENERGIES?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are committed to delivering premium solar solutions with unmatched quality, expertise, and customer service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-green-50 rounded-xl transition-colors duration-300 border border-transparent hover:border-green-100 group">
                    <div className="bg-white group-hover:bg-green-100 p-2 rounded-lg transition-colors shadow-sm">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    </div>
                    <span className="text-gray-800 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
              >
                Learn More About Us <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cc16e47?q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl"></div>

                <div className="relative grid grid-cols-2 gap-x-2 sm:gap-x-8 gap-y-10 sm:gap-y-12 text-white text-center z-10">
                  <div className="group/stat">
                    <div className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tighter sm:tracking-normal group-hover/stat:scale-110 transition-transform">500+</div>
                    <div className="text-green-100 font-medium tracking-wide border-t border-white/20 pt-3 mx-0 sm:mx-4 text-sm sm:text-base leading-tight">Projects Completed</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tighter sm:tracking-normal group-hover/stat:scale-110 transition-transform text-yellow-400">50MW+</div>
                    <div className="text-green-100 font-medium tracking-wide border-t border-white/20 pt-3 mx-0 sm:mx-4 text-sm sm:text-base leading-tight">Power Installed</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tighter sm:tracking-normal group-hover/stat:scale-110 transition-transform">98%</div>
                    <div className="text-green-100 font-medium tracking-wide border-t border-white/20 pt-3 mx-0 sm:mx-4 text-sm sm:text-base leading-tight">Client Satisfaction</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-4xl sm:text-5xl font-extrabold mb-2 tracking-tighter sm:tracking-normal group-hover/stat:scale-110 transition-transform">10+</div>
                    <div className="text-green-100 font-medium tracking-wide border-t border-white/20 pt-3 mx-0 sm:mx-4 text-sm sm:text-base leading-tight">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3) CLIENT TESTIMONIALS SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from satisfied customers across Pakistan
            </p>
          </div>
        </div>

        <div className="relative w-full">
          {/* Shadows to cut off edges smoothly */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee gap-8 w-max px-8">
            {/* Array is tripled to ensure a perfect smooth infinite loop without blank gaps */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-none w-[350px] md:w-[450px] bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed italic border-b border-gray-100 pb-8">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-sm font-medium text-green-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) FAQ SECTION */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cc16e47?q=80&w=2070')] bg-cover bg-fixed bg-center opacity-[0.05] pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our solar solutions
            </p>
          </div>

          <div className="space-y-4 shadow-sm rounded-2xl p-2 bg-gray-50/50">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-md ring-1 ring-green-500/20' : 'bg-white hover:bg-gray-50'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left group"
                  >
                    <h3 className={`text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-green-700' : 'text-gray-900'}`}>
                      {faq.question}
                    </h3>
                    <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400 group-hover:bg-green-50 group-hover:text-green-600'}`}>
                      {isOpen ? (
                        <Minus size={20} className="transform rotate-180 transition-transform duration-300" />
                      ) : (
                        <Plus size={20} className="transform rotate-0 transition-transform duration-300" />
                      )}
                    </div>
                  </button>
                  <div className={`accordion-content ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed text-lg">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY TO GO SECTION - Untouched */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Get a free site survey and customized solar solution for your property
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-green-700 px-12 py-5 rounded-lg font-bold hover:bg-green-50 transition-all shadow-2xl hover:shadow-3xl text-lg"
          >
            Request Free Quote
          </button>
        </div>
      </section>
    </div>
  );
}
