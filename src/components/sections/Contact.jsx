import { Glow, FadeUp, SectionLabel, WireframeSphere } from "../ui/Common";

export const Contact = () => (
  <section id="contact" style={{ position: "relative", padding: "9rem 0 11rem", overflow: "hidden" }}>
    <Glow x="45%" y="35%" size={900} color="var(--primary-glow)" />
    <Glow x="75%" y="70%" size={420} color="var(--primary-glow)" />
    <div className="float-2" style={{ position: "absolute", right: "6%", top: "18%", width: "clamp(120px, 16vw, 200px)", opacity: 0.06, pointerEvents: "none" }}>
      <WireframeSphere style={{ width: "100%", height: "100%" }} />
    </div>
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.5rem, 5vw, 6rem)", textAlign: "center" }}>
      <FadeUp style={{ display: "flex", justifyContent: "center" }}>
        <SectionLabel num={8} label="Contact" />
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.035em", marginBottom: "1.6rem", color: "var(--text)" }}>
          Let's build something<br /><span className="shimmer-text">great together.</span>
        </h2>
      </FadeUp>
      <FadeUp delay={0.2}>
        <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", lineHeight: 1.8, maxWidth: 560, margin: "0 auto 3.8rem" }}>
          I'm actively looking for SDE internships and full-time opportunities in full-stack or backend development. If you're hiring or want to collaborate, I'd love to connect.
        </p>
      </FadeUp>
      <FadeUp delay={0.3}>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
          {[
            { label: "Email Me", val: "siddheshwarharshad@gmail.com", href: "mailto:siddheshwarharshad@gmail.com", color: "var(--primary)" },
            { label: "Call Me", val: "+91 9527352705", href: "tel:+919527352705", color: "var(--secondary)" },
            { label: "Connect on LinkedIn", val: "Let's talk professionally", href: "https://www.linkedin.com/in/harshad-siddheshwar-b6baba293", color: "#818cf8" },
          ].map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              style={{
                padding: "1.5rem 2rem", borderRadius: 20, border: "1px solid var(--border)",
                background: "var(--card-bg)", backdropFilter: "blur(12px)",
                display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "center",
                transition: "all 0.35s ease", minWidth: 260,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 40px var(--primary-glow)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="mono" style={{ fontSize: "0.65rem", color: item.color, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>{item.label}</span>
              <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>{item.val}</span>
            </a>
          ))}
        </div>
      </FadeUp>
    </div>
  </section>
);
