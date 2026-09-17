/**
 * Toast Notifications Manager
 */
export class ToastManager {
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "toast-container";
    document.body.appendChild(this.container);
  }

  show(message, icon = "✦") {
    const toast = document.createElement("div");
    toast.className = "toast-item";
    toast.innerHTML = `
      <span style="color: #60a5fa; font-size: 14px;">${icon}</span>
      <span>${message}</span>
    `;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px) scale(0.9)";
      toast.style.transition = "all 0.25s ease";
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }
}

export const toast = new ToastManager();
