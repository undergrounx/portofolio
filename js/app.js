/**
 * MUADZ PORTFOLIO — SLUSH REDESIGN
 * Inflatable sticker universe on pastel paper
 */

import { renderNavbar, initNavbarEvents } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { renderSnapshot } from "./components/Snapshot.js";
import { renderGalleryTeaser } from "./components/GalleryTeaser.js";
import { renderFeaturedProjects, initProjectCards } from "./components/FeaturedProjects.js";
import { renderBrandsHandling } from "./components/BrandsHandling.js";
import { renderMediaCreative } from "./components/MediaCreative.js";
import { renderCapabilitiesAndTools } from "./components/Capabilities.js";
import { renderAbout } from "./components/About.js";
import { renderProcess } from "./components/Process.js";
import { renderStatement } from "./components/Statement.js";
import { renderFinalCTA, initContactEvents } from "./components/FinalCTA.js";
import { renderFooter } from "./components/Footer.js";
import { workflowModal } from "./components/WorkflowModal.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  // Render Page Sections in Slush Color Banding Sequence
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderSnapshot()}
      ${renderGalleryTeaser()}
      ${renderFeaturedProjects()}
      ${renderBrandsHandling()}
      ${renderMediaCreative()}
      ${renderCapabilitiesAndTools()}
      ${renderAbout()}
      ${renderProcess()}
      ${renderStatement()}
      ${renderFinalCTA()}
    </main>
    ${renderFooter()}
  `;

  // Initialize Interactive Features
  initNavbarEvents();
  initProjectCards();
  initContactEvents();

  // 24-Hour Workflow Modal Triggers
  const openWorkflowBtn = document.getElementById("open-workflow-btn");
  if (openWorkflowBtn) {
    openWorkflowBtn.addEventListener("click", () => {
      workflowModal.open();
    });
  }

  const navWorkflowTrigger = document.getElementById("nav-workflow-trigger");
  if (navWorkflowTrigger) {
    navWorkflowTrigger.addEventListener("click", () => {
      workflowModal.open();
    });
  }

  // Active Section Nav Highlight on Scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-section") === current) {
        link.classList.add("active");
      }
    });
  }, { passive: true });

  // IntersectionObserver for scroll-reveal animations across devices
  const cards = document.querySelectorAll(".slush-card, section h2, section .grid > div");
  cards.forEach(el => el.classList.add("slush-reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach(el => observer.observe(el));
  } else {
    cards.forEach(el => el.classList.add("is-visible"));
  }

  console.log("✦ MUADZ Portfolio: Slush Theme Active with Live Media Showcase Gallery.");
});
