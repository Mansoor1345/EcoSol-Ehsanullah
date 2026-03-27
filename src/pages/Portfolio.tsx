import { useState, useEffect } from 'react';
import { Building2, Home, MapPin, Calendar, Zap, X, ChevronRight, CheckCircle2, Wrench, BarChart2, Sun } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: string) => void;
}

interface Project {
  type: string;
  icon: React.ElementType;
  title: string;
  location: string;
  capacity: string;
  year: string;
  description: string;
  image: string;
  details: {
    overview: string;
    scope: string[];
    systemSpecs: string[];
    outcome: string;
    timeline: string;
  };
}

const projects: Project[] = [
  {
    type: 'Residential',
    icon: Home,
    title: 'Modern Home Solar Installation',
    location: 'DHA Phase 6, Karachi',
    capacity: '12 kW',
    year: '2025',
    description:
      'Complete on-grid solar system with premium monocrystalline panels and hybrid inverter, delivering maximum energy savings for a contemporary Karachi residence.',
    image: '/images/Images/1.jpeg',
    details: {
      overview:
        `This prestigious residential project in DHA Phase 6, one of Karachi's most upscale neighbourhoods, involved the design and full turnkey installation of a 12 kW on-grid hybrid solar system. The homeowner was facing monthly electricity bills exceeding PKR 85,000 during peak summer months, driven by continuous AC usage across 5 split units. ECO-SOL ENERGIES conducted a thorough site audit, load analysis, and shading assessment before proposing a bespoke system architecture that maximises solar harvest on the southwest-facing roof.`,
      scope: [
        'Full load and shading analysis across the rooftop surface',
        'Structural mounting design to accommodate 30 monocrystalline panels',
        'Integration of a 12 kW hybrid inverter with real-time Wi-Fi monitoring',
        'Net-metering application and approval through K-Electric',
        'Commissioning, testing, and 12-month post-installation monitoring',
      ],
      systemSpecs: [
        '30 � 400 W Tier-1 monocrystalline PV modules',
        '12 kW Solis Hybrid Inverter with MPPT tracking',
        'Bi-directional K-Electric green meter (Net Metering)',
        'Galvanized steel rooftop mounting structures',
        'Remote monitoring via Solis Cloud mobile app',
      ],
      outcome:
        `Following commissioning, the household's monthly bill dropped from PKR 85,000 to under PKR 8,000 � a reduction exceeding 90%. Surplus generation during off-peak hours is exported back to the grid, accumulating credits that fully offset the remaining utility charges in winter months. The system's estimated ROI period is 2.8 years.`,
      timeline: 'Installation completed in 4 working days. Net-metering approval secured within 6 weeks.',
    },
  },
  {
    type: 'Residential',
    icon: Home,
    title: 'Family Villa Solar Solution',
    location: 'Clifton, Karachi',
    capacity: '10 kW',
    year: '2025',
    description:
      'Hybrid solar system with battery backup providing complete energy independence and uninterrupted power supply for a spacious family home.',
    image: '/images/Images/9.jpeg',
    details: {
      overview:
        `This Clifton villa project was driven by the client's frustration with Karachi's chronic load-shedding, which was disrupting a home office and academic routines. ECO-SOL ENERGIES designed a 10 kW hybrid system coupled with a 20 kWh lithium battery bank, enabling entirely seamless, uninterrupted power through even the longest grid outages. The system intelligently prioritises solar generation, stores excess in the battery wall, and only draws from the grid as a last resort.`,
      scope: [
        'Energy independence assessment and load prioritisation mapping',
        'Hybrid inverter and lithium battery bank sizing',
        'Indoor battery wall installation in a ventilated utility room',
        'Smart load management configuration for critical vs non-critical circuits',
        'Full commissioning and family orientation on the monitoring dashboard',
      ],
      systemSpecs: [
        '25 � 400 W Jinko monocrystalline panels',
        '10 kW Growatt Hybrid Inverter',
        '20 kWh Lithium Iron Phosphate (LiFePO4) battery wall',
        'Automatic Transfer Switch (ATS) for sub-10ms UPS transition',
        'Growatt ShinePhone mobile monitoring app',
      ],
      outcome:
        `The family now experiences zero power interruptions regardless of K-Electric's load-shedding schedule. The system covers 100% of daytime consumption and supports 6�8 hours of overnight load from the battery bank. Monthly utility bills have reduced by approximately 82%, and the home office now operates without any UPS-related disruptions.`,
      timeline: 'Installation completed in 5 working days. Battery wall fully commissioned on Day 5.',
    },
  },
  {
    type: 'Residential',
    icon: Home,
    title: 'Urban Apartment Solar System',
    location: 'Gulshan-e-Iqbal, Karachi',
    capacity: '8 kW',
    year: '2025',
    description:
      'Efficient on-grid rooftop solar installation optimized for urban living with smart monitoring and net metering.',
    image: '/images/Images/8.jpeg',
    details: {
      overview:
        'Urban apartment solar installations present unique logistical challenges: limited roof space shared across multiple units, complex structural constraints, and tenant agreements. For this 8-unit Gulshan-e-Iqbal apartment block, ECO-SOL ENERGIES coordinated with the building management committee to design an 8 kW on-grid system dedicated to the top-floor owner. The system was engineered to maximise output from a constrained 400 sq ft usable rooftop area.',
      scope: [
        'Multi-party coordination with building management for roof access rights',
        'Space-optimised panel layout using high-density 410 W modules',
        'Dedicated AC cabling pathway from rooftop to apartment DB',
        `Net-metering application with HESCO under the apartment owner's connection`,
        'Smart monitoring integration with 24-month performance guarantee',
      ],
      systemSpecs: [
        '20 � 410 W high-density monocrystalline PV modules',
        '8 kW Huawei SUN2000 on-grid inverter',
        'Dedicated single-phase bi-directional green meter',
        'Armoured AC cabling with IP65 weatherproof conduit',
        'Huawei FusionSolar monitoring portal',
      ],
      outcome:
        `Despite the roof-space limitation, the 8 kW system generates approximately 1,100�1,300 kWh per month in Karachi's favourable solar irradiance. This covers 78% of the apartment's monthly consumption. The owner recovered their investment cost in under 3 years, with the system warranted for 25 years at 80%+ output performance.`,
      timeline: 'Installation completed in 3 working days with minimal disruption to other residents.',
    },
  },
  {
    type: 'Residential',
    icon: Home,
    title: 'Spacious Bungalow Solar Project',
    location: 'Bahria Town, Karachi',
    capacity: '18 kW',
    year: '2024',
    description:
      'Full rooftop solar system with high-efficiency panels, significantly reducing electricity bills while ensuring reliable power.',
    image: '/images/Images/14.jpeg',
    details: {
      overview:
        `Bahria Town Karachi's meticulously planned infrastructure and wide, flat rooftops make it one of the best localities for large-scale residential solar deployments. This 18 kW system was ECO-SOL ENERGIES' largest bungalow installation to date in the community. The client operated a large household of 12 family members with extensive utility loads including a central air-conditioning system, a swimming pool pump, and a home theatre. A thorough 7-day energy audit was performed before system design was finalised.`,
      scope: [
        '7-day IoT-based energy audit across all circuits',
        'Phase-balanced three-phase 18 kW system architecture',
        'Installation of 44 high-efficiency panels across two roof elevations',
        'Full DB upgrade to accommodate solar circuit breakers',
        `NET metering through Bahria Town's internal utility grid management`,
      ],
      systemSpecs: [
        '44 � 415 W LONGI Hi-MO monocrystalline panels',
        '18 kW three-phase Sungrow on-grid inverter',
        'Phase-balanced surge-protected distribution board',
        'Aluminium anodised mounting rails with anti-wind load certification',
        'iSolarCloud remote performance dashboard',
      ],
      outcome:
        'Monthly utility bills dropped from an average of PKR 145,000 to under PKR 12,000. The three-phase system handles all major appliance loads simultaneously with no performance degradation. The swimming pool pump now operates fully on solar power during daylight, contributing to an additional PKR 18,000 monthly saving beyond electricity bills.',
      timeline: 'Full installation completed across 6 working days. Performance verified over 90-day monitoring period.',
    },
  },
  {
    type: 'Residential',
    icon: Home,
    title: 'Townhouse Solar Installation',
    location: 'North Nazimabad, Karachi',
    capacity: '7 kW',
    year: '2024',
    description:
      'Compact yet powerful solar setup designed for modern townhouses with excellent performance in Karachi\'s climate.',
    image: '/images/Images/10.jpeg',
    details: {
      overview:
        `North Nazimabad's dense urban fabric means townhouses are often sandwiched between taller structures, creating partial shading challenges particularly in morning and late-afternoon hours. ECO-SOL ENERGIES deployed shade-resistant PERC (Passivated Emitter and Rear Contact) technology for this 7 kW system, combined with module-level power electronics that ensure each panel operates at its individual maximum power point regardless of neighbouring shading.`,
      scope: [
        'Detailed shading analysis using drone photogrammetry and sun-path simulation',
        'Module-level power optimiser integration for shade mitigation',
        'Compact rooftop layout using portrait-orientation high-density modules',
        'Single-phase on-grid inverter installation with oversize AC protection',
        'First-year performance baseline report and annual checkup agreement',
      ],
      systemSpecs: [
        '18 � 390 W PERC bifacial modules with rear-surface light harvesting',
        '7 kW SolarEdge HD-Wave on-grid inverter',
        'SolarEdge P401 module-level power optimisers on each panel',
        'Single-phase bi-directional K-Electric green meter',
        'SolarEdge monitoring portal with panel-level diagnostics',
      ],
      outcome:
        `Despite shading constraints, the system achieves 93% of the theoretical maximum output � exceptional for an urban townhouse installation. The homeowner's monthly DISCO bill reduced by 68%. The optimiser technology also provides a unique safety benefit: the roof-level wiring de-energises automatically when the inverter is switched off, ensuring safe maintenance access.`,
      timeline: 'Completed in 2.5 working days. Module-level optimiser configuration validated on Day 3.',
    },
  },
  {
    type: 'Commercial',
    icon: Building2,
    title: 'Office Complex Solar Installation',
    location: 'PECHS, Karachi',
    capacity: '50 kW',
    year: '2025',
    description:
      'Large-scale grid-tied commercial solar system with net metering and advanced monitoring, dramatically lowering operational energy costs.',
    image: '/images/Images/b2.jpeg',
    details: {
      overview:
        `The PECHS commercial district is one of Karachi's most electricity-intensive business hubs. This 5-storey office complex housed 12 tenants with combined peak demand exceeding 65 kVA. ECO-SOL ENERGIES was engaged to design a 50 kW three-phase on-grid system that could be ring-fenced as a common-area amenity, with proportional energy savings distributed across tenant electricity sub-metering. The project involved complex DB reconfiguration and NEPRA-compliant documentation.`,
      scope: [
        'Commercial energy audit across all 12 tenant units and common areas',
        'Three-phase 50 kW system layout across the flat commercial rooftop',
        'NEPRA and K-Electric commercial net-metering licence procurement',
        'DB modification and dedicated solar feeder panel installation',
        'Tenant sub-metering integration for proportional savings distribution',
        'Commercial-grade aluminium racking with wind-load engineering certificate',
      ],
      systemSpecs: [
        '120 � 420 W Jinko Tiger Pro monocrystalline panels',
        '50 kW Sungrow SG50CX three-phase commercial inverter',
        'Commercial-grade bi-directional green meter with SCADA integration',
        'Heavy-duty galvanised steel ballasted mounting system (non-penetrating)',
        'Commercial SCADA dashboard with multi-user access control',
      ],
      outcome:
        `The complex's common area electricity costs dropped by PKR 220,000 monthly. Individual tenants benefiting from the proportional credit system reported 30�45% reductions on their sub-metered bills. The building management now markets the solar installation as a premium amenity, commanding 12% higher rental rates for vacant units. System payback period: 3.2 years.`,
      timeline: 'Installation completed across 8 working days. Commercial net-metering licence secured in 11 weeks.',
    },
  },
  {
    type: 'Commercial',
    icon: Building2,
    title: 'Retail Outlet Solar Project',
    location: 'Korangi, Karachi',
    capacity: '35 kW',
    year: '2024',
    description:
      'High-capacity commercial solar installation providing clean energy and substantial monthly savings for a busy retail space.',
    image: '/images/Images/11.jpeg',
    details: {
      overview:
        `The Korangi industrial-commercial corridor is notorious for its aggressive power demand and frequent utility disruptions, making it one of Karachi's most challenging environments for retail operations. This large-format retail outlet was experiencing monthly electricity expenditure of PKR 380,000 while simultaneously losing revenue during unscheduled outages that disrupted point-of-sale systems and refrigeration. ECO-SOL ENERGIES designed a 35 kW on-grid system with a dedicated 30 kWh battery backup wing for critical loads.`,
      scope: [
        'Critical load mapping (POS systems, refrigeration, security, lighting)',
        '35 kW on-grid solar system on industrial commercial rooftop',
        '30 kWh LiFePO4 battery wing for critical load backup',
        'Anti-islanding protection with automatic grid re-sync',
        'WAPDA three-phase commercial net-metering documentation',
        'Cable management through existing cable trays and conduit routes',
      ],
      systemSpecs: [
        '84 � 420 W LONGi monocrystalline commercial panels',
        '35 kW Huawei three-phase commercial string inverter',
        '30 kWh CATL LiFePO4 battery backup system',
        'Industrial IP65-rated inverter and combiner box enclosures',
        'Huawei FusionSolar commercial monitoring with anomaly alerts',
      ],
      outcome:
        'Monthly electricity expenditure dropped from PKR 380,000 to PKR 62,000 � an 84% cost reduction. The battery backup system has successfully maintained uninterrupted POS and refrigeration operations through 47 recorded grid outages in the 9 months since commissioning, preventing an estimated PKR 1.8 million in potential revenue loss. The system is on track to fully recover its capital cost within 26 months.',
      timeline: 'Rooftop installation: 7 working days. Battery system integration: 2 additional days. Full commissioning: Day 10.',
    },
  },
];

