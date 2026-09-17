/**
 * MUADZ HERO 3D WebGL ENGINE
 * Bespoke interactive dark chrome & graphite generative sculpture.
 * Features:
 * - PBR metallic chrome reflections with multi-point studio environment highlights
 * - Complex procedural geometric sculpture (Torus Knot / Core + Orbital rings + Nodes)
 * - 3D particle field with depth attenuation
 * - Mouse parallax lerp damping
 * - Scroll-driven orientation & depth shifts
 * - Hover acceleration & specular glint
 * - Device-aware pixel ratio & graceful fallback
 */

export class HeroWebGLScene {
  constructor(canvasElement, containerElement) {
    this.canvas = canvasElement;
    this.container = containerElement || canvasElement.parentElement;
    this.gl = null;
    this.isDestroyed = false;
    this.animationFrameId = null;

    // Interaction states
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.currentMouseX = 0;
    this.currentMouseY = 0;
    this.scrollProgress = 0;
    this.isHovered = false;
    this.hoverIntensity = 0;

    // Timing & Physics
    this.clock = 0;
    this.rotationX = 0.2;
    this.rotationY = 0.4;
    this.rotationZ = 0.1;
    this.baseSpeed = 0.008;

    this.init();
  }

  init() {
    try {
      this.gl = this.canvas.getContext("webgl", {
        antialias: true,
        alpha: true,
        depth: true,
        powerPreference: "high-performance"
      }) || this.canvas.getContext("experimental-webgl");

      if (!this.gl) {
        console.warn("WebGL not supported. Rendering high-fidelity fallback.");
        this.renderFallback();
        return;
      }
    } catch (e) {
      console.warn("WebGL initialization error:", e);
      this.renderFallback();
      return;
    }

    this.initShaders();
    this.initGeometry();
    this.initParticles();
    this.initOrbitalRings();
    this.setupListeners();
    this.onResize();

    // Start render loop
    this.render = this.render.bind(this);
    this.render();
  }

