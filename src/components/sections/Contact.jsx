import { Glow, FadeUp, SectionLabel, WireframeSphere } from "../ui/Common";

export const Contact = () => (
  <section id="contact" style={{ position: "relative", padding: "9rem 0 11rem", overflow: "hidden" }}>
    <Glow x="45%" y="35%" size={900} color="rgba(56,189,248,0.09)" />
    <Glow x="75%" y="70%" size={420} color="rgba(129,140,248,0.07)" />
    <div className="float-2" style={{ position: "absolute", right: "6%", top: "18%", width: "clamp(120px, 16vw, 200px)", opacity: 0.06, pointerEvents: "none" }}>
      <WireframeSphere style={{ width: "100%", height: "100%" }} />
    </div>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)", textAlign: "center" }}>
      <FadeUp style={{ display: "flex", justifyContent: "center" }}>
        <SectionLabel num={8} label="Contact" />
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: "1.6rem" }}>
          Let's build something<br /><span className="shimmer-text">great together.</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p style={{ fontSize: "1.05rem", color: "#9ca3af", lineHeight: 1.9, maxWidth: 560, margin: "0 auto 3.8rem" }}>
          I'm actively looking for SDE internships and full-time opportunities in full-stack or backend development. If you're hiring or want to collaborate, I'd love to connect.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
          {[
            { label: "Email Me", val: "siddheshwarharshad@gmail.com", href: "mailto:siddheshwarharshad@gmail.com", color: "#38bdf8" },
            { label: "Call Me", val: "+91 9527352705", href: "tel:+919527352705", color: "#34d399" },
            { label: "Connect on LinkedIn", val: "Let's talk professionally", href: "https://www.linkedin.com/in/harshad-siddheshwar-b6baba293", color: "#818cf8" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              style={{
                padding: "1rem 1.8rem", borderRadius: 16, border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)",
                display: "flex", flexDirection: "column", gap: "0.25rem", alignItems: "center",
                transition: "all 0.35s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${item.color}44`;
                e.currentTarget.style.background = `${item.color}08`;
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span className="mono" style={{ fontSize: "0.6rem", color: item.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>{item.label}</span>
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#eef2f7" }}>{item.val}</span>
            </a>
          ))}
        </div>
      </FadeUp>
    </div>
  </section>
);
