import { motion, useReducedMotion } from "motion/react";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, useIntro, EASE } from "../components/anim.jsx";
import { ABOUT_PAGE as A } from "../data.js";
import "./AboutPage.css";

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function AboutPage() {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const initial = reduce ? "show" : "hidden";

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="ap-hero" id="home">
        <Photo src={A.hero.image} alt={A.hero.alt} label="About hero photo" className="ap-hero-photo" eager />
        <div className="ap-hero-shade" />

        <div className="container ap-hero-content">
          {ready && (
            <>
              <motion.p
                className="ap-kicker"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                {A.hero.kicker} <b aria-hidden="true">|</b> {A.hero.location}
              </motion.p>

              <h1>
                <span className="ap-h1-line"><Words text={A.hero.titleTop} delay={0.25} immediate /></span>
                <em className="ap-h1-line"><Words text={A.hero.titleAccent} delay={0.5} immediate /></em>
              </h1>

              <motion.p
                className="ap-hero-text"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
              >
                {A.hero.text}
              </motion.p>
            </>
          )}
        </div>
      </section>

      {/* ---------- Who we are ---------- */}
      <section className="ap-who">
        <div className="container">
          <Reveal>
            <p className="ap-label">{A.who.eyebrow}</p>
            <h2>{A.who.title}</h2>
            <p className="ap-who-text">{A.who.text}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Values ---------- */}
      <section className="ap-band ap-band-gray">
        <div className="container">
          <Reveal y={36}>
            <div className="ap-panel ap-values">
              <div className="ap-values-intro">
                <p className="ap-eyebrow"><i />{A.values.eyebrow}</p>
                <h2>{A.values.title}</h2>
                <p>{A.values.text}</p>
              </div>

              <motion.ul
                className="ap-values-grid"
                variants={grid}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {A.values.items.map(({ icon: Icon, title, text }) => (
                  <motion.li key={title} variants={item}>
                    <span className="ap-value-icon"><Icon size={20} strokeWidth={1.6} /></span>
                    <b>{title}</b>
                    <small>{text}</small>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Team ---------- */}
      <section className="ap-band ap-band-dark">
        <div className="container">
          <Reveal y={36}>
            <div className="ap-panel ap-team">
              <div className="ap-team-media">
                <span className="ap-team-frame" aria-hidden="true" />
                <Photo src={A.team.image} alt={A.team.alt} label="Team photo" className="ap-team-photo" />
              </div>
              <div className="ap-team-text">
                <p className="ap-eyebrow"><i />{A.team.eyebrow}</p>
                <h2>{A.team.title}</h2>
                <p>{A.team.text}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Workflow ---------- */}
      <section className="ap-band ap-band-gray">
        <div className="container">
          <Reveal y={36}>
            <div className="ap-panel ap-flow">
              <header className="ap-flow-head">
                <p className="ap-label ap-label-amber">{A.workflow.eyebrow}</p>
                <h2>{A.workflow.title}</h2>
                <p>{A.workflow.text}</p>
              </header>

              <motion.ol
                className="ap-flow-grid"
                variants={grid}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {A.workflow.phases.map((p, i) => (
                  <motion.li key={p.title} variants={item}>
                    <Photo src={p.image} alt={p.alt} label={`Phase ${i + 1} photo`} className="ap-flow-photo" />
                    <span className="ap-flow-num">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}