  initShaders() {
    const gl = this.gl;

    // Main Sculpture Shader (Metallic Chrome PBR)
    const vsSource = `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      
      uniform mat4 uProjection;
      uniform mat4 uModelView;
      uniform mat3 uNormalMatrix;
      uniform float uTime;
      uniform float uHover;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vEyeVec;

      void main() {
        // Subtle organic breathing oscillation
        vec3 pos = aPosition;
        float wave = sin(pos.y * 3.0 + uTime * 1.5) * cos(pos.x * 2.0 + uTime) * (0.03 + uHover * 0.03);
        pos += aNormal * wave;

        vec4 mvPos = uModelView * vec4(pos, 1.0);
        vPosition = mvPos.xyz;
        vEyeVec = -mvPos.xyz;
        vNormal = normalize(uNormalMatrix * aNormal);

        gl_Position = uProjection * mvPos;
      }
    `;

    const fsSource = `
      precision highp float;

      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec3 vEyeVec;

      uniform float uTime;
      uniform float uHover;
      uniform vec2 uMouse;

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vEyeVec);

        // Multiple Studio Light Positions for Dark Metallic Chrome
        vec3 lightPos1 = normalize(vec3(2.0, 3.5, 3.0));   // Key Keylight
        vec3 lightPos2 = normalize(vec3(-3.0, -1.5, 2.0)); // Rim Cool Light
        vec3 lightPos3 = normalize(vec3(0.0, -4.0, -2.0)); // Bottom Bounce

        // Diffuse components (very dark graphite base)
        float diff1 = max(dot(N, lightPos1), 0.0) * 0.45;
        float diff2 = max(dot(N, lightPos2), 0.0) * 0.25;

        // Specular reflections (Blinn-Phong Metallic Chrome)
        vec3 H1 = normalize(lightPos1 + V);
        vec3 H2 = normalize(lightPos2 + V);
        float spec1 = pow(max(dot(N, H1), 0.0), 48.0 + uHover * 24.0);
        float spec2 = pow(max(dot(N, H2), 0.0), 32.0);

        // Fresnel reflection at grazing angles (metallic silver rim)
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.2);

        // Reflection mapping pseudo-environment
        vec3 R = reflect(-V, N);
        float envZenith = smoothstep(-0.2, 0.9, R.y);
        float envHorizon = (1.0 - abs(R.y)) * 0.6;
        vec3 envColor = mix(vec3(0.06, 0.07, 0.09), vec3(0.92, 0.95, 1.0), envZenith * 0.7 + envHorizon * 0.4);

        // Base metallic graphite tone
        vec3 baseAlbedo = vec3(0.12, 0.13, 0.16);

        // Combine composite lighting
        vec3 color = baseAlbedo * (0.2 + diff1 + diff2);
        color += envColor * (0.55 + fresnel * 0.7);
        color += vec3(1.0, 1.0, 1.0) * (spec1 * 1.35 + spec2 * 0.6);
        color += vec3(0.85, 0.9, 1.0) * fresnel * (0.8 + uHover * 0.4);

        // Edge vignetting on geometry
        gl_FragColor = vec4(color, 0.96);
      }
    `;

    this.program = this.createProgram(vsSource, fsSource);

    // Particle Shader
    const pvsSource = `
      attribute vec3 aPosition;
      attribute float aScale;
      attribute float aPhase;

      uniform mat4 uProjection;
      uniform mat4 uModelView;
      uniform float uTime;

      varying float vAlpha;

      void main() {
        vec3 pos = aPosition;
        pos.y += sin(uTime * 0.8 + aPhase) * 0.15;
        pos.x += cos(uTime * 0.6 + aPhase) * 0.12;

        vec4 mvPos = uModelView * vec4(pos, 1.0);
        gl_Position = uProjection * mvPos;

        // Depth size attenuation
        float pSize = (aScale * 35.0) / -mvPos.z;
        gl_PointSize = clamp(pSize, 1.5, 9.0);

        // Twinkle factor
        vAlpha = (sin(uTime * 2.0 + aPhase) * 0.35 + 0.65) * smoothstep(-8.0, -1.0, mvPos.z);
      }
    `;

    const pfsSource = `
      precision mediump float;
      varying float vAlpha;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;

        float intensity = 1.0 - smoothstep(0.0, 0.5, dist);
        // Soft white star-point sparkle
        gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * vAlpha * 0.75);
      }
    `;

    this.particleProgram = this.createProgram(pvsSource, pfsSource);

    // Line / Ring Shader
    const lvsSource = `
      attribute vec3 aPosition;
      uniform mat4 uProjection;
      uniform mat4 uModelView;

      void main() {
        gl_Position = uProjection * uModelView * vec4(aPosition, 1.0);
      }
    `;

    const lfsSource = `
      precision mediump float;
      uniform vec4 uColor;

      void main() {
        gl_FragColor = uColor;
      }
    `;

    this.lineProgram = this.createProgram(lvsSource, lfsSource);
  }

  createProgram(vsSource, fsSource) {
    const gl = this.gl;
    const vs = this.compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = this.compileShader(gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
    }
    return program;
  }

