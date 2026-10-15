// All landing page text lives here.

export const site = {
  name: "18 Forge",
  title: "18 Forge",
  description:
    "An independent creative company for luxury houses, hospitality, family offices and startups. We create, build, advise and arrange: brands, campaigns, websites, apps, AI systems, strategy and travel.",
  contactEmail: "agency@18forge.com",
};

export const hero = {
  eyebrow: "Independent creative company",
  founded: "Est. 2026",
  disciplines: "Strategy / Creative / Technology / Experiences",
  headline: "We make people want things.",
  headlineAccent: "Then we make them easy to buy.",
  subhead:
    "We turn ambitious ideas into brands, products, campaigns and experiences that work in the real world. For luxury houses, hospitality, family offices and startups, with one trusted point of contact.",
  cta: "Start a conversation",
  secondary: "See what we do",
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

export const services = {
  id: "services",
  kicker: "What we do",
  title: "Four disciplines. One point of contact.",
  intro:
    "Most agencies do one thing and send you elsewhere for the rest. We keep the whole job under one roof, so nothing gets lost between suppliers.",
  pillars: [
    {
      numeral: "01",
      title: "Create",
      body: "Brands, campaigns and content. Identity, film, print and social, made by hand and made to sell.",
    },
    {
      numeral: "02",
      title: "Build",
      body: "Websites, apps and AI systems. Designed, built and looked after by the same people who wrote the brief.",
    },
    {
      numeral: "03",
      title: "Advise",
      body: "Strategy, positioning and growth. Pricing, launches and introductions, through to the campaigns that close the sale.",
    },
    {
      numeral: "04",
      title: "Experience",
      body: "Travel and bespoke solutions. Journeys, events and the arrangements that are hard to delegate to just anyone.",
    },
  ],
};

export const capabilities = {
  kicker: "In detail",
  title: "Everything under one roof.",
  items: [
    { name: "Brand and identity", note: "Who you are, said once and said well." },
    { name: "Advertising", note: "Print, film and social campaigns." },
    { name: "Websites", note: "Fast, beautiful and easy to buy from." },
    { name: "Apps", note: "For customers, teams and the back office." },
    { name: "AI systems", note: "Automation you can see, check and switch off." },
    { name: "Strategy and growth", note: "Positioning, pricing, launches and sales." },
    { name: "Travel and experiences", note: "Journeys, events and private arrangements." },
  ],
};

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

// Selected work. Shown as a short section on the landing page and in full
// on /work. Only list projects we have actually made.
export const work = {
  id: "work",
  path: "/work",
  kicker: "Selected work",
  title: "A few houses we have dressed.",
  intro:
    "18 Forge is new, so these are projects our founders have led. More will follow; the rest is kept in confidence.",
  more: "All work",
  // image: a screenshot of the site in public/work, 1600 x 1000 pixels.
  items: [
    {
      name: "Ta-nnin",
      label: "Website, in preview",
      body: "A new site, shown here before its launch. The address is temporary; the name is not.",
      about: [
        "A new name, given its first home online. The site is in preview while the rest of the house gets ready to open.",
      ],
      role: "Website",
      url: "https://tannin-web.vercel.app/",
      domain: "tannin-web.vercel.app",
      image: "/work/tannin.jpg",
    },
    {
      name: "Eighteen Diamonds",
      label: "Website",
      body: "Diamonds, fine jewellery and watches from New York's Diamond District.",
      about: [
        "A wholesale house on West 47th Street: loose diamonds, fine jewellery, luxury and vintage watches, and estate pieces bought and sold.",
        "The site had to feel as considered as the stones. It presents the collection, the buying service and special orders, and turns a visit into a phone call or an appointment.",
      ],
      role: "Brand, website",
      url: "https://eighteendiamonds.com",
      domain: "eighteendiamonds.com",
      image: "/work/eighteen-diamonds.jpg",
    },
    {
      name: "58 Diamonds",
      label: "Website",
      body: "Diamonds and fine jewellery, presented online with the same care as in the salon.",
      about: [
        "Named for the 58 facets of a brilliant cut. A jewellery house with its collection online, shown with the same care as in the salon.",
        "Built with a back office the client runs themselves, so new pieces go live without calling anyone.",
      ],
      role: "Website, back office",
      url: "https://58diamonds.com",
      domain: "58diamonds.com",
      image: "/work/58-diamonds.jpg",
    },
  ],
};

// The /work page.
export const workPage = {
  title: "Selected work",
  intro:
    "Brands, websites and systems made by the people behind 18 Forge. Each one links to the real thing.",
  role: "What we did",
  visit: "Visit the site",
  closingTitle: "Yours could be next.",
};

export const houses = {
  kicker: "Who we work for",
  items: [
    {
      title: "Luxury houses",
      body: "Maisons and makers who sell craft, time and scarcity, and cannot afford to look ordinary.",
    },
    {
      title: "Hospitality",
      body: "Hotels, residences and places to stay, where every detail is noticed and first impressions decide the booking.",
    },
    {
      title: "Family offices",
      body: "Discreet, demanding and long term. Sharper systems, quieter operations and a public face only when one is wanted.",
    },
    {
      title: "Startups",
      body: "Big ambitions on short runways. A brand, a product and a pitch that look a few rounds ahead.",
    },
  ],
  footnote: "And anyone else with taste and a deadline.",
};

export const closing = {
  kicker: "Contact",
  title: "Tell us what you are working on.",
  body: "Building, opening, launching or selling: one email reaches the people who will do the work. There is no charge for a first conversation.",
  cta: "Start a conversation",
};

export const footer = {
  backToTop: "Back to top",
};

export const nav = {
  work: "Work",
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
