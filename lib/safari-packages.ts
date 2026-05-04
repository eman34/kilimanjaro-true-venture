export type SafariPackageDay = {
  label: string;
  title: string;
  description: string;
};

export type SafariPackage = {
  id: string;
  title: string;
  duration: string;
  price: string;
  priceNote?: string;
  summary: string;
  days: SafariPackageDay[];
};

export const SAFARI_INTRO = `Tanzania is widely recognized as one of the most exceptional safari destinations in the world, offering an unmatched combination of wildlife, landscapes, and authentic African experiences. At Kilimanjaro True Venture, our safari experiences are designed to go beyond simple wildlife viewing. We create immersive journeys that combine comfort, expert guidance, and authentic African adventure. Every safari is carefully planned so guests enjoy not only the beauty of Tanzania’s landscapes but also a seamless, safe, and enriching travel experience from beginning to end.

From the endless golden plains of Serengeti National Park to the breathtaking natural wonder of Ngorongoro Crater and the ancient baobab-dotted landscapes of Tarangire National Park, every destination offers something unique. Our safaris are led by highly experienced professional driver guides who understand animal behavior, migration patterns, and the best times and locations for wildlife viewing.

Guests can expect to see a wide range of wildlife including lions, elephants, leopards, buffalo, rhinos, giraffes, zebras, wildebeest, and countless bird species. Each safari is carefully planned to maximize wildlife encounters while ensuring comfort, safety, and a relaxed pace.

All safaris include private 4x4 safari vehicles with pop-up roofs, mineral water, professional guides, park fees, and carefully selected accommodations ranging from mid-range to luxury depending on client preference.`;

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: "migration",
    title: "Serengeti Migration Safari",
    duration: "5 days",
    price: "From $2,230",
    priceNote: "per person depending on group size",
    summary:
      "A once-in-a-lifetime opportunity to witness one of the greatest natural spectacles on Earth—the Great Migration in Serengeti National Park. Millions of wildebeest and zebras move across the plains in search of fresh grazing, followed closely by predators such as lions, cheetahs, and crocodiles.",
    days: [
      {
        label: "Day 1",
        title: "Arusha to Serengeti National Park",
        description:
          "Early morning departure from Arusha through northern Tanzania’s scenic landscapes, passing local villages and the Ngorongoro highlands. Upon arrival in Serengeti, your first game drive begins. The day ends with a relaxing evening at your lodge or camp.",
      },
      {
        label: "Day 2",
        title: "Full Day Game Drive in Serengeti",
        description:
          "A full day exploring the vast plains—following wildlife movements, searching for predators, and observing animal behavior. Your guide takes you to key areas known for high activity.",
      },
      {
        label: "Day 3",
        title: "Migration Tracking Experience",
        description:
          "Focus on locating and following the Great Migration. Depending on the season, your guide chooses the best areas for herds, river crossings, or large concentrations on the plains.",
      },
      {
        label: "Day 4",
        title: "Serengeti to Ngorongoro Conservation Area",
        description:
          "After a morning game drive, travel toward the Ngorongoro area with more wildlife and changing landscapes along the way. Overnight near the crater rim.",
      },
      {
        label: "Day 5",
        title: "Ngorongoro Crater Tour and Return to Arusha",
        description:
          "Descend into Ngorongoro Crater for a half-day game drive—one of the highest concentrations of wildlife in Africa—then return to Arusha.",
      },
    ],
  },
  {
    id: "northern-3",
    title: "Tarangire, Ngorongoro & Lake Manyara",
    duration: "3 days",
    price: "From $1,365",
    summary:
      "An incredible introduction to northern Tanzania: three distinct ecosystems—Tarangire’s giants and baobabs, Ngorongoro’s wildlife amphitheater, and Manyara’s forest, lake, and diversity.",
    days: [
      {
        label: "Day 1",
        title: "Arusha to Tarangire National Park – Land of Giants",
        description:
          "Morning departure to Tarangire, known for baobabs, large elephant herds, and the Tarangire River attracting giraffe, zebra, wildebeest, buffalo, and predators. Picnic lunch in the park, afternoon game drive, then overnight at your lodge.",
      },
      {
        label: "Day 2",
        title: "Ngorongoro Crater – Africa’s Natural Wonder",
        description:
          "Early breakfast, then descent into Ngorongoro Crater—one of the best places for the Big Five, including black rhino. Explore grasslands, swamps, forests, and the soda lake with your guide’s insights on geology, wildlife, and history.",
      },
      {
        label: "Day 3",
        title: "Lake Manyara National Park – Forest, Lake & Wildlife",
        description:
          "Visit Manyara for diverse habitats, forest elephants, baboons, birdlife, and the scenic lake. Afternoon return toward Arusha to conclude your safari.",
      },
    ],
  },
  {
    id: "serengeti-4",
    title: "Serengeti & Ngorongoro",
    duration: "4 days",
    price: "From $1,670",
    summary:
      "A deeper wildlife experience combining extended time in the Serengeti with a finale in Ngorongoro Crater—ideal for travelers who want more plains, predators, and open wilderness.",
    days: [
      {
        label: "Day 1",
        title: "Arusha to Serengeti – Journey into the Wild",
        description:
          "Early departure through the Ngorongoro highlands into Serengeti. First game drive on entry; possible sightings include lions, cheetahs, elephants, giraffes, and large herds. Dinner and overnight at camp or lodge.",
      },
      {
        label: "Day 2",
        title: "Full Day Serengeti – Wildlife Exploration",
        description:
          "Full-day game drive across different regions for predators and herds. Picnic lunch in the bush for an uninterrupted day in the park.",
      },
      {
        label: "Day 3",
        title: "Serengeti to Ngorongoro – Transition of Landscapes",
        description:
          "Morning game drive, then journey toward Ngorongoro with wildlife and changing scenery en route. Evening near the crater rim.",
      },
      {
        label: "Day 4",
        title: "Ngorongoro Crater – Final Safari Experience",
        description:
          "Crater floor game drive—excellent chances for the Big Five in one day—then return to Arusha with lasting memories.",
      },
    ],
  },
  {
    id: "mkomazi-day",
    title: "Mkomazi National Park Day Trip",
    duration: "1 day",
    price: "From $430",
    summary:
      "A quieter, less crowded safari near Kilimanjaro—semi-arid scenery, conservation success stories, and rare species including black rhino and African wild dog.",
    days: [
      {
        label: "Day trip",
        title: "Mkomazi game drive",
        description:
          "Early departure from Arusha or Moshi to Mkomazi for a full game drive in a peaceful, scenic park. The semi-arid landscape differs from northern circuit parks. With luck, spot black rhino and wild dog in protected habitats before returning in the evening.",
      },
    ],
  },
];
