import { useEffect } from 'react';
import { ChevronRight, ArrowLeft, Sun, CheckCircle2, Factory, Zap, ShieldCheck } from 'lucide-react';
import { servicesData } from '../data/services';

interface ServiceDetailProps {
  serviceId: string;
  onNavigate: (page: string) => void;
}

export default function ServiceDetail({ serviceId, onNavigate }: ServiceDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
        <button
          onClick={() => onNavigate('services')}
          className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition flex items-center"
        >
          <ArrowLeft className="mr-2" size={20} /> Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white pt-20">
      {/* 1. Full-bleed Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-[20s]"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-800/80 to-transparent mix-blend-multiply" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto hero-fade-up">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/30 text-white animate-float">
            <Sun className="text-yellow-400" size={20} />
            <span className="font-semibold tracking-wider text-sm md:text-base uppercase">ECO-SOL ENERGIES Service</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg opacity-90">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* 2. Top Navigation Bar */}
      <div className="bg-green-50/50 border-b border-green-100 sticky top-[88px] z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('services')}
            className="flex items-center text-green-700 font-semibold hover:text-green-800 transition-colors group"
          >
            <ArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Services
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="hidden md:flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2.5 rounded-lg font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all"
          >
            Get Free Quote <ChevronRight className="ml-1" size={18} />
          </button>
        </div>
      </div>

      {/* 3. Main Content Wrapper */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Blog Content (Takes up 8 columns on large screens) */}
          <article className="lg:col-span-8 prose prose-lg md:prose-xl prose-green max-w-none">
            
            {/* Overview Section */}
            <div className="mb-16 hero-fade-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 flex items-center">
                <Factory className="mr-4 text-green-600" size={36} /> Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-xl">
                {service.content.overview}
              </p>
            </div>

            {/* Floating Image 1 */}
            <div className="my-16 relative rounded-[2rem] overflow-hidden group shadow-2xl hero-fade-up" style={{ animationDelay: '100ms' }}>
              <div className="absolute inset-0 bg-green-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={service.blogImage1} 
                alt={`${service.title} Operation`} 
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-[10s]"
              />
            </div>

            {/* How It Works & Tech Highlights */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12 hero-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-green-50 p-8 rounded-3xl border border-green-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-green-900 mb-4 flex items-center">
                  <Zap className="mr-3 text-yellow-500" /> How It Works
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.content.howItWorks}
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <ShieldCheck className="mr-3 text-green-600" /> Technical Highlights
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.content.techHighlights}
                </p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="mb-16 hero-fade-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-green-100 pb-4">
                Core Benefits
              </h2>
              <ul className="space-y-4">
                {service.content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:border-green-200 hover:shadow-md transition-all">
                    <CheckCircle2 className="flex-shrink-0 text-green-600 mt-1 mr-4" size={24} />
                    <span className="text-gray-700 text-lg font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating Image 2 */}
            <div className="my-16 relative rounded-[2rem] overflow-hidden group shadow-2xl hero-fade-up" style={{ animationDelay: '400ms' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/40 to-transparent z-10" />
              <img 
                src={service.blogImage2} 
                alt={`${service.title} Details`} 
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Case Study */}
            <div className="mb-16 bg-gradient-to-br from-green-800 to-green-900 text-white p-10 md:p-14 rounded-[2rem] shadow-2xl hero-fade-up" style={{ animationDelay: '500ms' }}>
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center">
                 Pakistan-Specific Case Study
              </h2>
              <p className="text-green-50 text-xl leading-relaxed italic border-l-4 border-yellow-400 pl-6">
                "{service.content.caseStudy}"
              </p>
            </div>

          </article>

          {/* Sticky Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            
            {/* Key Features Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hero-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Specifications</h3>
              <ul className="space-y-5">
                {service.content.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 mr-4 flex-shrink-0" />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Eco-Sol Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl text-white hero-fade-up" style={{ animationDelay: '300ms' }}>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Why ECO-SOL ENERGIES?</h3>
              <p className="text-gray-300 leading-relaxed text-sm mb-8">
                {service.content.whyEcoSol}
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-green-500/30 hover:scale-[1.02] transition-all flex justify-between items-center"
              >
                Get Free Quote <ChevronRight size={20} />
              </button>
            </div>
            
          </aside>

        </div>
      </main>
    </div>
  );
}
