import { portfolioData } from "../data.js";
import { soundManager } from "./Audio.js";
import { toast } from "./Toast.js";

export class ProjectModal {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.className = "modal-overlay";
    this.overlay.innerHTML = `
      <div class="modal-card">
        <div class="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span id="modal-category" class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">CATEGORY</span>
            <h2 id="modal-title" class="text-2xl lg:text-3xl font-bold text-white mt-1">Project Title</h2>
          </div>
          <button id="modal-close-btn" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all">
            ✕
          </button>
        </div>

        <div id="modal-content" class="space-y-6">
          <!-- Dynamic Content Injected Here -->
        </div>
      </div>
    `;
    document.body.appendChild(this.overlay);

    this.bindEvents();
  }

  bindEvents() {
    const closeBtn = this.overlay.querySelector("#modal-close-btn");
    closeBtn.addEventListener("click", () => this.close());

    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  }

  open(projectId) {
    const project = portfolioData.featuredProjects.find(p => p.id === projectId);
    if (!project) return;

    soundManager.playClick();
    this.isOpen = true;

    this.overlay.querySelector("#modal-category").textContent = project.category;
    this.overlay.querySelector("#modal-title").textContent = project.title;

    const contentBox = this.overlay.querySelector("#modal-content");
    contentBox.innerHTML = `
      <div class="rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-video flex items-center justify-center relative">
        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain" />
        <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          ${project.badge}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div class="space-y-4">
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Challenge &amp; Context</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${project.details.problem}</p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Engineered Solution</h4>
            <p class="text-sm text-slate-300 leading-relaxed">${project.details.solution}</p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Architecture Workflow</h4>
            <div class="space-y-2">
              ${project.details.architecture.map((step, idx) => `
                <div class="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] border border-white/[0.05] p-2.5 rounded-lg">
                  <span class="text-slate-500 font-mono font-bold">0${idx + 1}.</span>
                  <span>${step}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- Telemetry Metrics Grid -->
      <div class="pt-4 border-t border-white/10">
        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">System Impact &amp; Metrics</h4>
        <div class="grid grid-cols-3 gap-3">
          ${project.details.metrics.map(m => `
            <div class="bg-white/[0.03] border border-white/[0.08] p-3 rounded-xl text-center">
              <div class="text-lg lg:text-xl font-bold text-white">${m.value}</div>
              <div class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">${m.label}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Tags & Action Bar -->
      <div class="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-1.5">
          ${project.details.tags.map(tag => `
            <span class="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-slate-400 font-medium">
              #${tag}
            </span>
          `).join("")}
        </div>
        <a href="${portfolioData.contact.whatsappUrl}" target="_blank" class="btn-pill-primary text-xs">
          Discuss This System ↗
        </a>
      </div>
    `;

    document.body.style.overflow = "hidden";
    this.overlay.classList.add("open");
  }

  close() {
    soundManager.playClick();
    this.isOpen = false;
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

export const projectModal = new ProjectModal();
