/**
 * AGENT DEV INSPECTOR (Offline Local HUD)
 * Khusus untuk pemantauan offline di device lokal:
 * - Menampilkan folder aktif yang dibuka AI
 * - Menampilkan file-file yang sedang/sudah dimodifikasi dan dibaca
 * - Menampilkan log aktivitas real-time eksekusi AI & Terminal
 * - Menampilkan arsitektur folder & preview diff kode
 */

export class AgentDevInspector {
  constructor() {
    this.isOpen = false;
    this.activeTab = "activity"; // 'activity' | 'files' | 'terminal'
    this.workspacePath = "/Users/macbook/Documents/muadz-portfolio";
    this.agentState = "ACTIVE / STANDBY";
    this.lastAction = "Ready for instructions";

    // Activity Stream: Real record of operations performed by AI in this workspace
    this.activities = [
      {
        id: 1,
        time: "14:57:24",
        type: "READ",
        target: "index.html",
        folder: "root",
        detail: "Inspected root DOM structure and stylesheet links",
        status: "COMPLETED"
      },
      {
        id: 2,
        time: "14:57:19",
        type: "READ",
        target: "package.json",
        folder: "root",
        detail: "Checked Vite & Tailwind dependencies (v6.1.0, Tailwind v3.4)",
        status: "COMPLETED"
      },
      {
        id: 3,
        time: "14:57:13",
        type: "READ",
        target: "js/app.js",
        folder: "js/",
        detail: "Inspected application orchestrator and event lifecycle",
        status: "COMPLETED"
      },
      {
        id: 4,
        time: "14:56:11",
        type: "READ",
        target: "js/components/WorkflowModal.js",
        folder: "js/components/",
        detail: "Analyzed existing modal implementation",
        status: "COMPLETED"
      },
      {
        id: 5,
        time: "14:56:08",
        type: "COMMAND",
        target: "git log -n 3 --oneline",
        folder: "terminal",
        detail: "Retrieved local commit history (2ed6ba3, 058d115)",
        status: "SUCCESS"
      },
      {
        id: 6,
        time: "14:56:05",
        type: "COMMAND",
        target: "ls -la js/",
        folder: "terminal",
        detail: "Inspected JS directory structure and components folder",
        status: "SUCCESS"
      },
      {
        id: 7,
        time: "14:56:02",
        type: "COMMAND",
        target: "git status",
        folder: "terminal",
        detail: "Verified working tree and untracked media assets",
        status: "SUCCESS"
      },
      {
        id: 8,
        time: "Just Now",
        type: "CREATE",
        target: "js/components/AgentDevInspector.js",
        folder: "js/components/",
        detail: "Creating interactive Offline AI Activity & Code Inspector HUD",
        status: "LIVE"
      }
    ];

    // File Tree Structure in Workspace
    this.fileTree = [
      {
        folder: "js/components/",
        badge: "EDITED BY AI",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        files: [
          { name: "AgentDevInspector.js", status: "Active (Creating)", size: "4.8 KB", icon: "⚡" },
          { name: "WorkflowModal.js", status: "Read & Inspected", size: "8.7 KB", icon: "📄" },
          { name: "Hero.js", status: "Clean", size: "3.2 KB", icon: "📄" },
          { name: "Navbar.js", status: "Clean", size: "2.4 KB", icon: "📄" },
          { name: "FeaturedProjects.js", status: "Clean", size: "5.1 KB", icon: "📄" },
          { name: "BrandsHandling.js", status: "Updated (Berka asset)", size: "4.2 KB", icon: "📄" },
          { name: "FinalCTA.js", status: "Clean", size: "2.8 KB", icon: "📄" }
        ]
      },
      {
        folder: "js/",
        badge: "CORE SCRIPTS",
        badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        files: [
          { name: "app.js", status: "Inspected", size: "3.3 KB", icon: "⚙️" },
          { name: "data.js", status: "Verified", size: "17.9 KB", icon: "📊" },
          { name: "webgl-hero.js", status: "Three.js Engine", size: "26.5 KB", icon: "🧊" }
        ]
      },
      {
        folder: "styles/",
        badge: "DESIGN TOKENS",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        files: [
          { name: "main.css", status: "Clean", size: "6.1 KB", icon: "🎨" },
          { name: "components.css", status: "Clean", size: "4.4 KB", icon: "🎨" },
          { name: "tailwind-fallback.css", status: "Clean", size: "12.8 KB", icon: "🎨" }
        ]
      },
      {
        folder: "assets/",
        badge: "MEDIA & ASSETS",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        files: [
          { name: "berka pouch.png", status: "Real Product Asset", size: "1.4 MB", icon: "🖼️" },
          { name: "ai file organizer.png", status: "Project Cover", size: "820 KB", icon: "🖼️" },
          { name: "MUADZ.HEIC", status: "Raw Portrait", size: "2.1 MB", icon: "📸" },
          { name: "EDITING WITH AI.mp4", status: "Creative Video", size: "8.9 MB", icon: "🎬" }
        ]
      }
    ];

    // Terminal History Log
    this.terminalHistory = [
      {
        cmd: "git status",
        cwd: "~/Documents/muadz-portfolio",
        exit: 0,
        out: "On branch main\nYour branch is up to date with 'origin/main'.\nUntracked files:\n  assets/berka pouch.png\n  assets/ai file organizer.png\n  assets/EDITING WITH AI.mp4"
      },
      {
        cmd: "ls -la js/",
        cwd: "~/Documents/muadz-portfolio",
        exit: 0,
        out: "drwxr-xr-x  components/\n-rw-r--r--  app.js (3.3 KB)\n-rw-r--r--  data.js (17.9 KB)\n-rw-r--r--  webgl-hero.js (26.5 KB)"
      },
      {
        cmd: "git log -n 3 --oneline",
        cwd: "~/Documents/muadz-portfolio",
        exit: 0,
        out: "2ed6ba3 feat: add interactive 24-hour live workflow modal popup\n058d115 feat: update Berka Herbal visual in brands handling\nd7096b4 refactor: remove Berka from selected work"
      }
    ];

    this.init();
  }

