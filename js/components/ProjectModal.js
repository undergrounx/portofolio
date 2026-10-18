import { portfolioData } from "../data.js";

export class ProjectModal {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.className = "modal-overlay";
    this.overlay.innerHTML = `
      <div class="modal-card">
        <div class="flex items-center justify-between pb-6 border-b border-black mb-6">
          <div>
            <div class="flex items-center gap-2">
              <span id="modal-category" class="text-xs font-bold tracking-widest text-black/70 uppercase">CATEGORY</span>
              <span class="text-black font-bold">·</span>
              <span id="modal-status" class="slush-sticker bg-[#55db9c] text-black text-[10px] py-0.5 px-2">STATUS</span>
            </div>
            <h2 id="modal-title" class="font-display-lateral text-2xl lg:text-4xl text-black mt-2 leading-tight">Project Title</h2>
          </div>
          <button id="modal-close-btn" class="w-10 h-10 rounded-full bg-white hover:bg-[#e9e9e9] border border-black flex items-center justify-center text-black font-bold transition-all cursor-pointer">
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

    this.isOpen = true;

    this.overlay.querySelector("#modal-category").textContent = project.category;
    this.overlay.querySelector("#modal-status").textContent = project.status;
    this.overlay.querySelector("#modal-title").textContent = project.title;

    const contentBox = this.overlay.querySelector("#modal-content");
    contentBox.innerHTML = `
      <div class="rounded-2xl overflow-hidden border border-black bg-[#f0f4f8] aspect-video flex items-center justify-center relative">
        ${project.video ? `
          <video src="${project.video}" controls autoplay muted loop playsinline class="w-full h-full object-contain"></video>
        ` : `
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-contain p-2" onerror="this.onerror=null; this.src='./${project.image}';" />
        `}
        <div class="absolute top-4 right-4">
          <span class="slush-sticker bg-white text-black text-[10px]">
            ${project.status}
          </span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div class="space-y-5">
          <div>
            <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>✦</span> Context &amp; Need
            </h4>
            <p class="text-sm font-semibold text-black leading-relaxed">${project.details.context}</p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <span>✦</span> Approach &amp; Execution
            </h4>
            <p class="text-sm font-semibold text-black leading-relaxed">${project.details.approach}</p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-2">Key Scope &amp; Elements</h4>
            <div class="space-y-2">
              ${project.details.highlights.map((step, idx) => `
                <div class="flex items-start gap-2.5 text-xs font-semibold text-black bg-[#f8f9fa] border border-black p-3 rounded-xl">
                  <span class="font-bold font-mono text-black">0${idx + 1}.</span>
                  <span>${step}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- Tags & Action Bar -->
      <div class="pt-5 border-t border-black flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          ${project.details.tags.map(tag => `
            <span class="slush-sticker bg-[#e9ccff] text-black text-[10px]">
              #${tag}
            </span>
          `).join("")}
        </div>
        <a href="${portfolioData.contact.whatsappUrl}" target="_blank" class="btn-slush-filled text-xs">
          Discuss This Project ↗
        </a>
      </div>
    `;

    document.body.style.overflow = "hidden";
    this.overlay.classList.add("open");
  }

  close() {
    this.isOpen = false;
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

export const projectModal = new ProjectModal();
