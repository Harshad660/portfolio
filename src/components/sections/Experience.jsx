import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants/portfolioData";
import { Glow, FadeUp, SectionLabel } from "../ui/Common";

export const Experience = () => (
  <section id="experience" style={{ position: "relative", padding: "8rem 0", overflow: "hidden" }}>
    <Glow x="78%" y="40%" size={450} color="rgba(56,189,248,0.07)" />
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
      <FadeUp><SectionLabel num={5} label="Experience" /></FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "4rem", letterSpacing: "-0.025em" }}>
          Where I've applied<br /><span className="shimmer-text">my skills.</span>
        </h2>
      </FadeUp>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom, rgba(56,189,248,0.5), rgba(56,189,248,0.04))" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {EXPERIENCES.map((exp, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div style={{ display: "flex", gap: "2rem" }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                  border: `1px solid ${exp.color}45`, background: `${exp.color}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 18px ${exp.color}18`, position: "relative", zIndex: 2,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: exp.color, boxShadow: `0 0 8px ${exp.color}` }} />
                </div>
                <motion.div
                  whileHover={{ borderColor: `${exp.color}28`, boxShadow: "0 8px 40px rgba(0,0,0,0.3)" }}
                  style={{
                    flex: 1, padding: "1.5rem 1.75rem", minWidth: 0,
                    background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 14, transition: "all 0.35s",
                  }}>
                  <div style={{ marginBottom: "0.9rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#eef2f7", marginBottom: 4 }}>{exp.role}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.55rem", flexWrap: "wrap" }}>
                      <span className="mono" style={{ fontSize: "0.65rem", color: exp.color, letterSpacing: "0.06em" }}>{exp.org}</span>
                      <span style={{ padding: "0.12rem 0.5rem", borderRadius: 999, fontSize: "0.58rem", fontFamily: "'JetBrains Mono', monospace", background: `${exp.color}15`, color: exp.color }}>{exp.type}</span>
                      <span className="mono" style={{ fontSize: "0.6rem", color: "#64748b" }}>{exp.period}</span>
                    </div>
                  </div>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", fontSize: "0.87rem", color: "#9ca3af", lineHeight: 1.7 }}>
                        <span style={{ color: exp.color, flexShrink: 0, marginTop: "0.18rem" }}>›</span>{pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);
