import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, useIntro, EASE } from "../components/anim.jsx";
import { FOCUS_PAGE as F } from "../data.js";
import "./focuspage.css";

export default function FocusPage() {
  const reduce = useReducedMotion();
  const ready = useIntro();

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="fp-hero" id="home">
        <Photo src={F.hero.image} alt={F.hero.alt} label="Our Focus hero photo" className="fp-hero-photo" eager />
        <div className="fp-hero-shade" />

        <div className="container">
          <div className="fp-hero-content">
            {ready && (
              <>
                <h1>
                  <span className="fp-h1-line"><Words text={F.hero.titleTop} delay={0.2} immediate /></span>
                  <em className="fp-h1-line"><Words text={F.hero.titleAccent} delay={0.45} immediate /></em>
                </h1>

                <motion.p
                  className="fp-hero-text"
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
                >
                  {F.hero.text}
                </motion.p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="fp-projects" id="focus">
        <div className="container">
          <Reveal>
            <header className="fp-head">
              <p className="fp-label">{F.intro.eyebrow}</p>
              <h2>{F.intro.title}</h2>
              <p className="fp-head-text">{F.intro.text}</p>
            </header>
          </Reveal>

          <div className="fp-list">
            {F.projects.map(({ icon: Icon, title, text, image, alt }, i) => (
              <Reveal key={title} y={34}>
                <article className={`fp-row ${i % 2 ? "is-flip" : ""}`}>
                  <div className="fp-media">
                    <Photo src={image} alt={alt} label={title} className="fp-photo" />
                  </div>
                  <div className="fp-text">
                    <span className="fp-icon"><Icon size={24} strokeWidth={1.6} /></span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Call to action ---------- */}
      <section className="fp-cta">
        <div className="container fp-cta-inner">
          <Reveal>
            <span className="fp-cta-line" aria-hidden="true" />
            <h2>{F.cta.title}</h2>
            <p>{F.cta.text}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href={F.cta.href} className="btn btn-amber btn-shimmer">
              {F.cta.button} <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}