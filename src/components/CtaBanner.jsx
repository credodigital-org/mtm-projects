import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import Photo from "./Photo.jsx";
import Reveal from "./Reveal.jsx";
import { Words, Eyebrow } from "./anim.jsx";
import { IMG } from "../data.js";

export default function CtaBanner() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="cta" id="contact" ref={ref}>
      <motion.div className="cta-bg" style={reduce ? undefined : { y: bgY }}>
        <Photo src={IMG.cta} alt="" label="" className="cta-photo" />
      </motion.div>
      <div className="cta-shade" />
      <div className="cta-sweep" aria-hidden="true" />

      <div className="container">
        <div className="cta-inner">
          <Eyebrow>Let's Build Together</Eyebrow>
          <h2>
            <Words text="Have a Project in Mind?" />
          </h2>
          <Reveal delay={0.35}>
            <p>
              Get in touch with our team in Abu Dhabi for a consultation and let's
              turn your vision into reality.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <a href="tel:026220533" className="btn btn-amber btn-pulse">
              Contact Us <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
