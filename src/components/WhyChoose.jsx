import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal.jsx";
import { Words, Eyebrow, EASE } from "./anim.jsx";
import { WHY } from "../data.js";

export default function WhyChoose() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-dark" id="why">
      <div className="container">
        <Reveal y={40}>
          <div className="why">
            <div className="why-intro">
              <Eyebrow>Why Choose Us</Eyebrow>
              <h2>
                <Words text="Your Success" />
                <br />
                <Words text="Is Our Priority" delay={0.2} />
              </h2>
              <Reveal delay={0.4}>
                <p>
                  We combine experience, expertise and a hands-on approach to
                  deliver projects that create lasting value.
                </p>
              </Reveal>
            </div>

            <motion.ul
              className="why-grid"
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
            >
              {WHY.map(({ icon: Icon, title }, i) => (
                <motion.li
                  key={title}
                  className="why-item"
                  style={{ "--i": i }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                  }}
                  whileHover={reduce ? undefined : { y: -6 }}
                >
                  <span className="icon-bare amber live"><Icon size={26} strokeWidth={1.6} /></span>
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
