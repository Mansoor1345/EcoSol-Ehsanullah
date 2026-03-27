import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, HelpCircle, PhoneCall, Mail } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What are the benefits of installing solar panels?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Save money on your electricity bills</li>
        <li>Protects you from unpredictable rise in electricity prices</li>
        <li>Reduce your carbon footprint</li>
        <li>Increase the value of your home</li>
        <li>Become more energy independent</li>
      </ul>
    )
  },
  {
    question: "What factors should I consider before installing a solar system in Pakistan?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Available sunlight:</strong> Assess the amount of sunlight your location receives throughout the year to determine the solar potential.</li>
        <li><strong>Roof suitability:</strong> Ensure your roof is structurally sound and has adequate space and orientation for solar panels.</li>
        <li><strong>Energy consumption:</strong> Analyze your household or business's energy needs to determine the size of the solar system required.</li>
        <li><strong>Budget:</strong> Determine your budget for the solar installation, considering both upfront costs and long-term savings.</li>
        <li><strong>Government policies:</strong> Stay informed about government policies, subsidies, and incentives for solar energy to maximize financial benefits.</li>
      </ul>
    )
  },
  {
    question: "How many kW system should I install?",
    answer: "The size of the solar system you need depends on your average electricity usage and available roof space. A typical home might require a 5kW to 10kW system, but this can vary. A professional assessment can determine the ideal size for your needs."
  },
  {
    question: "Can off-grid systems provide backup power and run appliances?",
    answer: "Yes, off-grid systems can provide backup power during grid outages using battery storage. However, the capacity of the system and the number of appliances it can run depend on factors such as battery capacity and energy consumption."
  },
  {
    question: "What appliances can a 5 kW solar system run?",
    answer: "5 kW solar system can power essential appliances like 10 lights, 5 fans, 1 refrigerator, 1 computer, 1 LED TV, 1 AC and small kitchen appliances."
  },
  {
    question: "What is the formula for calculating annual unit generation?",
    answer: "The formula is Annual Unit Generation = kW (Installed) × 4.5 × 320"
  },
  {
    question: "What maintenance is required for a solar system installed in Pakistan?",
    answer: "Solar systems generally require minimal maintenance, but regular upkeep can ensure optimal performance and longevity. Routine tasks may include cleaning solar panels to remove dust, debris, or bird droppings, especially during dry seasons. Inspecting the system for any signs of damage, such as loose connections or worn-out components, is also recommended. Additionally, monitoring energy production through the system's monitoring software or app can help identify any performance issues early on. It's advisable to schedule periodic professional inspections and servicing to address any potential issues promptly."
  },
  {
    question: "Do solar panels work in the rainy and cloudy weather?",
    answer: "Yes, but their efficiency is reduced. Solar panels can still generate some electricity in rainy or cloudy conditions, although their output is lower compared to sunny days."
  },
  {
    question: "What is the cost of installing a solar system in Pakistan?",
    answer: "The cost of installing a solar system in Pakistan can vary depending on factors such as the size of the system, type of solar panels, quality of components, and installation labor costs. On average, for a residential solar system, the cost can range from PKR 100,000 to PKR 200,000 per kilowatt (kW) installed capacity."
  },
  {
    question: "What is the average payback period for a solar system in Pakistan?",
    answer: "The average payback period for a solar system in Pakistan typically ranges from 3 to 6 years, depending on factors such as system size, electricity consumption, solar irradiance in the region, and the cost of electricity from the grid. With government incentives and net metering, the payback period can be shorter."
  },
  {
    question: "What government incentives are available for installing solar panels in Pakistan?",
    answer: "The Government of Pakistan offers various incentives to promote solar energy adoption, including upfront subsidies, tax exemptions or rebates, and low-interest loans for solar installations. Additionally, net metering policies allow solar system owners to sell excess electricity back to the grid at favorable rates."
  },
  {
    question: "How does net metering work in Pakistan, and how can I benefit from it?",
    answer: "Net metering allows solar system owners to export excess electricity generated by their solar panels to the grid and receive credits for it. These credits can be used to offset electricity consumption from the grid during times when solar production is insufficient, effectively reducing electricity bills."
  },
  {
    question: "What are the different types of solar panels available in Pakistan, and which one is most suitable for my needs?",
    answer: "The main types of solar panels available in Pakistan are monocrystalline, polycrystalline, and thin-film. Monocrystalline panels are known for their high efficiency and space efficiency, making them suitable for limited roof space. Polycrystalline panels are cost-effective and perform well in high-temperature environments. Thin-film panels are lightweight and flexible, suitable for unconventional installations."
  },
  {
    question: "How long do solar panels last in Pakistan's climate, and what maintenance is required?",
    answer: "Solar panels are durable and typically come with warranties ranging from 25 to 30 years. With proper maintenance, including periodic cleaning to remove dust and debris, solar panels can continue to generate electricity efficiently for decades in Pakistan’s climate."
  },
  {
    question: "Are there any specific regulations or permits required for installing solar panels on residential or commercial properties in Pakistan?",
    answer: "Yes, certain regulations and permits may be required for installing solar panels in Pakistan, including approval from the relevant utility company and local authorities. It’s essential to consult with a qualified solar installer to ensure compliance with all regulations and obtain necessary permits before installation."
  },
  {
    question: "What is the efficiency of solar panels in Pakistan, especially during cloudy or rainy seasons?",
    answer: "Solar panel efficiency refers to the ability of panels to convert sunlight into electricity. While solar panel efficiency may decrease slightly during cloudy or rainy seasons, modern solar panels are designed to perform well even under diffuse sunlight conditions. Overall, solar panels in Pakistan can still generate a significant amount of electricity throughout the year."
  },
  {
    question: "What's the difference between Off-Grid, Hybrid and On-Grid solar systems?",
    answer: (
      <div className="space-y-4">
        <p><strong>Grid-Tied (On-Grid) Solar Systems:</strong> Grid-tied solar systems are connected to the electrical grid and do not have battery storage. They generate electricity when the sun is shining, and any excess power is exported to the grid. These systems can significantly reduce electricity bills and may allow for net metering, where excess energy exported to the grid is credited.</p>
        <p><strong>Off-Grid Solar Systems:</strong> Off-grid solar systems are standalone systems that are not connected to the electrical grid. They typically include solar panels, a charge controller, batteries for energy storage, and an inverter. Off-grid systems are commonly used in remote areas where grid connection is not feasible or cost-effective, such as cabins, remote villages, or mobile homes.</p>
        <p><strong>Hybrid Solar Systems:</strong> Hybrid solar systems combine elements of both grid-tied and off-grid systems. They are connected to the grid but also have battery storage to store excess energy generated during the day for use at night or during power outages. Hybrid systems offer the benefits of grid-tied systems while providing backup power in case of grid failures.</p>
      </div>
    )
  },
  {
    question: "What is the future of solar power in Pakistan?",
    answer: "The future of solar power in Pakistan is very bright. Solar power is a clean, renewable energy source that can help Pakistan to reduce its reliance on fossil fuels and improve its energy security."
  }
];

