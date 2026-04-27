import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../constants/portfolioData";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const ThemeIcon = () => (
    <motion.div
      initial={false}
      animate={{ rotate: theme === "dark" ? 0 : 180 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {theme === "dark" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </motion.div>
  );

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: 70, padding: "0 clamp(1rem, 5vw, 6rem)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Brand */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
        <div style={{
          width: 38, height: 38, borderRadius: 12,
          background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 800, fontSize: "0.8rem", color: "white",
          boxShadow: "0 0 20px var(--primary-glow)",
        }}>HS</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", color: "var(--text)" }}>
            Harshad
          </span>
          <span style={{ fontSize: "0.6rem", color: "var(--text-dim)", letterSpacing: "0.1em" }} className="mono">
            MERN Stack Developer
          </span>
        </div>
      </a>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }} className="desktop-nav">
        <div style={{ display: "flex", gap: "0.2rem", marginRight: "1rem" }}>
          {NAV_LINKS.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setActive(link)}
              style={{ position: "relative", padding: "0.6rem 1rem" }}>
              <span className="mono" style={{
                fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.12em",
                color: active === link ? "var(--primary)" : "var(--text-dim)", transition: "color 0.2s",
              }}>{link}</span>
              {active === link && (
                <motion.div layoutId="nav-underline" style={{
                  position: "absolute", bottom: 6, left: "20%", right: "20%",
                  height: 2, borderRadius: 999,
                  background: "var(--primary)",
                }} />
              )}
            </a>
          ))}
        </div>

        <button 
          onClick={toggleTheme}
          style={{
            background: "var(--card-bg)", border: "1px solid var(--border)",
            color: "var(--text)", width: 40, height: 40, borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.3s ease",
          }}
        >
          <ThemeIcon />
        </button>

        <a href="/file/harshad-resume.pdf" download
          style={{
            padding: "0.6rem 1.2rem", fontSize: "0.65rem", letterSpacing: "0.08em",
            textTransform: "uppercase", borderRadius: 12, fontWeight: 700,
            background: "var(--primary)", color: "white",
            boxShadow: "0 4px 15px var(--primary-glow)", transition: "all 0.3s ease",
          }}>Resume</a>
      </div>

      {/* Mobile Toggle */}
      <div style={{ display: "none" }} className="mobile-nav-toggle">
        <button onClick={toggleTheme} style={{ marginRight: "1rem", background: "none", border: "none", color: "var(--text)" }}>
          <ThemeIcon />
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: "none", border: "none", color: "var(--text)", cursor: "pointer" }}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: "absolute", top: 70, left: 0, right: 0,
              background: "var(--surface)", borderBottom: "1px solid var(--border)",
              padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem",
              zIndex: 999, overflow: "hidden"
            }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link} href={`#${link}`} onClick={() => { setActive(link); setMobileMenuOpen(false); }}
                style={{ fontSize: "1.2rem", fontWeight: 600, color: active === link ? "var(--primary)" : "var(--text)" }}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
            <a href="/file/harshad-resume.pdf" download
              style={{
                padding: "1rem", textAlign: "center", borderRadius: 12,
                background: "var(--primary)", color: "white", fontWeight: 700
              }}>Download Resume</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 968px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; align-items: center; }
        }
      `}</style>
    </motion.nav>
  );
};
