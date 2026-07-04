export const COMPANY = {
  name: "Kilimanjaro True Venture",
  tagline: "Experience True Adventure in Africa",
  email: "info@kilimanjarotrueventure.com",
  phone: "+255 791 137 698",
  whatsapp: "+255 791 137 698",
  address: "Sekei, Arusha, Tanzania",
};

export const NAV_LINKS = [
  { label: "Kilimanjaro", href: "/tours/kilimanjaro" },
  { label: "Safari", href: "/tours/safaris" },
  { label: "Other Adventures", href: "/tours/other-adventures" },
  { label: "Gallery", href: "/gallery" },
  { label: "Charity", href: "/charity" },
  { label: "About Us", href: "/about" },
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
    image: "/images/kili-climbers-above-clouds.jpg",
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
    image: "/images/kili-moorland-heather.jpg",
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
    image: "/images/marangu-huts-above-clouds.jpg",
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
    image: "/images/kili-mawenzi-dawn.jpg",
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
    image: "/images/kili-kibo-face-group.jpg",
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
    image: "/images/kili-trail-kibo-view.jpg",
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

export interface PackageItem {
  icon: string;
  title: string;
  detail: string;
}

export const PACKAGE_INCLUDES: PackageItem[] = [
  {
    icon: "plane",
    title: "Airport transfers",
    detail:
      "We meet you at Kilimanjaro International Airport and drive you to your hotel in Moshi or Arusha. After the climb, we take you back for your flight or onward to your next stop.",
  },
  {
    icon: "bed",
    title: "Hotel before and after the trek",
    detail:
      "Two hotel nights in Moshi or Arusha, one before and one after the climb, on a full board basis. You start rested and come down to a hot shower and a proper bed.",
  },
  {
    icon: "tent",
    title: "Four-season sleeping tent",
    detail:
      "Quality, waterproof mountain tents built for all conditions on the mountain. The crew pitches and packs them for you at every camp.",
  },
  {
    icon: "table",
    title: "Mess tent",
    detail:
      "A dining tent with a proper table and chairs at every camp, so meals happen out of the wind and rain.",
  },
  {
    icon: "guide",
    title: "Mountain guides",
    detail:
      "Professional, experienced, English-speaking guides who grew up on these mountains. They set the pace, watch your health, and know every section of the route.",
  },
  {
    icon: "ticket",
    title: "All park fees",
    detail:
      "Conservation, camping, and rescue fees charged by Tanzanian National Parks are all covered in the price. Park fees are the single largest cost of a Kilimanjaro climb.",
  },
  {
    icon: "fire",
    title: "Hot meals on the mountain",
    detail:
      "Our mountain cook prepares hot meals at every camp, portioned for long walking days at altitude.",
  },
  {
    icon: "sparkles",
    title: "Private toilet tent",
    detail:
      "A portable toilet tent reserved for your group, set up at every camp.",
  },
  {
    icon: "heart",
    title: "Fair crew wages",
    detail:
      "Fair pay for guides, porters, and cook, at the wage levels approved by KINAPA, the Kilimanjaro National Park Authority.",
  },
  {
    icon: "pulse",
    title: "Oxygen & pulse oximeter",
    detail:
      "Every climb carries an emergency oxygen tank. Guides check your blood oxygen with a pulse oximeter through the climb to catch altitude problems early.",
  },
  {
    icon: "mug",
    title: "Hot drinks",
    detail:
      "Hot drinks at every meal. A small thing that matters more with every meter of altitude.",
  },
  {
    icon: "droplet",
    title: "Drinking water",
    detail:
      "Mineral water on day one, then safe boiled water refilled daily for the rest of the climb.",
  },
  {
    icon: "award",
    title: "Certificate of achievement",
    detail:
      "Presented after the climb, marking the point you reached on the mountain.",
  },
];

export const PACKAGE_EXCLUDES: PackageItem[] = [
  {
    icon: "globe",
    title: "Flights",
    detail:
      "International and domestic flights are not included. Most climbers fly into Kilimanjaro International Airport (JRO), and we meet you there.",
  },
  {
    icon: "cash",
    title: "Crew tips",
    detail:
      "Tipping your climbing crew is a well-established practice in mountain hiking all over the world. It is never mandatory, but if your crew looks after you well, tips are encouraged and shared across guides, porters, and cook at the end of the climb. A recommended amount is USD 250 to 350 per climber.",
  },
  {
    icon: "passport",
    title: "Tanzanian visa",
    detail:
      "Most nationalities can get a tourist visa online before travel or on arrival. Budget around $50, or $100 for US passport holders.",
  },
  {
    icon: "shield",
    title: "Travel insurance",
    detail:
      "Mandatory for trekkers. Make sure your policy covers trekking up to 6,000m and emergency evacuation.",
  },
  {
    icon: "backpack",
    title: "Sleeping bag & personal gear",
    detail:
      "Bring your own or rent locally before the climb. We send a full packing list when you book.",
  },
  {
    icon: "bag",
    title: "Personal expenses",
    detail:
      "Drinks, snacks, laundry, souvenirs, and anything else you pick up along the way.",
  },
];

export interface SafariDay {
  day: number;
  title: string;
  park: string;
  description: string;
}

export interface Safari {
  slug: string;
  name: string;
  image: string;
  days: number;
  priceFrom: string;
  parks: string[];
  summary: string;
  goodFor?: string;
  includes: string[];
  excludes: string[];
  detailedItinerary?: SafariDay[];
}

export const SAFARIS: Safari[] = [
  {
    slug: "elephant-crater-discovery",
    name: "Elephant & Crater Discovery",
    image: "/images/safari-elephant-mother-calf.jpg",
    days: 2,
    priceFrom: "$1,850",
    parks: ["Tarangire National Park", "Ngorongoro Crater"],
    summary:
      "A short but unforgettable safari for travelers who want Tanzania's iconic wildlife in a limited time. It begins in Tarangire National Park, famous for its giant baobab trees, massive elephant herds and rich wildlife, then continues to the Ngorongoro Crater, one of the best places in Tanzania to spot the Big Five in a single day.",
    goodFor:
      "Couples, solo travelers, photographers and first-time safari visitors",
    includes: [
      "Professional safari guide",
      "Private or shared safari vehicle",
      "Park entry fees",
      "Lodge accommodation",
      "Meals during safari",
      "Drinking water",
      "Airport transfers",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Tips & personal expenses",
      "Alcoholic drinks",
    ],
  },
  {
    slug: "northern-tanzania-classic",
    name: "Northern Tanzania Classic Safari",
    image: "/images/safari-lion-pride-tree.jpg",
    days: 4,
    priceFrom: "$2,520",
    parks: [
      "Tarangire National Park",
      "Serengeti National Park",
      "Ngorongoro Crater",
    ],
    summary:
      "The legendary northern safari circuit in one journey. It combines the elephant-filled landscapes of Tarangire National Park, the endless wildlife plains of the Serengeti and the spectacular Ngorongoro Crater. Expect game drives, African sunsets, mid-range or luxury lodges and wildlife including lions, elephants, giraffes, zebras and cheetahs. Ideal for travelers looking for the complete Tanzania wildlife experience.",
    includes: [
      "Safari vehicle with pop-up roof",
      "Professional safari guide",
      "Park fees",
      "Safari lodge or tented camp accommodation",
      "Breakfast, lunch & dinner during safari",
      "Drinking water",
      "Airport transfers",
    ],
    excludes: [
      "Flights & visas",
      "Insurance",
      "Tips & personal expenses",
      "Alcoholic beverages",
    ],
  },
  {
    slug: "serengeti-migration-experience",
    name: "Serengeti Migration Experience",
    image: "/images/safari-wildebeest-herd.jpg",
    days: 5,
    priceFrom: "$2,400",
    parks: ["Serengeti National Park", "Ngorongoro Crater"],
    summary:
      "The magic of the African wilderness in the world-famous Serengeti, home to the Great Migration and some of the highest concentrations of wildlife on Earth. You spend days exploring endless plains filled with lions, elephants, giraffes, cheetahs, leopards and thousands of wildebeest, before continuing to the Ngorongoro Crater.",
    goodFor: "Wildlife lovers, photographers, honeymooners and adventure travelers",
    includes: [
      "Safari transport & guide",
      "Park entry fees",
      "Accommodation",
      "Meals during safari",
      "Daily game drives",
      "Drinking water",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Insurance",
      "Tips & personal expenses",
    ],
  },
  {
    slug: "tanzania-family-safari-escape",
    name: "Tanzania Family Safari Escape",
    image: "/images/safari-giraffe-golden-hour.jpg",
    days: 3,
    priceFrom: "$1,350",
    parks: [
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Tarangire National Park",
    ],
    summary:
      "Designed for families, couples and travelers with limited time, this is a perfect introduction to Tanzania's wildlife and landscapes. Explore the forests and tree-climbing lions of Lake Manyara, the wildlife inside the Ngorongoro Crater and the giant elephant herds of Tarangire.",
    goodFor: "Families, couples and travelers with limited time",
    includes: [
      "Safari vehicle & guide",
      "Accommodation",
      "Park fees",
      "Meals during safari",
      "Drinking water",
    ],
    excludes: [
      "Flights",
      "Visa fees",
      "Insurance",
      "Tips & personal expenses",
    ],
  },
  {
    slug: "arusha-walking-safari",
    name: "Arusha Walking Safari Experience",
    image: "/images/safari-giraffe-landscape.jpg",
    days: 1,
    priceFrom: "$280",
    parks: ["Arusha National Park"],
    summary:
      "Nature from a different perspective: a guided walking safari inside Arusha National Park. With an armed ranger and professional guide, you walk through landscapes of giraffes, zebras, buffaloes, waterfalls and tropical forest. On clear days there are views of Mount Kilimanjaro and Mount Meru.",
    goodFor:
      "Nature lovers and travelers wanting a more personal connection with the wildlife",
    includes: [
      "Park fees",
      "Walking safari ranger",
      "Professional guide",
      "Transport",
      "Lunch box & drinking water",
    ],
    excludes: ["Tips", "Personal expenses", "Insurance"],
  },
  {
    slug: "hidden-wilderness-mkomazi",
    name: "Hidden Wilderness Safari",
    image: "/images/waterhole-wildlife.jpg",
    days: 2,
    priceFrom: "$980",
    parks: ["Mkomazi National Park"],
    summary:
      "Escape the crowds at one of Tanzania's hidden treasures, Mkomazi National Park. Known for its peaceful wilderness, scenery, black rhino conservation project and rare African wild dogs, Mkomazi is a safari for travelers looking for somewhere less crowded. On clear days it offers views toward Mount Kilimanjaro.",
    includes: [
      "Safari vehicle",
      "Professional guide",
      "Park fees",
      "Lodge accommodation",
      "Meals during safari",
      "Drinking water",
    ],
    excludes: [
      "Flights",
      "Visa fees",
      "Insurance",
      "Tips & personal expenses",
    ],
  },
  {
    slug: "ultimate-tanzania-safari",
    name: "Ultimate Tanzania Safari Journey",
    image: "/images/safari-serengeti-aerial.jpg",
    days: 6,
    priceFrom: "$3,500",
    parks: [
      "Tarangire National Park",
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Lake Manyara National Park",
    ],
    summary:
      "The ultimate Tanzania safari for travelers who want to fully immerse themselves in Africa's wildlife, landscapes and luxury safari lifestyle. From the elephants and baobabs of Tarangire to the endless plains of the Serengeti and the natural wonder of the Ngorongoro Crater, every day brings something new, ending in the forests and lakeside scenery of Lake Manyara.",
    goodFor: "Luxury travelers, photographers, couples and wildlife enthusiasts",
    includes: [
      "Luxury safari lodges or tented camps",
      "Professional safari guide",
      "Park entry fees",
      "Daily game drives",
      "Meals & drinking water",
      "Airport transfers",
    ],
    excludes: [
      "International flights",
      "Visa fees",
      "Insurance",
      "Tips & personal expenses",
    ],
  },
];

export interface NorthernPark {
  name: string;
  locator: string;
  note: string;
}

export const NORTHERN_PARKS: NorthernPark[] = [
  {
    name: "Serengeti",
    locator: "Endless plains",
    note: "The stage for the Great Migration. Big cats, big herds, and the widest horizon in Tanzania.",
  },
  {
    name: "Ngorongoro Crater",
    locator: "Volcanic caldera",
    note: "A natural enclosure with one of the highest wildlife densities in Africa. One of the best chances at the Big Five in a day, black rhino included.",
  },
  {
    name: "Tarangire",
    locator: "Baobab country",
    note: "Big elephant herds and ancient baobabs along the Tarangire River. Quieter than the Serengeti.",
  },
  {
    name: "Lake Manyara",
    locator: "Forest and lakeshore",
    note: "A groundwater forest meeting a soda lake. Flamingos, monkeys, and the park's tree-climbing lions.",
  },
  {
    name: "Arusha",
    locator: "Forest and lakes",
    note: "Giraffes, buffalo and flamingo-filled lakes on the slopes of Mount Meru, minutes from Arusha town. The one park you can explore on foot.",
  },
  {
    name: "Mkomazi",
    locator: "Semi-arid north",
    note: "Quiet country near Kilimanjaro, protecting black rhino and African wild dog. Few visitors get here.",
  },
];

export interface ZanzibarPackage {
  name: string;
  tag: string;
  duration: string;
  price: string;
  priceUnit: "per person" | "per couple" | "per family";
  summary: string;
  bestFor: string;
  includes: string[];
}

export const ZANZIBAR_PACKAGES: ZanzibarPackage[] = [
  {
    name: "Zanzibar Paradise Escape",
    tag: "Beach & island time",
    duration: "5 days / 4 nights",
    price: "$1,350",
    priceUnit: "per person",
    summary:
      "Four nights on the coast with one half-day commitment: a guided walk through Stone Town. The rest is beach, swimming, fresh seafood and time with nothing scheduled. The simplest way to wind down after a climb or safari.",
    bestFor: "Couples, solo travelers and anyone coming down off the mountain",
    includes: [
      "Beachfront accommodation",
      "Daily breakfast",
      "Guided Stone Town tour",
      "Professional local guide",
      "Airport pick-up and drop-off",
    ],
  },
  {
    name: "Zanzibar Honeymoon Escape",
    tag: "For couples",
    duration: "5 days / 4 nights",
    price: "$1,950",
    priceUnit: "per couple",
    summary:
      "Four nights in beachfront accommodation chosen for privacy, with a sunset dhow cruise, a snorkeling excursion and a Stone Town tour spaced across the stay. Your room is decorated for the occasion before you arrive.",
    bestFor: "Honeymoons, anniversaries and couples marking something",
    includes: [
      "Beachfront accommodation for two",
      "Daily breakfast",
      "Sunset dhow cruise",
      "Snorkeling excursion",
      "Stone Town cultural tour",
      "Honeymoon room decoration",
      "Airport pick-up and drop-off",
    ],
  },
  {
    name: "Zanzibar Family Holiday",
    tag: "For families",
    duration: "5 days / 4 nights",
    price: "$2,450",
    priceUnit: "per family",
    summary:
      "Four nights at a family-friendly beach hotel with safe swimming water, a snorkeling trip and a guided Stone Town walk. Paced so the adults get rest and the children stay busy.",
    bestFor: "Families with children of mixed ages",
    includes: [
      "Family-friendly beach accommodation",
      "Daily breakfast",
      "Guided Stone Town tour",
      "Snorkeling experience",
      "Professional local guide",
      "Airport pick-up and drop-off",
    ],
  },
];

export const ZANZIBAR_EXCLUDES: string[] = [
  "International and domestic flights",
  "Tanzania visa fees",
  "Travel insurance",
  "Personal expenses",
  "Lunch and dinner unless mentioned",
  "Alcoholic beverages",
  "Optional tours and activities not listed",
  "Tips and gratuities",
  "Laundry services",
  "Medical expenses",
];

export interface ZanzibarDayTrip {
  name: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
}

export const ZANZIBAR_DAY_TRIPS: ZanzibarDayTrip[] = [
  {
    name: "Stone Town Cultural Tour",
    duration: "Half day",
    price: "$60",
    description:
      "A guided walk through Stone Town, a UNESCO World Heritage Site. Narrow streets, carved doors, the old market and the layered history of a port where Swahili, Arab and Indian trade met for centuries.",
    includes: ["Professional guide", "Entrance fees", "Bottled water"],
  },
  {
    name: "Mnemba Island Snorkeling",
    duration: "Full day",
    price: "$120",
    description:
      "A boat trip to the reefs off Mnemba Island, the best-known snorkeling water around Zanzibar. Coral, tropical fish and a full day on the water.",
    includes: [
      "Boat transfer",
      "Snorkeling equipment",
      "Tropical fruits and soft drinks",
      "Professional guide",
    ],
  },
  {
    name: "Spice Farm Tour",
    duration: "Half day",
    price: "$50",
    description:
      "In the 19th century Zanzibar was the world's largest clove producer, which is where the Spice Island name comes from. Walk a working farm and see clove, cinnamon, vanilla and cardamom growing, with fruit tasting along the way.",
    includes: ["Local guide", "Spice farm entrance fees", "Tropical fruit tasting"],
  },
  {
    name: "Sunset Dhow Cruise",
    duration: "Evening",
    price: "$75",
    description:
      "An evening sail on a traditional wooden dhow, the boat that has carried trade along this coast for centuries. Calm water, a low sun and snacks on board. Works for couples and families alike.",
    includes: ["Traditional dhow cruise", "Snacks and soft drinks", "Professional crew"],
  },
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

/* Featured gallery photos, in display order. These float to the top of the
   gallery — the first one lands top-left. To promote a photo, move its filename
   UP this list; to feature a new one, add its filename (just the file name, no
   "/images/" prefix). Anything that doesn't match a GALLERY_IMAGES src is
   ignored, so a typo or a deleted photo never breaks the page. */
export const GALLERY_FEATURED: string[] = [
  "kili-jump-above-clouds.jpg",
  "safari-lion-portrait.jpg",
  "culture-maasai-dance.jpg",
  "kili-summit-sign-group.jpg",
  "safari-leopard-tree.jpg",
  "kili-sunrise-cloud-sea.jpg",
  "safari-elephant-mother-calf.jpg",
  "kili-glacier-descent.jpg",
  "safari-lilac-breasted-roller.jpg",
];

export const GALLERY_IMAGES = [
  {
    src: "/images/kilimanjaro-peak.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEFAwT/xAAcEAEAAwACAwAAAAAAAAAAAAABAAIRAyETMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABwRAAICAgMAAAAAAAAAAAAAAAACBBQhIkFRYf/aAAwDAQACEQMRAD8A2CtelCND7JrzNnO2Py81XRMlTS14IEg42OyxXfcJLvz2LO2dhDd8HQXs/9k=",
    alt: "Kilimanjaro peak above the clouds",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/summit-celebration.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAcBAgMG/8QAHxAAAgIBBAMAAAAAAAAAAAAAAQIAAxEEBRJRITFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABYRAQEBAAAAAAAAAAAAAAAAAAAhUf/aAAwDAQACEQMRAD8A2W3Q1Nxe1cgZkrumgXVKnMFCPfU4hrGY5J8yuT3F0hi17ntbLk3qPhhF1mEUf//Z",
    alt: "Climbers celebrating at Uhuru Peak",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/summit-glaciers.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIDBAUG/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAwQRBRIxIf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECA0H/2gAMAwEAAhEDEQA/AMVKSx8l6rEOvI7X1Yw7MiyWvmKSPlYiJ3JYQhU2c/k2M5HY7ioTrUIQ2CUf/9k=",
    alt: "Ancient glaciers at Kilimanjaro summit",
    category: "Kilimanjaro",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/summit-panorama.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABADASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECAwQF/8QAIRAAAgIBAwUBAAAAAAAAAAAAAQIAAwQRIVEFExUiQYH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABURAQEAAAAAAAAAAAAAAAAAAAAS/9oADAMBAAIRAxEAPwCrj4pYjaLkYpUnaHl61cdpAy8fY89axW1DVsDKbTwxKrDSwKAfsmryWDN6odeVhCAd/9k=",
    alt: "Panoramic view from the summit",
    category: "Kilimanjaro",
    width: 864,
    height: 1080,
  },
  {
    src: "/images/summit-sunrise.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUDBv/EACIQAAEDAwMFAAAAAAAAAAAAAAIAAQMEEpEFMYETIjNCUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAGBEBAAMBAAAAAAAAAAAAAAAAAAIRIRL/2gAMAwEAAhEDEQA/AJlPQxnvILcrebTogHyDlc51Tb2fKFPIW5u/KdSKipHRx3P3DlFLvL66Jq4//9k=",
    alt: "Sunrise from Kilimanjaro summit",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/mawenzi-silhouette.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYBBAf/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDEQQSMVEFEyH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAL/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQITQVH/2gAMAwEAAhEDEQA/AGR00JZtu3Xu1XMkErSWPaQOaKzgZmQI9Pa/Xq1DcqZgIZI4A8/VJ0tmXEvQ6O8jgbEGYAg0hIpNmyhJlvoeCOH/2Q==",
    alt: "Mawenzi peak silhouette at dusk",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/camp-snowy-peak.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAATABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBf/EACAQAAMAAgEEAwAAAAAAAAAAAAABAgMRMQQFEiETQWH/xAAYAQACAwAAAAAAAAAAAAAAAAADBAABBf/EAB0RAAIBBAMAAAAAAAAAAAAAAAABAgQUIVEDERL/2gAMAwEAAhEDEQA/AJdw6NTk3je98o57x1L9o2byvN812739ItOSvLyc6n9DxqnF9NYBOmUl6TySUsFqqqe4haAxd8egFvPZBNrKkuC+T3Up8aAM1jxNU0uQAUQ//9k=",
    alt: "High-altitude camp with snowy peak backdrop",
    category: "Kilimanjaro",
    width: 1080,
    height: 1000,
  },
  {
    src: "/images/marangu-huts-above-clouds.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIGBf/EACEQAAIBAwMFAAAAAAAAAAAAAAECAAMEERIxkRMhMjNS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEREv/aAAwDAQACEQMRAD8A0mFqhCmqgJ27xtFEDzEg3Z3wS5yNjHF1XAwarEbTWmSIs2Ntn2LzCRPWb7bmEaER/9k=",
    alt: "A-frame huts above the clouds on the Marangu route",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/marangu-huts-sunset.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGgAAAQUBAAAAAAAAAAAAAAAAAAIDBAUGB//EACMQAAICAQQABwAAAAAAAAAAAAECAAMEBRETIRIiMUFRcYH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAABIBEf/aAAwDAQACEQMRAD8A0FWo4do3S5T+xvO1PFxKGdrB4tvKPmc7VmTtWI+om2yy0jkctt6bx6JxMv1bLuuZ+ZgCegPaErexCNCX/9k=",
    alt: "Marangu route huts at sunset above a sea of clouds",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/marangu-hut-guides.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAfEAADAQABBAMAAAAAAAAAAAABAgMAEgQRITEiUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABwRAAIBBQEAAAAAAAAAAAAAAAABEQIDEhQhMf/aAAwDAQACEQMRAD8AkjMSTk5AUjxkRJD9/wBz2YNKYYeQdXEIyn4j170scgqfG3Hpzb1KUILH7xtt0L0oW5A4zZ1Aa9s//9k=",
    alt: "Guides on the steps of a Marangu route hut",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/guide-client.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgP/xAAfEAACAgIDAAMAAAAAAAAAAAABAgADBBESITETQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABsRAAICAwEAAAAAAAAAAAAAAAABAhEDEiFh/9oADAMBAAIRAxEAPwBRqW5afQ/BN1fLUzKvFg3oPkoZlFb0uyLp/oxPExXrQraR33AtdbDmbxx4czkZqkhQoA81CUgqgAahBfheKTSdn//Z",
    alt: "Guide leading a client on the mountain trail",
    category: "Kilimanjaro",
    width: 1080,
    height: 816,
  },
  {
    src: "/images/guide-mountain.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA0DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFBAb/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADEQUSISIEMYH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABgRAQEAAwAAAAAAAAAAAAAAAAABAhEh/9oADAMBAAIRAxEAPwC+PDTbncfkUJWnBXMmJqrrqRrZs17eBNqajQR3YZj6GsXL19r2Y+8RyxzCEUSv/9k=",
    alt: "Experienced guide on the mountain slopes",
    category: "Kilimanjaro",
    width: 720,
    height: 1080,
  },
  {
    src: "/images/camp-setup.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACA//EAB8QAAICAgIDAQAAAAAAAAAAAAECAAMEIRESBSIxQf/EABYBAQEBAAAAAAAAAAAAAAAAAAQBAv/EABwRAAEEAwEAAAAAAAAAAAAAAAIAAQMEERQhIv/aAAwDAQACEQMRAD8AKOHYE7KvacyTW3DoREksCXKu9/Yb5TKVsn0B0ODLFcmN/TcW56sQNgX6tDJqA/ZQw2b1KL2DQtcF/9k=",
    alt: "Team setting up camp at high altitude",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/milky-way.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA0DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBBQb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgADEVEEBSES/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Az/ErJwNwsrw5EZ19oDqW9GpNzBrCRuUV3GYiwYMe7n6PsIREf//Z",
    alt: "Milky Way above Kilimanjaro",
    category: "Kilimanjaro",
    width: 720,
    height: 1080,
  },
  {
    src: "/images/zebra-herd.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABkQAAMBAQEAAAAAAAAAAAAAAAABAhFRcf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/EABURAQEAAAAAAAAAAAAAAAAAAAAT/9oADAMBAAIRAxEAPwBJ9Gx9MkUyqpmqiajkCTp6BVE3/9k=",
    alt: "Zebra herd on the Serengeti plains",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/flamingos-flight.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQMRAkEEMmH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwCYuXDtmhSwtWskIsCzRSpmrkjvsgFNegNEf//Z",
    alt: "Flamingos in flight over Lake Natron",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/ngorongoro-wildlife.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBA//EAB4QAAICAgIDAAAAAAAAAAAAAAABAhEEEwMSMUFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAETERL/2gAMAwEAAhEDEQA/AO0cbqvQ0R+EjyZp0bumndmasvKKHwRvwCd5E7AoxiP/2Q==",
    alt: "Wildlife in Ngorongoro crater",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/waterhole-wildlife.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBAv/EAB0QAAIBBAMAAAAAAAAAAAAAAAABAhESITIDExT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEgH/2gAMAwEAAhEDEQA/AEVG3Ul6FDD42WjrQxrAowLR74PNrQO1FNVBsK3/2Q==",
    alt: "Animals gathering at a waterhole",
    category: "Safari",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/crater-wall.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwYA/8QAIRAAAgIABQUAAAAAAAAAAAAAAAECAwQFERIxFCEiYZH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/xAAdEQACAgEFAAAAAAAAAAAAAAAAAQIDURESEyEx/9oADAMBAAIRAxEAPwB68yrk+yX0eOMqb81t9kSrJLhsevGTTW9uSBasXjHTqfTjoWauoktVZHQxJdZFcJmNb54Jx15P/9k=",
    alt: "Ngorongoro crater wall at sunset",
    category: "Safari",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/hero-sunset.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwb/xAAcEAADAAIDAQAAAAAAAAAAAAAAAQIDBQQRMnH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGREAAwADAAAAAAAAAAAAAAAAAAECA0FR/9oADAMBAAIRAxEAPwBlYkS8PwzOTbVPi6plE7fkpvu20DU5XwS7hbEAABgY/9k=",
    alt: "Golden sunset over the African savanna",
    category: "Safari",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/kili-rainforest-trail.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADERITITFBUWH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQT/xAAZEQADAAMAAAAAAAAAAAAAAAAAARECITH/2gAMAwEAAhEDEQA/AE2d8DjH2DWMaznvxLVsbk0tNdpdph6EzzVJjyi1NoFY4hJU4HQhCFs//9k=",
    alt: "Climbers on a stepped trail through the rainforest zone of Kilimanjaro",
    category: "Kilimanjaro",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/kili-porters-rainforest.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EAB8QAQACAwABBQAAAAAAAAAAAAECAwAEEQUSITFBgf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEREgMTIf/aAAwDAQACEQMRAD8ANvVdbt7yPt8n3k+q6IkjnO5s3LtisquejHhi1GoS2fQyQcljlppshWeFqmdbWIyPzDHqPDkaokbFMMNg6j//2Q==",
    alt: "Porters carrying expedition loads through Kilimanjaro's rainforest",
    category: "Kilimanjaro",
    width: 1024,
    height: 768,
  },
  {
    src: "/images/kili-moorland-heather.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EAB8QAAICAgIDAQAAAAAAAAAAAAECABEDBAUSITFCUf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQASAv/aAAwDAQACEQMRAD8ARk5jqyhcBF/sGOY2jlFKOtwY2HyMC3yaE6dwosIPdSmmmckzLzOwr1SSmceujoGYeZQ7ZYL/2Q==",
    alt: "Climbers walking through giant heather in Kilimanjaro's moorland zone",
    category: "Kilimanjaro",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/kili-moorland-morning.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EAB4QAQACAgEFAAAAAAAAAAAAAAEAAwIRBRITFSEi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAYEQEBAQEBAAAAAAAAAAAAAAABABMCEv/aAAwDAQACEQMRAD8Ao2c5Qj8JFznKctjWslCNW+k3FLLEydGpR0keBrnmKMvZUwmd7mWMI6NOZf/Z",
    alt: "Morning on the moorland with a distant peak on the horizon",
    category: "Kilimanjaro",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/kili-trail-kibo-view.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAKABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAHBAAAgIDAQEAAAAAAAAAAAAAAQIAEQMSITEz/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAbEQABBAMAAAAAAAAAAAAAAAAAAQISUQMTQf/aAAwDAQACEQMRAD8A5mN3C94JfZtlWwb8kr8xGOBqvIJkcvQilCicgNUITSAKEJbn2EG0f//Z",
    alt: "Trekking group on the trail with Kibo peak ahead",
    category: "Kilimanjaro",
    width: 2400,
    height: 1151,
  },
  {
    src: "/images/kili-saddle-trail.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAgEAACAgIBBQEAAAAAAAAAAAABAgADBBFxEiExMpEz/8QAFgEBAQEAAAAAAAAAAAAAAAAABAEC/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEUUWEE/9oADAMBAAIRAxEAPwBNuKcf3ZdcxlmPW9SvUw2fI3OOrNY4DMx5MuNQasdJZeDEvqdB46s1sVge+vsJK1Fu/wBG+wmpeEjaf//Z",
    alt: "The trail across open ground toward Kilimanjaro's summit cone",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/kili-groundsels-rest.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EACAQAAICAQMFAAAAAAAAAAAAAAECAAMRBAUhEjFBUXH/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/xAAaEQACAwEBAAAAAAAAAAAAAAAAAgEDERNR/9oADAMBAAIRAxEAPwBF1A6Czjn1IncFDYFZmE6xSLBUvGfMtUmcWWDCkdhEljouRIJqVp3BbN6dXIFQhGZ9FnlST8hN7P6XJD//2Q==",
    alt: "Climbers resting among giant groundsels and volcanic rock",
    category: "Kilimanjaro",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/kili-climber-kibo-clouds.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA0DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIGBAX/xAAdEAACAgIDAQAAAAAAAAAAAAABAgARAwUEEiEi/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8AoRwkq+xijHjTwrc5SbZ12RRmvF18E3Y9nxyPthcfQyJRCTmZifajljcISjX/2Q==",
    alt: "Climber looking at Kibo peak rising above a sea of clouds",
    category: "Kilimanjaro",
    width: 1600,
    height: 2400,
  },
  {
    src: "/images/kili-climbers-above-clouds.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAIBAAAgIABwEBAAAAAAAAAAAAAQMAAgQFERIhMTJBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEAAgMAAAAAAAAAAAAAAAAAABMBAlH/2gAMAwEAAhEDEQA/AFccxdjuoCPk01zRPVl8/kzJAu0iw1EriUrArpQDmLLaSuuFjmSNfESDEL3eB1EpkgqD/9k=",
    alt: "Line of climbers ascending above the clouds on Kilimanjaro",
    category: "Kilimanjaro",
    width: 2400,
    height: 1355,
  },
  {
    src: "/images/kili-celebration-kibo.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EAB8QAAICAgIDAQAAAAAAAAAAAAECAAMEERJBISMxUf/EABYBAQEBAAAAAAAAAAAAAAAAAAQAAv/EABwRAAICAgMAAAAAAAAAAAAAAAACAxQBUQQxQf/aAAwDAQACEQMRAD8AqQgG2XxFspXiHrOwepnvcvaR8A6EfByG5aIBA/ZRzsmezMvHSTwUpCUuyt2H1qIRdxdAaLbP/9k=",
    alt: "Two climbers celebrating on a rock outcrop below Kibo peak",
    category: "Kilimanjaro",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/kili-camp-night-town-lights.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEBf/EAB0QAAICAwADAAAAAAAAAAAAAAECAAMEESEiMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQADAAAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AMEVFvQiKhT2SjOuHAdRMWdvJj2NwLVbX7CGPhrbUGZm2YSdDcP/2Q==",
    alt: "Mountain camp at night with town lights glowing far below",
    category: "Kilimanjaro",
    width: 2400,
    height: 1510,
  },
  {
    src: "/images/kili-camp-tents-dusk.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBf/EABwQAQACAwADAAAAAAAAAAAAAAEAAgMRITFhcf/EABYBAQEBAAAAAAAAAAAAAAAAAAMCBP/EABwRAAIBBQEAAAAAAAAAAAAAAAABFAIDE0FRYf/aAAwDAQACEQMRAD8A4KFffyaJvXY1sbq2njDviOWFGa5lT0C7K6INdeZQb4Qt27KXKfAsHp//2Q==",
    alt: "Orange expedition tents at dusk below Kilimanjaro's summit",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/kili-summit-camp-tent.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACA//EACAQAAICAQMFAAAAAAAAAAAAAAECAAMEERIhBSIxQVH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEAQL/xAAcEQABBAMBAAAAAAAAAAAAAAACAAEDBBEUISL/2gAMAwEAAhEDEQA/ACjh2BNyrunMk1to6ERJLAlyr98w3qmUrZPYDwNDLFcmN/TcW56sQNgX6tjJqA9yhZt54lFbBoWuC//Z",
    alt: "Summit camp tent with Kibo's snowfields behind",
    category: "Kilimanjaro",
    width: 2400,
    height: 1800,
  },
  {
    src: "/images/kili-camp-moonlight.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCBAb/xAAhEAACAgECBwAAAAAAAAAAAAAAAQIDERMhBBIiMUFhcf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDBP/EABgRAAMBAQAAAAAAAAAAAAAAAAATYQFR/9oADAMBAAIRAxEAPwBbTXU1vJIsadEVtJZfszatkvLJS4ibhy5ePpofvCKxrZpKb60Albb7sAdBXT//2Q==",
    alt: "Camp under moonlight with snow on Kilimanjaro's summit cone",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/kili-horombo-huts-dawn.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIGBf/EACEQAAIBAwMFAAAAAAAAAAAAAAECAAMEERIxkRMhMjNS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAESEf/aAAwDAQACEQMRAD8A0mFqhCmqgJ27xtFEDzEg3Z3wS5yNjHF1XAwarEbTVMkos2Ntn2LzCRPWb7bmEUMR/9k=",
    alt: "A-frame huts on the Marangu route at dawn",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/kili-summit-night-headlamps.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQDBQb/xAAgEAABBAIBBQAAAAAAAAAAAAABAAIDEQUhBAYTFSIx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAkH/2gAMAwEAAhEDEQA/AEvGtL+3ftV0o5MUR8CThyzmch07tuLaCsY+ooS0CWLdbIQdpyRke2aQhCcb/9k=",
    alt: "Climbers silhouetted against first light on summit night",
    category: "Kilimanjaro",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/kili-sunrise-cloud-sea.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQG/8QAIBAAAgAFBQEAAAAAAAAAAAAAAAECAwUTIQQRIkFDYf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIDQf/aAAwDAQACEQMRAD8AqtbLKFrHRnZtUa9Ym/hJMqupb4RtIGp1Yl1K6QAAYGP/2Q==",
    alt: "Sunrise over a sea of clouds from high on Kilimanjaro",
    category: "Kilimanjaro",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/kili-mawenzi-dawn.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYBBAf/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDEgQRMVEFEyH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAAL/xAAZEQADAAMAAAAAAAAAAAAAAAAAAQITQVH/2gAMAwEAAhEDEQA/AGR00JZa7a97VcyQStJY9pA50VnAzMgR09r69bUNypmAhkjgDz9UnS2ZcS9Do7yOBYgzAEHSEikknZQky30PBHD/2Q==",
    alt: "Mawenzi peak silhouetted above the clouds at dawn",
    category: "Kilimanjaro",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/kili-glacier-descent.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQGAv/EACAQAAICAQMFAAAAAAAAAAAAAAECAAMRBBJRBSExQYH/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhMxIv/aAAwDAQACEQMRAD8AZTXUOAQnY8TY1FL4w2M+pH1au2p9yH5Ha+qWO67kUmX6WEVGL0pCV5hFa2LIDnyIQsY1RP/Z",
    alt: "Climbers descending past glaciers above the clouds near the summit",
    category: "Kilimanjaro",
    width: 1080,
    height: 720,
  },
  {
    src: "/images/kili-summit-sign-group.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA0DASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAHRAAAgMAAwEBAAAAAAAAAAAAAQIAAxEEISITMf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAdEQACAAcBAAAAAAAAAAAAAAAAAgEDBBESITEi/9oADAMBAAIRAxEAPwAnzXv0OpCsEaIOhXUOXOnIurkCtApyLSe198BvTrj56bcgCp0VVGH96ixxacHgSlDRFn//2Q==",
    alt: "Group celebrating at the Kilimanjaro summit sign",
    category: "Kilimanjaro",
    width: 1600,
    height: 2400,
  },
  {
    src: "/images/kili-uhuru-sign-pair.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAfEAACAgMAAgMAAAAAAAAAAAABAgADBBESITETMlH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABkRAQEAAwEAAAAAAAAAAAAAAAEAAgMhEv/aAAwDAQACEQMRAD8Alevl+SPIiHVS/Po/kbjZXz2NZkD7eiJo5ONTcWZetjQjNq59i4HnlzK7XWgaOpLeSX8kwhJFRv/Z",
    alt: "Two climbers waving at the Uhuru Peak sign",
    category: "Kilimanjaro",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/kili-marangu-gate.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEBf/EAB4QAAEFAAIDAAAAAAAAAAAAAAEAAgMEEgURITFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAED/8QAGhEAAgIDAAAAAAAAAAAAAAAAABECAxITIf/aAAwDAQACEQMRAD8AiqWpqkwlDQXBNe5azPEWPcenHshPYIjjOANFQ6OhoBw+LGNj6EycFzvPYQtQV4XAHHtCu0YH/9k=",
    alt: "Climbers Orientation Centre at the Marangu gate",
    category: "Kilimanjaro",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/kili-couple-above-clouds.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EACAQAAIBAgcBAAAAAAAAAAAAAAECAAMRBAUSITFBcRP/xAAVAQEBAAAAAAAAAAAAAAAAAAACBP/EABcRAQADAAAAAAAAAAAAAAAAAAAREiH/2gAMAwEAAhEDEQA/ALzVVXCMNyL36jKWismtLFT3MnE/WllVlJNTjjeTZKMSQ6sWCiK+SFNhukDXawI8jEAANlA8EISVQ//Z",
    alt: "Couple sitting together above the clouds on Kilimanjaro",
    category: "Kilimanjaro",
    width: 836,
    height: 1080,
  },
  {
    src: "/images/safari-lion-portrait.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMEMREh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwBmq9LPKwfQezPsqTHurZT8YclmnIq3AqxBMUcS6XJsdiw4ZOlChulwuBHzkJjPbZSxRWJAhDIbP//Z",
    alt: "Male lion resting in the shade of an acacia tree",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-lion-pride-tree.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EACAQAAICAgAHAAAAAAAAAAAAAAECAAMEERIVITFBUnH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAESH/2gAMAwEAAhEDEQA/AGcxpDa0fsyzMWypgo7jUksqVV2IhmKjoZlil2LxUUhNqfMJBtvYwiD/2Q==",
    alt: "Lion pride lying together under a tree",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-leopard-tree.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABBv/EAB4QAAICAgIDAAAAAAAAAAAAAAECAAMEIRESFCNB/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgED/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAS/9oADAMBAAIRAxEAPwAnHrVrfe3UA7iWMUxndEI4bYMHstIVmmUXuTwTzqBNEhuo8nQ38lA0ufqNymOK6v/Z",
    alt: "Leopard lounging on a branch",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-serval-grass.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAf/EAB0QAAICAwADAAAAAAAAAAAAAAABAhEDEiEEFEH/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AVjk4rZuDyZTu+JPgq5O6CL1dIGEqn7UlywJ2zf0DMWv/2Q==",
    alt: "Serval cat watching from tall golden grass",
    category: "Safari",
    width: 1024,
    height: 684,
  },
  {
    src: "/images/safari-hyena-golden-hour.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA0DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAADBf/EAB4QAAICAgIDAAAAAAAAAAAAAAECAAMRIQQSEzFB/8QAFgEBAQEAAAAAAAAAAAAAAAAABAID/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AG1VJjYmpprHpRC08jyMegHUfTFq6Y2cGCtKkcdB1DY1iHflWq2mlKaIf//Z",
    alt: "Spotted hyena in golden evening light",
    category: "Safari",
    width: 512,
    height: 768,
  },
  {
    src: "/images/safari-elephant-mother-calf.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAHxAAAgMAAQUBAAAAAAAAAAAAAQIAAwQSBREhIjFR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAD/8QAGBEBAQADAAAAAAAAAAAAAAAAABEBAhL/2gAMAwEAAhEDEQA/ANrbhnA5v5nOZF36D9H6YyaxoPvJrrXOTwExusUpduk1KexZjCXs0MXMIDnD/9k=",
    alt: "Elephant mother and calf grazing together",
    category: "Safari",
    width: 1024,
    height: 641,
  },
  {
    src: "/images/safari-elephant-road-crossing.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABA//EACAQAAICAgEFAQAAAAAAAAAAAAECAAMREhMhMUFRYXH/xAAVAQEBAAAAAAAAAAAAAAAAAAACAP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwAppUBzAho2sV2Fa5x5+Tqa1aouwyT7m8Gx22I/BDSgmsA42lHoF6d5Q1R//9k=",
    alt: "Elephant crossing the track between safari vehicles",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-giraffe-golden-hour.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABIDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQGAQMF/8QAIxAAAgIBBAAHAAAAAAAAAAAAAAIBAxEEBRIxExUhQVFSYf/EABgBAAMBAQAAAAAAAAAAAAAAAAACAwEE/8QAGREBAQADAQAAAAAAAAAAAAAAAAERIjJC/9oADAMBAAIRAxEAPwDqpvat7G5d2VusFKptf7zknpdC0zlsMc9tikwtHmUfgKZO82xMxw6AbjVC0LzZZPL1wZ11jR1OABr1GeULxX+QAVxCP//Z",
    alt: "Giraffe portrait in golden evening light",
    category: "Safari",
    width: 511,
    height: 559,
  },
  {
    src: "/images/safari-giraffe-sunset.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQGA//EABwQAAIDAQADAAAAAAAAAAAAAAECAAMRBSEiMf/EABYBAQEBAAAAAAAAAAAAAAAAAAEDBP/EABoRAQEAAgMAAAAAAAAAAAAAAAEAEjETIVH/2gAMAwEAAhEDEQA/AN0717qFUa5jS9qxa9uUIRJauxq0Nin2EUt6FznGOiZkXVXo3WB73n6sJFNa7HdyEONnI8v/2Q==",
    alt: "Giraffe at sunset on the savanna",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-zebra-mother-foal.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAHRAAAQUAAwEAAAAAAAAAAAAAAQACAxEhBAUSQf/EABcBAAMBAAAAAAAAAAAAAAAAAAACAwT/xAAZEQACAwEAAAAAAAAAAAAAAAAAARESIVH/2gAMAwEAAhEDEQA/AEkLo22XVSIyyOb6BJC29rCHRDao/EXEjBDmnRSzzhaNMvuQqTGLTqktn0Ko/9k=",
    alt: "Zebra mother with her foal on the plains",
    category: "Safari",
    width: 1024,
    height: 645,
  },
  {
    src: "/images/safari-zebra-closeup.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAeEAACAwACAwEAAAAAAAAAAAABAgADESExBBIyYf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AqsvKVkqOTOdc+P8ARDHv9mWd3trPsQN6jfOAanc5WFJVdhVcUYISQWMBxCIf/9k=",
    alt: "Close-up of a zebra's head and mane",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-buffalo-portrait.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBBAb/xAAiEAABBAECBwAAAAAAAAAAAAABAAIDERIEMRMVISMzQUL/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQEBAQAAAAAAAAAAAAAAAAEAAhH/2gAMAwEAAhEDEQA/AKB1ElmJw7f0VFRs8c1k7Apg+BksJBFXuQs5OTx8PTTQUMI19iTPmEw6XdIS97ix2IKEuR7f/9k=",
    alt: "Cape buffalo portrait in warm light",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-hippo-pod.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAHBAAAQUBAQEAAAAAAAAAAAAAAQACAwQRITFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8AB9WFjtk4mirQFmtzEVlxezqOIkZ058TC2inDnikYsFowBSoH/9k=",
    alt: "Pod of hippos with eyes and ears above the water",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-wildebeest-herd.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwT/xAAhEAACAgECBwAAAAAAAAAAAAABAgADEQQSExQhIiMxcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBEv/aAAwDAQACEQMRAD8ARdZcjhO77iaedVa8vaQT6jo29QxAzGbS1WdWUSXSsSvkUMLCcwlLPwjsUDAhF0j/2Q==",
    alt: "Wildebeest herd grazing across the plains",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-wildebeest-crossing-vehicles.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAED/8QAHhAAAgMAAQUAAAAAAAAAAAAAAAECAxEiBBIxQYH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAARECEv/aAAwDAQACEQMRAD8AzU7bLe5p77wSsvnwhF4/KAMqy1lFc+pr46/gACjyj//Z",
    alt: "Wildebeest crossing the road in front of safari vehicles",
    category: "Safari",
    width: 1024,
    height: 403,
  },
  {
    src: "/images/safari-client-game-drive.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAwQREiFBMf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABgRAQEAAwAAAAAAAAAAAAAAAAABEiFB/9oADAMBAAIRAxEAPwAROVXYGV2SvU2GXfb7sj2IfVyDkPYR912FVPUzuj4WMi4DvUoJmYH6ZQZVH//Z",
    alt: "Guest watching wildlife from the pop-up roof of a safari vehicle",
    category: "Safari",
    width: 1024,
    height: 643,
  },
  {
    src: "/images/safari-crowned-cranes.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EAB4QAAICAgIDAAAAAAAAAAAAAAABAgMREiExIjJR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Au20jDVdfZdLKaiul9NtkNo+zQlC88Z4AZ45cVt2BbRAYn//Z",
    alt: "Grey crowned cranes foraging in the grass",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-lilac-breasted-roller.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EAB8QAQACAQQDAQAAAAAAAAAAAAEAAgMEERIxExQhUf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEgER/9oADAMBAAIRAxEAPwAxq8gcdhZs1VrUa8oWx4bCO+/7OJZcgzDGIz0v2U+GPqULa9l7lFAh/9k=",
    alt: "Lilac-breasted roller perched on a green branch",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-ngorongoro-crater-floor.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFA//EAB4QAAMAAQQDAAAAAAAAAAAAAAABAgMEERIyEyEi/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgAB/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBERMhUf/aAAwDAQACEQMRAD8AedTkqfp7IZ5Ka7rYhVqMkpPk2aRmuvbYJdh6KVNcuyAn+RgZkcqjh//Z",
    alt: "View across the Ngorongoro Crater floor and its soda lake",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-serengeti-aerial.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABsQAAMAAwEBAAAAAAAAAAAAAAABAgMRMRJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQISE//aAAwDAQACEQMRAD8AzYat/WVr1rrI4reh3bWyekiVEQp366wGqtvgDWQoj//Z",
    alt: "Aerial view of a river winding through the Serengeti plains",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-maasai-portrait.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EAB8QAAICAgIDAQAAAAAAAAAAAAECAAMEERIhBUFRcf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/AJvG2cKhxAJY6b8iXZdlVrImuIPuQV2MhJU6I+TG3JdnOwOxMtYJaoe/KZrSSe4SF7CWhKMP/9k=",
    alt: "Maasai woman wearing a traditional beaded headdress",
    category: "Culture",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-maasai-dance.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIFBP/EAB8QAAICAQQDAAAAAAAAAAAAAAECAAMEBRESISJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMA/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACAxH/2gAMAwEAAhEDEQA/AHuz7qiVFoLfI41axV8iCZNy6wmVsO+vczKvO0qTLNbL1jXyqUElxNYYjsiEjog4whOyPIZmT//Z",
    alt: "Maasai dancers in red and purple shukas mid-ceremony",
    category: "Culture",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-maasai-procession.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABBP/EACAQAAICAgICAwAAAAAAAAAAAAECAAMEESExEhMiMmH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABImH/2gAMAwEAAhEDEQA/AON8w1syJvgza824kDyOzFGOnsb97hqinJPH1HELwwNmXezn5a0dSj0Y6WKWPZYygvL/2Q==",
    alt: "Maasai men and women in traditional dress walking in procession",
    category: "Culture",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-maasai-herder.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAHRAAAgIDAQEBAAAAAAAAAAAAAQIABAMRIQUSQf/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwBLFuwdt1QB2Z2qvnUZFYtuavUPzUOv0w/OzMlLY7oyG7DsAlLKq66JR8tzKH4dSiyi/9k=",
    alt: "Young Maasai herder shielding his eyes from the sun",
    category: "Culture",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-maasai-women-boma.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAdEAACAgIDAQAAAAAAAAAAAAABAgARAzEFEiFB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8AUoCUAaBiWCJlI2TLeXUY0QoK9+TmlRYc+mQapkqgY1rUJnY1uEBH/9k=",
    alt: "Maasai women in red outside a traditional boma",
    category: "Culture",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-coffee-pounding.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQBAwX/xAAiEAEAAgIBAgcAAAAAAAAAAAABAAIDEQQhMRITQVFxgaH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGxEBAQABBQAAAAAAAAAAAAAAAAIyARESIWH/2gAMAwEAAhEDEQA/AJachvlsuix+zfmzGTED3PSQvHzLTdEK933luxwFWv3E2lSZZaZkNXqGunWJJkMni0OwiDsvHx2eXUcKslwUPKfiIkpyaNcUuSuruliIjg//2Q==",
    alt: "Guest laughing while pounding coffee the traditional Chagga way",
    category: "Culture",
    width: 720,
    height: 709,
  },
  {
    src: "/images/culture-coffee-beans.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABMDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAIFAwQG/8QAHxAAAgMAAgIDAAAAAAAAAAAAAAECAxEFEhMhJDFB/8QAFwEBAQEBAAAAAAAAAAAAAAAABAMBAv/EABwRAQACAQUAAAAAAAAAAAAAAAABESECEhMUUf/aAAwDAQACEQMRAD8AqeDr+V3zEkbvIQn4LZZqJUVOiuCrW/jMtPfrKNmP360jOrNr7cU530C6nxtUpOWNaBHPA/Xn1YJLq2l9EYvtFNpboAWSkpWSUmlgAOWP/9k=",
    alt: "Hands holding fresh coffee beans over a woven basket",
    category: "Culture",
    width: 717,
    height: 767,
  },
  {
    src: "/images/culture-chagga-meal.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABIDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIEBQED/8QAIBAAAgEEAwADAAAAAAAAAAAAAQIAAwQREhMhMRQjUf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAA//EABoRAQACAwEAAAAAAAAAAAAAAAABAhEhMUH/2gAMAwEAAhEDEQA/AM5dajKtPzPpk7xgmoxn9nhZ2tU4fZVA8BM7ULK5bOyg+wRXwuJ8aHvjMSyLmrgfUsSWFWzHJcKG7Eu1kVadRVUARExtO4O3WX8ioOg0REZP/9k=",
    alt: "Guests sharing a home-cooked Chagga meal at a coffee farm",
    category: "Culture",
    width: 720,
    height: 811,
  },
  {
    src: "/images/culture-village-dance-group.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEBf/EAB8QAQACAgICAwAAAAAAAAAAAAECAwARBBIhMRNRcf/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAASESH/2gAMAwEAAhEDEQA/AIW2DawYMI79mMjP460ZKvocVKmzaKJ94qs3JF3IcPeElsV3cYrj369tecMhlx6l8xd/uGZpQ//Z",
    alt: "Guests and villagers posing together after a traditional dance",
    category: "Culture",
    width: 1008,
    height: 756,
  },
  {
    src: "/images/materuni-waterfall.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAMBAgQF/8QAHxAAAgICAgMBAAAAAAAAAAAAAAECAxEhBEEFEnGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAQIx/9oADAMBAAIRAxEAPwDxqORdxbHZRLXZeXluTfpza+HM8rb0jPrFRTj+kzSSVry+wTlZGDxsAVqVnT2irqilhLQBF6GlkIqbWEABqn//2Q==",
    alt: "Materuni waterfall dropping into a green gorge",
    category: "Culture",
    width: 720,
    height: 709,
  },
  {
    src: "/images/about-guide-client.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EAB4QAAICAgIDAAAAAAAAAAAAAAECAAMREgRBISNR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIxEf/aAAwDAQACEQMRAD8AntXybU3K6gRHsq8sMgyo9dzK4dsDrEUeJYtQAXb7A6FMrhYapWZciaqUCxh1CEm8GtP/2Q==",
    alt: "Guide and guest smiling together before a climb",
    category: "Arusha",
    width: 1800,
    height: 2400,
  },
  {
    src: "/images/arusha-street-group.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgUG/8QAIBAAAQQBBAMAAAAAAAAAAAAAAQACAwQRBRMhYRJBUf/EABUBAQEAAAAAAAAAAAAAAAAAAAAE/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwCsOp16ljb2uiO1FjUI5ZCceLfiz7VCd8m7yXZylMglMmQDn2hjEQumamNiYOQ0ZKEKYqL/2Q==",
    alt: "Guests and guide having fun on an Arusha street",
    category: "Arusha",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/arusha-market-shopping.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDBAX/xAAfEAACAgIBBQAAAAAAAAAAAAABAgADESEEBRIUMaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEA//EABgRAQEBAQEAAAAAAAAAAAAAAAECABEx/9oADAMBAAIRAxEAPwDKlFbWFWJbB1iOTWT21lUI0YgdfJZFJRn0JyuRVbXeyM2CPsTBN1pKk8da6xjyFbOwZTqyh3qY+yu4QgZUTJvw3//Z",
    alt: "Guests browsing a colorful Arusha craft market",
    category: "Arusha",
    width: 810,
    height: 1080,
  },
  {
    src: "/images/arusha-heritage-centre.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAhEAACAgIBBAMAAAAAAAAAAAABAwACBBEFEhMVITEyYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARQf/aAAwDAQACEQMRAD8AxXmY7G2uxmhX1USHNx3WrY6sv9jI4/EPyobiz+OPfAVoLB+skOVrrtQ5uEo9NKVIEI945J9lVYRsv//Z",
    alt: "Visitors at the Cultural Heritage Centre in Arusha",
    category: "Arusha",
    width: 1080,
    height: 810,
  },
  {
    src: "/images/arusha-clock-tower.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQP/xAAhEAACAQIGAwAAAAAAAAAAAAABAgADEQQFISJBURITMf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAAUEh/9oADAMBAAIRAxEAPwBl8z9e5lBQ9RHE5vUdrUyEWZiaYOA+6heJJNKpbzqKQvFoO3S2Lr01tODuRt0K9GEJkxSv/9k=",
    alt: "The clock tower roundabout in central Arusha",
    category: "Arusha",
    width: 1800,
    height: 2400,
  },
  {
    src: "/images/safari-lion-rolling.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EAB8QAAEEAgIDAAAAAAAAAAAAAAEAAgMRBCESIjFBUf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAA//EABcRAQEBAQAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AEGgHSblxHNgaWHlfsJSGOzsmvipY8paKqwB4WRkiY6BzTRQtZsgmQ9QhWnl/9k=",
    alt: "Lion rolling on its back in the grass",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-elephant-tusk.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAv/EAB0QAAICAwADAAAAAAAAAAAAAAECAAMEERIhQlH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJGM4WsU2vo+pj3xrD5A618k+5tqpja8u6rnhyJCmWBDEMCDCMfId26YAmED/9k=",
    alt: "Close-up of an elephant's tusk and trunk",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-giraffe-landscape.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAf/EACEQAAEEAQMFAAAAAAAAAAAAAAEAAgMRBAUSIRMUMUGB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAaEQEAAQUAAAAAAAAAAAAAAAAAEQEDEiFB/9oADAMBAAIRAxEAPwAxNYmAIN7T7SszOlmYR1PijgeX03wAFshGwilGtzkK4alH3creDdoSXk7jyhB//9k=",
    alt: "Giraffe among acacia trees in the open landscape",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-antelope-mound.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAgT/xAAeEAACAgICAwAAAAAAAAAAAAAAAQIDBBESFCExUf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAACEwH/2gAMAwEAAhEDEQA/AJllVqLakt/CteVHgnP2JarG3zl5bZrc20Y12E1GHarAW7AU0klP/9k=",
    alt: "An antelope standing on a termite mound",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-bird-branch.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EAB0QAAIBBQEBAAAAAAAAAAAAAAABAgMEERJhEyL/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwBWwqbVo7PBcVaLRnrKP2uMsNAhU16xATx0Ci//2Q==",
    alt: "A small bird perched on a slender branch",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-vervet-monkey.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAF/8QAHhAAAgICAgMAAAAAAAAAAAAAAgMAAQQREiEjQWH/xAAWAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/AMzE8glVd3uNyBEViFDotd/ZnYLCXyIYl2SbBq7qtybDD8dSWJEmLuy16lCrymLChG+pTKjH/9k=",
    alt: "Vervet monkey resting in a tree",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-mongooses-den.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EACEQAAICAQIHAAAAAAAAAAAAAAECAAMRBFEFEhMhMUFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwBN6HYJ8+TJvEKrReoCkp6Ali7L4XOANodABg5JJG8YWOm0eaVJ7GEZ5ztCMFf/2Q==",
    alt: "Mongooses gathered at their den",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-ostrich.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACA//EAB8QAAMAAQMFAAAAAAAAAAAAAAABAgMFFSEREzFhcf/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/EABgRAAIDAAAAAAAAAAAAAAAAAAABESFR/9oADAMBAAIRAxEAPwBTdcjM1rDl9KpL6E96vRxzxOalVrlBy9Eoc3K3ymQTOWplJeERkvSo/9k=",
    alt: "Ostrich walking across the savanna",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-birds-sunset.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAQb/xAAeEAABBAMBAQEAAAAAAAAAAAABAAIDBAUREkETUf/EABYBAQEBAAAAAAAAAAAAAAAAAAQCA//EABkRAAIDAQAAAAAAAAAAAAAAAAACARMhEf/aAAwDAQACEQMRAD8AbNSlbf0GAfpUXM4iOEulD+W+LIbUter9I3aKa7dkIg2c7BG9IsdXRGThzTZ3QjhuiB6hUpKUIeRpC0sUitj/2Q==",
    alt: "Birds in flight against a golden sunset",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-pelicans.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBP/EABsQAAMAAwEBAAAAAAAAAAAAAAABAgMREiEx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8AzY8cVSQ94uK0tGZU0x+m/oBWncvXjAhsBqf/2Q==",
    alt: "Pelicans floating on a lake",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/safari-ngorongoro-rim.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAwb/xAAeEAACAgICAwAAAAAAAAAAAAABAgADBBEFEjFBcf/EABYBAQEBAAAAAAAAAAAAAAAAAAECA//EABkRAAIDAQAAAAAAAAAAAAAAAAABERITIf/aAAwDAQACEQMRAD8AY4+gYqb6KT61H2ywELMugJxOLyGTUoC2E/ZscrIus01raMdY5AVTLd/IYL2lmZtwkVqVc9m8wmepVT//2Q==",
    alt: "View from the rim of the Ngorongoro Crater",
    category: "Safari",
    width: 1024,
    height: 683,
  },
  {
    src: "/images/culture-cattle-herding.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQD/8QAHhAAAgICAgMAAAAAAAAAAAAAAAECAxESBAUhMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ6O2zYoxkkl7Ll2OWtbc/QCKynz7NnrPwAAP//Z",
    alt: "Herder driving cattle through the dust",
    category: "Culture",
    width: 1024,
    height: 403,
  },
  {
    src: "/images/culture-boma-huts.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBP/EAB0QAAICAgMBAAAAAAAAAAAAAAACAQQDEQUSIVH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/8QAGREAAwADAAAAAAAAAAAAAAAAAAECAxIT/9oADAMBAAIRAxEAPwC5L1vGvvV5+kcvJW5iYhVjwAzWSi3EmbHetKumaNgAOlC0k//Z",
    alt: "Traditional thatched boma huts in a village",
    category: "Culture",
    width: 1024,
    height: 403,
  },
  {
    src: "/images/culture-coffee-gourd.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQID/8QAIRAAAgICAgEFAAAAAAAAAAAAAQIAAxEhBBIxBSMyQVH/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/8QAGxEAAQUBAQAAAAAAAAAAAAAAAAECAxESMiH/2gAMAwEAAhEDEQA/AOtvLfkccGvBU/KVl+ShDDwJn0/2qyrN53ibXFDYpDaP1Aja8GSqK2sYX83EsjSp3iI2BdEWpiUQ53JfRej6iJok4aRj7cFY9RERJFD/2Q==",
    alt: "A guest tasting a traditional drink from a gourd on the coffee tour",
    category: "Culture",
    width: 720,
    height: 708,
  },
  {
    src: "/images/kili-climber-peaks-ahead.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAOABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EAB8QAAICAQQDAAAAAAAAAAAAAAECAAMRBAUhMRIVIv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AsvulCDjmJvv2bzWqgDHcjpqBZSW8eouLFtcsFxiKUbGi94o7aEzT2fXCiE1Y/9k=",
    alt: "Climber looking toward the peaks ahead on Kilimanjaro",
    category: "Kilimanjaro",
    width: 2400,
    height: 1626,
  },
  {
    src: "/images/kili-group-celebration.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQT/xAAeEAACAQQDAQAAAAAAAAAAAAABAgADBBExEhNB8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAHREAAQQCAwAAAAAAAAAAAAAAAAECAwQUURExQf/aAAwDAQACEQMRAD8AdUQDeTGRFZsfCTJ40gBs+yPe1vUVVGeW8xOsSc9kkqxJ4dxtQfYTKdwWXJUQhyn7FiQ6P//Z",
    alt: "Group celebrating on a rock outcrop below Kibo peak",
    category: "Kilimanjaro",
    width: 2400,
    height: 1600,
  },
  {
    src: "/images/kili-glacier-ice-field.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAC/8QAHxAAAgMAAgIDAAAAAAAAAAAAAREAAgMEEgUVITEy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQADAQAAAAAAAAAAAAAAAAAAARMS/9oADAMBAAIRAxEAPwAvrqE/cs+BhdrT5BRjDY9CkCofi46ZVs7B2LlaMnhGh43NfqUbk+gZcoqxNH//2Q==",
    alt: "Climbers on the ice field near Kilimanjaro's summit",
    category: "Kilimanjaro",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/kili-porter-silhouette.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQb/xAAgEAACAgEEAwEAAAAAAAAAAAABAgARAwQFE3EUIUFS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AHjTrdFlvuS85XcDp2Sk/fyct5Oa75XvuNbcM7YjjOQkGBKPcwwhA//Z",
    alt: "Porter carrying a load silhouetted against the mountain",
    category: "Kilimanjaro",
    width: 864,
    height: 1080,
  },
  {
    src: "/images/kili-from-savanna.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUAA8DASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQb/xAAfEAACAQMFAQAAAAAAAAAAAAAAAQIDERIUITFBQmH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBP/EABsRAAIBBQAAAAAAAAAAAAAAAAABAxETFDFR/9oADAMBAAIRAxEAPwDnsPgUDU06twFQS83Ec+Cuya3JwtpN5KPROT3sAAMQR//Z",
    alt: "Kilimanjaro rising above the savanna with wildflowers in the foreground",
    category: "Kilimanjaro",
    width: 808,
    height: 1080,
  },
  {
    src: "/images/kili-jump-above-clouds.jpg",
    blurDataURL: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAQABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwX/xAAgEAACAgICAgMAAAAAAAAAAAABAgADBBEFEiExExRR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAgME/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAEREwIDIf/aAAwDAQACEQMRAD8Aef8ALi191TY9R0LezKHAHYb1OtyeMcilUQD35mSUKjo9lnlRogTU9rmSCw4T/Wb8hK35ClW11JhHeGpn/9k=",
    alt: "Two climbers jumping for joy above the clouds",
    category: "Kilimanjaro",
    width: 1024,
    height: 819,
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
