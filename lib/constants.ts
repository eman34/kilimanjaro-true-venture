export const COMPANY = {
  name: "Kilimanjaro True Venture",
  tagline: "Experience True Adventure in Africa",
  email: "info@kilimanjarotrueventure.com",
  phone: "+255 791 137 698",
  whatsapp: "+255 791 137 698",
  address: "Sekei, Arusha, Tanzania",
  social: {
    instagram: "https://instagram.com/kilimanjarotrueventure",
    facebook: "https://facebook.com/kilimanjarotrueventure",
    tripadvisor: "https://tripadvisor.com/kilimanjarotrueventure",
  },
};

export const NAV_LINKS = [
  { label: "Kilimanjaro", href: "/tours/kilimanjaro" },
  { label: "Safari", href: "/tours/safaris" },
  { label: "Other Adventures", href: "/tours/other-adventures" },
  { label: "Gallery", href: "/gallery" },
  { label: "Charity", href: "/charity" },
  { label: "About Us", href: "/about" },
];

export type TourCategory = "kilimanjaro" | "safari";

export interface FeaturedTour {
  title: string;
  image: string;
  href: string;
  category: TourCategory;
  duration: string;
  priceFrom: string;
}

export const FEATURED_TOURS: FeaturedTour[] = [
  {
    title: "Machame Route",
    image: "/images/kilimanjaro-peak.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "6 days hike",
    priceFrom: "$2,350",
  },
  {
    title: "Lemosho Route",
    image: "/images/summit-panorama.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "8 days hike",
    priceFrom: "$2,640",
  },
  {
    title: "Marangu Route",
    image: "/images/summit-sunrise.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "5 days hike",
    priceFrom: "$1,950",
  },
  {
    title: "Rongai Route",
    image: "/images/mawenzi-silhouette.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "7 days hike",
    priceFrom: "$2,740",
  },
  {
    title: "Umbwe Route",
    image: "/images/crater-wall.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "6 days hike",
    priceFrom: "$2,497",
  },
  {
    title: "Londorossi Route",
    image: "/images/camp-snowy-peak.jpg",
    href: "/tours/kilimanjaro",
    category: "kilimanjaro",
    duration: "7 days hike",
    priceFrom: "$2,500",
  },
  {
    title: "Great Migration & River Crossing",
    image: "/images/zebra-herd.jpg",
    href: "/tours/safaris",
    category: "safari",
    duration: "5 days safari",
    priceFrom: "$2,230",
  },
  {
    title: "Northern Circuit Safari",
    image: "/images/ngorongoro-wildlife.jpg",
    href: "/tours/safaris",
    category: "safari",
    duration: "3 days safari",
    priceFrom: "$1,365",
  },
  {
    title: "Serengeti & Ngorongoro",
    image: "/images/waterhole-wildlife.jpg",
    href: "/tours/safaris",
    category: "safari",
    duration: "4 days safari",
    priceFrom: "$1,670",
  },
];

export interface KilimanjaroRouteDuration {
  days: string;
  price: string;
}

export interface KilimanjaroRouteDay {
  day: number;
  title: string;
  elevation: string;
  distance: string;
  time: string;
  terrain: string;
  description: string;
}

export interface KilimanjaroRoute {
  name: string;
  nickname: string;
  durations: KilimanjaroRouteDuration[];
  difficulty: string;
  scenery: number;
  description: string;
  itinerary: string[];
  detailedItinerary?: KilimanjaroRouteDay[];
  highlights: string[];
  tag?: string;
  image: string;
  successRate?: string;
}

