import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import { Words, EASE } from "./anim.jsx";
import { FOCUS, IMG } from "../data.js";

/* each photo opens with a wipe from a different side */
const WIPES = ["inset(0 100% 0 0)", "inset(100% 0 0 0)", "inset(0 0 0 100%)"];

export default function Focus() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-white" id="focus">
      <div className="container">
        <Reveal y={40}>
          <div className="card focus">
            <div className="focus-intro">
              <span className="eyebrow">We Deal With</span>
              <h2>
                <Words text="Our Focus" />
              </h2>
              <Reveal delay={0.3}>
                <p>A glimpse of the projects we've managed and delivered across Abu Dhabi and UAE.</p>
                <a href="#contact" className="btn btn-ghost">
                  View All <ArrowRight size={13} />
                </a>
              </Reveal>
            </div>

            <div className="focus-grid">
              {FOCUS.map((f, i) => (
                <motion.article
                  key={f.key}
                  className="focus-item"
                  initial={reduce ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div
                    className="focus-photo"
                    variants={{
                      hidden: { clipPath: WIPES[i] },
                      show: { clipPath: "inset(0 0 0 0)", transition: { duration: 1, delay: i * 0.18, ease: EASE } },
                    }}
                  >
                    <Photo src={IMG[f.key]} alt={f.title} label={f.title} eager />
                    <span className="focus-badge"><ArrowUpRight size={16} /></span>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 + i * 0.18, ease: EASE } },
                    }}
                  >
                    <h3>{f.title}</h3>
                    <p>
                      {f.tags.map((t, ti) => (
                        <span key={t}>
                          {t}
                          {ti < f.tags.length - 1 && <i>|</i>}
                        </span>
                      ))}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
