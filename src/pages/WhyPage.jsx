import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, useIntro, EASE } from "../components/anim.jsx";
import { WHY_PAGE as W } from "../data.js";
import "./whypage.css";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function WhyPage() {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const initial = reduce ? "show" : "hidden";

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="wp-hero" id="home">
        <Photo src={W.hero.image} alt={W.hero.alt} label="Why Choose Us hero photo" className="wp-hero-photo" eager />
        <div className="wp-hero-shade" />

        <div className="container">
          <div className="wp-hero-content">
            {ready && (
              <>
                <h1>
                  <span className="wp-h1-line"><Words text={W.hero.titleTop} delay={0.2} immediate /></span>
                  <em className="wp-h1-line"><Words text={W.hero.titleAccent} delay={0.45} immediate /></em>
                </h1>

                <motion.p
                  className="wp-hero-text"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
                >
                  {W.hero.text}
                </motion.p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Intro ---------- */}
      <section className="wp-intro" id="why">
        <div className="container">
          <Reveal>
            <p className="wp-label">{W.intro.eyebrow}</p>
            <h2>{W.intro.title}</h2>
            <p className="wp-intro-text">{W.intro.text}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Reasons ---------- */}
      <section className="wp-reasons">
        <div className="container">
          <Reveal y={36}>
            <div className="wp-panel">
              <motion.ul
                className="wp-grid"
                variants={grid}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {W.reasons.map(({ icon: Icon, title, text }) => (
                  <motion.li key={title} variants={item}>
                    <span className="wp-icon"><Icon size={22} strokeWidth={1.5} /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Trust ---------- */}
      <section className="wp-trust">
        <div className="wp-trust-inner">
          <Reveal y={30}>
            <div className="wp-trust-media">
              <Photo src={W.trust.image} alt={W.trust.alt} label="Skyline photo" className="wp-trust-photo" />
            </div>
          </Reveal>

          <Reveal y={30} delay={0.15}>
            <div className="wp-trust-text">
              <Quote size={30} strokeWidth={0} fill="currentColor" className="wp-quote" aria-hidden="true" />
              <h2>{W.trust.title}</h2>
              <p>{W.trust.text}</p>
              <a href={W.trust.href} className="btn btn-amber btn-shimmer">
                {W.trust.button} <ArrowRight size={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}