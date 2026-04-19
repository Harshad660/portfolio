import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../../constants/portfolioData";
import { Glow, FadeUp, SectionLabel } from "../ui/Common";

const SkillGlass = ({ label, color }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.05 }}
    style={{
      padding: "0.8rem 1.15rem", borderRadius: 16,
      background: "rgba(255,255,255,0.04)", border: `1px solid ${color}30`,
      backdropFilter: "blur(14px)", boxShadow: "0 10px 36px rgba(0,0,0,0.4)",
      transition: "all 0.35s ease", color: "#e5e7eb",
      fontSize: "0.78rem", fontWeight: 500,
    }}>
    {label}
  </motion.div>
);

export const Skills = () => {
  const [active, setActive] = useState("Languages");
  const { color, items } = SKILLS[active];
  return (
    <section id="skills" style={{ position: "relative", padding: "9rem 0", overflow: "hidden" }}>
      <Glow x="28%" y="62%" size={700} color={`${color}20`} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
        <FadeUp><SectionLabel num={4} label="Technical Stack" /></FadeUp>
        <FadeUp delay={0.1}>
          <h2 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.4rem)", fontWeight: 800, marginBottom: "3.5rem", letterSpacing: "-0.03em" }}>
            The tools I build with.
          </h2>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginBottom: "3rem" }}>
            {Object.entries(SKILLS).map(([cat, { color: c }]) => (
              <motion.button key={cat} onClick={() => setActive(cat)} whileHover={{ scale: 1.05 }}
                style={{
                  padding: "0.55rem 1.2rem", borderRadius: 14, cursor: "pointer",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  border: `1px solid ${active === cat ? c : "rgba(255,255,255,0.1)"}`,
                  background: active === cat ? `${c}1a` : "rgba(255,255,255,0.02)",
                  color: active === cat ? c : "#94a3b8",
                  backdropFilter: "blur(10px)", transition: "all 0.3s ease",
                }}>{cat}</motion.button>
            ))}
          </div>
        </FadeUp>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
              {items.map((skill, i) => (
                <motion.div key={skill} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05, duration: 0.35 }}>
                  <SkillGlass label={skill} color={color} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
