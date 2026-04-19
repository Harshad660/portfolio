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
    borderTop: "1px solid rgba(255,255,255,0.07)",
    padding: "2.2rem clamp(1.5rem, 5vw, 6rem)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    flexWrap: "wrap", gap: "1.2rem",
    background: "linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0))",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
      <div style={{
        width: 30, height: 30, borderRadius: 10,
        background: "linear-gradient(135deg, #38bdf8, #818cf8)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.65rem", fontWeight: 800, color: "#080c10",
        boxShadow: "0 0 20px rgba(56,189,248,0.3)",
      }}>HS</div>
      <span className="mono" style={{ fontSize: "0.7rem", color: "#94a3b8", letterSpacing: "0.12em" }}>Harshad Siddheshwar</span>
    </div>
    <span className="mono" style={{ fontSize: "0.65rem", color: "#64748b", letterSpacing: "0.14em" }}>
      Full-Stack MERN Developer · Building scalable systems
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
