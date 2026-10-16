// All site text lives here.

export const site = {
  name: "18 Forge",
  title: "18 Forge",
  url: "https://18forge.com",
  description:
    "An independent creative company for luxury houses, hospitality, family offices and startups. We create, build, advise and arrange: brands, campaigns, websites, apps, AI systems, strategy and travel.",
  contactEmail: "agency@18forge.com",
};

// The destinations. Home is the logo on wide screens and the first line
// of the menu on phones. Contact sits at the foot of every page.
export const nav = {
  home: { label: "Home", href: "/" },
  items: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Expertise", href: "/expertise" },
    { label: "About", href: "/about" },
  ],
  open: "Menu",
  close: "Close",
  label: "Main",
  skip: "Skip to content",
};

export const hero = {
  eyebrow: "Independent creative company",
  disciplines: "Strategy / Creative / Technology / Experiences",
  headline: "We make people want things.",
  headlineAccent: "Then we make them easy to buy.",
  subhead:
    "We turn ambitious ideas into brands, products and experiences that work in the real world, with one trusted point of contact.",
  cta: "Start a conversation",
  secondary: "See the work",
};

export const ticker = [
  "Brands",
  "Campaigns",
  "Websites",
  "Apps",
  "AI systems",
  "Strategy",
  "Travel",
  "Content",
];

// The four disciplines. The landing page shows the summary line; the
// Expertise page shows the body and what sits under each one.
export const disciplines = {
  kicker: "What we do",
  title: "Four disciplines. One point of contact.",
  intro: "The whole job under one roof, so nothing gets lost between suppliers.",
  more: "Our expertise",
  items: [
    {
      id: "create",
      numeral: "01",
      title: "Create",
      summary: "Brands, campaigns, creative and content.",
      body: "Identity, film, print and social, made by hand and made to sell.",
      capabilities: [
        { name: "Brand and identity", note: "Who you are, said once and said well." },
        { name: "Creative direction", note: "Everything that carries your name, kept in step." },
        { name: "Advertising", note: "Print, film and social campaigns." },
        { name: "Content", note: "Words, pictures and film for every channel you use." },
      ],
    },
    {
      id: "build",
      numeral: "02",
      title: "Build",
      summary: "Websites, apps, AI and the systems behind them.",
      body: "Designed, built and looked after by the same people who wrote the brief.",
      capabilities: [
        { name: "Websites", note: "Fast, beautiful and easy to buy from." },
        { name: "Apps", note: "For customers, teams and the back office." },
        { name: "Shops", note: "Collections, checkout and the admin behind them." },
        { name: "AI systems", note: "Automation you can see, check and switch off." },
      ],
    },
    {
      id: "advise",
      numeral: "03",
      title: "Advise",
      summary: "Strategy, positioning, launches and growth.",
      body: "Pricing, launches and introductions, through to the campaigns that close the sale.",
      capabilities: [
        { name: "Positioning", note: "Where you stand, and how to say it." },
        { name: "Pricing", note: "What to charge, and why." },
        { name: "Launches", note: "Openings, releases and first impressions." },
        { name: "Growth and introductions", note: "The next step, and the people who can help." },
      ],
    },
    {
      id: "experience",
      numeral: "04",
      title: "Experience",
      summary: "Travel, hospitality, events and bespoke arrangements.",
      body: "Journeys, events and the arrangements that are hard to delegate to just anyone.",
      capabilities: [
        { name: "Travel", note: "Journeys planned door to door." },
        { name: "Events", note: "Openings, dinners and gatherings." },
        { name: "Private arrangements", note: "The details you would rather not chase." },
        { name: "Bespoke solutions", note: "Whatever the brief, made to measure." },
      ],
    },
  ],
};

export type DisciplineId = (typeof disciplines.items)[number]["id"];

// The /expertise page.
export const expertise = {
  path: "/expertise",
  kicker: "Expertise",
  title: "Everything under one roof.",
  intro:
    "From first idea to finished result. Creative, technology, strategy and experiences, coordinated through one accountable point of contact, so the brand, the website and the launch all come from the same conversation.",
  seeIn: "See it in",
  metaDescription:
    "Everything under one roof: brands, campaigns, websites, apps, AI systems, strategy and travel, through one point of contact.",
};

