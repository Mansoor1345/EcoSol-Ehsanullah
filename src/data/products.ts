export interface Product {
  id: string;
  title: string;
  image: string;
  blogImage1: string;
  shortDescription: string;
  longDescription: string;
  specs: string[];

  blogTitle: string;
  blogIntro: string;
  blogSection1Title: string;
  blogSection1Body: string;
  blogSection2Title: string;
  blogSection2Body: string;
  blogSection3Title: string;
  blogSection3Body: string;
}

export const productsData: Product[] = [
  {
    id: 'solar-panels',
    title: 'Solar Panels',
    image: 'https://images.pexels.com/photos/6876536/pexels-photo-6876536.jpeg',
    blogImage1: 'https://images.pexels.com/photos/4320475/pexels-photo-4320475.jpeg',
    shortDescription: 'Monocrystalline solar panels with cell efficiency of more than 25%.',
    longDescription: 'ECO-SOL ENERGIES provide best quality Tier-1 solar Panels with the cell efficiency of more than 25% along with strong and good mechanical strength.',
    specs: ['Tier-1 Monocrystalline Tech', 'Over 25% Cell Efficiency', 'High Mechanical Load Tolerance', '25-Year Performance Warranty'],
    blogTitle: 'Why Our Solar Panels Lead the Market',
    blogIntro: 'Choosing the right hardware for your energy infrastructure is the difference between a system that barely scrapes by and one that delivers continuous, compounding ROI for decades. At ECO-SOL ENERGIES, we refuse to compromise.',
    blogSection1Title: 'The Engineering Superiority',
    blogSection1Body: 'The modern landscape of renewable energy demands robust, weather-resistant, and hyper-efficient components. Our solar panels are globally recognized for their cutting-edge technological innovations. Not only do they perform exceptionally well under standard testing conditions, but they are practically designed to withstand the harshest environmental extremes—from blistering summer heat waves to intense monsoon humidity.\n\nEvery single unit that passes through the ECO-SOL ENERGIES supply chain undergoes rigorous multi-layer quality assurance tests. We benchmark thermal coefficients, degradation rates, and mechanical tolerance limits far beyond standard regulatory requirements. This obsession with engineering quality is what guarantees completely uninterrupted operational uptime for our corporate clients and homeowners alike.',
    blogSection2Title: 'Unmatched Return on Investment',
    blogSection2Body: 'The initial capital expenditure of shifting to green energy is immediately offset by the sheer durability and efficiency rate of our solar panels. While standard market alternatives degrade quickly over 5 years, our solutions are engineered for decades. This dramatically lowers the levelized cost of energy (LCOE) and drastically shortens your payback period.\n\nOur intelligent financing options further ensure that the switch to solar is immediately cash-flow positive, eliminating the friction of immense upfront costs.',
    blogSection3Title: 'Aesthetic Meets Functionality',
    blogSection3Body: 'We understand that modern architecture demands clean lines and unobtrusive hardware. We refuse to install bulky, industrial eyesores on premium residential or commercial properties. Sleek profiles, matte finishes, and concealed wiring mechanisms are standard.\n\nOnce your system is online, our relationship does not end—it begins. Our dedicated after-sales support networks, preventative maintenance schedules, and real-time remote monitoring guarantee that your system operates at peak theoretical efficiency 365 days a year.'
  },
  {
    id: 'solar-inverters',
    title: 'Solar Inverters',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070',
    blogImage1: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072',
    shortDescription: 'Top brands Solar Inverters including off-Grid, On-Grid & Hybrid.',
    longDescription: 'Solar Inverters ECO-SOL ENERGIES deal in a wide variety of top brands Solar Inverters including off-Grid, On-Grid & Hybrid.',
    specs: ['On-Grid, Off-Grid & Hybrid Models', 'Intelligent Power Management', 'Smart Monitoring Capabilities', 'High Conversion Efficiency'],
    blogTitle: 'The Brains of Your Solar Ecosystem',
    blogIntro: 'An inverter is the heart and brain of any solar installation. It converts raw DC power into usable AC, manages battery storage, and synchronizes with the main grid. ECO-SOL ENERGIES exclusively supplies high-end, highly intelligent inverters.',
    blogSection1Title: 'Unrivaled Conversion Rates',
    blogSection1Body: 'Low-quality inverters bleed efficiency in the form of heat, losing up to 10% of generated power during translation. Our cutting-edge inverters utilize advanced MPPT (Maximum Power Point Tracking) algorithms to convert up to 98% of captured DC energy seamlessly into AC. This ensures zero wastage and maximum output for your appliances.\n\nAdditionally, all our inverters are rated for high-temperature operations and are built with industrial-grade microprocessors that react to load spikes within milliseconds, securing your sensitive electronics.',
    blogSection2Title: 'Smart Grid Syncing',
    blogSection2Body: 'Hybrid and On-grid models feature complex telemetry that monitors grid stability in real time. During outages or voltage drops, Eco-Sol inverters seamlessly island your property, instantly switching to battery or pure solar power without so much as a flicker in your lights.\n\nWith our integrated app-based monitoring, you have real-time access to production charts, consumption metrics, and historical yield data right on your smartphone. Total control lies directly in your hands.',
    blogSection3Title: 'Future-Proof Scalability',
    blogSection3Body: 'Whether you plan to increase your solar array size in the future or integrate EV charging, our inverters are built with scalable architectures. They accommodate firmware updates securely over-the-air, guaranteeing compatibility with future smart-home technologies.\n\nAt ECO-SOL ENERGIES, we do not just sell components; we design modular networks that can grow indefinitely as your energy demands expand.'
  },
  {
    id: 'solar-batteries',
    title: 'Solar Batteries',
    image: 'https://loremflickr.com/1200/800/solar,panels?lock=901',
    blogImage1: 'https://loremflickr.com/1200/800/solar,panels?lock=902',
    shortDescription: 'Deep-cycle systems designed for optimal Hybrid or Off-grid performance.',
    longDescription: 'Solar Batteries ECO-SOL ENERGIES has got the best expertise to design and develop an Off-grid or Hybrid system. We are experienced in the implementation.',
    specs: ['Deep-Cycle Lithium-Ion Options', 'Optimized for Hybrid Systems', 'Long Lifespan & Durability', 'Fast Charging Technology'],
    blogTitle: 'Next-Generation Energy Storage',
    blogIntro: 'Solar power is incredible during the day, but peak consumption often happens after the sun sets. Premium solar batteries from ECO-SOL ENERGIES unlock true off-grid independence and grid resilience during rolling blackouts.',
    blogSection1Title: 'Lithium-Ion Superiority',
    blogSection1Body: 'We have moved beyond obsolete, heavy lead-acid configurations. Our primary product lines focus on Tier-1 Lithium Iron Phosphate (LiFePO4) architecture. These next-generation storage banks feature incredibly deep discharge thresholds—allowing you to use up to 95% of their capacity without harming the battery’s overall lifespan.\n\nCoupled with extreme thermal stability, our batteries are designed to safely operate indoors or outdoors. They pack massively higher energy density into a fraction of the footprint, beautifully blending into modern utility rooms.',
    blogSection2Title: 'Integrated Battery Management',
    blogSection2Body: 'A battery is only as good as its Battery Management System (BMS). Our units come pre-equipped with active cell-balancing CPUs that monitor voltage, internal resistance, and temperatures in real-time. This micro-management guarantees symmetrical charging.\n\nIn practical terms, this completely eliminates the risk of overcharging or thermal runaway, granting our clients unparalleled peace of mind while extending the operational lifespan past 10-15 years.',
    blogSection3Title: 'Total Grid Independence',
    blogSection3Body: 'With an ECO-SOL ENERGIES hybrid or off-grid storage system, blackouts become obsolete. The seamless changeover mechanisms guarantee that your critical loads—like refrigerators, Wi-Fi, and security systems—never drop offline.\n\nStore massive amounts of cheap daytime solar energy and dispatch it during expensive peak utility hours. The batteries effectively pay for themselves by flattening your time-of-use tariffs.'
  },
  {
    id: 'solar-water-pumps-inverters',
    title: 'Solar Water Pumps & Inverters',
    image: 'https://images.pexels.com/photos/29206499/pexels-photo-29206499.jpeg',
    blogImage1: 'https://images.pexels.com/photos/9875439/pexels-photo-9875439.jpeg',
    shortDescription: '12-volt DC battery systems for off-grid water pumping and basic DC loads.',
    longDescription: 'Solar Water Pumps & Inverters Eco-Sol’s DC Solar kit is a 12-volt battery system, mostly used for small application such as battery charging or running basic DC load. This system is suitable for areas with no Utility.',
    specs: ['12-Volt DC System', 'Off-Grid Agricultural Ready', 'Durable Pump Build', 'High Flow Rate Efficiency'],
    blogTitle: 'Transforming Agriculture with Solar Pumping',
    blogIntro: 'Access to reliable water shouldn\'t be defined by your proximity to a volatile electrical grid. ECO-SOL ENERGIES provides industrialized solar water pumping systems designed to irrigate farmlands and supply residential reservoirs entirely off the grid.',
    blogSection1Title: 'High Output, Zero Fuel',
    blogSection1Body: 'Diesel generators to run tube wells and pumps are environmentally toxic and financially disastrous due to fluctuating fuel prices. Our solar water pump setups directly harvest DC energy from a dedicated panel array to power highly efficient submersible or surface pumps immediately.\n\nWith specialized Variable Frequency Drive (VFD) solar pump inverters, even weak early morning or late evening sunlight is enough to maintain a steady flow. You achieve maximum water yield with zero recurring operational costs—a pure profit boost for agricultural sectors.',
    blogSection2Title: 'Durable, Rugged Design',
    blogSection2Body: 'Farms and deep boreholes are harsh environments. Our integrated kits are built utilizing stainless steel, rust-proof alloys, and IP68-rated waterproof seals. They are rigorously tested to survive extreme mud, sand infiltration, and heavy water turbulence.\n\nFrom the specialized high-gauge submerged wiring down to the heavy-duty pump impellers, Eco-Sol ensures your water infrastructure runs completely maintenance-free for years.',
    blogSection3Title: 'Seamless Integration',
    blogSection3Body: 'Our 12-volt DC micro-kits are completely modular plug-and-play solutions. Beyond heavy agriculture, they serve incredibly well for remote residential water lifting or even running basic lighting in totally disconnected rural landscapes.\n\nECO-SOL ENERGIES believes in democratizing access to basic necessities; our solar water solutions do exactly that by untethering human progress from fossil fuels.'
  },
  {
    id: 'solar-street-lights-garden-lights',
    title: 'Solar Street Lights & Garden Lights',
    image: 'https://images.pexels.com/photos/18417364/pexels-photo-18417364.jpeg',
    blogImage1: 'https://images.pexels.com/photos/9947312/pexels-photo-9947312.jpeg',
    shortDescription: 'Quality solar street lights and Portable DC Solar Kits to brighten Pakistan.',
    longDescription: 'Solar Street Lights & Garden Lights ECO-SOL ENERGIES is providing solutions for quality solar street lights and Portable DC Solar Kits to brighten Pakistan. Our after-sale support and the reliable network is the complete service package.',
    specs: ['Bright LED Illumination', 'Portable DC Kits Available', 'Dusk-to-Dawn Automation', 'Weather-Resistant Enclosure'],
    blogTitle: 'Lighting the Future, Wirelessly',
    blogIntro: 'Proper illumination guarantees safety, security, and aesthetics for any residential or commercial property. ECO-SOL ENERGIES delivers totally wireless, self-sufficient solar street and garden lighting solutions.',
    blogSection1Title: 'True Dusk-to-Dawn Automation',
    blogSection1Body: 'Say goodbye to complex wiring trenches and manual light switches. Our solar lighting solutions come equipped with intelligent photosensors that detect ambient light levels. They automatically fade on at sunset and fade out at dawn.\n\nFurthermore, many of our premium models include motion activation. They operate at a dim 20% glow to save integrated battery life, springing to intensely bright 100% illumination instantly when perimeter movement is detected.',
    blogSection2Title: 'All-in-One Compact Architecture',
    blogSection2Body: 'Older solar lights required massive separate panels and cumbersome external batteries. Eco-Sol provides ultra-modern "All-in-One" configurations. The high-efficiency LED matrix, the Li-ion battery, and the crystalline solar panel are all seamlessly integrated into one sleek, slimline chassis.\n\nThis makes mounting effortless. They can be clamped onto generic poles or bolted straight onto walls in minutes, providing massive architectural flexibility for gardens, pathways, and commercial parking lots.',
    blogSection3Title: 'Weather Defiant',
    blogSection3Body: 'Lighting exists outdoors; it must survive outdoors. Our entire lighting lineup features IP65+ ingress protection. They are entirely immune to total water immersion from torrential rains, and their heat-dissipating shells prevent LED degradation during blazing summers.\n\nCoupled with ECO-SOL ENERGIES\' dedicated network of after-sales support, you are guaranteed completely reliable ambient luminosity for your perimeter, forever free from the utility bill.'
  },
  {
    id: 'portable-solar-generators-dc-kits',
    title: 'Portable Solar Generators & DC Kits',
    image: 'https://images.pexels.com/photos/30440447/pexels-photo-30440447.jpeg',
    blogImage1: 'https://images.pexels.com/photos/159243/solar-solar-cells-photovoltaic-environmentally-friendly-159243.jpeg',
    shortDescription: 'Portable DC Solar Kits with complete after-sale support.',
    longDescription: 'Portable Solar Generators & DC Kits ECO-SOL ENERGIES is providing solutions for quality solar street lights and Portable DC Solar Kits to brighten Pakistan. Our after-sale support and the reliable network is the complete service package.',
    specs: ['Compact & Rugged Design', 'Plug-and-Play Setup', 'Multiple Output Ports', 'Reliable Emergency Backup'],
    blogTitle: 'Mobile Power on Demand',
    blogIntro: 'Not all critical power needs are anchored to a building. For remote campsites, traveling work crews, or emergency disaster preparedness, ECO-SOL ENERGIES provides hyper-mobile portable solar generators and DC kits.',
    blogSection1Title: 'Infinite Portability',
    blogSection1Body: 'Weighing only a fraction of traditional gas generators, our portable lithium-solar hybrid units are built like rugged suitcases. Without the need for dangerous fuel canisters or deafening motorized noise, they provide massive, clean AC and DC power right at your fingertips.\n\nSimply unfold our lightweight, high-yield portable solar arrays in any sunny spot, plug them into the generator unit, and you immediately begin harvesting pure, silent electricity on the move.',
    blogSection2Title: 'Versatile Output Matrix',
    blogSection2Body: 'These micro-power-plants are equipped with every port imaginable. USB-A, ultra-fast 100W USB-C PD, robust DC carports, and pure-sine wave AC wall outlets exist on a single dashboard.\n\nWhether you need to charge 15 laptops simultaneously, run a CPAP machine overnight in a tent, or power a portable refrigerator at a beachside grill, the smart integrated BMS ensures flawless load distribution without over-taxing the system.',
    blogSection3Title: 'Emergency Readiness',
    blogSection3Body: 'When natural disasters strike or the grid faces multi-day blackouts, having a silent, fuel-free, solar-rechargeable generator is quite literally a lifesaver. \n\nECO-SOL ENERGIES brings absolute power security directly to your trunk. Our portable DC kits guarantee that no matter how far off the beaten path you travel, you are never truly disconnected from reliable electricity.'
  },
  {
    id: 'smart-hybrid-water-geysers',
    title: 'Smart Hybrid Water Geysers',
    image: 'https://images.pexels.com/photos/5953813/pexels-photo-5953813.jpeg',
    blogImage1: 'https://images.pexels.com/photos/5953729/pexels-photo-5953729.jpeg',
    shortDescription: 'Tesla’s super-efficient smart hybrid water geysers and heaters.',
    longDescription: 'Smart Hybrid Water Geysers Tesla’s Smart Water Heater Tesla’s Smart water geysers are basically Hybrid in nature and that quality makes it different and super-efficient.',
    specs: ['Hybrid Heating Technology', 'Super-Efficient Insulation', 'Smart Temperature Control', 'Durable Boiler Tank'],
    blogTitle: 'Redefining Thermal Efficiency',
    blogIntro: 'Water heating usually accounts for massive spikes in monthly utility bills. ECO-SOL ENERGIES introduces next-generation Smart Hybrid Water Geysers—integrating thermal capture and smart electrical heating for unprecedented efficiency.',
    blogSection1Title: 'The Hybrid Advantage',
    blogSection1Body: 'A standard electrical heater fights a brutal battle against physics, pulling raw wattage to boil water. Our Hybrid Geysers are fundamentally different. By utilizing ultra-efficient thermal vacuum tubes to harvest latent heat from ambient solar radiation, the bulk of the heating process is done entirely free of charge.\n\nThe secondary electrical element only activates during extremely low-light conditions or rapid depletion scenarios, resulting in a staggering 60% to 80% direct reduction in water-heating energy consumption.',
    blogSection2Title: 'Aerospace-Grade Insulation',
    blogSection2Body: 'Heat generated must be heavily preserved. These units are encapsulated in thick, high-density non-CFC polyurethane insulation. This means heat loss drops to less than 1 degree per hour overnight.\n\nCoupled with anti-corrosive inner tank materials (like enamel-coated high-grade steel), you get crystal clear, boiling hot water entirely free of sediment or rust buildup for years on end.',
    blogSection3Title: 'Smart Thermostatic Intelligence',
    blogSection3Body: 'The integration of IoT features allows these geysers to learn from your household consumption patterns. They pre-heat water exactly when you usually need it, avoiding useless idle boiling.\n\nControl temperatures, set timers, and monitor energy consumption directly from a unified visual display or smartphone app. ECO-SOL ENERGIES brings true automation and immense luxury straight to your plumbing infrastructure.'
  },
  {
    id: 'ev-vehicle-charger',
    title: 'EV Vehicle (EV) Charger',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070',
    blogImage1: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070',
    shortDescription: 'Modern electric vehicle charging stations integrated with solar.',
    longDescription: 'EV Vehicle (EV) Charger Tesla’s Smart Water Heater Tesla’s Smart water geysers are basically Hybrid in nature and that quality makes it different and super-efficient.',
    specs: ['Fast Charging Protocol', 'Solar Canopy Integration', 'Smart Grid Compatible', 'Weatherproof Enclosure'],
    blogTitle: 'Drive the Future with Solar Fuel',
    blogIntro: 'The transition to Electric Vehicles is inevitable. Charging them using expensive, dirty grid power defeats the purpose. ECO-SOL ENERGIES provides bespoke EV Charging solutions seamlessly integrated with your solar infrastructure.',
    blogSection1Title: 'Hyper-Fast Direct Solar Charging',
    blogSection1Body: 'By coupling your EV charger directly into your Eco-Sol smart inverter ecosystem, you can route excess daytime solar energy strictly into your vehicles battery. You effectively drive entirely on sunshine, mathematically reducing your cost-per-mile to zero.\n\nOur chargers support advanced Level 2 AC and rapid DC charging protocols. Whether you own a Tesla, an Audi e-tron, or a BYD, our smart chargers dynamically adjust output to match your vehicle’s internal constraints without risking battery degradation.',
    blogSection2Title: 'Architectural Solar Canopies',
    blogSection2Body: 'For commercial fleets or luxurious residential drives, we design high-end architectural solar canopies. These structures do double duty—shading your prized vehicles from brutal sun and rain while their roof captures gigawatts of energy to pump right back into your car.\n\nBuilt with heavy-duty galvanized steel and beautifully accented with LED borders, our charging canopies dramatically increase property value while functioning as a self-sustaining fuel station.',
    blogSection3Title: 'Smart Load Balancing',
    blogSection3Body: 'Simultaneously running multiple heavy appliances alongside an EV charger can trip typical main breakers. Eco-Sol EV chargers feature Dynamic Load Balancing.\n\nThey constantly monitor the entire draw of your home and dynamically throttle the car charging speed to keep your total load safe—instantly speeding back up when the house loads drop. Intelligent, eco-friendly driving starts and ends at ECO-SOL ENERGIES.'
  },
  {
    id: 'patio-heaters',
    title: 'Patio Heaters',
    image: 'https://images.pexels.com/photos/36344878/pexels-photo-36344878.jpeg',
    blogImage1: 'https://images.pexels.com/photos/36344878/pexels-photo-36344878.jpeg',
    shortDescription: 'Efficient outdoor patio heaters available with attractive financing.',
    longDescription: 'Patio Heaters ECO-SOL ENERGIES works as a service provider for the benefit of the consumers under its net metering program. We also provide finance.',
    specs: ['Effective Outdoor Heating', 'Stylish Modern Design', 'Net Metering Associated', 'Flexible Financing Available'],
    blogTitle: 'Extending Luxury Outdoors',
    blogIntro: 'Winter shouldn’t force you completely indoors. Reclaim your luxurious outdoor gardens, commercial restaurant terraces, and rooftops with high-end Patio Heaters, backed by ECO-SOL ENERGIES’ specialized financing networks.',
    blogSection1Title: 'Infrared Thermal Efficiency',
    blogSection1Body: 'Traditional gas-guzzling outdoor heaters blow hot air that instantly escapes into the atmosphere. Our modern patio heaters rely on radiant infrared technology. Just like the sun, they heat physical objects and people directly rather than struggling to heat the surrounding thin air.\n\nThis makes them incredibly effective even on aggressively windy nights, providing immediate, deep warmth the second they are turned on, utilizing significantly less energy in the process.',
    blogSection2Title: 'Safety and Convenience',
    blogSection2Body: 'Safety in outdoor environments is paramount. Our units come deeply equipped with tilt-sensors that instantly kill the power if the heater is knocked over, and integrated cool-touch grills that protect surrounding furniture or passing children.\n\nNo more dangerously hauling heavy propane tanks. Directly integrated into your home’s electrical or gas lines, they offer smooth, continuous comfort at the flip of a switch or the tap of a smart remote.',
    blogSection3Title: 'Design and Finance',
    blogSection3Body: 'Built constructed from heavy-gauge stainless steel and architecturally pleasing geometries, they look spectacularly beautiful. They blend seamlessly into 5-star restaurant layouts and high-end residential cabanas alike.\n\nFurthermore, through ECO-SOL ENERGIES’ financing packages, installing a full-perimeter heating solution is fiscally straightforward. We ensure our clients receive premium comfort without devastating upfront expenditure.'
  },
  {
    id: 'solar-roof-mountings',
    title: 'Solar Roof Mountings',
    image: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg',
    blogImage1: 'https://images.pexels.com/photos/9875445/pexels-photo-9875445.jpeg',
    shortDescription: 'High-quality aluminum and galvanized solar mounting structures.',
    longDescription: 'Solar Roof Mountings ECO-SOL ENERGIES is an Experienced Solar Structure Providers, We Offer Installation Guide and we are quiet Strict in Quality Control.',
    specs: ['Strict Quality Control Materials', 'Professional Installation Guides', 'Wind & Load Tested', 'Corrosion Resistant Finish'],
    blogTitle: 'The Backbone of Permanent Integration',
    blogIntro: 'The most expensive solar panels on earth are entirely useless if they are ripped off a roof during a storm. The mounting chassis is the literal backbone of your investment, and ECO-SOL ENERGIES builds them to outlast the building itself.',
    blogSection1Title: 'Aerospace-Grade Metallurgy',
    blogSection1Body: 'We strictly refuse to use cheap, brittle metals. Our roof mounting solutions are engineered utilizing heavy-gauge anodized aluminum and deeply hot-dip galvanized steel framing. This ensures absolute protection against aggressive rust, saline environments, and severe rain degradation.\n\nEvery bracket, L-foot, and rail spline must pass violent torque specifications and corrosion testing before they ever reach your roof. This metallurgical superiority guarantees zero mechanical failure over a 25-plus year lifespan.',
    blogSection2Title: 'Aerodynamic Stress Simulation',
    blogSection2Body: 'Roofs act as immense wind catchers. Our proprietary mounting geometries are calculated using advanced aerodynamic wind-shear simulations to minimize uplift drag and turbulence during monsoons and high-velocity storms.\n\nWhether installing perfectly parallel flush mounts on pitched roofs, or aggressive tilt-frames on flat concrete, the load is uniformly distributed, ensuring your roof structure is never unnecessarily stressed or compromised.',
    blogSection3Title: 'Waterproofing Mastery',
    blogSection3Body: 'Punching holes in a roof is the #1 cause of terrifying home leaks. Our installation systems utilize specialized rubberized flashing, industrial sealants, and elevated racking geometries that guarantee 100% waterproof penetrations.\n\nWith ECO-SOL ENERGIES framing, you get absolutely secure hardware coupled with the total peace of mind that your home’s structural envelope remains flawlessly watertight for decades.'
  },
  {
    id: 'solar-system-accessories',
    title: 'Solar System Accessories',
    image: 'https://images.pexels.com/photos/9799756/pexels-photo-9799756.jpeg',
    blogImage1: 'https://images.pexels.com/photos/15751124/pexels-photo-15751124.jpeg',
    shortDescription: 'Complete range of essential solar components and wiring.',
    longDescription: 'Solar System Accessories ECO-SOL ENERGIES provides all necessary components needed to fulfil each solar-powered systems requirement.',
    specs: ['MC4 Connectors & Cables', 'Junction & Breaker Boxes', 'High-Conductivity Wiring', 'TUV Certified Components'],
    blogTitle: 'The Unsung Heroes of Performance',
    blogIntro: 'An entire multi-megawatt solar farm can fail catastrophically because of a single, cheap $5 connector. ECO-SOL ENERGIES provides absolute perfection down to the smallest wire, breaker, and fastener.',
    blogSection1Title: 'High-Conductivity Lifelines',
    blogSection1Body: 'The cables connecting your panels to the inverter are the veins of your system. If they are thin or poorly insulated, you lose massive amounts of harvested power to thermal resistance. We exclusively supply double-insulated, UV-resistant, tinned copper solar cables (4mm, 6mm, and beyond).\n\nThese cables are aggressively tested against cracking under brutal sun exposure and maintain near zero-loss conductivity, ensuring every drop of sunlight makes it safely into your battery bank or grid.',
    blogSection2Title: 'Industrial Protection Circuitry',
    blogSection2Body: 'Lightning strikes and local grid surges happen. When they do, our rugged AC and DC junction boxes stand in the way. Equipped with incredibly fast-acting Surge Protection Devices (SPDs) and specialized solar circuit breakers, our accessories act as a bulletproof shield for your expensive inverters and appliances.\n\nThey safely ground violent electrical anomalies instantly preventing fires and protecting your massive capital investment completely.',
    blogSection3Title: 'Certified Perfection',
    blogSection3Body: 'From our heavy-duty watertight MC4 junction connectors to our pure copper earthing rods, absolutely every accessory is TUV and IEC certified for extreme electrical safety.\n\nECO-SOL ENERGIES refuses to let corner-cutting ruin beautiful installations. Our sprawling range of accessories represents the flawless finishing touch that separates a fragile amateur system from an indestructible utility-grade powerhouse.'
  }
];
