/**
 * Interactive Cursor Trailer with Magnetic Physics
 */
export class CursorTrailer {
  constructor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    this.dot = document.createElement("div");
    this.dot.className = "custom-cursor-dot";

    this.ring = document.createElement("div");
    this.ring.className = "custom-cursor-ring";

    document.body.appendChild(this.dot);
    document.body.appendChild(this.ring);

    this.mouseX = -100;
    this.mouseY = -100;
    this.ringX = -100;
    this.ringY = -100;

    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.dot.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
    });

    const loop = () => {
      this.ringX += (this.mouseX - this.ringX) * 0.15;
      this.ringY += (this.mouseY - this.ringY) * 0.15;
      this.ring.style.transform = `translate(${this.ringX}px, ${this.ringY}px)`;
      requestAnimationFrame(loop);
    };
    loop();

    // Hover detection for interactive targets
    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest("button, a, .card-panel, .btn-circle-arrow, .interactive-hover");
      if (target) {
        this.ring.style.width = "54px";
        this.ring.style.height = "54px";
        this.ring.style.borderColor = "rgba(255, 255, 255, 0.6)";
        this.ring.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
      }
    });

    document.addEventListener("mouseout", (e) => {
      const target = e.target.closest("button, a, .card-panel, .btn-circle-arrow, .interactive-hover");
      if (target) {
        this.ring.style.width = "32px";
        this.ring.style.height = "32px";
        this.ring.style.borderColor = "rgba(255, 255, 255, 0.3)";
        this.ring.style.backgroundColor = "transparent";
      }
    });
  }
}
