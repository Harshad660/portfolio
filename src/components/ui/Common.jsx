import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";

export const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
    
    :root {
      --bg: #030712;
      --surface: #111827;
      --text: #f3f4f6;
      --text-dim: #94a3b8;
      --primary: #38bdf8;
      --primary-glow: rgba(56,189,248,0.25);
      --secondary: #818cf8;
      --border: rgba(255,255,255,0.08);
      --card-bg: rgba(255,255,255,0.03);
      --nav-bg: rgba(3,7,18,0.85);
    }

    [data-theme='light'] {
      --bg: #f9fafb;
      --surface: #ffffff;
      --text: #111827;
      --text-dim: #4b5563;
      --primary: #0ea5e9;
      --primary-glow: rgba(14,165,233,0.15);
      --secondary: #6366f1;
      --border: rgba(0,0,0,0.08);
      --card-bg: rgba(0,0,0,0.02);
      --nav-bg: rgba(249,250,251,0.85);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; overflow-x: hidden; }
    body {
      font-family: 'Sora', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg);
      color: var(--text);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      transition: background 0.3s ease, color 0.3s ease;
    }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 99px; opacity: 0.5; }
    a { color: inherit; text-decoration: none; }
    ::selection { background: var(--primary-glow); color: var(--text); }
    .mono { font-family: 'JetBrains Mono', monospace; }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-14px) rotate(1deg); }
      66% { transform: translateY(6px) rotate(-0.5deg); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.25; }
      50% { opacity: 0.65; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    .shimmer-text {
      background: linear-gradient(90deg, var(--primary), var(--secondary), #34d399, var(--primary));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }
    .float-1 { animation: float 7s ease-in-out infinite; }
    .float-2 { animation: float 9s ease-in-out infinite 1.5s; }
    .float-3 { animation: float 11s ease-in-out infinite 3s; }
  `}</style>
);

export const FadeUp = ({ children, delay = 0, style = {} }) => {
  const [ref, inView] = useReveal();
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >{children}</motion.div>
  );
};

export const Glow = ({ x = "50%", y = "50%", size = 600, color = "rgba(56,189,248,0.10)" }) => (
  <div style={{
    position: "absolute", borderRadius: "50%", pointerEvents: "none",
    width: size, height: size,
    left: `calc(${x} - ${size / 2}px)`, top: `calc(${y} - ${size / 2}px)`,
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
  }} />
);

export const SectionLabel = ({ num, label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
    <span className="mono" style={{ fontSize: "0.62rem", color: "var(--primary)", letterSpacing: "0.2em" }}>0{num}</span>
    <div style={{ width: 28, height: 1, background: "linear-gradient(to right, var(--primary), transparent)" }} />
    <span className="mono" style={{ fontSize: "0.62rem", color: "var(--text-dim)", letterSpacing: "0.25em", textTransform: "uppercase" }}>{label}</span>
  </div>
);

export const LineDivider = () => (
  <div style={{ padding: "0 clamp(1.5rem, 5vw, 6rem)", overflow: "hidden" }}>
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ height: 1, background: "linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)", opacity: 0.2, transformOrigin: "left" }}
    />
  </div>
);

export const TechBadge = ({ label }) => (
  <span style={{
    display: "inline-block", padding: "0.28rem 0.7rem",
    background: "var(--card-bg)", border: "1px solid var(--border)",
    borderRadius: 6, fontSize: "0.66rem", fontWeight: 500, color: "var(--primary)",
    fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.03em",
  }}>{label}</span>
);

export const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 1.4 + 0.4, dur: Math.random() * 8 + 6, delay: Math.random() * 5,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        opacity: 0.03,
      }} />
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <radialGradient id="sg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>
        {particles.map(p => (
          <circle key={p.id} cx={`${p.x}%`} cy={`${p.y}%`} r={p.size}
            fill="url(#sg)"
            style={{ animation: `pulse-glow ${p.dur}s ease-in-out ${p.delay}s infinite` }}
          />
        ))}
      </svg>
    </div>
  );
};

export const WireframeSphere = ({ style = {} }) => (
  <svg viewBox="0 0 200 200" style={{ ...style }} fill="none" stroke="#38bdf8" strokeWidth="0.5">
    <ellipse cx="100" cy="100" rx="90" ry="90" />
    <ellipse cx="100" cy="100" rx="90" ry="30" />
    <ellipse cx="100" cy="100" rx="90" ry="60" />
    <ellipse cx="100" cy="100" rx="30" ry="90" />
    <ellipse cx="100" cy="100" rx="60" ry="90" />
    <line x1="10" y1="100" x2="190" y2="100" />
    <line x1="100" y1="10" x2="100" y2="190" />
    {Array.from({ length: 8 }, (_, i) => {
      const a = (i / 8) * Math.PI * 2;
      return <line key={i} x1="100" y1="100" x2={100 + 90 * Math.cos(a)} y2={100 + 90 * Math.sin(a)} />;
    })}
  </svg>
);

export const HexGrid = ({ style = {} }) => (
  <svg viewBox="0 0 300 280" style={{ ...style }} fill="none" stroke="#818cf8" strokeWidth="0.6">
    {Array.from({ length: 6 }, (_, row) =>
      Array.from({ length: 6 }, (_, col) => {
        const x = col * 48 + (row % 2 === 0 ? 0 : 24), y = row * 40, R = 20;
        const pts = Array.from({ length: 6 }, (_, k) => {
          const a = (k * 60 - 30) * Math.PI / 180;
          return `${x + R * Math.cos(a)},${y + R * Math.sin(a)}`;
        }).join(" ");
        return <polygon key={`${row}-${col}`} points={pts} />;
      })
    )}
  </svg>
);
