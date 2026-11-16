/**
 * UI-LAYOUTS MOTION — SPARKLES WITH GLOBE
 * Interactive Cobe WebGL 3D Globe with animated canvas sparkles particle field
 * Clean editorial styling with 1 neutral ramp + 1 accent (electric cobalt/cyan)
 */

import createGlobe from "cobe";

export function renderSparklesGlobe() {
  return `
    <div class="relative w-full overflow-hidden flex flex-col items-center justify-center my-6 select-none">
      
      <!-- Sparkles Canvas Layer (Behind & around globe) -->
      <canvas id="sparkles-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0"></canvas>

      <!-- Radial Atmospheric Glow Behind Globe -->
      <div class="absolute w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(50,115,255,0.18),transparent_70%)] pointer-events-none -z-10 blur-xl"></div>

      <!-- Globe WebGL Canvas Container -->
      <div class="relative z-10 w-[300px] sm:w-[420px] md:w-[480px] h-[300px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
        <canvas
          id="cobe-globe"
          class="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 opacity-0"
          style="contain: layout paint size;"
        ></canvas>

        <!-- Center Orbital Status Ring / HUD -->
        <div class="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div class="w-[88%] h-[88%] rounded-full border border-black/10 dark:border-white/10 border-dashed animate-[spin_60s_linear_infinite]"></div>
        </div>
      </div>

      <!-- Interactive Micro Prompt / Caption -->
      <div class="relative z-20 -mt-6 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/15 shadow-sm text-[11px] font-mono font-medium text-black/75">
        <span class="w-1.5 h-1.5 rounded-full bg-[#145ebb] animate-ping"></span>
        <span>DRAG TO ROTATE · GLOBAL CLIENT &amp; AI PIPELINE REACH</span>
      </div>

    </div>
  `;
}

/**
 * Initializes Cobe Globe and Sparkles Canvas
 */
