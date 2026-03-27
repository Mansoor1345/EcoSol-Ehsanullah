import { ChevronRight } from 'lucide-react';
import { productsData } from '../data/products';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  // Removed manual brands array as the user provided a full-width image.

  return (
    <div className="bg-white pt-32">
      {/* OUR PRODUCTS HERO - Untouched */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Our Products
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Premium Solar<br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 ml-0 sm:ml-3">
              Products & Components
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We trade only the highest quality solar equipment from world-renowned manufacturers
          </p>
        </div>
      </section>

      {/* NEW 11-CARD PRODUCTS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                
                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <h2 className="text-2xl font-bold text-green-800 mb-3 line-clamp-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 mb-8 line-clamp-2 text-lg">
                    {product.shortDescription}
                  </p>
                  
                  {/* Read More Button forced to bottom */}
                  <div className="mt-auto">
                    <button
                      onClick={() => onNavigate(`product-${product.id}`)}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-bold hover:from-green-700 hover:to-green-800 transition-all shadow-md hover:shadow-lg"
                    >
                      Read More <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS - Untouched */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We partner with world-leading manufacturers to bring you the best quality products
            </p>
          </div>

          <div className="w-full flex justify-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <img 
              src="/images/trusted-brands.png" 
              alt="Our Trusted Partner Brands" 
              className="w-full max-w-5xl h-auto object-contain hero-fade-up"
            />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA - Untouched */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-6 sm:p-12 md:p-16 text-center shadow-2xl mx-1 sm:mx-0">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-1 sm:px-0">
              Need Product <br className="sm:hidden" />Recommendations?
            </h2>
            <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0 leading-snug sm:leading-normal">
              Our experts will help you choose the perfect products for your solar installation
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-white text-green-700 px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-bold hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg"
            >
              Speak with an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
