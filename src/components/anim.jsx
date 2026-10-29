import { createContext, useContext, useRef } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

/* true once the intro loader has finished (hero + navbar wait for it) */
export const IntroContext = createContext(true);
export const useIntro = () => useContext(IntroContext);

export const stagger = (delay = 0, gap = 0.1) => ({
  hidden: {},
  show: { transition: { delayChildren: delay, staggerChildren: gap } },
});

export const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/* Word-by-word heading reveal. `immediate` = play on mount (hero), else on scroll.
   The trigger lives on the outer wrapper: the words themselves start translated out of
   their clipping mask, so observing them directly would never report them as visible. */
export function Words({ text, delay = 0, immediate = false }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const show = reduce || immediate || inView;

  return (
    <span ref={ref} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="w-mask" aria-hidden="true">
          <motion.span
            className="w-word"
            initial={reduce ? false : { y: "115%" }}
            animate={{ y: show ? 0 : "115%" }}
            transition={{ duration: 0.75, delay: delay + i * 0.07, ease: EASE }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Eyebrow label whose amber line draws itself in */
export function Eyebrow({ children }) {
  const reduce = useReducedMotion();
  return (
    <span className="eyebrow anim">
      <motion.i
        className="eb-line"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
      />
      {children}
    </span>
  );
}
