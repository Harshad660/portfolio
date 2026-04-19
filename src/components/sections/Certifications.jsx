import { motion } from "framer-motion";
import { Glow, FadeUp, SectionLabel } from "../ui/Common";

export const Certifications = () => (
  <section id="certifications" style={{ position: "relative", padding: "9rem 0", overflow: "hidden" }}>
    <Glow x="55%" y="45%" size={900} color="rgba(56,189,248,0.07)" />
    <Glow x="25%" y="70%" size={500} color="rgba(52,211,153,0.05)" />
    <div style={{ maxWidth: 1250, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
      <FadeUp><SectionLabel num={7} label="Certifications" /></FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "3.8rem", letterSpacing: "-0.03em" }}>
          Constantly learning.<br /><span className="shimmer-text">Always growing.</span>
        </h2>
      </FadeUp>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))", gap: "1.2rem" }}>
        {[
          { name: "Complete Full Stack Web Development", org: "PW Skills", badge: "MERN Stack", highlight: true, color: "#38bdf8" },
          { name: "Java Programming Certification", org: "Infosys Springboard", badge: "Java", highlight: true, color: "#818cf8" },
        ].map((c, i) => (
          <FadeUp key={i} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${c.color}22`, borderColor: `${c.color}55` }}
              style={{
                padding: "1.6rem 1.8rem", borderRadius: 18,
                background: c.highlight ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${c.color}33`,
                backdropFilter: "blur(16px)", transition: "all 0.35s ease",
                display: "flex", flexDirection: "column", gap: "0.6rem",
                position: "relative", overflow: "hidden",
              }}>
              {c.highlight && (
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(120deg, transparent, ${c.color}10, transparent)`, opacity: 0.6 }} />
              )}
              <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#eef2f7", lineHeight: 1.3 }}>{c.name}</span>
              <span className="mono" style={{ fontSize: "0.62rem", letterSpacing: "0.1em", color: "#9ca3af" }}>{c.org}</span>
              <div style={{
                marginTop: "0.6rem", alignSelf: "flex-start",
                padding: "0.3rem 0.75rem", borderRadius: 999,
                fontSize: "0.62rem", fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700, color: c.color, background: `${c.color}22`, border: `1px solid ${c.color}44`,
              }}>{c.badge}</div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
