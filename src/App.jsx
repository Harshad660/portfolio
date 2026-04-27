import { GlobalStyle, ParticleField, LineDivider } from "./components/ui/Common";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";

const Footer = () => (
  <footer style={{
    borderTop: "1px solid var(--border)",
    padding: "3rem clamp(1.5rem, 5vw, 6rem)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    flexWrap: "wrap", gap: "1.5rem",
    background: "var(--bg)",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <div style={{
        width: 32, height: 32, borderRadius: 10,
        background: "var(--primary)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.7rem", fontWeight: 800, color: "white",
        boxShadow: "0 0 20px var(--primary-glow)",
      }}>HS</div>
      <span className="mono" style={{ fontSize: "0.75rem", color: "var(--text)", fontWeight: 600, letterSpacing: "0.05em" }}>Harshad Siddheshwar</span>
    </div>
    <span className="mono" style={{ fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
      © {new Date().getFullYear()} · MERN Stack Developer · Solapur, India
    </span>
  </footer>
);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ParticleField />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <LineDivider />
        <About />
        <LineDivider />
        <Skills />
        <LineDivider />
        <Experience />
        <LineDivider />
        <Projects />
        <LineDivider />
        <Certifications />
        <LineDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