const stats = [
  { value: '500+', label: 'Completed Projects' },
  { value: '50MW+', label: 'Total Capacity Installed' },
  { value: '15+', label: 'Cities Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const badgeColors: Record<string, string> = {
  Residential: 'bg-green-100 text-green-700',
  Commercial: 'bg-yellow-100 text-yellow-700',
};

/* -- Project Modal -- */
function ProjectModal({
  project,
  onClose,
  onNavigate,
}: {
  project: Project;
  onClose: () => void;
  onNavigate: (p: string) => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ background: 'rgba(5,28,14,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] md:max-h-[88vh] bg-white md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-modal-up"
        onClick={e => e.stopPropagation()}
      >
        {/* -- Compact header bar (no image, no big title) -- */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-gray-100 flex-shrink-0 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Sun size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest">ECO-SOL ENERGIES � Project Detail</p>
              <p className="text-[11px] text-gray-400 flex items-center gap-1 mt-0.5">
                <MapPin size={11} /> {project.location}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* -- Scrollable Body -- */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* LEFT � main content */}
            <div className="lg:col-span-2 p-6 md:p-10 space-y-8 border-r border-gray-100">

              {/* Meta chips */}
              <div className="flex flex-wrap gap-2">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${badgeColors[project.type] ?? 'bg-gray-100 text-gray-700'}`}>
                  {project.type}
                </span>
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Zap size={12} /> {project.capacity}
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Calendar size={12} /> {project.year}
                </span>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <BarChart2 size={20} className="text-green-600" /> Project Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{project.details.overview}</p>
              </div>

              {/* Scope of Work */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Wrench size={20} className="text-green-600" /> Scope of Work
                </h3>
                <ul className="space-y-2">
                  {project.details.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-3">
                      <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-2xl p-6">
                <h3 className="text-base font-bold text-yellow-400 mb-3">Project Outcome</h3>
                <p className="text-green-50 text-sm leading-relaxed">{project.details.outcome}</p>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 rounded-xl px-5 py-3 border border-gray-100">
                <Calendar size={16} className="text-green-600 flex-shrink-0" />
                <span>{project.details.timeline}</span>
              </div>
            </div>

            {/* RIGHT � sidebar */}
            <div className="lg:col-span-1 p-6 md:p-8 flex flex-col gap-6 bg-gray-50/70">

              {/* System Specs */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-base font-bold text-gray-900 mb-4">System Specifications</h3>
                <ul className="space-y-3">
                  {project.details.systemSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                      <span className="text-gray-600 text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-start gap-3">
                <MapPin size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-gray-800 font-semibold text-sm">{project.location}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Karachi, Pakistan</p>
                </div>
              </div>

              {/* Get Quote CTA */}
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
                ? Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -- Main Page -- */
export default function Portfolio({ onNavigate }: PortfolioProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="bg-white pt-32">

      {/* -- Hero (unchanged) -- */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powering Pakistan<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              One Project at a Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our successful solar installations across residential, commercial, and industrial sectors
          </p>
        </div>
      </section>

      {/* -- Stats Bar (unchanged) -- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- 7-project Grid -- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(project)}
                className="text-left bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group hero-fade-up flex flex-col focus:outline-none focus:ring-4 focus:ring-green-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${badgeColors[project.type] ?? 'bg-gray-100 text-gray-700'}`}>
                      {project.type}
                    </span>
                  </div>
                  {/* Capacity chip */}
                  <div className="absolute bottom-4 right-4 z-20 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-lg shadow">
                    {project.capacity}
                  </div>
                  {/* Click hint */}
                  <div className="absolute top-3 right-3 z-20 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </div>

                {/* Card body */}
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-5 border-t border-gray-100 pt-4 space-y-2">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={15} className="mr-2 text-green-600 flex-shrink-0" />
                      {project.location}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-gray-500">
                        <Calendar size={15} className="mr-2 text-green-600" />
                        {project.year}
                      </span>
                      <span className="flex items-center text-green-700 font-semibold">
                        <Zap size={14} className="mr-1" />
                        {project.capacity} System
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    <span>View Full Details</span>
                    <ChevronRight size={17} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* -- Bottom CTA (unchanged) -- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Solar Journey
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have switched to clean, sustainable solar energy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold hover:bg-green-50 transition-all shadow-xl hover:shadow-2xl text-lg"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all text-lg"
              >
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* -- Modal overlay -- */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