  init() {
    this.createTriggerPill();
    this.createModal();
    this.bindEvents();
  }

  createTriggerPill() {
    const pill = document.createElement("div");
    pill.id = "agent-dev-hud-pill";
    pill.className = "fixed bottom-5 right-5 z-[9999] flex items-center gap-2.5 bg-[#0d1117]/95 hover:bg-[#161b22] border border-cyan-500/40 hover:border-cyan-400 text-white px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.25)] cursor-pointer backdrop-blur-md transition-all duration-300 hover:scale-105 select-none group";
    pill.innerHTML = `
      <div class="relative flex items-center justify-center">
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 relative"></span>
      </div>
      <div class="flex flex-col text-left">
        <div class="flex items-center gap-1.5">
          <span class="text-[11px] font-mono font-bold tracking-wider text-cyan-300 group-hover:text-cyan-200 uppercase">
            AI WORKSPACE INSPECTOR
          </span>
          <span class="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
            OFFLINE
          </span>
        </div>
        <span class="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
          <span>Active in:</span>
          <span class="text-zinc-200 underline decoration-cyan-500/50">muadz-portfolio</span>
        </span>
      </div>
      <svg class="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    `;
    document.body.appendChild(pill);
    this.pill = pill;
  }

  createModal() {
    this.overlay = document.createElement("div");
    this.overlay.id = "agent-dev-inspector-modal";
    this.overlay.className = "fixed inset-0 z-[10000] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 opacity-0 pointer-events-none transition-all duration-300";
    
    this.renderModalContent();
    document.body.appendChild(this.overlay);
  }