export const KILIMANJARO_ROUTES: KilimanjaroRoute[] = [
  {
    name: "Machame",
    nickname: "The Whiskey Route",
    durations: [
      { days: "6", price: "$2,350" },
      { days: "7", price: "$2,430" },
    ],
    difficulty: "Challenging",
    scenery: 5,
    tag: "Popular pick",
    image: "/images/kilimanjaro-peak.jpg",
    description:
      "Kilimanjaro's most popular route. Crosses five ecosystems on the way up: rainforest, lava ridges, alpine desert, glacial summit. A camping route that uses the 'climb high, sleep low' acclimatization pattern, which lifts summit success rates well above shorter routes. Steeper ascents and longer days than Marangu. Suited to climbers prepared for camping and varied terrain over scenic ground.",
    itinerary: [
      "Hotel to Machame Gate – Machame Camp",
      "Machame Camp – Shira Camp",
      "Shira – Lava Tower – Barranco Camp",
      "Barranco – Karanga Camp",
      "Karanga – Barafu Camp",
      "Summit (Uhuru Peak) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        elevation: "1,800m to 3,000m",
        distance: "11 km",
        time: "5-7 hours",
        terrain: "Rainforest",
        description: "Drive from your hotel to Machame Gate (1,800m) to register and meet your crew. The trail climbs through montane rainforest with colobus monkeys and moss-draped trees. The air is thick and humid. Machame Camp sits in a clearing at the edge of the forest.",
      },
      {
        day: 2,
        title: "Machame Camp to Shira Camp",
        elevation: "3,000m to 3,840m",
        distance: "5 km",
        time: "4-6 hours",
        terrain: "Moorland",
        description: "Out of the rainforest and into the heath and moorland zone. Giant heather and wildflowers line the trail; views open up. On clear days, you get a first sight of Kibo peak above. The terrain becomes rocky and exposed as you cross the Shira Plateau, one of Kilimanjaro's three ancient volcanic cones.",
      },
      {
        day: 3,
        title: "Shira Camp to Lava Tower to Barranco Camp",
        elevation: "3,840m to 4,630m, descend to 3,960m",
        distance: "10 km",
        time: "6-8 hours",
        terrain: "Alpine desert",
        description: "The classic \"climb high, sleep low\" day. You ascend through the alpine desert to Lava Tower, a 90m volcanic plug at 4,630m. First real test at altitude. After lunch in the shadow of the tower, descend steeply into the Barranco Valley. You sleep over 600m lower than your high point, which speeds acclimatization.",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        elevation: "3,960m to 3,995m",
        distance: "5 km",
        time: "4-5 hours",
        terrain: "Rocky scramble & valley",
        description: "The day starts with the Barranco Wall, a scramble up a near-vertical rock face. It looks intimidating but is non-technical: hands and feet, nothing else. Your guides stay beside you. From the top, views open to the southern glaciers and the summit. The trail then dips through valleys to Karanga Camp, the last water-collection point on the route.",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        elevation: "3,995m to 4,673m",
        distance: "4 km",
        time: "3-4 hours",
        terrain: "Barren alpine desert",
        description: "A shorter day to conserve energy for summit night. The trail crosses barren rock; you're in the true alpine desert now. Air is thin and cold. You arrive at Barafu Camp (\"ice\" in Swahili) by early afternoon, giving you time to rest, eat, hydrate, and prepare for the midnight summit push.",
      },
      {
        day: 6,
        title: "Summit Day: Uhuru Peak to Mweka Camp",
        elevation: "4,673m to 5,895m, descend to 3,068m",
        distance: "13 km",
        time: "12-16 hours",
        terrain: "Scree, ice, and glacier",
        description: "Wake around midnight to hot tea and biscuits, then start climbing under the stars. The trail zigzags up steep scree to Stella Point (5,756m) on the crater rim. This is the hardest section, mentally and physically. As the sky lightens, the glaciers turn pink and gold. From Stella Point, it's a 45-minute walk along the rim to Uhuru Peak at 5,895m. After photos, descend to Mweka Camp.",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        elevation: "3,068m to 1,630m",
        distance: "10 km",
        time: "3-4 hours",
        terrain: "Rainforest",
        description: "Final morning on the mountain. Descend through cloud forest from bare rock back to greenery. Air thickens, temperature warms, birds return. At Mweka Gate, your crew meets you with celebration songs and summit certificates. Transfer back to your hotel in Moshi for a hot shower.",
      },
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
    durations: [{ days: "8", price: "$2,640" }],
    difficulty: "Moderate to Challenging",
    scenery: 5,
    tag: "Recommended",
    image: "/images/summit-sunrise.jpg",
    description:
      "Starts on the western side through quiet rainforest with the mountain's better wildlife. Merges with Machame on the upper slopes. The 8-day version is the longest standard route, giving the most acclimatization time and the highest summit success rate of any Kilimanjaro itinerary. Suited to climbers who want fewer crowds in the early days and the strongest chance of reaching the top.",
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
    detailedItinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa Camp",
        elevation: "2,100m to 2,750m",
        distance: "6 km",
        time: "3-4 hours",
        terrain: "Rainforest",
        description: "Drive along Kilimanjaro's western slopes to Londorossi Gate for registration, then on to the Lemosho trailhead. The hike begins through montane rainforest, one of the quietest approaches on the mountain. Blue monkeys move through the canopy. The forest floor is dense with ferns. A gentle start to ease into mountain pace.",
      },
      {
        day: 2,
        title: "Mti Mkubwa Camp to Shira 1 Camp",
        elevation: "2,750m to 3,500m",
        distance: "8 km",
        time: "5-7 hours",
        terrain: "Moorland & heath",
        description: "Climb out of the rainforest into the heather zone. Giant heather opens into moorland with views of the western breach and the Shira Plateau. Pace is steady; the air starts to thin. Camp sits on the edge of the plateau, a vast volcanic cone.",
      },
      {
        day: 3,
        title: "Shira 1 Camp to Shira 2 Camp",
        elevation: "3,500m to 3,840m",
        distance: "6 km",
        time: "4-5 hours",
        terrain: "Plateau moorland",
        description: "A gentle traverse of the Shira Plateau, one of Kilimanjaro's three volcanic cones. Open, flat terrain with Kibo ahead. You may see eland (the world's largest antelope) grazing on the plateau. An easy day for acclimatization before the bigger days ahead.",
      },
      {
        day: 4,
        title: "Shira 2 Camp to Lava Tower to Barranco Camp",
        elevation: "3,840m to 4,630m, descend to 3,960m",
        distance: "10 km",
        time: "6-8 hours",
        terrain: "Alpine desert",
        description: "The critical acclimatization day. You ascend to Lava Tower at 4,630m, a volcanic plug rising from the barren landscape. Lunch in its shadow, then descend to Barranco Camp. Climbing high and sleeping low helps the body adapt. The Barranco Valley below is dotted with giant groundsels and lobelias.",
      },
      {
        day: 5,
        title: "Barranco Camp to Karanga Camp",
        elevation: "3,960m to 3,995m",
        distance: "5 km",
        time: "4-5 hours",
        terrain: "Rocky scramble & valley",
        description: "Start with the Barranco Wall, a non-technical scramble. Views open from the top. The trail then crosses valleys, streams, and rocky terrain to Karanga Camp. The southern ice fields catch the afternoon light from camp.",
      },
      {
        day: 6,
        title: "Karanga Camp to Barafu Camp",
        elevation: "3,995m to 4,673m",
        distance: "4 km",
        time: "3-4 hours",
        terrain: "Barren alpine desert",
        description: "A deliberately short day. Bare rock, thin air, open sky. You arrive at Barafu base camp by lunchtime, with the afternoon to rest, eat, and prepare for the summit attempt. Guides brief you on the night ahead. Early dinner, then try to sleep before the midnight wake-up.",
      },
      {
        day: 7,
        title: "Summit Day: Uhuru Peak to Mweka Camp",
        elevation: "4,673m to 5,895m, descend to 3,068m",
        distance: "13 km",
        time: "12-16 hours",
        terrain: "Scree, ice, and glacier",
        description: "Rise at midnight, climb by headlamp. The cold is intense; your crew keeps you moving with hot drinks. Reach Stella Point at dawn; the glaciers catch the first light. The final walk along the rim to Uhuru Peak (5,895m) is 45 minutes. After photos, a long descent to Mweka Camp.",
      },
      {
        day: 8,
        title: "Mweka Camp to Mweka Gate",
        elevation: "3,068m to 1,630m",
        distance: "10 km",
        time: "3-4 hours",
        terrain: "Rainforest",
        description: "Descent through rainforest. The crew sings traditional celebration songs along the trail. At Mweka Gate, collect your summit certificates, tip the crew, and say goodbye. Transfer back to your hotel.",
      },
    ],
    highlights: [
      "Remote and uncrowded start",
      "Best acclimatization profile",
      "Wide panoramic views",
      "Highest success rate",
    ],
  },
  {
    name: "Marangu",
    nickname: "The Coca-Cola Route",
    durations: [
      { days: "5", price: "$1,950" },
      { days: "6", price: "$2,030" },
    ],
    difficulty: "Moderate",
    scenery: 3,
    tag: "Hut option",
    image: "/images/camp-snowy-peak.jpg",
    description:
      "The oldest and most established route on Kilimanjaro, and the only one with hut accommodation instead of tents. Approaches from the southeast with a gradual incline early on. The shorter itinerary makes acclimatization harder; summit success rates are correspondingly lower than longer routes. Suited to climbers with limited time who prefer huts to camping. Patience and physical preparation matter.",
    itinerary: [
      "Marangu Gate – Mandara Hut",
      "Mandara – Horombo Hut",
      "Acclimatization Day",
      "Horombo – Kibo Hut",
      "Summit – Horombo",
      "Marangu Gate",
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Marangu Gate to Mandara Hut",
        elevation: "1,860m to 2,700m",
        distance: "8 km",
        time: "3-5 hours",
        terrain: "Rainforest",
        description: "Start at Marangu Gate. The well-maintained trail climbs through montane rainforest with birdlife and the occasional troop of blue monkeys. Unlike other routes, you sleep in wooden huts with bunk beds and mattresses, not tents. Mandara Hut is a cluster of A-frame cabins in the forest.",
      },
      {
        day: 2,
        title: "Mandara Hut to Horombo Hut",
        elevation: "2,700m to 3,720m",
        distance: "11 km",
        time: "5-7 hours",
        terrain: "Moorland",
        description: "Out of the forest canopy into rolling moorland. On clear mornings, both Kibo and Mawenzi peaks are visible ahead. The heather and grasses give way to giant lobelias and groundsels. Horombo Hut is the largest camp on the mountain.",
      },
      {
        day: 3,
        title: "Acclimatization Day at Horombo",
        elevation: "3,720m (day hike to 4,200m)",
        distance: "Optional hike",
        time: "3-4 hours",
        terrain: "Alpine desert",
        description: "A rest day to help your body adjust to altitude. Most climbers take an optional hike to Mawenzi Hut at 4,200m for a close view of Mawenzi's spires, then descend back. The rest of the day is for resting, eating, and hydrating. Guides monitor your health and acclimatization.",
      },
      {
        day: 4,
        title: "Horombo Hut to Kibo Hut",
        elevation: "3,720m to 4,703m",
        distance: "10 km",
        time: "5-7 hours",
        terrain: "Alpine desert",
        description: "The landscape turns lunar as you cross \"the saddle,\" the barren plateau between Mawenzi and Kibo peaks. Little grows; the wind moves across open terrain. Kibo Hut is a stone building at the base of the summit cone, the launch point for the final push. Early dinner, early bed.",
      },
      {
        day: 5,
        title: "Summit Day: Uhuru Peak, descent to Horombo Hut",
        elevation: "4,703m to 5,895m, descend to 3,720m",
        distance: "21 km",
        time: "14-18 hours",
        terrain: "Scree, ice, and glacier",
        description: "Alarm at midnight. Dressed in every warm layer you own, you climb steep volcanic scree by headlamp. The zigzag trail to Gilman's Point (5,681m) on the crater rim is relentless but doable: one step, then the next. From Gilman's, traverse the rim past glaciers to Uhuru Peak at 5,895m. Sunrise from the top. The descent is long, all the way back to Horombo Hut.",
      },
      {
        day: 6,
        title: "Horombo Hut to Marangu Gate",
        elevation: "3,720m to 1,860m",
        distance: "19 km",
        time: "5-7 hours",
        terrain: "Moorland & rainforest",
        description: "Final descent through moorland and back into rainforest. The thicker, oxygen-rich air is a relief after days at altitude. At Marangu Gate, your crew celebrates with songs. Collect your summit certificates and transfer back to your hotel.",
      },
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
    durations: [{ days: "7", price: "$2,740" }],
    difficulty: "Moderate",
    scenery: 4,
    tag: "For solitude",
    image: "/images/mawenzi-silhouette.jpg",
    description:
      "Approaches from the northern side near the Kenyan border, the only route that does. Drier landscape early on (rain-shadow side of the mountain), and far fewer climbers than the southern routes. Terrain is gentler than Machame or Umbwe but acclimatization still matters. Suited to climbers who want solitude and a different view of the mountain.",
    itinerary: [
      "Hotel to Rongai Gate – Simba Camp",
      "Simba Camp – Second Cave Camp",
      "Second Cave Camp – Kikelewa Camp",
      "Kikelewa Camp – Mawenzi Turn Camp",
      "Mawenzi Camp – Kibo Camp",
      "Summit (from Kibo Camp) – Horombo Camp",
      "Horombo Camp – Marangu Gate (to hotel)",
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Rongai Gate to Simba Camp",
        elevation: "1,950m to 2,600m",
        distance: "8 km",
        time: "3-4 hours",
        terrain: "Cultivated land & pine forest",
        description: "A drive along Kilimanjaro's northern slopes through rural villages and Chagga farmland to Rongai Gate. The trail passes through planted pine forest before entering natural montane forest. The northern side of the mountain is drier and less travelled than the south. Simba Camp (\"lion\" in Swahili) sits at the edge of the forest with views north toward Kenya.",
      },
      {
        day: 2,
        title: "Simba Camp to Second Cave Camp",
        elevation: "2,600m to 3,450m",
        distance: "8 km",
        time: "5-6 hours",
        terrain: "Heath & moorland",
        description: "The trail climbs through heather and moorland. The terrain opens onto the drier, wilder northern slopes. You pass First Cave, a shallow overhanging rock that once sheltered early climbers, before continuing to Second Cave Camp. Views across the Kenyan plains are wide. White-necked ravens ride the thermals above.",
      },
      {
        day: 3,
        title: "Second Cave Camp to Kikelewa Camp",
        elevation: "3,450m to 3,600m",
        distance: "6 km",
        time: "3-4 hours",
        terrain: "Moorland",
        description: "A gentle day through open moorland with giant heather and tussock grass. The route contours around the mountain's northern flank, with views of Mawenzi's jagged peaks that most climbers never see. Kikelewa Camp is in a sheltered valley. Quiet evening; the stars come out one by one in the thin, clear air.",
      },
      {
        day: 4,
        title: "Kikelewa Camp to Mawenzi Tarn Camp",
        elevation: "3,600m to 4,330m",
        distance: "5 km",
        time: "4-5 hours",
        terrain: "Rocky alpine terrain",
        description: "A steeper climb to Mawenzi Tarn, an alpine lake beneath the spires of Mawenzi peak. Volcanic rock formations; sparse vegetation. Camp sits on the edge of the tarn with Mawenzi's pinnacles directly overhead. One of the most striking campsites on the mountain.",
      },
      {
        day: 5,
        title: "Mawenzi Tarn Camp to Kibo Camp",
        elevation: "4,330m to 4,703m",
        distance: "8 km",
        time: "5-6 hours",
        terrain: "Alpine desert",
        description: "Cross \"the saddle,\" the high-altitude desert connecting Mawenzi and Kibo. Barren rock, thin air, open sky. The walking is flat but the altitude makes every step heavy. Kibo Camp sits at the base of the summit cone. Rest, eat well, prepare for midnight.",
      },
      {
        day: 6,
        title: "Summit Day: Uhuru Peak, descent to Horombo Hut",
        elevation: "4,703m to 5,895m, descend to 3,720m",
        distance: "21 km",
        time: "14-18 hours",
        terrain: "Scree, ice, and glacier",
        description: "The midnight ascent up the summit cone is the hardest day. Switchbacking up loose scree by headlamp toward Gilman's Point on the crater rim. The stars overhead are bright. As dawn breaks, traverse past glaciers to Uhuru Peak at 5,895m, the highest point in Africa. After photos, descend via the Marangu route to Horombo Hut.",
      },
      {
        day: 7,
        title: "Horombo Hut to Marangu Gate",
        elevation: "3,720m to 1,860m",
        distance: "19 km",
        time: "5-7 hours",
        terrain: "Moorland & rainforest",
        description: "Final descent through zones you didn't climb. The southern moorland and rainforest offer a new perspective. The thicker forest air is a relief after days above 3,000m. At Marangu Gate, the crew celebrates with songs. Collect certificates and transfer back to your hotel.",
      },
    ],
    highlights: [
      "Least crowded route",
      "Gentle gradient ascent",
      "Unique northern wilderness views",
      "Best route for solitude",
    ],
  },
  {
    name: "Umbwe",
    nickname: "The Steep Route",
    durations: [{ days: "6", price: "$2,497" }],
    difficulty: "Very Challenging",
    scenery: 4,
    tag: "Experienced only",
    image: "/images/summit-glaciers.jpg",
    description:
      "The steepest and most direct route. Climbs sharply through dense forest in the first days, with rapid altitude gain and less time to acclimatize. Suitable only for climbers with prior high-altitude experience and a strong fitness base. We will talk through your altitude history before confirming a Umbwe booking. Few climbers, demanding terrain.",
    itinerary: [
      "Hotel to Umbwe Gate – Umbwe Camp",
      "Umbwe Camp – Barranco Camp",
      "Barranco Camp – Karanga Camp",
      "Karanga Camp – Barafu Camp",
      "Summit (from Barafu Camp) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Umbwe Gate to Umbwe Camp",
        elevation: "1,700m to 2,940m",
        distance: "10 km",
        time: "5-6 hours",
        terrain: "Dense rainforest",
        description: "The Umbwe route starts steep. From the gate, the trail enters thick rainforest and climbs immediately up a narrow ridge between two river valleys. Exposed tree roots form natural staircases. The forest is darker and denser than on the southern routes. Demanding from step one, but quiet: very few climbers come this way.",
      },
      {
        day: 2,
        title: "Umbwe Camp to Barranco Camp",
        elevation: "2,940m to 3,960m",
        distance: "6 km",
        time: "5-7 hours",
        terrain: "Steep moorland",
        description: "Another steep day through the heath and into the moorland. You gain over 1,000m in elevation. Views open as you climb; you'll see few other climbers, if any. The route follows a ridge with drop-offs on either side. Barranco Camp sits beneath the Barranco Wall.",
      },
      {
        day: 3,
        title: "Barranco Camp to Karanga Camp",
        elevation: "3,960m to 3,995m",
        distance: "5 km",
        time: "4-5 hours",
        terrain: "Rocky scramble & valley",
        description: "You join the Machame route climbers for the scramble up the Barranco Wall. After the previous two days, the wall feels almost manageable. From the top, the trail winds through valleys to Karanga Camp. The southern glaciers and ice fields are visible above.",
      },
      {
        day: 4,
        title: "Karanga Camp to Barafu Camp",
        elevation: "3,995m to 4,673m",
        distance: "4 km",
        time: "3-4 hours",
        terrain: "Barren alpine desert",
        description: "A short but significant ascent to Barafu base camp. Stripped bare: rock, sky, and the summit above. The afternoon is for rest, food, and hydration. Guides check your health and brief you on summit night. The sunset from Barafu is wide: a layer of clouds below with Mawenzi's silhouette on the horizon.",
      },
      {
        day: 5,
        title: "Summit Day: Uhuru Peak to Mweka Camp",
        elevation: "4,673m to 5,895m, descend to 3,068m",
        distance: "13 km",
        time: "12-16 hours",
        terrain: "Scree, ice, and glacier",
        description: "After four steep days, you start the midnight ascent fitter than most. Up scree by headlamp to Stella Point, then along the rim to Uhuru Peak at 5,895m as the sun rises. Few people summit via Umbwe; you're one of them. Long descent to Mweka Camp.",
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate",
        elevation: "3,068m to 1,630m",
        distance: "10 km",
        time: "3-4 hours",
        terrain: "Rainforest",
        description: "The final descent through rainforest is gentle. The thicker air is a relief after days above 4,000m. Your crew walks with you. At Mweka Gate, receive your summit certificates and say farewell. Transfer to your hotel.",
      },
    ],
    highlights: [
      "Most challenging route",
      "Steep and direct ascent",
      "Very few other climbers",
      "Best for experienced trekkers",
    ],
  },
  {
    name: "Londorossi",
    nickname: "The Western Approach",
    durations: [{ days: "7", price: "$2,500" }],
    difficulty: "Moderate to Challenging",
    scenery: 5,
    tag: "Western gate",
    image: "/images/summit-panorama.jpg",
    description:
      "Enters Kilimanjaro through the Londorossi gate on the western side, leading into lush rainforest and quiet upper slopes. Less travelled than Lemosho despite a similar approach. The 7-day itinerary gives reasonable acclimatization, and the lower-elevation forest sections are among the most scenic on the mountain. Suited to climbers who want the western approach with a different campsite sequence than Lemosho.",
    itinerary: [
      "Hotel to Londorossi Gate – Shira 1 Camp",
      "Shira 1 Camp – Shira 2 Camp",
      "Shira 2 Camp – Lava Tower (acclimatization & lunch) – Barranco Camp",
      "Barranco Camp – Karanga Camp",
      "Karanga Camp – Barafu Camp",
      "Summit (from Barafu Camp) – Mweka Camp",
      "Mweka Camp – Mweka Gate (to hotel)",
    ],
    detailedItinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Shira 1 Camp",
        elevation: "2,250m to 3,500m",
        distance: "8 km",
        time: "4-5 hours",
        terrain: "Rainforest & heath",
        description: "Drive to Londorossi Gate on Kilimanjaro's western face. After registration, drive or hike through the lower rainforest zone to the trailhead. The climb passes through mossy forest that thins into heather moorland. Arrive at Shira 1 Camp on the western edge of the Shira Plateau, a volcanic cone with wide sunset views.",
      },
      {
        day: 2,
        title: "Shira 1 Camp to Shira 2 Camp",
        elevation: "3,500m to 3,840m",
        distance: "7 km",
        time: "4-5 hours",
        terrain: "Plateau moorland",
        description: "A traverse across the Shira Plateau. Gently rolling terrain with tussock grass and wildflowers. Kibo peak fills the eastern horizon, growing closer with every step. Wide open skies, volcanic rock formations, room. A good acclimatization day.",
      },
      {
        day: 3,
        title: "Shira 2 Camp to Lava Tower to Barranco Camp",
        elevation: "3,840m to 4,630m, descend to 3,960m",
        distance: "10 km",
        time: "6-8 hours",
        terrain: "Alpine desert",
        description: "The key acclimatization day. You ascend to Lava Tower at 4,630m, a volcanic rock pillar that marks your high point before you descend into the Barranco Valley. The \"climb high, sleep low\" pattern is essential for summit success and this day uses it. The descent into Barranco passes giant groundsels, lobelias, and the Great Barranco Wall ahead.",
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        elevation: "3,960m to 3,995m",
        distance: "5 km",
        time: "4-5 hours",
        terrain: "Rocky scramble & valley",
        description: "The Barranco Wall: a hands-on scramble. Your guides pick the best line up the rock face. The exposure looks worse than it climbs. From the top, views open to the southern glaciers. The trail then dips through valleys to Karanga Camp. Afternoon at camp watching clouds move around the summit above.",
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        elevation: "3,995m to 4,673m",
        distance: "4 km",
        time: "3-4 hours",
        terrain: "Barren alpine desert",
        description: "A short climb through barren terrain to Barafu base camp. Rock, wind, sky. Arrive by lunchtime, rest through the afternoon, eat an early dinner. Your guide briefs the group on summit-night logistics. Try to sleep. Tomorrow you summit.",
      },
      {
        day: 6,
        title: "Summit Day: Uhuru Peak to Mweka Camp",
        elevation: "4,673m to 5,895m, descend to 3,068m",
        distance: "13 km",
        time: "12-16 hours",
        terrain: "Scree, ice, and glacier",
        description: "Midnight start under the stars. The steep, switchbacking climb up scree is the hardest section of the trip. Your guides set a steady pace: \"pole pole\" (slowly, slowly) is the Swahili climber's mantra. Reach the crater rim at Stella Point as dawn breaks. The final walk along the rim to Uhuru Peak at 5,895m is 45 minutes. After photos and views, the long descent to Mweka Camp.",
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        elevation: "3,068m to 1,630m",
        distance: "10 km",
        time: "3-4 hours",
        terrain: "Rainforest",
        description: "Final morning on the mountain. Descend through cloud forest back to the lowlands. Porters and guides sing celebration songs along the trail. At Mweka Gate, receive your summit certificates and say goodbye to the crew. Transfer to your hotel.",
      },
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
    tour: "Kilimanjaro: Lemosho Route",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    location: "Germany",
    text: "The safari exceeded all expectations. Seeing the Great Migration in the Serengeti was something I'll never forget. The team planned everything perfectly and our guide spotted animals we would have never seen on our own.",
    tour: "Wildlife Safari: 5 Days",
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
    tour: "Kilimanjaro: Machame Route",
    rating: 5,
  },
  {
    name: "Pieter van der Meer",
    location: "Netherlands",
    text: "We chose Meru as a warm-up climb before Kilimanjaro the following year. The route was quiet, the guide read every shift in the weather and the rim camp at sunrise gave us a clear view across to Kibo. Stronger than its reputation as a warm-up.",
    tour: "Mount Meru: 4 Days",
    rating: 5,
  },
  {
    name: "Anika Rao",
    location: "India",
    text: "We did Kilimanjaro with True Venture and added a week in Zanzibar to recover. Same level of organization, same direct communication. The driver met us at the ferry, the hotel was exactly what they described and they had a backup snorkeling plan ready when our first day got rained out.",
    tour: "Zanzibar Beach Holiday",
    rating: 5,
  },
];

