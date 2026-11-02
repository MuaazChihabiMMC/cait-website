'use client';

import { useEffect, useRef, useState } from 'react';
import GyroFallback from './GyroFallback';

/*
  Sechs goldene Ringe – je einer pro Disziplin – drehen sich zunächst frei
  um ihre eigenen Achsen. Beim Scrollen durch den Hero richten sie sich auf
  eine gemeinsame Ebene aus: sechs Disziplinen, eine Richtung.

  Bewusst ohne 3D-Bibliothek (rund 6 KB statt mehrerer hundert KB):
  - startet erst im Leerlauf des Browsers und nur, wenn der Bereich sichtbar ist
  - pausiert außerhalb des Viewports und in Hintergrund-Tabs
  - bei reduzierter Bewegung, Datensparmodus, schwacher Hardware oder ohne
    WebGL bleibt das statische SVG stehen
*/

type Mat4 = Float32Array;

const m4 = {
  identity(): Mat4 {
    const m = new Float32Array(16);
    m[0] = m[5] = m[10] = m[15] = 1;
    return m;
  },
  multiply(a: Mat4, b: Mat4): Mat4 {
    const o = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
      for (let r = 0; r < 4; r++) {
        o[c * 4 + r] =
          a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
      }
    }
    return o;
  },
  perspective(fovy: number, aspect: number, near: number, far: number): Mat4 {
    const f = 1 / Math.tan(fovy / 2);
    const m = new Float32Array(16);
    m[0] = f / aspect;
    m[5] = f;
    m[10] = (far + near) / (near - far);
    m[11] = -1;
    m[14] = (2 * far * near) / (near - far);
    return m;
  },
  rotX(a: number): Mat4 {
    const m = m4.identity();
    const c = Math.cos(a), s = Math.sin(a);
    m[5] = c; m[6] = s; m[9] = -s; m[10] = c;
    return m;
  },
  rotY(a: number): Mat4 {
    const m = m4.identity();
    const c = Math.cos(a), s = Math.sin(a);
    m[0] = c; m[2] = -s; m[8] = s; m[10] = c;
    return m;
  },
  rotZ(a: number): Mat4 {
    const m = m4.identity();
    const c = Math.cos(a), s = Math.sin(a);
    m[0] = c; m[1] = s; m[4] = -s; m[5] = c;
    return m;
  },
  translate(x: number, y: number, z: number): Mat4 {
    const m = m4.identity();
    m[12] = x; m[13] = y; m[14] = z;
    return m;
  },
  scale(s: number): Mat4 {
    const m = m4.identity();
    m[0] = m[5] = m[10] = s;
    return m;
  },
};