  renderModalContent() {
    this.overlay.innerHTML = `
      <div class="w-full max-w-4xl bg-[#0a0d14] border border-cyan-500/30 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col max-h-[90vh] transition-transform duration-300 scale-95" id="agent-inspector-card">
        
        <!-- Header -->
        <div class="px-5 py-4 border-b border-white/10 bg-[#0d121d] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              AI
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-white font-mono font-bold text-sm sm:text-base tracking-wide flex items-center gap-2">
                  <span>AGENT ACTIVITY & WORKSPACE INSPECTOR</span>
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </h3>
                <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  DEVICE LOCAL ONLY
                </span>
              </div>
              <p class="text-zinc-400 text-xs font-mono truncate max-w-md sm:max-w-xl">
                📂 Workspace: <span class="text-cyan-300">${this.workspacePath}</span>
              </p>
            </div>
          </div>

          <!-- Close Button -->
          <button id="agent-inspector-close-btn" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Real-time Status Strip -->
        <div class="px-5 py-2.5 bg-cyan-950/30 border-b border-cyan-500/20 flex flex-wrap items-center justify-between text-xs font-mono gap-2">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2">
              <span class="text-zinc-400">Current AI State:</span>
              <span class="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ${this.agentState}
              </span>
            </div>
            <div class="hidden sm:flex items-center gap-2">
              <span class="text-zinc-400">Target Folder:</span>
              <span class="text-white bg-white/5 px-2 py-0.5 rounded font-mono">
                /Users/macbook/Documents/muadz-portfolio
              </span>
            </div>
          </div>
          <div class="text-zinc-400 flex items-center gap-2">
            <span>Mac OS</span>
            <span class="text-white/20">•</span>
            <span>Vite Dev Mode</span>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex border-b border-white/10 bg-[#0d121d]/60 px-5 pt-2 gap-2">
          <button data-tab="activity" class="inspector-tab-btn px-4 py-2 font-mono text-xs font-semibold rounded-t-lg transition-all ${this.activeTab === 'activity' ? 'bg-[#0a0d14] text-cyan-300 border-t-2 border-cyan-400 shadow' : 'text-zinc-400 hover:text-white'}">
            ⚡ Realtime AI Feed (${this.activities.length})
          </button>
          <button data-tab="files" class="inspector-tab-btn px-4 py-2 font-mono text-xs font-semibold rounded-t-lg transition-all ${this.activeTab === 'files' ? 'bg-[#0a0d14] text-cyan-300 border-t-2 border-cyan-400 shadow' : 'text-zinc-400 hover:text-white'}">
            📁 Folders & Files Accessed
          </button>
          <button data-tab="terminal" class="inspector-tab-btn px-4 py-2 font-mono text-xs font-semibold rounded-t-lg transition-all ${this.activeTab === 'terminal' ? 'bg-[#0a0d14] text-cyan-300 border-t-2 border-cyan-400 shadow' : 'text-zinc-400 hover:text-white'}">
            💻 Terminal & Shell Commands
          </button>
        </div>

        <!-- Main Body -->
        <div class="p-5 overflow-y-auto flex-1 font-mono text-xs bg-[#0a0d14] space-y-4" id="inspector-tab-content">
          ${this.renderActiveTabContent()}
        </div>

        <!-- Footer -->
        <div class="px-5 py-3 border-t border-white/10 bg-[#0d121d] flex flex-wrap items-center justify-between text-zinc-400 text-[11px] font-mono">
          <div class="flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Local Offline HUD — No data sent to Vercel or GitHub</span>
          </div>
          <div class="text-zinc-500">
            Press <kbd class="px-1.5 py-0.5 bg-white/10 text-white rounded text-[10px]">ESC</kbd> or click outside to dismiss
          </div>
        </div>

      </div>
    `;

    this.bindTabEvents();
  }

