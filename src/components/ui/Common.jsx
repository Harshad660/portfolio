import { useEffect } from "react";
import { motion } from "framer-motion";
import { useReveal } from "../../hooks/useReveal";

const CODE_SNIPPET_LEFT = `
import { MongoClient } from 'mongodb';
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.use(express.json());

// BloodConnect Realtime Engine
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  socket.on("request_blood", (data) => {
    socket.broadcast.emit("blood_needed", data);
  });
});

async function run() {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  const db = client.db("bloodconnect");
  console.log("Database connected successfully.");
}

router.get("/donors/search", async (req, res) => {
  const { lat, lng, radius } = req.query;
  const donors = await User.find({
    role: "donor",
    location: {
      $near: {
        $geometry: { type: "Point", coordinates: [lng, lat] },
        $maxDistance: radius * 1000
      }
    }
  });
  res.json(donors);
});
`;

const CODE_SNIPPET_RIGHT = `
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function DonorMap({ donors, userLocation }) {
  return (
    <MapContainer center={userLocation} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {donors.map(donor => (
        <Marker key={donor.id} position={donor.coords}>
          <Popup>{donor.name} - {donor.bloodGroup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

// REST API integration
export const fetchJobs = async () => {
  const res = await axios.get('/api/jobs', {
    headers: { Authorization: \`Bearer \${token}\` }
  });
  return res.data;
};
`;

export const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
    
    :root {
      --bg: #000000;
      --surface: #0a0f1d;
      --text: #f3f4f6;
      --text-dim: #94a3b8;
      --primary: #38bdf8;
      --primary-glow: rgba(56,189,248,0.15);
      --secondary: #2563eb;
      --border: rgba(56,189,248,0.08);
      --card-bg: rgba(10,15,30,0.4);
      --nav-bg: rgba(0,0,0,0.85);
    }

    [data-theme='light'] {
      --bg: #f0f7ff;
      --surface: #ffffff;
      --text: #0f172a;
      --text-dim: #475569;
      --primary: #0284c7;
      --primary-glow: rgba(2,132,199,0.10);
      --secondary: #1e40af;
      --border: rgba(2,132,199,0.10);
      --card-bg: rgba(255,255,255,0.75);
      --nav-bg: rgba(240,247,255,0.85);
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
    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 99px; opacity: 0.4; }
    a { color: inherit; text-decoration: none; }
    ::selection { background: var(--primary-glow); color: var(--text); }
    .mono { font-family: 'JetBrains Mono', monospace; }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-14px) rotate(1.2deg); }
      66% { transform: translateY(6px) rotate(-0.6deg); }
    }
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.25; }
      50% { opacity: 0.65; }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes drift-1 {
      0%, 100% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(120px, -90px) scale(1.2); }
      66% { transform: translate(-60px, 70px) scale(0.9); }
    }
    @keyframes drift-2 {
      0%, 100% { transform: translate(0px, 0px) scale(1.1); }
      50% { transform: translate(-140px, 100px) scale(0.85); }
    }
    @keyframes drift-3 {
      0%, 100% { transform: translate(0px, 0px) scale(0.95); }
      40% { transform: translate(90px, 120px) scale(1.15); }
    }
    @keyframes scan {
      0% { transform: translateY(-20vh); }
      100% { transform: translateY(120vh); }
    }
    @keyframes code-scroll-up {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    @keyframes code-scroll-down {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0); }
    }
    .shimmer-text {
      background: linear-gradient(90deg, var(--primary), var(--secondary), #60a5fa, var(--primary));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 4s linear infinite;
    }
    .float-1 { animation: float 7s ease-in-out infinite; }
    .float-2 { animation: float 9s ease-in-out infinite 1.5s; }
    .float-3 { animation: float 11s ease-in-out infinite 3s; }

    @media (min-width: 1200px) {
      .code-stream { display: block !important; }
    }
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
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {/* Premium Dotted Grid Background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(var(--border) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
        opacity: 0.85,
      }} />

      {/* Mouse Spotlight Tracked Glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(700px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), var(--primary-glow), transparent 70%)`,
        opacity: 0.8,
      }} />

      {/* Glassmorphic Ambient Auroras */}
      <div style={{
        position: "absolute", width: "45vw", height: "45vw", borderRadius: "50%",
        background: "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
        left: "10%", top: "5%", opacity: 0.5, filter: "blur(90px)",
        animation: "drift-1 25s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, transparent 70%)",
        right: "5%", bottom: "10%", opacity: 0.45, filter: "blur(110px)",
        animation: "drift-2 32s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", width: "38vw", height: "38vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29, 78, 216, 0.12) 0%, transparent 70%)",
        left: "40%", top: "35%", opacity: 0.4, filter: "blur(95px)",
        animation: "drift-3 28s ease-in-out infinite",
      }} />

      {/* Scanner Sweep Line */}
      <div style={{
        position: "absolute", left: 0, width: "100%", height: "1px",
        background: "linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent)",
        opacity: 0.12,
        top: 0,
        animation: "scan 14s linear infinite",
      }} />

      {/* Left Code Stream Silhouette */}
      <div className="code-stream stream-left" style={{
        position: "absolute", left: "1.2rem", top: 0, bottom: 0, width: "240px",
        overflow: "hidden", maskImage: "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
        opacity: 0.02, pointerEvents: "none", display: "none",
      }}>
        <div style={{ animation: "code-scroll-up 55s linear infinite", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", lineHeight: "1.85", whiteSpace: "pre-wrap", color: "var(--text)" }}>
          {CODE_SNIPPET_LEFT}
          {CODE_SNIPPET_LEFT}
        </div>
      </div>
      
      {/* Right Code Stream Silhouette */}
      <div className="code-stream stream-right" style={{
        position: "absolute", right: "1.2rem", top: 0, bottom: 0, width: "240px",
        overflow: "hidden", maskImage: "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, white 15%, white 85%, transparent)",
        opacity: 0.02, pointerEvents: "none", display: "none",
      }}>
        <div style={{ animation: "code-scroll-down 60s linear infinite", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.52rem", lineHeight: "1.85", whiteSpace: "pre-wrap", color: "var(--text)" }}>
          {CODE_SNIPPET_RIGHT}
          {CODE_SNIPPET_RIGHT}
        </div>
      </div>
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
  <svg viewBox="0 0 300 280" style={{ ...style }} fill="none" stroke="#2563eb" strokeWidth="0.6">
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
