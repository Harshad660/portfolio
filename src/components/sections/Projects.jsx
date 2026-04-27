import { motion } from "framer-motion";
import { PROJECTS } from "../../constants/portfolioData";
import { Glow, FadeUp, SectionLabel, TechBadge, HexGrid } from "../ui/Common";

export const Projects = () => (
  <section id="projects" style={{ position: "relative", padding: "9rem 0", overflow: "hidden" }}>
    <Glow x="18%" y="32%" size={650} color="var(--primary-glow)" />
    <Glow x="82%" y="68%" size={520} color="var(--primary-glow)" />
    <div className="float-2" style={{ position: "absolute", right: "-4%", top: "10%", width: "clamp(160px, 18vw, 280px)", opacity: 0.05, pointerEvents: "none" }}>
      <HexGrid style={{ width: "100%", height: "100%" }} />
    </div>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
      <FadeUp><SectionLabel num={6} label="Projects" /></FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: "4rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
          Full-stack solutions<br /><span className="shimmer-text">shipped end-to-end.</span>
        </h2>
      </FadeUp>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 460px), 1fr))", gap: "1.6rem" }}>
        {PROJECTS.map((p, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <motion.div
              whileHover={{ y: -10, boxShadow: `0 30px 80px rgba(0,0,0,0.2), 0 0 0 1px var(--primary)` }}
              style={{
                padding: "2.2rem 2.4rem", borderRadius: 22,
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                position: "relative", overflow: "hidden",
                transition: "all 0.45s ease", backdropFilter: "blur(16px)",
              }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${p.tagColor} 0%, transparent 85%)`, opacity: 0.8 }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.2rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.4, flex: 1 }}>{p.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
                  <span style={{
                    padding: "0.3rem 0.75rem", borderRadius: 999, fontSize: "0.6rem",
                    fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em",
                    color: p.tagColor, background: `${p.tagColor}22`, border: `1px solid ${p.tagColor}44`, whiteSpace: "nowrap",
                  }}>{p.tag}</span>
                  <span className="mono" style={{ fontSize: "0.58rem", color: "var(--text-dim)" }}>{p.period}</span>
                </div>
              </div>

              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-dim)", marginBottom: "1.8rem" }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.6rem" }}>
                {p.stack.map((s) => <TechBadge key={s} label={s} />)}
              </div>

              <motion.a
                href={p.githubUrl}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.06 }}
                style={{
                  display: "inline-block", padding: "0.6rem 1.2rem", borderRadius: 12,
                  fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase",
                  fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                  color: "white", background: "var(--primary)",
                  boxShadow: "0 0 20px var(--primary-glow)",
                }}>View on GitHub →</motion.a>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
