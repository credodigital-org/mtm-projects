import { useEffect, useState } from "react";
import { motion, animate, useReducedMotion } from "motion/react";
import { EASE } from "./anim.jsx";

/* Short intro: logo + amber progress line, then lifts away. */
export default function Preloader({ onDone }) {
  const reduce = useReducedMotion();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (reduce) {
      onDone();
      return;
    }
    const controls = animate(0, 100, {
      duration: 1.6,
      ease: "easeInOut",
      onUpdate: (v) => setPercent(Math.round(v)),
      onComplete: () => setTimeout(onDone, 250),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="preloader"
      role="status"
      aria-label="Loading"
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        className="preloader-logo"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <img src="/images/mtm-logo.jpeg" alt="" />
      </motion.div>

      <motion.p
        className="preloader-name"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Projects Management
      </motion.p>

      <div className="preloader-bar">
        <span style={{ width: `${percent}%` }} />
      </div>
      <p className="preloader-percent">{percent}%</p>
    </motion.div>
  );
}
