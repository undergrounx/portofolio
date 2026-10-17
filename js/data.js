/**
 * ANTIGRAVITY PORTFOLIO BRIEF — MUADZ
 * Single Source of Truth for Muadz's personal portfolio website.
 * No fabricated metrics, clients, testimonials, awards, or false claims.
 */

export const portfolioData = {
  profile: {
    name: "MUADZ",
    monogram: "M",
    brandLabel: "DESIGN × AI × SYSTEMS",
    role: "Visual Designer · AI Controller",
    eyebrow: "VISUAL DESIGNER × AI CONTROLLER",
    headlineLine1: "CRAFTING FORM.",
    headlineLine2: "DIRECTING INTELLIGENCE.",
    supportingLine: "Menggabungkan ketajaman visual DKV dan alur kerja AI untuk mewujudkan produk digital yang fungsional.",
    positioning: "I combine design, AI, and automation to turn ideas into useful digital experiences.",
    descriptor: "Visual Direction · Generative Media · System Workflows",
    education: "SMK BinaKarya Mandiri · Desain Komunikasi Visual (DKV)",
    ctaPrimary: "Lihat Karya",
    ctaSecondary: "Hubungi Saya",
    availabilityBadge: {
      tag: "AVAILABLE FOR",
      title: "COLLABORATIONS",
      sub: "LET'S TALK ↗",
      link: "#contact"
    }
  },

  // Strategic Focus Pillars (Snapshot — No fake numbers or fabricated client counts)
  snapshot: [
    {
      id: "focus-1",
      title: "VISUAL DESIGN",
      tagline: "Brand, Identity & Digital UI",
      desc: "Editorial aesthetic, visual consistency, and responsive layouts crafted with DKV foundations.",
      icon: "penTool"
    },
    {
      id: "focus-2",
      title: "AI CONTENT",
      tagline: "Short-Form & Generative Visuals",
      desc: "High-retention video workflows, prompt design, and scalable media creation.",
      icon: "sparkles"
    },
    {
      id: "focus-3",
      title: "AUTOMATION",
      tagline: "Systems & Webhook Workflows",
      desc: "Connecting tools like n8n and AI APIs to make repetitive creative production seamless.",
      icon: "cpu"
    },
    {
      id: "focus-4",
      title: "DIGITAL PRODUCTS",
      tagline: "Product & DTC Thinking",
      desc: "Bridging brand aesthetics with physical packaging and e-commerce exploration.",
      icon: "box"
    }
  ],

  // Selected Work (Honest status labels, curated 6 projects)
  featuredProjects: [
    {
      id: "ai-clipping",
      title: "AI Infrastructure for Clipping",
      category: "AI SYSTEMS / CONTENT WORKFLOW",
      status: "Concept Exploration",
      image: "assets/editing-video.jpg",
      video: "assets/editing-with-ai.mp4",
      shortDesc: "Exploring AI-supported infrastructure for organizing, extracting, and producing clipping workflows.",
      details: {
        context: "Creators and media teams spend excessive hours manually scrubbing long-form footage to find compelling video moments.",
        approach: "Investigated a streamlined pipeline combining transcription timestamps, LLM hook scoring, and automated vertical framing algorithms.",
        highlights: [
          "Ingestion and transcription pipeline concepts",
          "Automated highlight detection logic",
          "Short-form 9:16 vertical video formatting",
          "Multi-channel webhook distribution architecture"
        ],
        tags: ["AI Workflow", "Video Pipeline", "Content Systems", "Concept"]
      }
    },
    {
      id: "ai-file-organizer",
      title: "AI File Organizer",
      category: "AI TOOLS / PRODUCTIVITY",
      status: "Concept",
      image: "assets/ai-file-organizer.png",
      shortDesc: "An AI-assisted concept for making digital files easier to organize, categorize, and retrieve.",
      details: {
        context: "Creative practitioners generate large volumes of raw exports, design tokens, and unorganized media downloads.",
        approach: "Conceptualized a local semantic categorization tool that inspects content context to structure folders cleanly.",
        highlights: [
          "Semantic file grouping concept",
          "Contextual folder taxonomy generation",
          "Automated file naming patterns",
          "Non-destructive workflow ideas"
        ],
        tags: ["Productivity", "Local Tools", "Organization", "Concept"]
      }
    },
    {
      id: "ai-reminder",
      title: "AI Reminder Companion",
      category: "AI ASSISTANT / PRODUCTIVITY",
      status: "Concept",
      image: "assets/foto-kosong.jpg",
      shortDesc: "A reminder and follow-up concept designed to support consistent creative execution and daily routines.",
      details: {
        context: "Standard to-do lists are static and often fail to support dynamic, multi-disciplinary daily workflows.",
        approach: "Designed a mobile interface focused on contextual task scheduling, voice capture, and friction-free daily focus.",
        highlights: [
          "Context-aware follow-up logic",
          "Voice memo quick-capture interface",
          "Daily focus progress visualization",
          "Adaptive routine scheduling concept"
        ],
        tags: ["AI Assistant", "Daily Routines", "Concept"]
      }
    },
    {
      id: "avenor-chia-seed",
      title: "Avenor Chia Seed",
      category: "BRANDING & PRODUCT",
      status: "Active Project",
      image: "assets/avenor-chia-seed.jpg",
      shortDesc: "A product-brand project spanning packaging direction, product visuals, and e-commerce marketing exploration.",
      details: {
        context: "Exploring the intersection of modern minimal aesthetics, superfood branding, and digital commerce.",
        approach: "Developed a luxury monochrome visual identity, matte packaging dielines, and digital storefront marketing touchpoints.",
        highlights: [
          "Matte-black tactile packaging dieline and typography",
          "Organic botanical emblem and visual system",
          "E-commerce storefront and landing page exploration",
          "Direct-to-consumer digital marketing assets"
        ],
        tags: ["Brand Identity", "Packaging Design", "DTC Commerce", "In Development"]
      }
    },
    {
      id: "cromans-creative",
      title: "Cromans Creative & AI Automation",
      category: "CREATIVE PARTNER / SYSTEMS",
      status: "Creative Direction",
      image: "assets/media-instagram.jpg",
      shortDesc: "A creative and AI automation direction connecting content production with practical workflow systems.",
      details: {
        context: "Businesses and personal brands need both polished short-form creative assets and automated systems to sustain posting frequency.",
        approach: "Framed an end-to-end partner model connecting video editing, prompt-assisted visuals, and n8n webhook automations.",
        highlights: [
          "Short-form video editing and formatting frameworks",
          "Prompt engineering for brand visuals",
          "Automated workflow scheduling with n8n",
          "Consultative creative strategy"
        ],
        tags: ["Content Production", "Automation", "Workflow Systems", "In Progress"]
      }
    }
  ],

  // Dedicated "Brands I'm Handling as Designer" Section
  brandsImHandling: {
    badge: "DIRECT CLIENT & BRAND HANDLING",
    title: "BRANDS I'M HANDLING AS DESIGNER",
    subtext: "Brand nyata yang saya tangani secara langsung dalam perancangan identitas visual, kemasan produk, dan materi visual pemasaran.",
    brands: [
      {
        id: "brand-berka",
        name: "BERKA HERBAL",
        category: "HERBAL WELLNESS & PACKAGING",
        role: "Visual & Packaging Designer",
        status: "Active Brand Handling",
        image: "assets/berka-pack.svg",
        tag: "HERBAL DRINK & POWDER",
        description: "Perancangan identitas visual dan sistem kemasan untuk lini minuman herbal alami (JSR). Menggabungkan nuansa alami kraft paper dengan panel warna modern agar tampil bersih, premium, dan terpercaya di pasar kesehatan.",
        highlights: [
          "Tata letak pouch 80g & desain label jar 150g",
          "Hierarki tipografi herbal minimalis",
          "Visual mockup produk untuk materi promosi digital"
        ],
        tags: ["Packaging Design", "Herbal Wellness", "Brand Direction"]
      },
      {
        id: "brand-lumaskin",
        name: "LUMASKIN",
        category: "SKINCARE & BEAUTY AESTHETICS",
        role: "Lead Creative Designer",
        status: "Active Brand Handling",
        image: "assets/lumaskin.png",
        tag: "PREMIUM DERMA SKINCARE",
        description: "Pengembangan arah visual kreatif untuk brand perawatan kulit Lumaskin. Berfokus pada estetika minimalis, modern, dan elegan yang mencerminkan kemurnian formula perawatan kulit klinis dan daya tarik konsumen modern.",
        highlights: [
          "Arah visual identitas merek & estetika kemasan",
          "Desain feed & materi kampanye produk digital",
          "Konsistensi palet warna derma-clean yang mewah"
        ],
        tags: ["Skincare Branding", "Digital Assets", "Creative Direction"]
      }
    ]
  },

  // Dedicated "Media Creative" Showcase Section
  mediaCreative: {
    badge: "CONTENT PRODUCTION & REACH",
    title: "MEDIA CREATIVE",
    subtext: "Eksplorasi pembuatan konten visual dan sistem distribusi media sosial yang konsisten untuk TikTok dan Instagram.",
    channels: [
      {
        id: "channel-instagram",
        platform: "INSTAGRAM",
        handle: "@Cromans_id",
        url: "https://www.instagram.com/cromans_id",
        tag: "FEED & CAROUSEL DIRECTION",
        metrics: "Visual Aesthetics · Storytelling · Brand Presence",
        image: "assets/media-instagram.jpg",
        description: "Kurasi visual feed, eksplorasi tipografi editorial, dan tata letak grid konten untuk membangun identitas visual yang profesional dan berkarakter.",
        features: [
          "Editorial feed layout & palette discipline",
          "Carousel slide typography & messaging hierarchy",
          "Visual identity consistency across campaigns"
        ]
      },
      {
        id: "channel-tiktok",
        platform: "TIKTOK",
        handle: "@hamura_media",
        url: "https://www.tiktok.com/@hamura_media",
        tag: "SHORT-FORM & AI VIDEO SYSTEMS",
        metrics: "High-Retention Video · Fast-Paced Edits · AI Hooks",
        image: "assets/media-tiktok.jpg",
        description: "Produksi video pendek vertikal (9:16) berbasis alur kerja AI dan editing dinamis untuk menjangkau audiens secara luas dan meningkatkan retensi tontonan.",
        features: [
          "Fast-paced cutting & dynamic motion graphics",
          "AI prompt scripting & automated audio hooks",
          "Vertical 9:16 mobile-first visual composition"
        ]
      }
    ]
  },

  // 4 Core Capabilities
  capabilities: [
    {
      number: "01",
      title: "VISUAL DESIGN",
      desc: "Creating intuitive digital interfaces, brand identities, and packaging systems grounded in DKV principles.",
      icon: "penTool"
    },
    {
      number: "02",
      title: "AI CONTENT CREATION",
      desc: "Developing short-form video concepts, prompt development, and visual assets for scalable publishing.",
      icon: "sparkles"
    },
    {
      number: "03",
      title: "AI SYSTEMS & AUTOMATION",
      desc: "Designing workflow pipelines, n8n webhook automations, and AI-assisted tooling to remove production friction.",
      icon: "cpu"
    },
    {
      number: "04",
      title: "DIGITAL PRODUCT THINKING",
      desc: "Connecting brand aesthetics with physical packaging, direct-to-consumer commerce, and system thinking.",
      icon: "layers"
    }
  ],

  // Tools & Workflow (Honest representation, no unverified certifications)
  tools: [
    { name: "Figma", category: "UI/UX & Systems" },
    { name: "Adobe Tools", category: "Graphic & Vector" },
    { name: "Canva", category: "Rapid Layouts" },
    { name: "CapCut", category: "Video Editing" },
    { name: "Leonardo AI", category: "Generative Visuals" },
    { name: "Gemini", category: "AI Systems & Logic" },
    { name: "ChatGPT", category: "AI Prompting" },
    { name: "Veo", category: "AI Video Exploration" },
    { name: "n8n", category: "Workflow Automation" }
  ],

  // About Section
  about: {
    headline: "DESIGNER.\nBUILDER.\nAI CREATOR.",
    bioLead: "I'm Muadz, a designer and AI-focused creator with a DKV background.",
    paragraph1: "I work across visual design, AI-generated content, and automation concepts—exploring how creative thinking and useful systems can work together.",
    paragraph2: "From digital experiences and AI systems to content and physical products, the goal is simple: turn ideas into useful digital experiences that deserve to move.",
    education: {
      institution: "SMK BinaKarya Mandiri",
      major: "Desain Komunikasi Visual (DKV)",
      focus: "Visual hierarchy, composition, branding, and digital media foundations."
    },
    pillars: [
      {
        title: "Useful Systems",
        desc: "AI is not the goal by itself. It serves to make creative work more efficient and ideas easier to execute."
      },
      {
        title: "Design Craft",
        desc: "Editorial typography, intentional negative space, and disciplined monochromatic visual hierarchy."
      },
      {
        title: "Product Execution",
        desc: "Thinking end-to-end from digital concepts to physical packaging and live workflows."
      }
    ]
  },

  // 4-Step Process
  process: [
    {
      step: "01",
      title: "UNDERSTAND",
      desc: "Uncover the problem, target audience, and clear creative objectives.",
      icon: "search"
    },
    {
      step: "02",
      title: "DESIGN",
      desc: "Craft the visual system, typography, interface, and aesthetic direction.",
      icon: "pen"
    },
    {
      step: "03",
      title: "BUILD",
      desc: "Transform concepts into functioning digital interfaces or automated pipelines.",
      icon: "code"
    },
    {
      step: "04",
      title: "REFINE",
      desc: "Iterate based on practical feedback, polish details, and optimize workflows.",
      icon: "rocket"
    }
  ],

  // AI Statement
  statement: {
    badge: "PHILOSOPHY",
    quote: "AI is not the goal by itself. I'm interested in using it to make creative work more useful, workflows more efficient, and ideas easier to execute."
  },

  // Contact Coordinates
  contact: {
    headline: "HAVE AN IDEA\nWORTH BUILDING?",
    subtext: "Whether you need visual design, content systems, or AI automation, let's explore how to make it happen.",
    instagram: "@Muadz_dora",
    instagramUrl: "https://instagram.com/Muadz_dora",
    whatsapp: "0857 8101 8006",
    whatsappUrl: "https://wa.me/6285781018006?text=Hi%20Muadz,%20I'd%20love%20to%20discuss%20a%20project.",
    email: "muadzfirdaus58@gmail.com"
  },

  // Footer
  footer: {
    brand: "MUADZ",
    subtitle: "Design · AI · Systems",
    links: [
      { name: "Instagram", url: "https://instagram.com/Muadz_dora" },
      { name: "WhatsApp", url: "https://wa.me/6285781018006" }
    ]
  }
};