export const VALUES = [
  {
    text: "Built by people who grew up on this mountain.",
    icon: "compass",
  },
  {
    text: "Every lead guide is Tanzanian, certified at altitude.",
    icon: "users",
  },
  {
    text: "Tied to Abu Hope Foundation in our home communities.",
    icon: "heart",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Abdallah Athumani (Abu)",
    role: "Founder & Professional Mountain Guide",
    bio: "Abu is the founder of Kilimanjaro True Venture and an experienced professional mountain guide. Having started his career on Mount Kilimanjaro as a porter, he worked his way through different roles before becoming a guide. His deep knowledge of the mountain and strong passion for tourism help ensure every expedition is organized with care, safety, and professionalism.",
    image: "/images/team/team-member-1.png",
  },
  {
    name: "Ivan Ismail Kaaya",
    role: "Senior Mountain Guide",
    bio: "Our Senior Mountain Guide leads many of our climbing expeditions on Mount Kilimanjaro. With more than 15–20 years of experience on the mountain, he plays a key role in ensuring the safety, pace, and success of every climb. His leadership, knowledge of the routes, and ability to motivate climbers make him an essential part of the team.",
    image: "/images/team/team-member-4.png",
  },
  {
    name: "Amdani Mputa",
    role: "Assistant Mountain Guide",
    bio: "The Assistant Guide supports the lead guide throughout the expedition. From monitoring climbers' health to helping maintain the pace of the group, the assistant guide plays an important role in ensuring the well-being and comfort of every climber during the journey.",
    image: "/images/team/team-member-5.png",
  },
  {
    name: "Athumani R. Mkuna",
    role: "Professional Mountain Cook",
    bio: "Our mountain cook is responsible for preparing fresh, nutritious meals during the expedition. With years of experience cooking at high altitude, he ensures that climbers receive balanced meals that provide the energy needed for the climb. His dedication and care help make the experience both comfortable and memorable.",
    image: "/images/team/team-member-6.png",
  },
  {
    name: "Said Hassan Petro",
    role: "Camp Waiter",
    bio: "The camp waiter assists with organizing the camp, serving meals, and ensuring that climbers are comfortable after a long day of trekking. Their friendly attitude and attention to detail help create a welcoming camp environment for every guest.",
    image: "/images/team/team-member-8.png",
  },
  {
    name: "Ombeni Kanuya",
    role: "Professional Safari Driver Guide",
    bio: "Our safari driver guides are highly experienced professionals who know the national parks of Tanzania inside and out. With strong driving skills and deep knowledge of wildlife behavior, they ensure that every safari is both safe and exciting.",
    image: "/images/team/team-member-12.png",
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
  "Experienced Tanzanian guides, English-speaking, with multi-year mountain experience",
  "All Tanzanian National Park fees (≈35% of total trip cost)",
  "All hot meals prepared by our cook while on the mountain",
  "Portable toilet tent",
  "Fair wages and proper gear for guides, porters, and cook (KPAP-aligned standards)",
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
  "Kilimanjaro: Machame Route",
  "Kilimanjaro: Lemosho Route",
  "Kilimanjaro: Marangu Route",
  "Kilimanjaro: Rongai Route",
  "Kilimanjaro: Umbwe Route",
  "Kilimanjaro: Londorossi Route",
  "Mount Meru",
  "Wildlife Safari",
  "Zanzibar Holiday",
  "Cultural Experience",
  "Kilimanjaro + Safari Combo",
  "Custom Trip",
];

export const GALLERY_IMAGES = [
  {
    src: "/images/kilimanjaro-peak.jpg",
    alt: "Kilimanjaro peak above the clouds",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/summit-celebration.jpg",
    alt: "Climbers celebrating at Uhuru Peak",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/summit-glaciers.jpg",
    alt: "Ancient glaciers at Kilimanjaro summit",
    category: "Kilimanjaro",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/summit-panorama.jpg",
    alt: "Panoramic view from the summit",
    category: "Kilimanjaro",
    width: 864,
    height: 1080,
  },
  {
    src: "/images/summit-sunrise.jpg",
    alt: "Sunrise from Kilimanjaro summit",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/mawenzi-silhouette.jpg",
    alt: "Mawenzi peak silhouette at dusk",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/camp-snowy-peak.jpg",
    alt: "High-altitude camp with snowy peak backdrop",
    category: "Kilimanjaro",
    width: 1080,
    height: 1000,
  },
  {
    src: "/images/guide-client.jpg",
    alt: "Guide leading a client on the mountain trail",
    category: "Kilimanjaro",
    width: 1080,
    height: 816,
  },
  {
    src: "/images/guide-mountain.jpg",
    alt: "Experienced guide on the mountain slopes",
    category: "Kilimanjaro",
    width: 720,
    height: 1080,
  },
  {
    src: "/images/camp-setup.jpg",
    alt: "Team setting up camp at high altitude",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/milky-way.jpg",
    alt: "Milky Way above Kilimanjaro",
    category: "Kilimanjaro",
    width: 720,
    height: 1080,
  },
  {
    src: "/images/zebra-herd.jpg",
    alt: "Zebra herd on the Serengeti plains",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/flamingos-flight.jpg",
    alt: "Flamingos in flight over Lake Natron",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/ngorongoro-wildlife.jpg",
    alt: "Wildlife in Ngorongoro crater",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/waterhole-wildlife.jpg",
    alt: "Animals gathering at a waterhole",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/crater-wall.jpg",
    alt: "Ngorongoro crater wall at sunset",
    category: "Safari",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/hero-sunset.jpg",
    alt: "Golden sunset over the African savanna",
    category: "Safari",
    width: 810,
    height: 1080,
  },
];

export const MOUNTAIN_INTRO =
  "Africa's highest mountain. 5,895m, free-standing, in northern Tanzania. Walking pace, not technical: no ropes or climbing skill required, but altitude is the main challenge. Most first-time climbers reach the summit when they choose a longer route (7+ days) and pace it for acclimatization. Six routes go up; each has a different character. Pick the one that matches your fitness, time, and tolerance for crowds.";

export interface EcologicalZone {
  name: string;
  altitude: string;
  note: string;
}

export const ECOLOGICAL_ZONES: EcologicalZone[] = [
  {
    name: "Cultivated farmland",
    altitude: "800–1,800m",
    note: "Coffee and banana farms on the lower slopes. Where you start the drive to the trailhead.",
  },
  {
    name: "Tropical rainforest",
    altitude: "1,800–2,800m",
    note: "Dense forest with colobus and blue monkeys. Most of Day 1 and Day 2.",
  },
  {
    name: "Heath and moorland",
    altitude: "2,800–4,000m",
    note: "Open ground with giant lobelia and senecio. Cooler. Where the views open up.",
  },
  {
    name: "Alpine desert",
    altitude: "4,000–5,000m",
    note: "Rocky and dry. Very little vegetation. This is where altitude becomes the work.",
  },
  {
    name: "Arctic summit",
    altitude: "5,000–5,895m",
    note: "Glacier and rock. Below freezing. Summit night.",
  },
];

export function formatDaysRange(durations: KilimanjaroRouteDuration[]): string {
  if (durations.length === 0) return "";
  if (durations.length === 1) return `${durations[0].days} days`;
  const first = durations[0].days;
  const last = durations[durations.length - 1].days;
  return `${first}–${last} days`;
}

export function minPrice(durations: KilimanjaroRouteDuration[]): string {
  if (durations.length === 0) return "";
  const numericPrices = durations.map((d) => ({
    raw: d.price,
    num: parseInt(d.price.replace(/[^0-9]/g, ""), 10),
  }));
  return numericPrices.reduce((min, cur) => (cur.num < min.num ? cur : min)).raw;
}