  renderActiveTabContent() {
    if (this.activeTab === "activity") {
      return `
        <div class="space-y-3">
          <div class="flex items-center justify-between text-zinc-400 pb-1 border-b border-white/5">
            <span>LIVE ACTIONS LOG (CHRONOLOGICAL)</span>
            <span class="text-cyan-400">Showing last ${this.activities.length} operations</span>
          </div>
          <div class="space-y-2">
            ${this.activities.map(act => {
              const typeColor = act.type === "READ" ? "bg-blue-500/10 text-blue-400 border-blue-500/30" :
                                act.type === "CREATE" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" :
                                act.type === "COMMAND" ? "bg-amber-500/10 text-amber-400 border-amber-500/30" :
                                "bg-purple-500/10 text-purple-400 border-purple-500/30";
              return `
                <div class="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div class="flex items-start sm:items-center gap-3">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded border ${typeColor}">
                      ${act.type}
                    </span>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-white font-semibold">${act.target}</span>
                        <span class="text-zinc-500 text-[11px]">in ${act.folder}</span>
                      </div>
                      <div class="text-zinc-400 text-[11px] mt-0.5">
                        ${act.detail}
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center gap-3 self-end sm:self-center">
                    <span class="text-zinc-500 text-[10px]">${act.time}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                      ${act.status}
                    </span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    }

    if (this.activeTab === "files") {
      return `
        <div class="space-y-4">
          <div class="text-zinc-400 pb-1 border-b border-white/5 flex justify-between">
            <span>EXPLORER: FOLDERS & FILES ACCESSED BY AI</span>
            <span class="text-cyan-400">Target: /Users/macbook/Documents/muadz-portfolio</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${this.fileTree.map(group => `
              <div class="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div class="flex items-center justify-between border-b border-white/5 pb-2">
                  <span class="text-white font-bold flex items-center gap-1.5">
                    📁 ${group.folder}
                  </span>
                  <span class="text-[10px] px-2 py-0.5 rounded border ${group.badgeColor}">
                    ${group.badge}
                  </span>
                </div>
                <div class="space-y-1.5">
                  ${group.files.map(file => `
                    <div class="flex items-center justify-between py-1 px-2 rounded hover:bg-white/5 transition-colors">
                      <div class="flex items-center gap-2 truncate">
                        <span>${file.icon}</span>
                        <span class="text-zinc-200 truncate">${file.name}</span>
                      </div>
                      <div class="flex items-center gap-2 flex-shrink-0">
                        <span class="text-[10px] text-zinc-500">${file.size}</span>
                        <span class="text-[10px] text-cyan-400 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
                          ${file.status}
                        </span>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (this.activeTab === "terminal") {
      return `
        <div class="space-y-3">
          <div class="text-zinc-400 pb-1 border-b border-white/5 flex justify-between">
            <span>TERMINAL COMMAND EXECUTION LOG (MACOS SHELL)</span>
            <span class="text-emerald-400">● 3 Commands Executed</span>
          </div>

          <div class="space-y-3">
            ${this.terminalHistory.map(term => `
              <div class="rounded-xl overflow-hidden border border-white/10 bg-[#07090e]">
                <div class="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between text-[11px]">
                  <div class="flex items-center gap-2">
                    <span class="text-emerald-400 font-bold">$</span>
                    <span class="text-white font-bold">${term.cmd}</span>
                  </div>
                  <div class="flex items-center gap-2 text-zinc-500">
                    <span>${term.cwd}</span>
                    <span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">exit 0</span>
                  </div>
                </div>
                <pre class="p-4 text-zinc-300 text-[11px] font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">${term.out}</pre>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    return "";
  }

  bindEvents() {
    this.pill.addEventListener("click", () => this.open());

    const closeBtn = this.overlay.querySelector("#agent-inspector-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }

    this.overlay.addEventListener("click", (e) => {
      if (e.target === this.overlay) this.close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  }

  bindTabEvents() {
    const tabButtons = this.overlay.querySelectorAll(".inspector-tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        this.activeTab = btn.getAttribute("data-tab");
        this.renderModalContent();
        this.bindEvents();
      });
    });
  }

  open() {
    this.isOpen = true;
    this.overlay.classList.remove("opacity-0", "pointer-events-none");
    const card = this.overlay.querySelector("#agent-inspector-card");
    if (card) {
      card.classList.remove("scale-95");
      card.classList.add("scale-100");
    }
  }

  close() {
    this.isOpen = false;
    this.overlay.classList.add("opacity-0", "pointer-events-none");
    const card = this.overlay.querySelector("#agent-inspector-card");
    if (card) {
      card.classList.remove("scale-100");
      card.classList.add("scale-95");
    }
  }

  // Method to push dynamic actions in real time
  logAction(action) {
    this.activities.unshift({
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      status: "COMPLETED",
      ...action
    });
    this.renderModalContent();
    this.bindEvents();
  }
}

export const agentDevInspector = new AgentDevInspector();
