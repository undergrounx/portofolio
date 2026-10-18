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

    if (currentMins >= 420 && currentMins < 540) return 0;
    if (currentMins >= 540 && currentMins < 750) return 1;
    if (currentMins >= 750 && currentMins < 810) return 2;
    if (currentMins >= 810 && currentMins < 1020) return 3;
    if (currentMins >= 1020 && currentMins < 1170) return 4;
    if (currentMins >= 1170 && currentMins < 1320) return 5;
    return 6;
  }

  render() {
    const activities = portfolioData.profile.daily24hActivity;
    const currentIdx = this.getCurrentSlotIndex();
    const currentSlot = activities[currentIdx];

    this.overlay.innerHTML = `
      <div class="modal-card max-w-3xl border-2 border-black bg-white p-6 sm:p-8 rounded-[32px] text-black relative overflow-hidden">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-5 border-b border-black mb-6">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-full bg-[#55db9c] border border-black flex items-center justify-center font-bold text-base text-black">
              ⚡
            </span>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider text-black">MUADZ LIVE WORKFLOW</span>
                <span class="slush-sticker bg-[#ffd731] text-black text-[9px] py-0.5 px-2">WIB · ASIA/JAKARTA</span>
              </div>
              <div id="live-time-display" class="text-xs font-mono font-bold text-black mt-0.5">
                00:00:00 WIB
              </div>
            </div>
          </div>
          <button id="workflow-close-btn" class="w-10 h-10 rounded-full bg-white hover:bg-[#e9e9e9] border border-black flex items-center justify-center text-black font-bold transition-all cursor-pointer">
            ✕
          </button>
        </div>

        <!-- Currently Active Banner -->
        <div class="mb-6 p-5 rounded-2xl bg-[#ffd731] border border-black text-black">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
              <span class="text-xs font-bold uppercase tracking-widest text-black">NOW ACTIVE IN JAKARTA</span>
            </div>
            <span class="slush-sticker bg-white text-black text-[10px] font-mono">
              ${currentSlot.time}
            </span>
          </div>
          <div class="text-lg font-bold text-black uppercase mt-1">
            ${currentSlot.icon} ${currentSlot.phase}
          </div>
          <p class="text-xs font-semibold text-black mt-1.5 leading-relaxed">
            ${currentSlot.task}
          </p>
        </div>

        <!-- Full Schedule List -->
        <div class="space-y-3 max-h-[45vh] overflow-y-auto pr-1">
          ${activities.map((act, idx) => {
            const isNow = idx === currentIdx;
            return `
              <div class="p-4 rounded-xl border border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${isNow ? 'bg-[#55db9c]' : 'bg-[#f8f9fa]'}">
                <div class="flex items-start gap-3">
                  <span class="text-lg">${act.icon}</span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-black">${act.time}</span>
                      <span class="text-xs font-bold uppercase text-black">· ${act.phase}</span>
                    </div>
                    <p class="text-xs font-semibold text-black mt-1">
                      ${act.task}
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-1 self-start sm:self-center">
                  ${act.tools.map(t => `
                    <span class="slush-sticker bg-white text-black text-[9px] py-0.5 px-2">
                      ${t}
                    </span>
                  `).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>

      </div>
    `;
  }

  bindEvents() {
    const closeBtn = this.overlay.querySelector("#workflow-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.close());

    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  }

  startLiveClock() {
    const timeEl = this.overlay.querySelector("#live-time-display");
    const updateTime = () => {
      if (!timeEl) return;
      const now = new Date();
      timeEl.textContent = `${now.toLocaleTimeString("id-ID", { timeZone: "Asia/Jakarta" })} WIB`;
    };
    updateTime();
    setInterval(updateTime, 1000);
  }

  open() {
    this.render();
    this.bindEvents();
    this.startLiveClock();
    this.isOpen = true;
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
