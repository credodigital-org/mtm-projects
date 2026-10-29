import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Photo from "./Photo.jsx";
import { Words, useIntro, EASE } from "./anim.jsx";
import { IMG } from "../data.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const ref = useRef(null);

  /* parallax: photo moves slower than the page, text drifts up and fades */
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-bg" style={reduce ? undefined : { y: bgY }}>
        <Photo src={IMG.hero} alt="Construction site and modern towers in Abu Dhabi" label="Hero photo" className="hero-photo" eager />
      </motion.div>

      {ready && (
        <>
          {/* navy diagonal panel + gold edge line */}
          <motion.div
            className="hero-panel"
            initial={reduce ? false : { x: "-14%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: EASE }}
          />
          <svg className="hero-line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <motion.line
              x1="56" y1="0" x2="43.7" y2="100"
              stroke="#f5a300" strokeWidth="2" vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.3, ease: "easeInOut" }}
            />
          </svg>
          <div className="hero-shine" aria-hidden="true" />
        </>
      )}

      <motion.div
        className="container hero-content"
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
      >
        {ready && (
          <>
            <motion.p className="hero-kicker" {...rise(0.2)}>
              <i className="live-dot" /> Projects Management Company <b>|</b> Abu Dhabi, UAE
            </motion.p>

            <h1>
              <span className="h1-line"><Words text="Every Stage." delay={0.3} immediate /></span>
              <em className="h1-line"><Words text="Expertly Managed." delay={0.55} immediate /></em>
            </h1>

            <motion.p className="hero-text" {...rise(0.9)}>
              End-to-end project management solutions for successful and suitable
              developments in Abu Dhabi and beyond.
            </motion.p>

            <motion.div className="hero-actions" {...rise(1.05)}>
              <a href="#services" className="btn btn-amber btn-shimmer">
                Our Services <ArrowRight size={14} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Request a consultation
              </a>
            </motion.div>
          </>
        )}
      </motion.div>

      {ready && !reduce && (
        <motion.a
          href="#about"
          className="scroll-cue"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span><i /></span>
        </motion.a>
      )}
    </section>
  );
}
