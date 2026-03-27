import { Target, Eye, Award, Users, CheckCircle, TrendingUp } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on the quality of our products and services.',
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction and energy goals are at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results on every project.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with the latest solar technology and solutions.',
    },
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded', description: 'ECO-SOL ENERGIES established in Karachi' },
    { year: '2017', event: '100+ Projects', description: 'Completed our 100th solar installation' },
    { year: '2020', event: 'Nationwide Expansion', description: 'Expanded services across Pakistan' },
    { year: '2023', event: '50MW Milestone', description: 'Achieved 50MW+ total installed capacity' },
    { year: '2025', event: 'Industry Leader', description: 'Recognized as premium solar provider' },
  ];

  const team = [
    {
      role: 'Technical Expertise',
      description: 'Certified engineers with 10+ years of solar installation experience',
    },
    {
      role: 'Quality Assurance',
      description: 'Rigorous testing and quality control at every stage',
    },
    {
      role: 'Customer Support',
      description: '24/7 support team ensuring your solar system runs smoothly',
    },
  ];

  return (
    <div className="bg-white pt-32">
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Leading Pakistan's<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Solar Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A decade of excellence in delivering premium solar energy solutions across Pakistan
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  ECO-SOL ENERGIES is Pakistan's premier solar energy company, headquartered in Karachi. Since 2014, we have been at the forefront of the country's transition to clean, renewable energy.
                </p>
                <p>
                  We specialize in providing high-quality solar panels, advanced inverters, and complete solar power systems for residential, commercial, and industrial clients across Pakistan.
                </p>
                <p>
                  Our commitment to excellence, combined with cutting-edge technology and unparalleled customer service, has made us the trusted choice for hundreds of satisfied clients.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                <Eye size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                <p className="text-green-100 leading-relaxed">
                  To be Pakistan's leading solar energy provider, empowering every home and business with clean, sustainable, and affordable energy solutions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl p-8 text-gray-900">
                <Target size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-800 leading-relaxed">
                  To deliver premium solar solutions that exceed expectations, reduce energy costs, and contribute to a cleaner, greener Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A decade of growth, innovation, and impact
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 text-center lg:text-right">
                    <div className="bg-white p-6 rounded-2xl shadow-lg inline-block">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <CheckCircle className="text-green-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-green-100 mb-12">
            Join us in building a sustainable future powered by clean solar energy
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-green-700 px-12 py-5 rounded-lg font-bold hover:bg-green-50 transition-all shadow-2xl hover:shadow-3xl text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
