import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Photo from "./Photo.jsx";
import { useIntro } from "./anim.jsx";
import "../page-anim.css";

/* Same hero behaviour as the Home page:
   photo moves slower than the page + slow zoom, light sweep, amber line draws in,
   text drifts up and fades as you scroll, animated scroll cue.
   `shade` = CSS gradient laid over the photo. `cue` = id of the next section. */
export default function PageHero({ className = "", image, mobileImage, alt, label, shade, cue, children }) {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className={`ph ${className}`} id="home" ref={ref}>
      <motion.div
  className={`hero-bg ${mobileImage ? "has-mobile" : ""}`}
  style={{
    ...(reduce ? {} : { y: bgY }),
    "--hero-m": mobileImage ? `url("${mobileImage}")` : "none",
    "--hero-d": image ? `url("${image}")` : "none",
  }}
>
  <Photo src={image} alt={alt} label={label} className="hero-photo" eager />
</motion.div>

      <div className="ph-shade" style={shade ? { background: shade } : undefined} />

      {ready && (
        <>
          <div className="hero-shine" aria-hidden="true" />
          <motion.span
            className="ph-line"
            aria-hidden="true"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, delay: 0.3, ease: "easeInOut" }}
          />
        </>
      )}

      <motion.div
        className="container ph-content"
        style={reduce ? undefined : { y: textY, opacity: textOpacity }}
      >
        {ready && children}
      </motion.div>

      {ready && !reduce && cue && (
        <motion.a
          href={`#${cue}`}
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