// The AI section, shown under Build on the Expertise page.
export const machinery = {
  kicker: "AI, with people in charge",
  title: "A little clockwork, beautifully dressed.",
  body: "We put AI to work for companies and for families. The machine takes the repetitive work; a named person on our side is accountable for every system, and nothing reaches your clients without the checks you agree.",
  examples: [
    "Ad variations tested continuously, with every change approved by a person",
    "Bookings and client messages answered around the clock, handed to your team when it matters",
    "Trips planned door to door, checked before anything is booked",
    "Family logistics, from child care to calendars",
    "Back-office paperwork, prepared for review and sign-off",
  ],
};

// Selected work. Two projects on the landing page, all of them on
// /portfolio. Only list projects we have actually made.
export const work = {
  id: "work",
  path: "/portfolio",
  kicker: "Selected work",
  title: "A few of the houses we have dressed.",
  intro: "These are some of the projects our founders have led.",
  // Shown on projects marked soon, before their own address is live.
  soon: "Online Soon",
  // The landing page shows only these, in this order.
  home: ["Ta-nnin", "58 Diamonds"],
  more: "The full portfolio",
  // image: a screenshot of the site in public/work, 1600 x 1000 pixels.
  // concept: an uncommissioned proposal, never presented as client work.
  // expertise: the disciplines the project shows, linked both ways.
  items: [
    {
      slug: "ta-nnin",
      name: "Ta-nnin",
      label: "Website",
      body: "A wine bar on Volkstraat in Antwerp.",
      about: [
        "A wine bar on Volkstraat in Antwerp, with CE-LLAR, its bottle shop, across the street. One site covers both, in Dutch and English, lit by a neon sign traced from the logo.",
        "The menu, wine list, bar list and events come from an admin the team runs themselves, and tables are booked in one tap. Behind it sits a full reservation system of our own, ready for the next venue.",
      ],
      role: "Website, admin",
      soon: true,
      concept: false,
      expertise: ["build"],
      url: "https://tannin-web.vercel.app/",
      domain: "tannin-web.vercel.app",
      image: "/work/tannin.jpg",
    },
    {
      slug: "eighteen-diamonds",
      name: "Eighteen Diamonds",
      label: "Website",
      body: "Diamonds, fine jewellery and watches from New York's Diamond District.",
      about: [
        "A wholesale house on West 47th Street: loose diamonds, fine jewellery, luxury and vintage watches, and estate pieces bought and sold.",
        "One quiet page in navy and ivory, built around a photograph of the wall sign. Services, what they buy and where to find them, with a call or an email as the only next step.",
      ],
      role: "Website",
      soon: false,
      concept: false,
      expertise: ["build"],
      url: "https://eighteendiamonds.com",
      domain: "eighteendiamonds.com",
      image: "/work/eighteen-diamonds.jpg",
    },
    {
      slug: "58-diamonds",
      name: "58 Diamonds",
      label: "Website",
      body: "Fine jewellery by Farah, in Antwerp and by appointment.",
      about: [
        "Rings, necklaces, earrings and bracelets, made by Farah and shown by appointment in Antwerp. The site presents the collection in English, Dutch and French, with a WhatsApp line and viewing requests on every piece.",
        "Behind it sits an admin Farah runs herself: pieces, photos, pages, events and translations. A full shop with checkout and EU VAT is built in, ready to switch on.",
      ],
      role: "Website, admin, shop",
      soon: false,
      concept: false,
      expertise: ["build"],
      url: "https://58diamonds.com",
      domain: "58diamonds.com",
      image: "/work/58-diamonds.jpg",
    },
    {
      slug: "18-sitters",
      name: "18 Sitters",
      label: "iOS and Android app",
      body: "Trusted childcare with Jewish values: an app that brings families and sitters together.",
      about: [
        "A membership app for families and babysitters. Verified profiles, browsing by city, encrypted messages and calls, bookings, and a live session screen from the first knock to the goodbye.",
        "Built once and shipped three ways: live on Android, in review for iOS, and on the web, with in-app memberships through Apple and Google and an admin behind it.",
      ],
      role: "App, website, admin",
      soon: false,
      concept: false,
      expertise: ["build"],
      url: "https://18sitters.com",
      domain: "18sitters.com",
      image: "/work/18-sitters.jpg",
    },
    {
      slug: "mezze-house",
      name: "Mezze House",
      label: "Restaurant concept",
      body: "A Lebanese table in Hoboken, New Jersey: a concept site with live booking, and the system behind it.",
      about: [
        "A late night Lebanese restaurant, imagined end to end. A dark, candlelit site with the menu, the wine and the room, and a table booked in a few taps.",
        "Behind it sits the proposal we put to restaurant owners: menu, floor plan, hours and ordering entered once and used everywhere, from the website to the printed cards. The name, address and photos are placeholders.",
      ],
      role: "Concept, website, booking",
      soon: false,
      concept: true,
      expertise: ["build", "advise"],
      url: "https://mezzehouse.netlify.app",
      domain: "mezzehouse.netlify.app",
      image: "/work/mezze-house.jpg",
    },
  ] satisfies {
    slug: string;
    name: string;
    label: string;
    body: string;
    about: string[];
    role: string;
    soon: boolean;
    concept: boolean;
    expertise: DisciplineId[];
    url: string;
    domain: string;
    image: string;
  }[],
};

