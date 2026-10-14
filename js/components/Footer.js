import { portfolioData } from "../data.js";

export function renderFooter() {
  const f = portfolioData.footer;
  const currentYear = new Date().getFullYear();

  return `
    <footer class="py-10 border-t border-white/10 text-slate-500 text-xs">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <!-- Left: Brand & Dynamic Year -->
        <div class="text-[11px] font-mono tracking-wider text-slate-400">
          © ${currentYear} ${f.brand} · ${f.subtitle}
        </div>

        <!-- Right: Verified Social Links -->
        <div class="flex items-center gap-6">
          <span class="text-[10px] font-bold tracking-widest text-slate-500 uppercase">CONNECT</span>
          <div class="flex items-center gap-4">
            ${f.links.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors text-xs font-medium">
                ${s.name} ↗
              </a>
            `).join("")}
          </div>
        </div>

      </div>
    </footer>
  `;
}
