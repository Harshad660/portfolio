import { motion } from "framer-motion";
import { Glow, FadeUp, SectionLabel } from "../ui/Common";

export const About = () => (
  <section id="about" style={{ position: "relative", padding: "9rem 0", overflow: "hidden" }}>
    <Glow x="78%" y="42%" size={620} color="var(--primary-glow)" />
    <Glow x="20%" y="70%" size={420} color="var(--primary-glow)" />
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "4.5rem", alignItems: "center" }}>
        {/* Left */}
        <div>
          <FadeUp><SectionLabel num={1} label="About Me" /></FadeUp>
          <FadeUp delay={0.1}>
            <h2 style={{ fontSize: "clamp(2.3rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.12, marginBottom: "1.8rem", letterSpacing: "-0.03em", color: "var(--text)" }}>
              Building scalable backends<br /><span className="shimmer-text">that power real products.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-dim)", marginBottom: "1.6rem", maxWidth: 520 }}>
              I'm a B.Tech Information Technology student at Walchand Institute of Technology, Solapur with a strong foundation in Data Structures and Algorithms and hands-on MERN stack development.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-dim)", maxWidth: 520 }}>
              I specialize in building REST APIs, implementing JWT-based authentication, and architecting clean, modular backend systems. My focus is on clean code, scalability, and performance — from designing MVC-structured backends to shipping full-stack applications end-to-end.
            </p>
          </FadeUp>
        </div>

        {/* Right – Education + Contact */}
        <div>
          <FadeUp delay={0.1}><SectionLabel num={2} label="Education" /></FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", marginTop: "1rem", marginBottom: "2.5rem" }}>
            {[
              { degree: "B.Tech – Information Technology", inst: "Walchand Institute of Technology, Solapur", period: "2023 – Present", score: "CGPA 9.17", highlight: true, coursework: "DSA · Cloud Computing · DBMS · Web Dev" },
            ].map((e, i) => (
              <FadeUp key={i} delay={0.18 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 25px 60px var(--primary-glow)", borderColor: "var(--primary)" }}
                  style={{
                    padding: "1.8rem 2rem", borderRadius: 18,
                    background: "var(--card-bg)",
                    border: "1px solid var(--border)",
                    backdropFilter: "blur(14px)", transition: "all 0.35s ease",
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.8rem", flexWrap: "wrap" }}>
                    <span style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>{e.degree}</span>
                    <span className="mono" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--primary)" }}>{e.score}</span>
                  </div>
                  <p className="mono" style={{ fontSize: "0.65rem", color: "var(--text-dim)", marginTop: 6, letterSpacing: "0.12em" }}>{e.inst} · {e.period}</p>
                  <p className="mono" style={{ fontSize: "0.6rem", color: "var(--text-dim)", opacity: 0.8, marginTop: 6, letterSpacing: "0.1em" }}>Coursework: {e.coursework}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}><SectionLabel num={3} label="Contact Info" /></FadeUp>
          <FadeUp delay={0.4}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
              {[
                { label: "Email", val: "siddheshwarharshad@gmail.com", href: "mailto:siddheshwarharshad@gmail.com", color: "var(--primary)" },
                { label: "Phone", val: "+91 9527352705", href: "tel:+919527352705", color: "var(--secondary)" },
                { label: "Languages", val: "English · Hindi · Marathi", color: "#818cf8" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: "0.6rem", color: item.color, letterSpacing: "0.18em", textTransform: "uppercase", minWidth: 60 }}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: "0.85rem", color: "var(--text-dim)", transition: "color 0.2s" }}
                      onMouseEnter={e => e.target.style.color = item.color}
                      onMouseLeave={e => e.target.style.color = "var(--text-dim)"}>
                      {item.val}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>{item.val}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  </section>
);
