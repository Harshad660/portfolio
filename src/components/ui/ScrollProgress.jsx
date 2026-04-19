import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 9999,
      background: "linear-gradient(to right, #38bdf8, #818cf8, #34d399)",
      transformOrigin: "left", scaleX,
    }} />
  );
};
