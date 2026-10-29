import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Photo from "./Photo.jsx";
import { Words, Eyebrow, EASE } from "./anim.jsx";
import Reveal from "./Reveal.jsx";
import { IMG } from "../data.js";

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section className="section section-white" id="about">
      <div className="container">
        <Reveal y={40}>
          <div className="card about">
            <motion.div
              className="about-media"
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* amber offset frame draws in behind the photo */}
              <motion.span
                className="about-frame"
                variants={{
                  hidden: { opacity: 0, x: -14, y: -14 },
                  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, delay: 0.5, ease: EASE } },
                }}
              />
              <motion.div
                className="about-clip"
                variants={{
                  hidden: { clipPath: "inset(0 100% 0 0)" },
                  show: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1.1, ease: EASE } },
                }}
              >
                <motion.div
                  className="about-zoom"
                  variants={{
                    hidden: { scale: 1.3 },
                    show: { scale: 1, transition: { duration: 1.6, ease: EASE } },
                  }}
                >
                  <Photo src={IMG.about} alt="Modern glass office tower in Abu Dhabi" label="About photo" eager />
                </motion.div>
                <motion.div
                  className="about-caption"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.9, ease: EASE } },
                  }}
                >
                  Your Vision
                  <br />
                  Our Expertise
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="about-text">
              <Eyebrow>About MTM</Eyebrow>
              <h2>
                <Words text="Your Trusted Project Management Partner in UAE" delay={0.1} />
              </h2>
              <Reveal delay={0.4}>
                <p>
                  MTM Projects Management is a leading project management company
                  based in Abu Dhabi, dedicated to delivering excellence in every
                  phase of your project. With a skilled team and a client-focused
                  approach, we ensure seamless execution, effective coordination and
                  value-driven results.
                </p>
              </Reveal>
              <Reveal delay={0.55}>
                <a href="#services" className="btn btn-amber btn-shimmer">
                  Learn More <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
