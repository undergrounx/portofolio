/**
 * MUADZ PORTFOLIO — APP ORCHESTRATOR
 */

import { renderNavbar, initNavbarEvents } from "./components/Navbar.js";
import { renderHero } from "./components/Hero.js";
import { renderStats, initStatsAnimation } from "./components/Stats.js";
import { renderFeaturedProjects, initProjectCards } from "./components/FeaturedProjects.js";
import { renderCapabilitiesAndTools } from "./components/Capabilities.js";
import { renderAbout } from "./components/About.js";
import { renderProcess } from "./components/Process.js";
import { renderStatement } from "./components/Statement.js";
import { renderFinalCTA, initContactEvents } from "./components/FinalCTA.js";
import { renderFooter } from "./components/Footer.js";
import { HeroWebGLScene } from "./webgl-hero.js";
import { soundManager } from "./components/Audio.js";
import { CursorTrailer } from "./components/CursorTrailer.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (!app) return;

  // 1. Build Page Sections in Strict Vertical Reference Rhythm
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderStats()}
      ${renderFeaturedProjects()}
      ${renderCapabilitiesAndTools()}
      ${renderAbout()}
      ${renderProcess()}
      ${renderStatement()}
      ${renderFinalCTA()}
    </main>
    ${renderFooter()}

    <!-- Bottom Floating Audio Toggle Pill -->
    <button id="audio-toggle-btn" class="audio-toggle-btn" aria-label="Toggle Interface Audio">
      <span id="audio-icon">🔈</span>
      <span id="audio-label">SOUND OFF</span>
    </button>
  `;

  // 2. Initialize WebGL 3D Interactive Centerpiece
  const canvas = document.getElementById("hero-webgl-canvas");
  const container = document.getElementById("hero-3d-container");
  let hero3D = null;
  if (canvas && container) {
    try {
      hero3D = new HeroWebGLScene(canvas, container);
    } catch (e) {
      console.warn("Hero WebGL init skipped:", e);
    }
  }

  // 3. Initialize Interactive Features & Event Handlers
  initNavbarEvents();
  initStatsAnimation();
  initProjectCards();
  initContactEvents();
  new CursorTrailer();

  // 4. Audio Toggle Controller
  const audioBtn = document.getElementById("audio-toggle-btn");
  const audioIcon = document.getElementById("audio-icon");
  const audioLabel = document.getElementById("audio-label");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      const isEnabled = soundManager.toggle();
      audioIcon.textContent = isEnabled ? "🔊" : "🔈";
      audioLabel.textContent = isEnabled ? "SOUND ON" : "SOUND OFF";
      audioBtn.classList.toggle("border-emerald-500/50", isEnabled);
    });
  }

  // 5. Active Section Nav Highlight on Scroll
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

  // 6. Global Hover Audio Integration
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .card-panel, .btn-circle-arrow")) {
      soundManager.playHover();
    }
  });

  console.log("✦ MUADZ Portfolio initialized with 60FPS WebGL Engine.");
});
