import { portfolioData } from "../data.js";

export class WorkflowModal {
  constructor() {
    this.overlay = document.createElement("div");
    this.overlay.className = "modal-overlay";
    this.overlay.id = "workflow-modal-overlay";
    this.render();
    document.body.appendChild(this.overlay);
    this.bindEvents();
    this.startLiveClock();
  }

  getCurrentSlotIndex() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentMins = hours * 60 + minutes;

    // Slots ranges in minutes from 00:00:
    // 07:00-09:00 -> 420-540
    // 09:00-12:30 -> 540-750
    // 12:30-13:30 -> 750-810
    // 13:30-17:00 -> 810-1020
    // 17:00-19:30 -> 1020-1170
    // 19:30-22:00 -> 1170-1320
    // 22:00-07:00 -> 1320-1440 or 0-420

    if (currentMins >= 420 && currentMins < 540) return 0;
    if (currentMins >= 540 && currentMins < 750) return 1;
    if (currentMins >= 750 && currentMins < 810) return 2;
    if (currentMins >= 810 && currentMins < 1020) return 3;
    if (currentMins >= 1020 && currentMins < 1170) return 4;
    if (currentMins >= 1170 && currentMins < 1320) return 5;
    return 6; // Standby / Night
  }

  render() {
    const activities = portfolioData.profile.daily24hActivity;
    const currentIdx = this.getCurrentSlotIndex();
    const currentSlot = activities[currentIdx];

    this.overlay.innerHTML = `
      <div class="modal-card max-w-3xl border border-white/15 bg-[#090b10] p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
        
        <!-- Subtle Top Glow -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Header -->
        <div class="flex items-start justify-between pb-6 border-b border-white/10 relative z-10">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span class="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
                LIVE 24-HOUR WORKFLOW MONITOR
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight uppercase">
              WHAT MUADZ IS DOING RIGHT NOW
            </h2>
          </div>
          
          <button id="workflow-close-btn" aria-label="Close Workflow Modal" class="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all text-sm">
            ✕
          </button>
        </div>

        <!-- Live Clock & Active Status Banner -->
        <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] to-white/[0.01] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-xl bg-black/60 border border-white/15 flex items-center justify-center text-2xl shadow-inner">
              ${currentSlot.icon}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[9px] font-mono uppercase tracking-widest text-slate-400">CURRENT PHASE</span>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                  ● ACTIVE NOW
                </span>
              </div>
              <div class="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
                ${currentSlot.phase}
              </div>
            </div>
          </div>

          <div class="text-left sm:text-right border-t sm:border-t-0 pt-2 sm:pt-0 border-white/10">
            <div class="text-[10px] font-mono uppercase tracking-widest text-slate-400">LOCAL TIME (WIB)</div>
            <div id="workflow-live-clock" class="text-xl sm:text-2xl font-mono font-bold text-cyan-400 tracking-wider">
              --:--:--
            </div>
          </div>
        </div>

        <!-- 24-Hour Visual Schedule Timeline -->
        <div class="space-y-3 relative z-10 max-h-[48vh] overflow-y-auto pr-1">
          <div class="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">
            DAILY OPERATIONAL PIPELINE (24-HR CYCLE)
          </div>

          ${activities.map((act, idx) => {
            const isNow = idx === currentIdx;
            return `
              <div class="p-3.5 sm:p-4 rounded-xl border transition-all duration-300 ${
                isNow 
                  ? "bg-white/[0.06] border-cyan-400/50 shadow-lg shadow-cyan-950/40 relative" 
                  : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.035] opacity-75 hover:opacity-100"
              }">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div class="flex items-center gap-2.5">
                    <span class="text-lg">${act.icon}</span>
                    <span class="text-xs sm:text-sm font-bold text-white tracking-wide">
                      ${act.phase}
                    </span>
                    ${isNow ? `
                      <span class="px-2 py-0.5 rounded-full text-[8.5px] font-mono font-bold bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 uppercase tracking-widest animate-pulse">
                        CURRENT
                      </span>
                    ` : ""}
                  </div>
                  
                  <div class="flex items-center gap-2 text-xs font-mono">
                    <span class="text-slate-400">${act.time}</span>
                    <span class="px-2 py-0.5 rounded text-[9px] font-semibold uppercase ${act.bgColor} ${act.color} border ${act.borderColor}">
                      ${act.status}
                    </span>
                  </div>
                </div>

                <p class="text-xs text-slate-300 leading-relaxed font-normal mb-3">
                  ${act.task}
                </p>

                <!-- Tools Badge -->
                <div class="flex flex-wrap items-center gap-1.5">
                  <span class="text-[9px] font-mono text-slate-500 mr-1">STACK:</span>
                  ${act.tools.map(tool => `
                    <span class="px-2 py-0.5 rounded bg-black/40 border border-white/10 text-[9px] font-mono text-slate-300">
                      ${tool}
                    </span>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <!-- Footer / Contact Hint -->
        <div class="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 relative z-10">
          <span class="font-mono text-[11px] text-slate-400">
            ⚡ Butuh respon cepat atau konsultasi proyek?
          </span>
          <a href="#contact" id="workflow-contact-jump" class="btn-pill-primary text-[10px] py-2 px-4 inline-flex items-center gap-1.5">
            <span>KIRIM PESAN LANGSUNG</span>
            <span>→</span>
          </a>
        </div>

      </div>
    `;
  }

  startLiveClock() {
    const updateTime = () => {
      const clockEl = this.overlay.querySelector("#workflow-live-clock");
      if (!clockEl) return;
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }) + " WIB";
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  bindEvents() {
    const closeBtn = this.overlay.querySelector("#workflow-close-btn");
    closeBtn.addEventListener("click", () => this.close());

    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });

    const contactJump = this.overlay.querySelector("#workflow-contact-jump");
    if (contactJump) {
      contactJump.addEventListener("click", () => this.close());
    }
  }

  open() {
    this.isOpen = true;
    this.render();
    this.bindEvents();
    this.startLiveClock();
    this.overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.isOpen = false;
    this.overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

export const workflowModal = new WorkflowModal();
