import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../constants/portfolioData";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 70, padding: "0 clamp(1.5rem, 4vw, 4rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        background: scrolled ? "rgba(8,12,16,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.12)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* Brand */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12,
          background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: "0.75rem", color: "#080c10",
          boxShadow: "0 0 22px rgba(56,189,248,0.4)",
        }}>HS</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#94a3b8" }} className="mono">
            Harshad Siddheshwar
          </span>
          <span style={{ fontSize: "0.6rem", color: "#64748b", letterSpacing: "0.15em" }} className="mono">
            MERN • DSA • Java
          </span>
        </div>
      </a>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "0.3rem" }}>
        {NAV_LINKS.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setActive(link)}
            style={{ position: "relative", padding: "0.6rem 1rem" }}>
            <span className="mono" style={{
              fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.15em",
              color: active === link ? "#38bdf8" : "#94a3b8", transition: "color 0.2s",
            }}>{link}</span>
            {active === link && (
              <motion.div layoutId="nav-underline" style={{
                position: "absolute", bottom: 6, left: "20%", right: "20%",
                height: 2, borderRadius: 999,
                background: "linear-gradient(90deg,#38bdf8,#818cf8)",
              }} />
            )}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "0.6rem" }}>
        <a href="https://www.linkedin.com/in/harshad-siddheshwar-b6baba293" target="_blank" rel="noopener noreferrer"
          style={{
            padding: "0.5rem 0.9rem", fontSize: "0.65rem", letterSpacing: "0.12em",
            textTransform: "uppercase", borderRadius: 10,
            border: "1px solid rgba(56,189,248,0.22)", background: "rgba(255,255,255,0.04)",
            color: "#cbd5e1", transition: "all 0.3s ease",
          }}>LinkedIn</a>
        <a href="https://github.com/Harshad660" target="_blank" rel="noopener noreferrer"
          style={{
            padding: "0.5rem 0.9rem", fontSize: "0.65rem", letterSpacing: "0.12em",
            textTransform: "uppercase", borderRadius: 10,
            border: "1px solid rgba(56,189,248,0.22)", background: "rgba(255,255,255,0.04)",
            color: "#cbd5e1", transition: "all 0.3s ease",
          }}>GitHub</a>
       <a 
  href="/file/harshad-resume.pdf"
  download="Harshad_Siddheshwar_Resume.pdf"
  style={{
    padding: "0.5rem 1rem",
    fontSize: "0.65rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    borderRadius: "10px",
    background: "linear-gradient(135deg,#38bdf8,#818cf8)",
    color: "#080c10",
    fontWeight: 600,
    boxShadow: "0 0 20px rgba(56,189,248,0.35)",
    transition: "all 0.3s ease",
    textDecoration: "none"
  }}
>
  Download Resume
</a>
      </div>
    </motion.nav>
  );
};