interface FAQProps {
  onNavigate: (page: string) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Splitting FAQs into two columns properly
  const half = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-green-900 py-32 sm:py-40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-1e5828edb6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Solar Panels Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-green-900/60 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center hero-fade-up">
          <div className="inline-flex items-center space-x-2 bg-green-800/50 rounded-full px-4 py-2 mb-8 backdrop-blur-sm border border-green-700">
            <HelpCircle className="text-yellow-400" size={20} />
            <span className="text-green-50 font-medium tracking-wide">Help Center</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-green-100 leading-relaxed drop-shadow">
            Everything you need to know about switching to solar, net metering, costs, and the future of renewable energy in Pakistan.
          </p>
        </div>
      </section>

      {/* Main Content - 2 Column Layout */}
      <section className="py-24 relative -mt-16 z-10 max-w-[90rem] mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column */}
          <div className="space-y-6">
            {leftFaqs.map((faq, index) => {
              const isActive = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 hero-fade-up ${
                    isActive ? 'border-green-500 shadow-green-100/50 shadow-xl scale-[1.02] z-10 relative' : 'border-gray-100 hover:border-green-300 hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isActive ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-colors ${isActive ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500'}`}>
                      <ChevronDown 
                        size={24} 
                        className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`} 
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightFaqs.map((faq, globalIndex) => {
              const actualIndex = globalIndex + half;
              const isActive = openIndex === actualIndex;
              return (
                <div 
                  key={actualIndex} 
                  className={`bg-white rounded-2xl shadow-sm border transition-all duration-300 hero-fade-up ${
                    isActive ? 'border-green-500 shadow-green-100/50 shadow-xl scale-[1.02] z-10 relative' : 'border-gray-100 hover:border-green-300 hover:shadow-md'
                  }`}
                  style={{ animationDelay: `${globalIndex * 50}ms` }}
                >
                  <button
                    onClick={() => toggleAccordion(actualIndex)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                  >
                    <span className={`text-lg md:text-xl font-bold pr-8 transition-colors ${isActive ? 'text-green-700' : 'text-gray-900 group-hover:text-green-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`p-2 rounded-full transition-colors ${isActive ? 'bg-green-100 text-green-600' : 'bg-gray-50 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500'}`}>
                      <ChevronDown 
                        size={24} 
                        className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'}`} 
                      />
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Support Block integrated into Right Column */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl p-8 md:p-10 text-white mt-12 hero-fade-up" style={{ animationDelay: '500ms' }}>
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-green-100 mb-8 text-lg">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-white text-green-700 px-6 py-4 rounded-xl font-bold flex items-center justify-center hover:bg-green-50 transition-colors shadow-lg"
                >
                  <PhoneCall size={20} className="mr-3" /> Get in Touch
                </button>
                <div className="flex items-center justify-center pt-4 opacity-80 text-sm">
                  <Mail size={16} className="mr-2" />
                  ecosolenergiespak@gmail.com
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 border-t border-gray-100 text-center px-6">
        <div className="max-w-3xl mx-auto hero-fade-up">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Ready to make the switch?</h2>
          <p className="text-xl text-gray-600 mb-10">Start saving on your energy bills today with our premium solar solutions.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-yellow-400 text-green-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg inline-flex items-center group"
          >
            Request a Quote
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
