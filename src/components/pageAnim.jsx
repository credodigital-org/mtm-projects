import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE } from "./anim.jsx";
import "../page-anim.css";

const CLIP = {
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
};

/* Photo that wipes in from one side while it zooms out.
   The scroll trigger watches the OUTER box (never clipped), and the inner
   layers animate from that. Put size / aspect-ratio / radius / shadow on
   `className`, and the <Photo> as the child. */
export function Wipe({ from = "left", delay = 0, className = "", children }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const show = reduce || inView;

  return (
    <div ref={ref} className={`fx-wipe ${className}`}>
      <motion.div
        className="fx-wipe-clip"
        initial={reduce ? false : { clipPath: CLIP[from] }}
        animate={{ clipPath: show ? "inset(0 0 0 0)" : CLIP[from] }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        <motion.div
          className="fx-wipe-zoom"
          initial={reduce ? false : { scale: 1.25 }}
          animate={{ scale: show ? 1 : 1.25 }}
          transition={{ duration: 1.5, delay, ease: EASE }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* Eyebrow whose amber line draws itself in (uses .ap-eyebrow from about-page.css) */
export function LineEyebrow({ children }) {
  const reduce = useReducedMotion();
  return (
    <p className="ap-eyebrow">
      <motion.i
        style={{ transformOrigin: "left" }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      {children}
    </p>
  );
}