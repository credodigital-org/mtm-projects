import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import { Words, Eyebrow, EASE } from "./anim.jsx";
import { PROCESS } from "../data.js";

export default function Process() {
  const reduce = useReducedMotion();
  const [live, setLive] = useState(0);
  const [paused, setPaused] = useState(false);

  /* a highlight walks through the 8 steps, like a project moving forward */
  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => setLive((n) => (n + 1) % PROCESS.length), 1400);
    return () => clearInterval(id);
  }, [reduce, paused]);

  return (
    <section className="section section-white process-section" id="process">
      <div className="container">
        <Reveal y={40}>
          <div className="card process">
            <div className="process-intro">
              <Eyebrow>Our Process</Eyebrow>
              <h2>
                <Words text="How We Manage Projects" />
              </h2>
              <Reveal delay={0.3}>
                <p>
                  We follow a structured, transparent and rigorous project
                  management methodology to ensure your projects are delivered on
                  time, within budget and to the highest quality standards from
                  concept to handover.
                </p>
              </Reveal>
              <ul className="process-checks">
                {["Standardized ISO Methodology", "UAE Regulatory Compliance"].map((t, i) => (
                  <motion.li
                    key={t}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: EASE }}
                  >
                    <Check size={13} /> {t}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.ol
              className="process-grid"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {PROCESS.map(({ icon: Icon, title }, i) => (
                <motion.li
                  key={title}
                  className={live === i && !paused ? "is-live" : ""}
                  variants={{
                    hidden: { opacity: 0, scale: 0.85, y: 22 },
                    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                  }}
                >
                  <span className="icon-box"><Icon size={24} strokeWidth={1.5} /></span>
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  <b>{title}</b>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
