import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-transparent flex items-center justify-center overflow-visible">
                <img src="/images/Images/Logo png.png" alt="ECO-SOL ENERGIES" className="w-full h-full object-contain scale-[1.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">ECO-SOL ENERGIES</span>
                <span className="text-xs text-green-400 font-medium">
                  WE BRIGHTEN UP YOUR HOMES
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pakistan's premium solar energy provider, delivering cutting-edge solar solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ecosolenergiesproducts/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Products', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Solar Panels', id: 'solar-panels' },
                { name: 'Solar Inverters', id: 'solar-inverters' },
                { name: 'Solar Batteries', id: 'solar-batteries' },
                { name: 'Solar Water Pumps & Inverters', id: 'solar-water-pumps-inverters' },
                { name: 'Solar Street Lights & Garden Lights', id: 'solar-street-lights-garden-lights' },
                { name: 'Portable Solar Generators & DC Kits', id: 'portable-solar-generators-dc-kits' },
                { name: 'Smart Hybrid Water Geysers', id: 'smart-hybrid-water-geysers' },
                { name: 'EV Vehicle Charger', id: 'ev-vehicle-charger' },
                { name: 'Patio Heaters', id: 'patio-heaters' },
                { name: 'Solar Roof Mountings', id: 'solar-roof-mountings' },
                { name: 'Solar System Accessories', id: 'solar-system-accessories' },
              ].map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(`product-${id}`)}
                    className="text-gray-400 hover:text-green-400 transition-colors text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Karachi, Pakistan</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:ecosolenergiespak@gmail.com"
                  className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  ecosolenergiespak@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">+92 335 3444801</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            {currentYear} ECO-SOL ENERGIES. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <button onClick={() => onNavigate('privacy')} className="text-gray-400 hover:text-green-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('terms')} className="text-gray-400 hover:text-green-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