export type WorkItem = (typeof work.items)[number];

// The /portfolio page.
export const workPage = {
  title: "Selected work",
  intro:
    "Brands, websites and systems made by the people behind 18 Forge. Each one links to the real thing.",
  role: "What we did",
  status: "Status",
  live: "Live",
  expertise: "Expertise",
  visit: "Visit",
  conceptsKicker: "Independent concepts",
  conceptsTitle: "Proposals of our own.",
  conceptsIntro:
    "Uncommissioned ideas, made to show what a place could become. Names and details are placeholders, and no client has endorsed or chosen them.",
  conceptLabel: "Independent concept",
  closingTitle: "Yours could be next.",
};

// The /about page.
export const about = {
  path: "/about",
  kicker: "About",
  title: "Independent, and close to the work.",
  intro:
    "18 Forge is an independent creative company. We like to see an idea through, from the first conversation to the last detail, with the same people beside you all the way.",
  approachKicker: "How we work",
  principles: [
    {
      title: "Independent",
      body: "We answer to our clients rather than to a network, so each project starts from what it needs.",
    },
    {
      title: "One point of contact",
      body: "One person knows the whole project, answers your email and stays with it to the end.",
    },
    {
      title: "Hands on",
      body: "Ideas and execution sit together, so what we propose is something we can deliver.",
    },
    {
      title: "Real and working",
      body: "We like to finish things: a site that takes bookings, an app people use, an opening that happens on the day.",
    },
    {
      title: "Discreet",
      body: "What you tell us stays with us, and our name stays off your work unless you would like it there.",
    },
  ],
  metaDescription:
    "An independent creative company with one trusted point of contact, for luxury houses, hospitality, family offices and startups.",
};

// Who we work for, on the About page. work: projects that show the fit.
export const houses = {
  kicker: "Who we work for",
  title: "The people we tend to work with.",
  items: [
    {
      title: "Luxury houses",
      body: "Maisons and makers who sell craft, time and scarcity, and cannot afford to look ordinary.",
      work: ["Eighteen Diamonds", "58 Diamonds"],
    },
    {
      title: "Hospitality",
      body: "Hotels, residences and places to stay, where every detail is noticed and first impressions decide the booking.",
      work: ["Ta-nnin", "Mezze House"],
    },
    {
      title: "Family offices",
      body: "Discreet, demanding and long term. Sharper systems, quieter operations and a public face only when one is wanted.",
      work: [],
    },
    {
      title: "Startups",
      body: "Big ambitions on short runways. A brand, a product and a pitch that look a few rounds ahead.",
      work: ["18 Sitters"],
    },
  ],
  footnote: "And anyone else with taste and a deadline.",
};

// The short invitation at the foot of each page. Each page has its own
// heading, so no line repeats across the site; the landing page also
// carries the longer note.
export const closing = {
  kicker: "Contact",
  title: "Tell us what you are working on.",
  home: "Tell us what you are working on.",
  expertise: "A project in mind?",
  about: "Shall we talk?",
  body: "Building, opening, launching or selling: one email reaches the people who will do the work. There is no charge for a first conversation.",
  cta: "Start a conversation",
};

export const footer = {
  credit: "Forged by",
  backToTop: "Back to top",
};

// The small assistant in the bottom right corner. It only appears when the
// ANTHROPIC_API_KEY environment variable is set on the host.
export const assistant = {
  open: "Ask a question",
  close: "Close",
  title: "Ask 18 Forge",
  greeting:
    "Good to see you. Ask anything about what we do, or tell us what you are working on and we will point you in the right direction.",
  suggestions: ["What do you do?", "Who do you work with?", "How do we start?"],
  placeholder: "Type your question",
  send: "Send",
  thinking: "One moment",
  note: "An automated assistant. A person answers every email.",
  error:
    "Sorry, I cannot answer right now. Please write to agency@18forge.com and one of us will reply.",
  busy: "That is a lot of questions in a short time. Please try again in a few minutes, or write to agency@18forge.com.",
};
