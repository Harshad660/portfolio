import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Glow, WireframeSphere, HexGrid } from "../ui/Common";
import { MagneticButton } from "../ui/MagneticButton";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -90]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const words = ["Full-Stack Developer.", "MERN Specialist.", "Java Engineer.", "DSA Practitioner."];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <Glow x="70%" y="30%" size={720} color="rgba(56,189,248,0.09)" />
      <Glow x="20%" y="70%" size={500} color="rgba(129,140,248,0.07)" />
      <Glow x="88%" y="75%" size={350} color="rgba(52,211,153,0.06)" />
      <div className="float-1" style={{ position: "absolute", right: "4%", top: "8%", width: "clamp(180px, 28vw, 380px)", pointerEvents: "none", opacity: 0.10 }}>
        <WireframeSphere style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="float-3" style={{ position: "absolute", left: "-2%", bottom: "4%", width: "clamp(120px, 18vw, 260px)", pointerEvents: "none", opacity: 0.05 }}>
        <HexGrid style={{ width: "100%", height: "100%" }} />
      </div>
      <motion.div style={{ y, opacity, width: "100%", paddingTop: 90 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 12px #34d399" }} />
            <span className="mono" style={{ fontSize: "0.68rem", color: "#6b7280", letterSpacing: "0.22em" }}>AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          <div style={{ overflow: "hidden" }}>
            <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(3.4rem, 9.5vw, 8rem)", fontWeight: 800, lineHeight: 0.93, letterSpacing: "-0.035em", marginBottom: "0.15rem" }}>
              Harshad
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontSize: "clamp(3.4rem, 9.5vw, 8rem)", fontWeight: 800, lineHeight: 0.93, letterSpacing: "-0.035em", marginBottom: "1.75rem" }}>
              <span className="shimmer-text">Siddheshwar</span>
            </motion.h1>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", height: 48 }}>
            <div style={{ width: 2, height: 38, background: "linear-gradient(to bottom, #38bdf8, #818cf8)", borderRadius: 999, flexShrink: 0 }} />
            <AnimatePresence mode="wait">
              <motion.p key={wordIdx}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.38 }}
                style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 500, color: "#9ca3af" }}>
                {words[wordIdx]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.2 }}
            style={{ maxWidth: 520, fontSize: "1rem", lineHeight: 1.9, color: "#6b7280", marginBottom: "3rem" }}>
            B.Tech IT · Walchand Institute of Technology · {" "}
            <strong style={{ color: "#7dd3fc", fontWeight: 700 }}>CGPA 9.17</strong> · Building scalable full-stack applications and clean backend architectures using the MERN stack, Java, and DSA.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <MagneticButton href="#projects" primary>View Projects</MagneticButton>
            <MagneticButton href="#contact">Contact Me</MagneticButton>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.8 }}
            style={{ display: "flex", gap: "2.5rem", marginTop: "5.5rem", flexWrap: "wrap" }}>
            {[["9.17", "CGPA"], ["1+", "Internship"], ["2+", "Certifications"], ["15+", "REST APIs Built"]].map(([val, lbl]) => (
              <div key={lbl}>
                <div style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#eef2f7", letterSpacing: "-0.04em" }}>{val}</div>
                <div className="mono" style={{ fontSize: "0.58rem", color: "#4b5563", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 2 }}>{lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.7 }}
          style={{ width: 22, height: 35, border: "1px solid rgba(56,189,248,0.3)", borderRadius: 99, display: "flex", justifyContent: "center", paddingTop: 7 }}>
          <div style={{ width: 2, height: 7, borderRadius: 99, background: "#38bdf8" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};
