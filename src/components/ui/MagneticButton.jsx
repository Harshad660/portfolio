import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticButton = ({ children, href, primary }) => {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) * 0.22);
    y.set((e.clientY - r.top - r.height / 2) * 0.22);
  }, [x, y]);
  const onLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);
  return (
    <motion.a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ x: sx, y: sy, display: "inline-block" }} whileTap={{ scale: 0.96 }}>
      <motion.div
        whileHover={primary
          ? { boxShadow: "0 0 32px rgba(56,189,248,0.45)" }
          : { borderColor: "rgba(56,189,248,0.5)", color: "#e5e7eb" }}
        style={{
          padding: "0.82rem 2rem", borderRadius: 10, cursor: "pointer",
          fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em", transition: "all 0.25s",
          ...(primary ? {
            background: "linear-gradient(135deg, #38bdf8, #818cf8)",
            color: "#080c10", boxShadow: "0 0 20px rgba(56,189,248,0.25)",
          } : {
            background: "transparent", color: "#9ca3af",
            border: "1px solid rgba(56,189,248,0.22)",
          }),
        }}
      >{children}</motion.div>
    </motion.a>
  );
};