// Torus in der XY-Ebene: Hauptradius R, Rohrradius r
function torus(R: number, r: number, seg = 160, side = 14) {
  const pos: number[] = [];
  const nor: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= seg; i++) {
    const u = (i / seg) * Math.PI * 2;
    const cu = Math.cos(u), su = Math.sin(u);
    for (let j = 0; j <= side; j++) {
      const v = (j / side) * Math.PI * 2;
      const cv = Math.cos(v), sv = Math.sin(v);
      pos.push((R + r * cv) * cu, (R + r * cv) * su, r * sv);
      nor.push(cv * cu, cv * su, sv);
    }
  }
  for (let i = 0; i < seg; i++) {
    for (let j = 0; j < side; j++) {
      const a = i * (side + 1) + j;
      const b = a + side + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  return { pos: new Float32Array(pos), nor: new Float32Array(nor), idx: new Uint16Array(idx) };
}

function sphere(r: number, lat = 24, lon = 32) {
  const pos: number[] = [];
  const nor: number[] = [];
  const idx: number[] = [];
  for (let i = 0; i <= lat; i++) {
    const t = (i / lat) * Math.PI;
    for (let j = 0; j <= lon; j++) {
      const p = (j / lon) * Math.PI * 2;
      const x = Math.sin(t) * Math.cos(p), y = Math.cos(t), z = Math.sin(t) * Math.sin(p);
      pos.push(x * r, y * r, z * r);
      nor.push(x, y, z);
    }
  }
  for (let i = 0; i < lat; i++) {
    for (let j = 0; j < lon; j++) {
      const a = i * (lon + 1) + j;
      const b = a + lon + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  return { pos: new Float32Array(pos), nor: new Float32Array(nor), idx: new Uint16Array(idx) };
}

const VERT = `
attribute vec3 aPos;
attribute vec3 aNor;
uniform mat4 uProj;
uniform mat4 uView;
uniform mat4 uModel;
varying vec3 vN;
varying vec3 vW;
void main() {
  vec4 w = uModel * vec4(aPos, 1.0);
  vW = w.xyz;
  vN = mat3(uModel) * aNor;
  gl_Position = uProj * uView * w;
}`;

const FRAG = `
precision mediump float;
varying vec3 vN;
varying vec3 vW;
uniform vec3 uCam;
uniform float uGlow;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(uCam - vW);
  vec3 L1 = normalize(vec3(-0.6, 0.9, 0.8));
  vec3 L2 = normalize(vec3(0.8, -0.3, 0.5));
  vec3 gold = vec3(0.83, 0.686, 0.216);
  vec3 deep = vec3(0.30, 0.22, 0.07);
  float d1 = max(dot(N, L1), 0.0);
  float d2 = max(dot(N, L2), 0.0) * 0.35;
  float s1 = pow(max(dot(N, normalize(L1 + V)), 0.0), 60.0);
  float s2 = pow(max(dot(N, normalize(L2 + V)), 0.0), 24.0) * 0.25;
  float fr = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  vec3 col = mix(deep, gold, 0.25 + 0.75 * (d1 + d2));
  col += vec3(1.0, 0.94, 0.78) * (s1 + s2);
  col += gold * fr * 0.45 * uGlow;
  gl_FragColor = vec4(col, 1.0);
}`;

type Mesh = { pos: WebGLBuffer; nor: WebGLBuffer; idx: WebGLBuffer; count: number };

const RINGS = [
  { R: 1.3, tilt: [0.4, 0.9], speed: 0.21 },
  { R: 1.15, tilt: [1.2, -0.5], speed: -0.27 },
  { R: 1.0, tilt: [-0.7, 0.3], speed: 0.33 },
  { R: 0.85, tilt: [0.9, 1.4], speed: -0.39 },
  { R: 0.7, tilt: [-1.1, -0.9], speed: 0.47 },
  { R: 0.55, tilt: [0.2, -1.3], speed: -0.55 },
];

const ALIGN_X = 1.05; // gemeinsame Neigung im ausgerichteten Zustand
const ALIGN_Z = -0.24;

function shouldUseWebGL() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return false;
  if (nav.hardwareConcurrency && nav.hardwareConcurrency <= 2) return false;
  if (nav.deviceMemory && nav.deviceMemory <= 2) return false;
  return true;
}

export default function Gyroscope({ className = '', scrollTarget }: { className?: string; scrollTarget?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    if (!shouldUseWebGL()) return;
    const wrap = wrapRef.current!;
    const canvas = canvasRef.current!;
    let disposed = false;
    let raf = 0;
    let visible = true;
    let cleanup: (() => void) | undefined;

    const start = () => {
      if (disposed) return;
      const gl = canvas.getContext('webgl', { antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
      if (!gl) return;

      const compile = (type: number, src: string) => {
        const s = gl.createShader(type)!;
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      };
      const prog = gl.createProgram()!;
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
      gl.useProgram(prog);

      const loc = {
        pos: gl.getAttribLocation(prog, 'aPos'),
        nor: gl.getAttribLocation(prog, 'aNor'),
        proj: gl.getUniformLocation(prog, 'uProj'),
        view: gl.getUniformLocation(prog, 'uView'),
        model: gl.getUniformLocation(prog, 'uModel'),
        cam: gl.getUniformLocation(prog, 'uCam'),
        glow: gl.getUniformLocation(prog, 'uGlow'),
      };

      const upload = (g: { pos: Float32Array; nor: Float32Array; idx: Uint16Array }): Mesh => {
        const pos = gl.createBuffer()!;
        gl.bindBuffer(gl.ARRAY_BUFFER, pos);
        gl.bufferData(gl.ARRAY_BUFFER, g.pos, gl.STATIC_DRAW);
        const nor = gl.createBuffer()!;
        gl.bindBuffer(gl.ARRAY_BUFFER, nor);
        gl.bufferData(gl.ARRAY_BUFFER, g.nor, gl.STATIC_DRAW);
        const idx = gl.createBuffer()!;
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idx);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, g.idx, gl.STATIC_DRAW);
        return { pos, nor, idx, count: g.idx.length };
      };

      const ringMeshes = RINGS.map((r) => upload(torus(r.R, 0.016)));
      const core = upload(sphere(0.085));

      gl.enable(gl.DEPTH_TEST);
      gl.clearColor(0, 0, 0, 0);

      const camPos: [number, number, number] = [0, 0, 4.6];
      const view = m4.translate(-camPos[0], -camPos[1], -camPos[2]);
      gl.uniformMatrix4fv(loc.view, false, view);
      gl.uniform3fv(loc.cam, camPos);

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.5 : 2);
        const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
        const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        gl.viewport(0, 0, w, h);
        gl.uniformMatrix4fv(loc.proj, false, m4.perspective(0.6, w / h, 0.1, 20));
      };
      resize();

      const draw = (mesh: Mesh, model: Mat4) => {
        gl.uniformMatrix4fv(loc.model, false, model);
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.pos);
        gl.enableVertexAttribArray(loc.pos);
        gl.vertexAttribPointer(loc.pos, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.nor);
        gl.enableVertexAttribArray(loc.nor);
        gl.vertexAttribPointer(loc.nor, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.idx);
        gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
      };

      // Zeiger und Scroll beeinflussen die Szene nur weich (gedämpft)
      const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointer = (e: PointerEvent) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener('pointermove', onPointer, { passive: true });

      const target = (scrollTarget && document.getElementById(scrollTarget)) || wrap;
      let align = 0;
      const readScroll = () => {
        const rect = target.getBoundingClientRect();
        return Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height * 0.55)));
      };

      const ease = (t: number) => 1 - Math.pow(1 - t, 3);
      const t0 = performance.now();

      const frame = (now: number) => {
        raf = 0;
        if (disposed) return;
        const t = (now - t0) / 1000;
        const intro = ease(Math.min(1, t / 1.8));

        pointer.x += (pointer.tx - pointer.x) * 0.05;
        pointer.y += (pointer.ty - pointer.y) * 0.05;
        align += (readScroll() - align) * 0.08;
        const a = ease(align);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.uniform1f(loc.glow, 0.6 + 0.4 * intro);

        const group = m4.multiply(m4.rotX(pointer.y * 0.18), m4.rotY(pointer.x * 0.3));
        const scale = 0.72 + 0.28 * intro;

        RINGS.forEach((ring, i) => {
          const free = 1 - a;
          const spin = t * ring.speed * free;
          const rx = (ring.tilt[0] + spin) * free + ALIGN_X * a;
          const ry = (ring.tilt[1] + spin * 0.6) * free;
          const rz = ALIGN_Z * a + (1 - intro) * (i % 2 ? 0.8 : -0.8);
          let model = m4.multiply(m4.rotY(ry), m4.rotX(rx));
          model = m4.multiply(m4.rotZ(rz), model);
          model = m4.multiply(group, m4.multiply(m4.scale(scale), model));
          draw(ringMeshes[i], model);
        });
        draw(core, m4.multiply(group, m4.scale(scale * (0.9 + 0.1 * Math.sin(t * 1.4)))));

        if (visible) raf = requestAnimationFrame(frame);
      };

      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting && document.visibilityState === 'visible';
        if (visible && !raf) raf = requestAnimationFrame(frame);
      });
      io.observe(wrap);
      const onVis = () => {
        visible = document.visibilityState === 'visible';
        if (visible && !raf) raf = requestAnimationFrame(frame);
      };
      document.addEventListener('visibilitychange', onVis);
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      setLive(true);
      raf = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        window.removeEventListener('pointermove', onPointer);
        document.removeEventListener('visibilitychange', onVis);
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };
    };

    // Erst starten, wenn der Browser Luft hat – der Inhalt hat Vorrang
    const hasIdle = typeof window.requestIdleCallback === 'function';
    const handle = hasIdle ? window.requestIdleCallback(start, { timeout: 1200 }) : window.setTimeout(start, 300);

    return () => {
      disposed = true;
      if (hasIdle) window.cancelIdleCallback(handle);
      else clearTimeout(handle);
      cleanup?.();
    };
  }, [scrollTarget]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} aria-hidden="true">
      <GyroFallback
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${live ? 'opacity-0' : 'opacity-100'}`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${live ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
