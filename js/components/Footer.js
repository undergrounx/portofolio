import { portfolioData } from "../data.js";

export function renderFooter() {
  const f = portfolioData.footer;
  const currentYear = new Date().getFullYear();

  return `
    <footer class="py-12 bg-white text-[#0f172a] border-t border-black/10">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <!-- Left Brand & Monogram -->
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-display font-semibold text-xs">
            M
          </div>
          <div class="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
            © ${currentYear} ${f.brand} · DKV × AI CONTROLLER
          </div>
        </div>

        <!-- Right: Pill Links -->
        <div class="flex items-center gap-2">
          ${f.links.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="nav-link text-xs py-1.5 px-3">
              ${s.name} ↗
            </a>
          `).join("")}
        </div>

      </div>
    </footer>
  `;
}
