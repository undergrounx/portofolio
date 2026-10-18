import { portfolioData } from "../data.js";

export function renderFooter() {
  const f = portfolioData.footer;
  const currentYear = new Date().getFullYear();

  return `
    <!-- Section Ground: Paper White #ffffff Band -->
    <footer class="py-12 bg-white text-black border-t border-black">
      <div class="max-w-[1440px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <!-- Left Brand & Monogram -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
            M
          </div>
          <div class="text-xs font-bold uppercase tracking-wider">
            © ${currentYear} ${f.brand} · INFLATABLE STICKER UNIVERSE
          </div>
        </div>

        <!-- Right: Pill Links -->
        <div class="flex items-center gap-3">
          ${f.links.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="nav-pill-btn text-xs py-2 px-4">
              ${s.name} ↗
            </a>
          `).join("")}
        </div>

      </div>
    </footer>
  `;
}
