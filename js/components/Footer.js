import { portfolioData } from "../data.js";

export function renderFooter() {
  const f = portfolioData.footer;

  return `
    <footer class="py-10 border-t border-white/10 text-slate-500 text-xs">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <!-- Left: Copyright -->
        <div class="text-[11px] font-mono tracking-wider">
          ${f.copyright}
        </div>

        <!-- Right: Social Links (Ref Match) -->
        <div class="flex items-center gap-6">
          <span class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">LET'S CONNECT</span>
          <div class="flex items-center gap-4">
            ${f.socials.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                ${s.name}
              </a>
            `).join("")}
          </div>
        </div>

      </div>
    </footer>
  `;
}
