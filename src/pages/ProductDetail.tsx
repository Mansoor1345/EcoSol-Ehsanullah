import { useEffect } from 'react';
import { ChevronRight, ArrowLeft, CheckCircle, ShieldCheck, Leaf, Zap } from 'lucide-react';
import { productsData } from '../data/products';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = productsData.find((p) => p.id === productId);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - ECO-SOL ENERGIES`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => onNavigate('products')}
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            &larr; Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white pt-32 min-h-screen flex flex-col font-sans">
      {/* 1) FULL BLEED HERO SPECIFIC TO THIS PRODUCT */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in scale-105 transform origin-center"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        {/* Exact gradient requested: green-600/80 to transparent */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 via-green-800/60 to-black/30 z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4 sm:mt-12">
          <div className="hero-fade-up inline-block mb-4 sm:mb-6 max-w-full">
            <span className="bg-yellow-400 text-green-900 px-4 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold shadow-2xl tracking-wide sm:tracking-widest uppercase border border-yellow-300 inline-block max-w-full truncate whitespace-normal">
              ECO-SOL ENERGIES Product
            </span>
          </div>
          <h1 className="hero-fade-up hero-delay-1 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl mb-4 sm:mb-6 leading-tight tracking-tight px-2 sm:px-0">
            {product.title}
          </h1>
        </div>
      </section>

      {/* 2) CONTENT & SPECS SECTION (Top Half) */}
      <section className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('products')}
            className="hero-fade-up hero-delay-2 inline-flex items-center text-gray-400 hover:text-green-600 font-bold mb-16 transition-colors group text-lg"
          >
            <ArrowLeft className="mr-3 group-hover:-translate-x-2 transition-transform duration-300" size={24} />
            Back to Products
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Intro Description */}
            <div className="lg:col-span-7 hero-fade-up hero-delay-3">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight">
                Product Details
              </h2>
              <div className="prose prose-lg lg:prose-xl prose-green text-gray-600 max-w-none leading-relaxed">
                <p className="text-2xl text-gray-800 font-medium mb-8 leading-snug">
                  {product.longDescription}
                </p>
                <p>
                  At ECO-SOL ENERGIES, we believe that investing in high-quality <strong>{product.title.toLowerCase()}</strong> is one of the most crucial steps toward building a sustainable and highly efficient energy ecosystem. 
                  Our stringent quality control and direct partnerships with tier-1 global manufacturers ensure that every single unit we deploy meets exceptional international standards.
                </p>
              </div>
            </div>

            {/* Right: Key Specifications Box */}
            <div className="lg:col-span-5 hero-fade-up hero-delay-3">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-[2.5rem] p-10 lg:p-12 border border-gray-100 shadow-2xl relative overflow-hidden group hover:shadow-green-900/10 transition-shadow duration-500">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors duration-700"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-colors duration-700"></div>
                
                <h3 className="text-3xl font-extrabold text-gray-900 mb-10 relative z-10 flex items-center">
                  <ShieldCheck className="text-green-600 mr-4" size={32} /> Key Specs
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:border-green-100 transition-colors">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                      <span className="ml-4 text-gray-800 font-bold tracking-wide">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-10 border-t border-gray-200 relative z-10">
                  <p className="text-gray-500 mb-6 font-medium text-lg">Ready to upgrade your infrastructure?</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-5 rounded-2xl font-extrabold text-xl hover:from-green-700 hover:to-green-900 transition-all shadow-[0_8px_30px_rgba(22,163,74,0.3)] hover:shadow-[0_8px_40px_rgba(22,163,74,0.5)] flex items-center justify-center group"
                  >
                    Get a Free Quote <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3) COMPREHENSIVE UNIQUE BLOG/ARTICLE SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        {/* Decorative background vectors */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-50/50 to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="mb-16 text-center hero-fade-up">
            <span className="text-green-600 font-extrabold tracking-widest uppercase text-sm mb-4 block inline-flex items-center gap-2">
              <Leaf size={16} /> In-Depth Analysis
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              {product.blogTitle}
            </h2>
          </div>

          <div className="prose prose-lg md:prose-xl prose-green text-gray-600 max-w-none hero-fade-up hero-delay-1">
            
            <p className="lead text-2xl text-gray-800 font-medium leading-relaxed mb-12">
              {product.blogIntro}
            </p>

            {/* BLOG IMAGE 1 - Large Full Width */}
            <div className="my-16 group">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={product.blogImage1} 
                  alt={`${product.title} installation view`} 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out m-0"
                />
              </div>
              <p className="text-center text-sm font-bold text-gray-400 mt-6 uppercase tracking-widest">
                Fig 1. Premium {product.title} Deployment
              </p>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mt-16 mb-8 border-l-8 border-green-500 pl-6">
              {product.blogSection1Title}
            </h3>
            {product.blogSection1Body.split('\n\n').map((para, i) => (
              <p key={i} className="mb-8">{para}</p>
            ))}

            <div className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 my-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-green-100 opacity-20">
                <Zap size={120} />
              </div>
              <h4 className="text-2xl font-bold text-green-800 mb-6 relative z-10">
                {product.blogSection2Title}
              </h4>
              <div className="m-0 relative z-10 text-gray-700 space-y-4">
                {product.blogSection2Body.split('\n\n').map((para, i) => (
                  <p key={i} className="m-0">{para}</p>
                ))}
              </div>
            </div>

            <div className="my-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-green-500 pl-6">
                {product.blogSection3Title}
              </h3>
              {product.blogSection3Body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 mb-6 leading-relaxed">{para}</p>
              ))}
            </div>

            <p className="text-2xl text-green-800 font-bold mt-16 text-center italic border-y border-green-200 py-8">
              "We don't just sell equipment; we engineer permanent solutions to energy crises."
            </p>
          </div>
        </div>
      </section>

      {/* 4) BOTTOM CTA FOOTER */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cc16e47?q=80&w=2070')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Transform Your Energy Future Today
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop relying on an unstable grid. Invest in our premium {product.title.toLowerCase()} and let ECO-SOL ENERGIES secure your power independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-500 transition-all shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:shadow-[0_0_50px_rgba(22,163,74,0.7)]"
            >
              Request Enterprise Quote
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="bg-transparent text-white border-2 border-green-600/50 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-green-600/10 hover:border-green-500 transition-all"
            >
              Explore More Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
