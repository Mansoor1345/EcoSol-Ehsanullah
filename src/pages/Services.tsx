import { useState, useEffect } from 'react';
import { Sun, Zap, ChevronRight, X, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';
import { servicesData, Service } from '../data/services';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

function ServiceModal({ service, onClose, onNavigate }: { service: Service; onClose: () => void; onNavigate: (p: string) => void }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
      style={{ background: 'rgba(5,28,14,0.75)', backdropFilter: 'blur(6px)' }}
    >
      {/* ── Modal panel ── */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] md:max-h-[88vh] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-modal-up"
        onClick={e => e.stopPropagation()}
        style={{ animationDuration: '0.35s' }}
      >
        {/* ── Compact header bar ── */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-100 flex-shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Sun size={17} className="text-white" />
            </div>
            <span className="text-xs font-semibold text-green-600 uppercase tracking-widest">ECO-SOL ENERGIES Service</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

            {/* LEFT — main content (2 cols) */}
            <div className="lg:col-span-2 p-6 md:p-10 space-y-8 border-r border-gray-100">

              {/* Short description */}
              <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-green-500 pl-4 italic">
                {service.shortDescription}
              </p>

              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Factory className="text-green-600" size={22} /> Overview
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.content.overview}</p>
              </div>

              {/* How It Works + Tech Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <Zap size={17} className="text-yellow-500" /> How It Works
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.content.howItWorks}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={17} className="text-green-600" /> Tech Highlights
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{service.content.techHighlights}</p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Core Benefits</h3>
                <ul className="space-y-2">
                  {service.content.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm hover:border-green-200 transition">
                      <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700 text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">✦ Client Success Story</h3>
                <p className="text-green-50 text-sm leading-relaxed italic">"{service.content.caseStudy}"</p>
              </div>
            </div>

            {/* RIGHT — sidebar (1 col) */}
            <div className="lg:col-span-1 p-6 md:p-8 flex flex-col gap-6 bg-gray-50/70">

              {/* Key Specs */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Specifications</h3>
                <ul className="space-y-3">
                  {service.content.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Eco-Sol */}
              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="text-base font-bold text-green-400 mb-3">Why ECO-SOL ENERGIES?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.content.whyEcoSol}</p>
              </div>

              {/* CTA */}
              <button
                onClick={() => { onClose(); onNavigate('contact'); }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-2xl font-bold text-base shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] transition-all flex items-center justify-between"
              >
                Get Free Quote
                <ChevronRight size={20} />
              </button>

              <button
                onClick={onClose}
                className="w-full border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-2xl font-semibold text-sm hover:border-gray-300 hover:bg-gray-100 transition"
              >
                ← Back to Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services({ onNavigate }: ServicesProps) {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="bg-white pt-32">

      {/* ── Hero ── */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Our Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Solar Solutions for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Every Need
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Click any service to explore the full details, technical specs, and how ECO-SOL ENERGIES can power your future.
          </p>
        </div>
      </section>

      {/* ── 9-card grid ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className="text-left bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1 hero-fade-up focus:outline-none focus:ring-4 focus:ring-green-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Card image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Sun size={22} className="text-white" />
                    </div>
                  </div>
                  {/* "Click to expand" hint */}
                  <div className="absolute top-3 right-3 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="mt-5 flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    <span>View Full Details</span>
                    <ChevronRight size={17} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Our experts will design a tailored solar solution based on your specific energy requirements and budget
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-green-700 px-12 py-5 rounded-lg font-bold hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl text-lg"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ── Modal overlay ── */}
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