  compileShader(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
    }
    return shader;
  }

  initGeometry() {
    const gl = this.gl;

    // Generate High-Poly Torus Knot (Abstract Metallic Sculpture)
    const p = 2;
    const q = 3;
    const tubularSegments = 180;
    const radialSegments = 32;
    const radius = 1.4;
    const tube = 0.42;

    const vertices = [];
    const normals = [];
    const indices = [];

    const calculateKnotPoint = (u) => {
      const cu = Math.cos(u);
      const su = Math.sin(u);
      const quOverP = (q / p) * u;
      const cs = Math.cos(quOverP);

      const r = radius * (0.8 + 0.4 * cs);
      const x = r * cu;
      const y = r * su;
      const z = -radius * Math.sin(quOverP) * 0.7;
      return [x, y, z];
    };

    const grid = [];

    for (let i = 0; i <= tubularSegments; i++) {
      const u = (i / tubularSegments) * Math.PI * 2 * p;
      const p1 = calculateKnotPoint(u);
      const p2 = calculateKnotPoint(u + 0.01);

      // Tangent, Normal, Binormal frame
      const T = [p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]];
      const tLen = Math.hypot(T[0], T[1], T[2]) || 1;
      T[0] /= tLen; T[1] /= tLen; T[2] /= tLen;

      let N = [p1[0] + p2[0], p1[1] + p2[1], p1[2] + p2[2]];
      const B = [
        T[1] * N[2] - T[2] * N[1],
        T[2] * N[0] - T[0] * N[2],
        T[0] * N[1] - T[1] * N[0]
      ];
      const bLen = Math.hypot(B[0], B[1], B[2]) || 1;
      B[0] /= bLen; B[1] /= bLen; B[2] /= bLen;

      N = [
        B[1] * T[2] - B[2] * T[1],
        B[2] * T[0] - B[0] * T[2],
        B[0] * T[1] - B[1] * T[0]
      ];

      const row = [];

      for (let j = 0; j <= radialSegments; j++) {
        const v = (j / radialSegments) * Math.PI * 2;
        const cx = -tube * Math.cos(v);
        const cy = tube * Math.sin(v);

        const vx = p1[0] + cx * N[0] + cy * B[0];
        const vy = p1[1] + cx * N[1] + cy * B[1];
        const vz = p1[2] + cx * N[2] + cy * B[2];

        const nx = cx * N[0] + cy * B[0];
        const ny = cx * N[1] + cy * B[1];
        const nz = cx * N[2] + cy * B[2];
        const nLen = Math.hypot(nx, ny, nz) || 1;

        vertices.push(vx, vy, vz);
        normals.push(nx / nLen, ny / nLen, nz / nLen);
        row.push(vertices.length / 3 - 1);
      }
      grid.push(row);
    }

    for (let i = 0; i < tubularSegments; i++) {
      for (let j = 0; j < radialSegments; j++) {
        const a = grid[i][j];
        const b = grid[i + 1][j];
        const c = grid[i + 1][j + 1];
        const d = grid[i][j + 1];

        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    this.mesh = {
      vertexBuffer: gl.createBuffer(),
      normalBuffer: gl.createBuffer(),
      indexBuffer: gl.createBuffer(),
      indexCount: indices.length
    };

    gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  }

  initParticles() {
    const gl = this.gl;
    const particleCount = 220;
    const positions = [];
    const scales = [];
    const phases = [];

    for (let i = 0; i < particleCount; i++) {
      // Cylindrical distribution around sculpture
      const radius = 2.0 + Math.random() * 3.4;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 5.0;

      positions.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
      scales.push(0.3 + Math.random() * 0.7);
      phases.push(Math.random() * Math.PI * 2);
    }

    this.particles = {
      count: particleCount,
      posBuffer: gl.createBuffer(),
      scaleBuffer: gl.createBuffer(),
      phaseBuffer: gl.createBuffer()
    };

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.scaleBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(scales), gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.phaseBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(phases), gl.STATIC_DRAW);
  }

  initOrbitalRings() {
    const gl = this.gl;
    const segments = 120;
    const ring1Verts = [];
    const ring2Verts = [];

    const r1 = 2.6;
    const r2 = 3.2;

    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ring1Verts.push(Math.cos(theta) * r1, 0, Math.sin(theta) * r1);
      ring2Verts.push(Math.cos(theta) * r2, 0, Math.sin(theta) * r2);
    }

    this.ring1 = {
      buffer: gl.createBuffer(),
      count: ring1Verts.length / 3
    };
    gl.bindBuffer(gl.ARRAY_BUFFER, this.ring1.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ring1Verts), gl.STATIC_DRAW);

    this.ring2 = {
      buffer: gl.createBuffer(),
      count: ring2Verts.length / 3
    };
    gl.bindBuffer(gl.ARRAY_BUFFER, this.ring2.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ring2Verts), gl.STATIC_DRAW);
  }

  setupListeners() {
    this.handleMouseMove = (e) => {
      const rect = this.container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      this.targetMouseX = Math.max(-1, Math.min(1, x));
      this.targetMouseY = Math.max(-1, Math.min(1, y));
    };

    this.handleMouseEnter = () => {
      this.isHovered = true;
    };

    this.handleMouseLeave = () => {
      this.isHovered = false;
      this.targetMouseX = 0;
      this.targetMouseY = 0;
    };

    this.handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      this.scrollProgress = Math.min(2.0, scrollY / vh);
    };

    this.handleResize = () => {
      this.onResize();
    };

    window.addEventListener("mousemove", this.handleMouseMove, { passive: true });
    this.container.addEventListener("mouseenter", this.handleMouseEnter);
    this.container.addEventListener("mouseleave", this.handleMouseLeave);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    window.addEventListener("resize", this.handleResize);
  }

  onResize() {
    if (!this.canvas || !this.gl) return;
    const width = this.container.clientWidth || 600;
    const height = this.container.clientHeight || 700;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.aspect = width / height;
  }

  render() {
    if (this.isDestroyed || !this.gl) return;

    this.clock += 0.016;

    // Smooth lerp mouse parallax
    this.currentMouseX += (this.targetMouseX - this.currentMouseX) * 0.05;
    this.currentMouseY += (this.targetMouseY - this.currentMouseY) * 0.05;

    // Hover acceleration transition
    const targetHover = this.isHovered ? 1.0 : 0.0;
    this.hoverIntensity += (targetHover - this.hoverIntensity) * 0.08;

    const currentSpeed = this.baseSpeed * (1.0 + this.hoverIntensity * 1.5);
    this.rotationY += currentSpeed;
    this.rotationX = 0.2 + this.currentMouseY * 0.4 + this.scrollProgress * 0.45;
    this.rotationZ = 0.1 + this.currentMouseX * 0.35 + Math.sin(this.clock * 0.5) * 0.05;

    const gl = this.gl;
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    // Matrix Setup
    const fov = (42 * Math.PI) / 180;
    const near = 0.1;
    const far = 100.0;
    const projMatrix = this.createPerspectiveMatrix(fov, this.aspect, near, far);

    // Camera view with slight floating bob
    const floatBob = Math.sin(this.clock * 1.2) * 0.08;
    const camZ = 5.6 + this.scrollProgress * 0.8;
    const viewMatrix = this.createIdentityMatrix();
    this.translateMatrix(viewMatrix, [this.currentMouseX * 0.25, -floatBob + this.currentMouseY * 0.2, -camZ]);

    // Model matrix for sculpture
    const modelMatrix = this.createIdentityMatrix();
    this.rotateMatrix(modelMatrix, this.rotationX, [1, 0, 0]);
    this.rotateMatrix(modelMatrix, this.rotationY, [0, 1, 0]);
    this.rotateMatrix(modelMatrix, this.rotationZ, [0, 0, 1]);

    const modelView = this.multiplyMatrix(viewMatrix, modelMatrix);
    const normalMatrix = this.createNormalMatrix(modelView);

    // 1. Draw Metallic Sculpture
    gl.useProgram(this.program);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.program, "uProjection"), false, projMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.program, "uModelView"), false, modelView);
    gl.uniformMatrix3fv(gl.getUniformLocation(this.program, "uNormalMatrix"), false, normalMatrix);
    gl.uniform1f(gl.getUniformLocation(this.program, "uTime"), this.clock);
    gl.uniform1f(gl.getUniformLocation(this.program, "uHover"), this.hoverIntensity);
    gl.uniform2f(gl.getUniformLocation(this.program, "uMouse"), this.currentMouseX, this.currentMouseY);

    const posLoc = gl.getAttribLocation(this.program, "aPosition");
    const normLoc = gl.getAttribLocation(this.program, "aNormal");

    gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.vertexBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.mesh.normalBuffer);
    gl.enableVertexAttribArray(normLoc);
    gl.vertexAttribPointer(normLoc, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.mesh.indexBuffer);
    gl.drawElements(gl.TRIANGLES, this.mesh.indexCount, gl.UNSIGNED_SHORT, 0);

    // 2. Draw Subtle Thin Orbital Rings (Matching Reference Hairlines)
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.useProgram(this.lineProgram);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.lineProgram, "uProjection"), false, projMatrix);

    // Ring 1 (Tilted 35 degrees)
    const ring1MV = this.copyMatrix(modelView);
    this.rotateMatrix(ring1MV, (35 * Math.PI) / 180, [1, 0.4, 0]);
    this.rotateMatrix(ring1MV, this.clock * 0.15, [0, 1, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.lineProgram, "uModelView"), false, ring1MV);
    gl.uniform4f(gl.getUniformLocation(this.lineProgram, "uColor"), 0.9, 0.95, 1.0, 0.22 + this.hoverIntensity * 0.15);

    const lPosLoc = gl.getAttribLocation(this.lineProgram, "aPosition");
    gl.bindBuffer(gl.ARRAY_BUFFER, this.ring1.buffer);
    gl.enableVertexAttribArray(lPosLoc);
    gl.vertexAttribPointer(lPosLoc, 3, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.LINE_LOOP, 0, this.ring1.count);

    // Ring 2 (Counter-tilted, fainter)
    const ring2MV = this.copyMatrix(modelView);
    this.rotateMatrix(ring2MV, (-45 * Math.PI) / 180, [0.5, 1, 0.2]);
    this.rotateMatrix(ring2MV, -this.clock * 0.08, [0, 1, 0]);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.lineProgram, "uModelView"), false, ring2MV);
    gl.uniform4f(gl.getUniformLocation(this.lineProgram, "uColor"), 0.8, 0.85, 0.95, 0.12);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.ring2.buffer);
    gl.vertexAttribPointer(lPosLoc, 3, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.LINE_LOOP, 0, this.ring2.count);

    // 3. Draw Ambient Star Point Particles
    gl.useProgram(this.particleProgram);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.particleProgram, "uProjection"), false, projMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.particleProgram, "uModelView"), false, viewMatrix);
    gl.uniform1f(gl.getUniformLocation(this.particleProgram, "uTime"), this.clock);

    const pPosLoc = gl.getAttribLocation(this.particleProgram, "aPosition");
    const pScaleLoc = gl.getAttribLocation(this.particleProgram, "aScale");
    const pPhaseLoc = gl.getAttribLocation(this.particleProgram, "aPhase");

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.posBuffer);
    gl.enableVertexAttribArray(pPosLoc);
    gl.vertexAttribPointer(pPosLoc, 3, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.scaleBuffer);
    gl.enableVertexAttribArray(pScaleLoc);
    gl.vertexAttribPointer(pScaleLoc, 1, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.particles.phaseBuffer);
    gl.enableVertexAttribArray(pPhaseLoc);
    gl.vertexAttribPointer(pPhaseLoc, 1, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.POINTS, 0, this.particles.count);

    gl.disable(gl.BLEND);

    this.animationFrameId = requestAnimationFrame(this.render);
  }

  renderFallback() {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="w-full h-full flex items-center justify-center relative select-none">
        <div class="w-72 h-72 rounded-full border border-white/20 animate-spin-slow flex items-center justify-center relative">
          <div class="w-56 h-56 rounded-full border border-white/10 flex items-center justify-center">
            <div class="w-40 h-40 rounded-full bg-gradient-to-tr from-[#1a1c24] via-[#323644] to-[#e2e8f0] shadow-2xl opacity-90"></div>
          </div>
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-[10px] text-white/80 tracking-widest uppercase">
            ✦ AI SCULPTURE
          </div>
        </div>
      </div>
    `;
  }

  // --- 3D Matrix Math Utilities ---
  createIdentityMatrix() {
    return new Float32Array([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
  }

  copyMatrix(m) {
    return new Float32Array(m);
  }

  createPerspectiveMatrix(fovy, aspect, near, far) {
    const f = 1.0 / Math.tan(fovy / 2);
    const nf = 1 / (near - far);
    return new Float32Array([
      f / aspect, 0, 0, 0,
      0, f, 0, 0,
      0, 0, (far + near) * nf, -1,
      0, 0, 2 * far * near * nf, 0
    ]);
  }

  translateMatrix(out, v) {
    out[12] += v[0];
    out[13] += v[1];
    out[14] += v[2];
  }

  rotateMatrix(m, rad, axis) {
    let x = axis[0], y = axis[1], z = axis[2];
    let len = Math.hypot(x, y, z);
    if (len < 0.0001) return;
    len = 1 / len;
    x *= len; y *= len; z *= len;

    const s = Math.sin(rad);
    const c = Math.cos(rad);
    const t = 1 - c;

    const a00 = m[0], a01 = m[1], a02 = m[2], a03 = m[3];
    const a10 = m[4], a11 = m[5], a12 = m[6], a13 = m[7];
    const a20 = m[8], a21 = m[9], a22 = m[10], a23 = m[11];

    const b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s;
    const b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s;
    const b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;

    m[0] = a00 * b00 + a10 * b01 + a20 * b02;
    m[1] = a01 * b00 + a11 * b01 + a21 * b02;
    m[2] = a02 * b00 + a12 * b01 + a22 * b02;
    m[3] = a03 * b00 + a13 * b01 + a23 * b02;

    m[4] = a00 * b10 + a10 * b11 + a20 * b12;
    m[5] = a01 * b10 + a11 * b11 + a21 * b12;
    m[6] = a02 * b10 + a12 * b11 + a22 * b12;
    m[7] = a03 * b10 + a13 * b11 + a23 * b12;

    m[8] = a00 * b20 + a10 * b21 + a20 * b22;
    m[9] = a01 * b20 + a11 * b21 + a21 * b22;
    m[10] = a02 * b20 + a12 * b21 + a22 * b22;
    m[11] = a03 * b20 + a13 * b21 + a23 * b22;
  }

  multiplyMatrix(a, b) {
    const out = new Float32Array(16);
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        out[j * 4 + i] =
          a[i] * b[j * 4] +
          a[i + 4] * b[j * 4 + 1] +
          a[i + 8] * b[j * 4 + 2] +
          a[i + 12] * b[j * 4 + 3];
      }
    }
    return out;
  }

  createNormalMatrix(m) {
    const a00 = m[0], a01 = m[1], a02 = m[2];
    const a10 = m[4], a11 = m[5], a12 = m[6];
    const a20 = m[8], a21 = m[9], a22 = m[10];

    const b01 = a22 * a11 - a12 * a21;
    const b11 = -a22 * a10 + a12 * a20;
    const b21 = a21 * a10 - a11 * a20;

    let det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) return new Float32Array(9);
    det = 1.0 / det;

    return new Float32Array([
      b01 * det,
      (-a22 * a01 + a02 * a21) * det,
      (a12 * a01 - a02 * a11) * det,
      b11 * det,
      (a22 * a00 - a02 * a20) * det,
      (-a12 * a00 + a02 * a10) * det,
      b21 * det,
      (-a21 * a00 + a01 * a20) * det,
      (a11 * a00 - a01 * a10) * det
    ]);
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
}