export function initSparklesGlobe() {
  const globeCanvas = document.getElementById("cobe-globe");
  const sparklesCanvas = document.getElementById("sparkles-canvas");

  if (!globeCanvas) return;

  // 1. Initialize Cobe WebGL Globe
  let phi = 0;
  let width = globeCanvas.offsetWidth;
  let currentPhi = 0;
  let currentTheta = 0;
  const doublePi = Math.PI * 2;

  // Pointer drag coordinates
  let pointerInteracting = null;
  let pointerInteractionMovement = 0;

  const onPointerDown = (e) => {
    pointerInteracting = e.clientX - pointerInteractionMovement;
    globeCanvas.style.cursor = "grabbing";
  };

  const onPointerUp = () => {
    pointerInteracting = null;
    globeCanvas.style.cursor = "grab";
  };

  const onPointerOut = () => {
    pointerInteracting = null;
    globeCanvas.style.cursor = "grab";
  };

  const onMouseMove = (e) => {
    if (pointerInteracting !== null) {
      const delta = e.clientX - pointerInteracting;
      pointerInteractionMovement = delta;
      phi = delta * 0.006;
    }
  };

  const onTouchMove = (e) => {
    if (pointerInteracting !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting;
      pointerInteractionMovement = delta;
      phi = delta * 0.006;
    }
  };

  globeCanvas.addEventListener("pointerdown", onPointerDown);
  window.addEventListener("pointerup", onPointerUp);
  globeCanvas.addEventListener("pointerout", onPointerOut);
  globeCanvas.addEventListener("mousemove", onMouseMove);
  globeCanvas.addEventListener("touchmove", onTouchMove, { passive: true });

  let globe = null;

  try {
    globe = createGlobe(globeCanvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 0, // Light editorial theme
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.94, 0.96, 0.98], // Clean paper porcelain base
      markerColor: [0.08, 0.37, 0.73], // Electric Cobalt
      glowColor: [0.75, 0.85, 0.98], // Subtle sky atmosphere
      markers: [
        // Jakarta / Indonesia (Home base)
        { location: [-6.2088, 106.8456], size: 0.08 },
        // Singapore (Regional Creative Hub)
        { location: [1.3521, 103.8198], size: 0.05 },
        // Tokyo (Aesthetics & Design Inspiration)
        { location: [35.6762, 139.6503], size: 0.04 },
        // San Francisco / Silicon Valley (AI Controller & Agentic Systems)
        { location: [37.7749, -122.4194], size: 0.06 },
        // London (Contemporary Editorial & DKV Design)
        { location: [51.5074, -0.1278], size: 0.05 },
      ],
      onRender: (state) => {
        if (!pointerInteracting) {
          phi += 0.0035;
        }
        state.phi = phi + pointerInteractionMovement * 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      globeCanvas.style.opacity = "1";
    }, 200);
  } catch (err) {
    console.warn("WebGL / Cobe initialization fallback:", err);
  }

  // Handle Resize
  const handleResize = () => {
    if (globeCanvas) {
      width = globeCanvas.offsetWidth;
    }
    if (sparklesCanvas) {
      resizeSparkles();
    }
  };
  window.addEventListener("resize", handleResize);

  // 2. Initialize Sparkles Canvas
  let sparklesAnimationId;
  function resizeSparkles() {
    if (!sparklesCanvas) return;
    sparklesCanvas.width = sparklesCanvas.parentElement.offsetWidth;
    sparklesCanvas.height = sparklesCanvas.parentElement.offsetHeight;
  }
  resizeSparkles();

  if (sparklesCanvas) {
    const ctx = sparklesCanvas.getContext("2d");
    const numSparkles = window.innerWidth < 640 ? 45 : 85;
    const sparkles = [];

    const colors = [
      "rgba(20, 94, 187, ",    // Cobalt
      "rgba(77, 162, 255, ",   // Electric Blue
      "rgba(100, 116, 139, ",  // Slate Neutral
      "rgba(15, 23, 42, ",     // Deep Slate
    ];

    for (let i = 0; i < numSparkles; i++) {
      sparkles.push({
        x: Math.random() * sparklesCanvas.width,
        y: Math.random() * sparklesCanvas.height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.6 - 0.2, // Drifting upwards
        opacity: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    function animateSparkles() {
      if (!ctx || !sparklesCanvas) return;
      ctx.clearRect(0, 0, sparklesCanvas.width, sparklesCanvas.height);

      for (let s of sparkles) {
        s.y += s.speedY;
        s.x += s.speedX;
        s.opacity += Math.sin(Date.now() * s.pulseSpeed * 0.05) * 0.02;
        const clampedOpacity = Math.max(0.1, Math.min(0.85, s.opacity));

        // Wrap around
        if (s.y < 0) {
          s.y = sparklesCanvas.height;
          s.x = Math.random() * sparklesCanvas.width;
        }
        if (s.x < 0) s.x = sparklesCanvas.width;
        if (s.x > sparklesCanvas.width) s.x = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.colorBase + clampedOpacity + ")";
        ctx.fill();

        // Cross starburst highlight for larger sparkles
        if (s.size > 2.0 && clampedOpacity > 0.5) {
          ctx.strokeStyle = s.colorBase + (clampedOpacity * 0.5) + ")";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(s.x - s.size * 2, s.y);
          ctx.lineTo(s.x + s.size * 2, s.y);
          ctx.moveTo(s.x, s.y - s.size * 2);
          ctx.lineTo(s.x, s.y + s.size * 2);
          ctx.stroke();
        }
      }

      sparklesAnimationId = requestAnimationFrame(animateSparkles);
    }

    animateSparkles();
  }

  // Cleanup handler if needed
  return () => {
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("pointerup", onPointerUp);
    if (sparklesAnimationId) cancelAnimationFrame(sparklesAnimationId);
    if (globe) globe.destroy();
  };
}
