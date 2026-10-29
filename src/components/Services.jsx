import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import { Words, Eyebrow, EASE } from "./anim.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-gray" id="services">
      <div className="container">
        <Reveal y={40}>
          <div className="card services">
            <div className="services-intro">
              <Eyebrow>Our Services</Eyebrow>
              <h2>
                <Words text="Comprehensive Project Management Services" />
              </h2>
              <Reveal delay={0.3}>
                <p>
                  We provide professional project management services to ensure your
                  projects are delivered on time, within budget and to the highest
                  quality standards.
                </p>
              </Reveal>
            </div>

            <motion.ul
              className="services-grid"
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
            >
              {SERVICES.map(({ icon: Icon, title }, i) => (
                <motion.li
                  key={title}
                  className="svc-item"
                  style={{ "--i": i }}
                  variants={{
                    hidden: { opacity: 0, y: 28, scale: 0.9 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
                  }}
                  whileHover={reduce ? undefined : { y: -6 }}
                >
                  <span className="icon-bare live"><Icon size={26} strokeWidth={1.6} /></span>
                  <b>{title}</b>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
