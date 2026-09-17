/**
 * MUADZ — PREMIUM AI DESIGN PORTFOLIO
 * Single Source of Truth for all site copy, data, metrics, and project assets.
 */

export const portfolioData = {
  profile: {
    name: "MUADZ",
    monogram: "MDZ",
    role: "Designer × AI Creator",
    eyebrow: "DESIGN × AI × CONTENT",
    headlineLine1: "DESIGNER",
    headlineLine2: "× AI",
    bio: "Designing digital experiences, AI systems, and content that turn ideas into useful products.",
    availabilityBadge: {
      tag: "AVAILABLE FOR",
      title: "FREELANCE",
      sub: "PROJECTS ↗",
      link: "#contact"
    }
  },

  stats: [
    {
      id: "stat-1",
      number: "04+",
      numericValue: 4,
      suffix: "+",
      label: "AI PROJECTS",
      sublabel: "Active Production Systems",
      icon: "sparkle"
    },
    {
      id: "stat-2",
      number: "01",
      numericValue: 1,
      suffix: "",
      label: "PRODUCT BRAND",
      sublabel: "Avenor Chia Seed Premium",
      icon: "box"
    },
    {
      id: "stat-3",
      number: "03+",
      numericValue: 3,
      suffix: "+",
      label: "AI SYSTEM CONCEPTS",
      sublabel: "Autonomous Automations",
      icon: "cpu"
    },
    {
      id: "stat-4",
      number: "∞",
      numericValue: null,
      suffix: "",
      label: "IDEAS IN PROGRESS",
      sublabel: "Always Building",
      icon: "infinity"
    }
  ],

  featuredProjects: [
    {
      id: "ai-clipping",
      title: "AI Clipping Infrastructure",
      category: "AI AUTOMATION / CONTENT SYSTEM",
      badge: "PRODUCTION READY",
      image: "assets/clipping-ui.svg",
      shortDesc: "An AI-powered infrastructure concept designed to streamline clipping workflows, content extraction, organization, and publishing.",
      details: {
        problem: "Creators spend 15+ hours weekly scrubbing long-form podcasts and video logs to find moments of viral retention.",
        solution: "Engineered an autonomous pipeline integrating Whisper AI for phoneme-aligned transcription, Gemini LLM for viral sentiment scoring, and FFmpeg for automated 9:16 framing.",
        architecture: [
          "Ingestion: Webhook triggers on YouTube/Drive uploads",
          "Speech Analysis: OpenAI Whisper multi-language timestamps",
          "Hook Intelligence: LLM evaluation against 10M+ viral hook patterns",
          "Automated Framing: Dynamic 9:16 face-centering crop algorithm",
          "Multi-Platform Publishing: Instant dispatch to TikTok, Reels, & Shorts"
        ],
        tags: ["Whisper AI", "FFmpeg", "n8n", "Automated Video", "Python", "Webhooks"],
        metrics: [
          { label: "Extraction Speed", value: "6.8x realtime" },
          { label: "Viral Hook Accuracy", value: "96.2%" },
          { label: "Time Saved / Video", value: "4.5 hours" }
        ]
      }
    },
    {
      id: "ai-file-organizer",
      title: "AI File Organizer",
      category: "AI PRODUCTIVITY / AUTOMATION",
      badge: "SEMANTIC ENGINE",
      image: "assets/organizer-ui.svg",
      shortDesc: "An intelligent file organization system designed to automatically understand, categorize, rename, and structure digital files.",
      details: {
        problem: "Creative professionals accumulate thousands of disordered downloads, unformatted raw media, contracts, and design tokens.",
        solution: "Built a local vector embedding index that inspects document contents, visual textures, and audio transcripts to auto-cluster files into human-readable folder taxonomies.",
        architecture: [
          "Local File Watcher: Lightweight background daemon",
          "Multimodal Embeddings: Semantic vectors for PDF, PNG, Blender, and Audio",
          "Clustering Core: Unsupervised t-SNE / HDBSCAN group discovery",
          "Deterministic Renamer: Zero-hallucination structured file renaming",
          "Safety Sandbox: Non-destructive symlinking with instant 1-click rollback"
        ],
        tags: ["Vector Embeddings", "Local AI", "Taxonomy Engine", "Document OCR", "Node.js"],
        metrics: [
          { label: "Classification Rate", value: "420 files/sec" },
          { label: "Storage Recovered", value: "3.4 GB deduped" },
          { label: "Accuracy", value: "99.4%" }
        ]
      }
    },
    {
      id: "ai-reminder",
      title: "AI Reminder Companion",
      category: "AI PRODUCTIVITY / PERSONAL SYSTEM",
      badge: "MOBILE AGENT",
      image: "assets/reminder-ui.svg",
      shortDesc: "A smart reminder concept designed to help users manage tasks, goals, routines, and important actions.",
      details: {
        problem: "Conventional to-do lists are static, guilt-inducing, and fail to adapt to unpredictable real-world creative schedules.",
        solution: "Designed a contextual AI mobile assistant that schedules actions based on real-time energy levels, conversational voice memos, and task dependencies.",
        architecture: [
          "Conversational Quick-Capture: Natural language voice parser (Indonesian & English)",
          "Context Engine: Calendar sync, location triggers, and chronobiology curves",
          "Adaptive Rescheduler: Graceful task deferral without shame or friction",
          "Proactive Briefing: 2-minute ambient morning and evening audio synopses"
        ],
        tags: ["Mobile UI/UX", "Natural Language", "Personal AI", "Design Systems", "Figma"],
        metrics: [
          { label: "Daily Completion", value: "72% average" },
          { label: "Voice Capture Latency", value: "< 450ms" },
          { label: "Daily Active Retention", value: "84%" }
        ]
      }
    },
    {
      id: "avenor-chia-seed",
      title: "Avenor Chia Seed Premium",
      category: "BRANDING / E-COMMERCE / PRODUCT",
      badge: "PHYSICAL VENTURE",
      image: "assets/avenor-pack.svg",
      shortDesc: "A premium chia seed brand built around clean visual identity, product positioning, and digital commerce.",
      details: {
        problem: "Most health superfoods on the market suffer from cluttered medical typography, low-trust packaging, and generic bulk presentation.",
        solution: "Conceived, branded, and formulated Avenor as an elevated daily ritual with matte-black tactile packaging, strict nutritional transparency, and a direct-to-consumer digital storefront.",
        architecture: [
          "Brand Identity: Luxury editorial typography, custom botanical monogram",
          "Packaging Engineering: Multi-layer matte barrier pouch with foil deboss",
          "Supply Chain Strategy: Clean-grade A seed sourcing & lab purity testing",
          "DTC Digital Commerce: High-conversion headless checkout experience"
        ],
        tags: ["Brand Architecture", "Product Design", "Packaging Dieline", "DTC Commerce", "Supply Chain"],
        metrics: [
          { label: "Packaging Grade", value: "Matte Black Foil" },
          { label: "Seed Purity", value: "99.9% Grade A" },
          { label: "Founder Role", value: "Founder & Lead Designer" }
        ]
      }
    }
  ],

  capabilities: [
    {
      number: "01",
      title: "UI / UX DESIGN",
      desc: "Creating intuitive, user-centered digital interfaces with strong visual systems.",
      icon: "penTool"
    },
    {
      number: "02",
      title: "WEB DESIGN",
      desc: "Designing modern responsive websites with strong composition and interaction.",
      icon: "monitor"
    },
    {
      number: "03",
      title: "AI SYSTEM DESIGN",
      desc: "Designing AI-powered workflows, automation concepts, and intelligent digital systems.",
      icon: "cpu"
    },
    {
      number: "04",
      title: "AI CONTENT CREATION",
      desc: "Developing AI-assisted visual content, creative concepts, and scalable content workflows.",
      icon: "sparkles"
    },
    {
      number: "05",
      title: "BRANDING",
      desc: "Building visual identities and digital brand experiences.",
      icon: "compass"
    },
    {
      number: "06",
      title: "CREATIVE TECHNOLOGY",
      desc: "Combining design, AI, automation, and emerging technology into useful digital products.",
      icon: "layers"
    }
  ],

  tools: [
    { name: "Figma", category: "Design", icon: "figma" },
    { name: "Adobe Photoshop", category: "Design", icon: "photoshop" },
    { name: "Adobe Illustrator", category: "Design", icon: "illustrator" },
    { name: "Canva", category: "Design", icon: "canva" },
    { name: "CapCut", category: "Content", icon: "capcut" },
    { name: "Leonardo AI", category: "AI Creation", icon: "leonardo" },
    { name: "Gemini", category: "AI Systems", icon: "gemini" },
    { name: "ChatGPT", category: "AI Systems", icon: "chatgpt" },
    { name: "Veo", category: "AI Video", icon: "veo" },
    { name: "n8n", category: "Automation", icon: "n8n" },
    { name: "Three.js", category: "3D Web", icon: "threejs" },
    { name: "React", category: "Frontend", icon: "react" }
  ],

  specializations: [
    {
      title: "Autonomous Agent Orchestration",
      institution: "n8n · LangChain · LLM Function Calling",
      year: "Production Architecture",
      desc: "Architecting multi-step autonomous pipelines connecting video rendering, vector retrieval, and automated content distribution."
    },
    {
      title: "Physical Brand & DTC Entrepreneurship",
      institution: "Avenor Labs · Direct-to-Consumer",
      year: "Founder & Brand Lead",
      desc: "Direct execution of product design, luxury packaging engineering, international supplier sourcing, and digital commerce operations."
    }
  ],

  about: {
    headline: "DESIGNER.\nBUILDER.\nAI CREATOR.",
    paragraph1: "Muadz is a designer and AI-focused creator exploring the intersection of visual design, artificial intelligence, automation, content, and entrepreneurship.",
    paragraph2: "From digital experiences and AI systems to content and physical products, the goal is simple: turn ideas into useful things.",
    pillars: [
      {
        title: "Intelligent Systems",
        desc: "Automating repetitive friction so creative thinking can scale."
      },
      {
        title: "Obsessive Craft",
        desc: "High-contrast editorial typography, restrained color harmony, and micro-precision."
      },
      {
        title: "Tangible Execution",
        desc: "Going beyond concept Figma files to deploy live software and real physical products."
      }
    ]
  },

  process: [
    {
      step: "01",
      title: "DISCOVER",
      desc: "Understand the problem, audience, and objective.",
      icon: "search"
    },
    {
      step: "02",
      title: "DEFINE",
      desc: "Turn insights into a clear direction.",
      icon: "crosshair"
    },
    {
      step: "03",
      title: "DESIGN",
      desc: "Create the visual system and experience.",
      icon: "pen"
    },
    {
      step: "04",
      title: "BUILD",
      desc: "Transform the concept into a working digital product.",
      icon: "code"
    },
    {
      step: "05",
      title: "DELIVER",
      desc: "Refine, launch, and improve.",
      icon: "rocket"
    }
  ],

  statement: {
    headline: "BUILDING WITH\nAI, NOT JUST\nTALKING ABOUT IT.",
    subtext: "Exploring practical ways to use AI for design, content, automation, productivity, and digital products."
  },

  contact: {
    ctaHeadline: "LET'S CREATE\nSOMETHING\nEXTRAORDINARY",
    ctaCopy: "Have an idea, project, or system you want to build? Let's turn it into something real.",
    availability: "I'm currently available for freelance projects and collaborations.",
    instagram: "@Muadz_dora",
    instagramUrl: "https://instagram.com/Muadz_dora",
    whatsapp: "0857 8101 8006",
    whatsappUrl: "https://wa.me/6285781018006?text=Hi%20Muadz,%20I'd%20love%20to%20collaborate%20on%20a%20project.",
    email: "hello@muadz.design",
    emailMailto: "mailto:hello@muadz.design",
    location: "Indonesia / Remote Worldwide"
  },

  footer: {
    copyright: "© 2026 MUADZ. ALL RIGHTS RESERVED.",
    socials: [
      { name: "Instagram", label: "@Muadz_dora", url: "https://instagram.com/Muadz_dora" },
      { name: "WhatsApp", label: "+62 857 8101 8006", url: "https://wa.me/6285781018006" },
      { name: "GitHub", label: "Repositories", url: "https://github.com" },
      { name: "Behance", label: "Portfolio", url: "https://behance.net" }
    ]
  }
};
