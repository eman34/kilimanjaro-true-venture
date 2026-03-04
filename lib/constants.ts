export const COMPANY = {
  name: "Kilimanjaro True Venture",
  tagline: "Experience True Adventure in Africa",
  email: "info@kilimanjarotrueventure.com",
  phone: "+255 123 456 789",
  whatsapp: "+255 123 456 789",
  address: "Sekei, Arusha, Tanzania",
  social: {
    instagram: "https://instagram.com/kilimanjarotrueventure",
    facebook: "https://facebook.com/kilimanjarotrueventure",
    tripadvisor: "https://tripadvisor.com/kilimanjarotrueventure",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Tours",
    href: "/tours/kilimanjaro",
    children: [
      { label: "Mount Kilimanjaro", href: "/tours/kilimanjaro" },
      { label: "Mount Meru", href: "/tours/meru" },
      { label: "Wildlife Safaris", href: "/tours/safaris" },
      { label: "Zanzibar Holidays", href: "/tours/zanzibar" },
      { label: "Cultural Experiences", href: "/tours/cultural" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const FEATURED_TOURS = [
  {
    title: "Mount Kilimanjaro",
    description:
      "Conquer Africa's highest peak via 6 unique routes. An unforgettable journey to the Roof of Africa at 5,895m.",
    href: "/tours/kilimanjaro",
    image: "/images/kilimanjaro-peak.jpg",
    tag: "Most Popular",
  },
  {
    title: "Mount Meru",
    description:
      "Tanzania's second-highest peak offers stunning views and incredible wildlife encounters on the trail.",
    href: "/tours/meru",
    image: "/images/guide-mountain.jpg",
    tag: "Hidden Gem",
  },
  {
    title: "Wildlife Safaris",
    description:
      "Witness the Big Five in Serengeti, Ngorongoro Crater, and Tarangire — Africa's iconic wildlife parks.",
    href: "/tours/safaris",
    image: "/images/zebra-herd.jpg",
    tag: "Adventure",
  },
  {
    title: "Zanzibar Holidays",
    description:
      "Relax in beautiful Zanzibar after your adventure. Crystal waters, Stone Town, and tropical paradise.",
    href: "/tours/zanzibar",
    image: "/images/flamingos-flight.jpg",
    tag: "Beach & Culture",
  },
  {
    title: "Cultural Experiences",
    description:
      "Immerse yourself in authentic Tanzanian culture with community visits, local traditions, and unique encounters.",
    href: "/tours/cultural",
    image: "/images/guide-client.jpg",
    tag: "Unique",
  },
];

export const KILIMANJARO_ROUTES = [
  {
    name: "Machame",
    nickname: "The Whiskey Route",
    durations: [
      { days: "7 Days", price: "From $2,130" },
      { days: "6 Days", price: "From $2,050" },
    ],
    difficulty: "Challenging",
    scenery: 5,
    description:
      'Known as the "Whiskey Route," Machame offers stunning scenery and strong acclimatization. Best for adventurous trekkers seeking scenic diversity.',
    itinerary: [
      "Hotel to Machame Gate – Machame Camp",
      "Machame Camp – Shira Camp",
      "Shira – Lava Tower – Barranco Camp",
      "Barranco – Karanga Camp",
      "Karanga – Barafu Camp",
      "Summit (Uhuru Peak) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    highlights: [
      "Most scenic route",
      "Excellent acclimatization profile",
      "Diverse landscapes and vegetation zones",
      "High summit success rate",
    ],
  },
  {
    name: "Lemosho",
    nickname: "The Wilderness Route",
    durations: [{ days: "8 Days", price: "From $2,340" }],
    difficulty: "Moderate to Challenging",
    scenery: 5,
    description:
      "High success rate and gradual acclimatization. Ideal for serious climbers wanting the best summit chance.",
    itinerary: [
      "Hotel to Lemosho Gate – Mti Mkubwa Camp",
      "Mti Mkubwa Camp – Shira 1 Camp",
      "Shira 1 Camp – Shira 2 Camp",
      "Shira 2 Camp – Lava Tower (acclimatization & lunch) – Barranco Camp",
      "Barranco Camp – Karanga Camp",
      "Karanga Camp – Barafu Camp",
      "Summit (from Barafu Camp) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    highlights: [
      "Remote and uncrowded start",
      "Best acclimatization profile",
      "Stunning panoramic views",
      "Highest success rate",
    ],
  },
  {
    name: "Marangu",
    nickname: "The Coca-Cola Route",
    durations: [
      { days: "6 Days", price: "From $1,810" },
      { days: "5 Days", price: "From $1,750" },
    ],
    difficulty: "Moderate",
    scenery: 3,
    description:
      "The only route with hut accommodation. A comfort-focused option with a gradual ascent and cozy sleeping arrangements.",
    itinerary: [
      "Marangu Gate – Mandara Hut",
      "Mandara – Horombo Hut",
      "Acclimatization Day",
      "Horombo – Kibo Hut",
      "Summit – Horombo",
      "Marangu Gate",
    ],
    highlights: [
      "Hut accommodation (no camping)",
      "Gradual ascent profile",
      "Shortest route option available",
      "Good for beginners with moderate fitness",
    ],
  },
  {
    name: "Rongai",
    nickname: "The Northern Approach",
    durations: [{ days: "7 Days", price: "From $2,440" }],
    difficulty: "Moderate",
    scenery: 4,
    description:
      "Northern approach near the Kenya border. Quieter and less crowded route with a gentle gradient ascent.",
    itinerary: [
      "Hotel to Rongai Gate – Simba Camp",
      "Simba Camp – Second Cave Camp",
      "Second Cave Camp – Kikelewa Camp",
      "Kikelewa Camp – Mawenzi Turn Camp",
      "Mawenzi Camp – Kibo Camp",
      "Summit (from Kibo Camp) – Horombo Camp",
      "Horombo Camp – Marangu Gate (to hotel)",
    ],
    highlights: [
      "Least crowded route",
      "Gentle gradient ascent",
      "Unique northern wilderness views",
      "Great for those seeking solitude",
    ],
  },
  {
    name: "Umbwe",
    nickname: "The Steep Route",
    durations: [{ days: "6 Days", price: "From $2,197" }],
    difficulty: "Very Challenging",
    scenery: 4,
    description:
      "Challenging and steep — recommended for experienced trekkers. Fast ascent with dramatic landscapes.",
    itinerary: [
      "Hotel to Umbwe Gate – Umbwe Camp",
      "Umbwe Camp – Barranco Camp",
      "Barranco Camp – Karanga Camp",
      "Karanga Camp – Barafu Camp",
      "Summit (from Barafu Camp) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    highlights: [
      "Most challenging and rewarding",
      "Steep and direct ascent",
      "Very few other climbers",
      "Best for experienced trekkers",
    ],
  },
  {
    name: "Londorossi",
    nickname: "The Western Approach",
    durations: [{ days: "7 Days", price: "From $2,200" }],
    difficulty: "Moderate to Challenging",
    scenery: 5,
    description:
      "Remote western approach with excellent scenery. Gradual ascent through rainforest and Shira Plateau, joining the Machame route before summit. High success rate and scenic diversity.",
    itinerary: [
      "Hotel to Londorossi Gate – Shira 1 Camp",
      "Shira 1 Camp – Shira 2 Camp",
      "Shira 2 Camp – Lava Tower (acclimatization & lunch) – Barranco Camp",
      "Barranco Camp – Karanga Camp",
      "Karanga Camp – Barafu Camp",
      "Summit (from Barafu Camp) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    highlights: [
      "Remote western starting point",
      "Excellent scenery and acclimatization",
      "Low traffic",
      "Similar to Lemosho experience",
    ],
  },
];

export const SAFARI_PARKS = [
  {
    name: "Serengeti National Park",
    description:
      "Home to the Great Migration — witness millions of wildebeest and zebras crossing the plains in one of nature's greatest spectacles.",
    highlights: ["Great Migration", "Big Five", "Endless plains", "Hot air balloon safaris"],
  },
  {
    name: "Ngorongoro Crater",
    description:
      "The world's largest intact volcanic caldera, teeming with wildlife in a breathtaking natural amphitheater.",
    highlights: ["UNESCO World Heritage Site", "Dense wildlife concentration", "Flamingo-lined lakes", "Maasai culture"],
  },
  {
    name: "Tarangire National Park",
    description:
      "Famous for its massive elephant herds and iconic baobab trees, offering an intimate safari experience away from the crowds.",
    highlights: ["Large elephant herds", "Ancient baobab trees", "Bird watching paradise", "Less crowded"],
  },
  {
    name: "Lake Manyara National Park",
    description:
      "A compact gem known for tree-climbing lions and diverse birdlife along the shores of a beautiful soda lake.",
    highlights: ["Tree-climbing lions", "Flamingo flocks", "Diverse ecosystems", "Scenic lake views"],
  },
  {
    name: "Mkomazi National Park",
    description:
      "A hidden treasure bordering Kenya, home to rare African wild dogs, black rhinos, and stunning semi-arid landscapes.",
    highlights: ["Black rhinos", "African wild dogs", "Remote wilderness", "Scenic semi-arid terrain"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    location: "United States",
    text: "Climbing Kilimanjaro with True Venture was the experience of a lifetime. Our guide Abu was incredible — knowledgeable, patient, and so encouraging. We reached the summit at sunrise and I cried tears of joy.",
    tour: "Kilimanjaro — Lemosho Route",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    location: "Germany",
    text: "The safari exceeded all expectations. Seeing the Great Migration in the Serengeti was something I'll never forget. The team planned everything perfectly and our guide spotted animals we would have never seen on our own.",
    tour: "Wildlife Safari — 5 Days",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    location: "Japan",
    text: "The cultural experience tour was so authentic and respectful. We visited a Maasai village, learned about their traditions, and shared a meal together. It felt like a genuine connection, not a tourist show.",
    tour: "Cultural Experience",
    rating: 5,
  },
  {
    name: "Emma & James Clarke",
    location: "United Kingdom",
    text: "We did the Machame route for our honeymoon adventure and it was magical. The crew was amazing — delicious food at altitude, warm smiles every day, and professional safety standards throughout.",
    tour: "Kilimanjaro — Machame Route",
    rating: 5,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Local Expert Guides",
    description:
      "Our certified, born-and-raised Tanzanian guides bring deep knowledge of altitude management, acclimatization, and mountain safety.",
    icon: "compass",
  },
  {
    title: "Safety First",
    description:
      "Daily health checks, oxygen monitoring, emergency oxygen cylinders, first aid kits, proper acclimatization schedules, and clear evacuation procedures.",
    icon: "shield",
  },
  {
    title: "Ethical Porter Treatment",
    description:
      "Our founder's experience as a former porter ensures fair wages, proper meals, reasonable load limits, and respectful working conditions for all crew.",
    icon: "heart",
  },
  {
    title: "All-Inclusive Packages",
    description:
      "Airport transfers, hotel accommodation, park fees, quality equipment, nutritious meals, professional guides — everything taken care of.",
    icon: "package",
  },
  {
    title: "Community Impact",
    description:
      "A portion of our profits supports education initiatives, health awareness, and environmental conservation in local communities.",
    icon: "users",
  },
  {
    title: "Founded by Experience",
    description:
      "Our founder started as a porter and became a professional guide. We understand the mountain from every level — physically, emotionally, and professionally.",
    icon: "trophy",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Abdallah Athumani (Abu)",
    role: "Founder & Professional Mountain Guide",
    bio: "Abu began his journey on Kilimanjaro as a porter before becoming a certified professional mountain guide. His years of experience shaped the company's core values: safety, respect, hard work, and integrity.",
    image: "/images/guide-client.jpg",
  },
];

export const MOUNTAIN_CREW = [
  "Senior Mountain Guide",
  "Assistant Guide",
  "Professional Mountain Cook",
  "Camp Waiter",
  "Dedicated Porters",
];

export const SAFARI_CREW = [
  "Professional Safari Driver Guide",
  "Wildlife Specialist Guide",
];

export const PACKAGE_INCLUDES = [
  "Airport pick up and drop off",
  "2-night hotel accommodation in Moshi/Arusha (before and after trek) on full board basis",
  "Quality, waterproof, four-season mountain sleeping tent",
  "Quality mess tents with table and chairs",
  "Professional, experienced, English-speaking mountain guides",
  "All Tanzanian National Park fees",
  "All hot meals prepared by our cook while on the mountain",
  "Portable toilet tent",
  "Fair wages for guides, porters, and cook as approved by KINAPA",
  "Oxygen tank and pulse oximeter for health and safety",
  "Hot drinks at every meal",
  "Water provided on climb (mineral water day 1, boiled water daily)",
  "Certificate of achievement after the climb",
];

export const PACKAGE_EXCLUDES = [
  "International and domestic flights",
  "Tanzanian entry visa fees",
  "Travel insurance (mandatory for trekkers)",
  "Sleeping bags and personal trekking gear (available for rent)",
  "Tips for guides, porters, and cook",
  "Personal expenses (drinks, snacks, laundry, souvenirs)",
  "Additional accommodation before or after the trek (unless included in package)",
];

export const TOUR_INTERESTS = [
  "Kilimanjaro — Machame Route",
  "Kilimanjaro — Lemosho Route",
  "Kilimanjaro — Marangu Route",
  "Kilimanjaro — Rongai Route",
  "Kilimanjaro — Umbwe Route",
  "Kilimanjaro — Londorossi Route",
  "Mount Meru",
  "Wildlife Safari",
  "Zanzibar Holiday",
  "Cultural Experience",
  "Kilimanjaro + Safari Combo",
  "Custom Trip",
];
