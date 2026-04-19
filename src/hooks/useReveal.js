import { useRef } from "react";
import { useInView } from "framer-motion";

export const useReveal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return [ref, inView];
};
