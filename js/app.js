/**
 * MUADZ PORTFOLIO — APP ORCHESTRATOR
 * Built to the Antigravity Portfolio Brief: grounded, responsive, zero fabricated claims.
 */

import { renderNavbar, initNavbarEvents } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { renderSnapshot } from "./components/Snapshot.js";
import { renderFeaturedProjects, initProjectCards } from "./components/FeaturedProjects.js";
import { renderCapabilitiesAndTools } from "./components/Capabilities.js";
import { renderAbout } from "./components/About.js";
import { renderProcess } from "./components/Process.js";
import { renderStatement } from "./components/Statement.js";
import { renderFinalCTA, initContactEvents } from "./components/FinalCTA.js";
import { renderFooter } from "./components/Footer.js";
import { HeroWebGLScene } from "./webgl-hero.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  // 1. Build Page Sections in Strict Reference Sequence
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderSnapshot()}
      ${renderFeaturedProjects()}
      ${renderCapabilitiesAndTools()}
      ${renderAbout()}
      ${renderProcess()}
      ${renderStatement()}
      ${renderFinalCTA()}
    </main>
    ${renderFooter()}
  `;

  // 2. Initialize Interactive 3D WebGL Centerpiece
  const canvas = document.getElementById("hero-webgl-canvas");
  const container = document.getElementById("hero-3d-container");
  if (canvas && container) {
    try {
      new HeroWebGLScene(canvas, container);
    } catch (e) {
      console.warn("Hero WebGL init skipped:", e);
    }
  }

  // 3. Initialize Interactive Features
  initNavbarEvents();
  initProjectCards();
  initContactEvents();

  // 4. Active Section Nav Highlight on Scroll
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

  console.log("✦ MUADZ Portfolio: Brief synchronized. No unverified claims.");
});
