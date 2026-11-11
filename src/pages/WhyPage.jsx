// import { motion, useReducedMotion } from "motion/react";
// import { ArrowRight, Quote } from "lucide-react";
// import Photo from "../components/Photo.jsx";
// import Reveal from "../components/Reveal.jsx";
// import { Words, useIntro, EASE } from "../components/anim.jsx";
// import { WHY_PAGE as W } from "../data.js";
// import "./whypage.css";

// const grid = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
// };
// const item = {
//   hidden: { opacity: 0, y: 26 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
// };

// export default function WhyPage() {
//   const reduce = useReducedMotion();
//   const ready = useIntro();
//   const initial = reduce ? "show" : "hidden";

//   return (
//     <>
//       {/* ---------- Hero ---------- */}
//       <section className="wp-hero" id="home">
//         <Photo src={W.hero.image} alt={W.hero.alt} label="Why Choose Us hero photo" className="wp-hero-photo" eager />
//         <div className="wp-hero-shade" />

//         <div className="container">
//           <div className="wp-hero-content">
//             {ready && (
//               <>
//                 <h1>
//                   <span className="wp-h1-line"><Words text={W.hero.titleTop} delay={0.2} immediate /></span>
//                   <em className="wp-h1-line"><Words text={W.hero.titleAccent} delay={0.45} immediate /></em>
//                 </h1>

//                 <motion.p
//                   className="wp-hero-text"
//                   initial={reduce ? false : { opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
//                 >
//                   {W.hero.text}
//                 </motion.p>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Intro ---------- */}
//       <section className="wp-intro" id="why">
//         <div className="container">
//           <Reveal>
//             <p className="wp-label">{W.intro.eyebrow}</p>
//             <h2>{W.intro.title}</h2>
//             <p className="wp-intro-text">{W.intro.text}</p>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------- Reasons ---------- */}
//       <section className="wp-reasons">
//         <div className="container">
//           <Reveal y={36}>
//             <div className="wp-panel">
//               <motion.ul
//                 className="wp-grid"
//                 variants={grid}
//                 initial={initial}
//                 whileInView="show"
//                 viewport={{ once: true, amount: 0.2 }}
//               >
//                 {W.reasons.map(({ icon: Icon, title, text }) => (
//                   <motion.li key={title} variants={item}>
//                     <span className="wp-icon"><Icon size={22} strokeWidth={1.5} /></span>
//                     <h3>{title}</h3>
//                     <p>{text}</p>
//                   </motion.li>
//                 ))}
//               </motion.ul>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------- Trust ---------- */}
//       <section className="wp-trust">
//         <div className="wp-trust-inner">
//           <Reveal y={30}>
//             <div className="wp-trust-media">
//               <Photo src={W.trust.image} alt={W.trust.alt} label="Skyline photo" className="wp-trust-photo" />
//             </div>
//           </Reveal>

//           <Reveal y={30} delay={0.15}>
//             <div className="wp-trust-text">
//               <Quote size={30} strokeWidth={0} fill="currentColor" className="wp-quote" aria-hidden="true" />
//               <h2>{W.trust.title}</h2>
//               <p>{W.trust.text}</p>
//               <a href={W.trust.href} className="btn btn-amber btn-shimmer">
//                 {W.trust.button} <ArrowRight size={14} />
//               </a>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, EASE, stagger, rise } from "../components/anim.jsx";
import { Wipe } from "../components/pageAnim.jsx";
import { WHY_PAGE as W } from "../data.js";
import "./whypage.css";

const SHADE =
  "linear-gradient(90deg, rgba(14,18,28,0.78) 0%, rgba(14,18,28,0.55) 60%, rgba(14,18,28,0.4) 100%)";

export default function WhyPage() {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";
  const view = { once: true, amount: 0.3 };

  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        className="wp-hero"
        image={W.hero.image}
        mobileImage={W.hero.mobileImage}
        alt={W.hero.alt}
        label="Why Choose Us hero photo"
        shade={SHADE}
        cue="why"
      >
        <div className="wp-hero-content">
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
        </div>
      </PageHero>

      {/* ---------- Intro ---------- */}
      <section className="wp-intro" id="why">
        <div className="container">
          <Reveal as="p" className="wp-label">{W.intro.eyebrow}</Reveal>
          <h2><Words text={W.intro.title} /></h2>
          <Reveal as="p" className="wp-intro-text" delay={0.3}>{W.intro.text}</Reveal>
        </div>
      </section>

      {/* ---------- Reasons ---------- */}
      <section className="wp-reasons">
        <div className="container">
          <Reveal y={36}>
            <div className="wp-panel">
              <motion.ul
                className="wp-grid"
                variants={stagger(0.15, 0.12)}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {W.reasons.map(({ icon: Icon, title, text }, i) => (
                  <motion.li
                    key={title}
                    variants={rise}
                    whileHover={reduce ? undefined : { y: -6 }}
                  >
                    <span className="wp-icon fx-ring fx-float" style={{ "--i": i }}>
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
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
          <div className="wp-trust-media">
            <Wipe className="wp-trust-photo" from="left">
              <Photo src={W.trust.image} alt={W.trust.alt} label="Skyline photo" />
            </Wipe>
          </div>

          <motion.div
            className="wp-trust-text"
            variants={stagger(0.3, 0.14)}
            initial={initial}
            whileInView="show"
            viewport={view}
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { opacity: 0, scale: 0, rotate: -25 },
                show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 14 } },
              }}
            >
              <Quote size={30} strokeWidth={0} fill="currentColor" className="wp-quote" aria-hidden="true" />
            </motion.span>
            <h2><Words text={W.trust.title} delay={0.3} /></h2>
            <motion.p variants={rise}>{W.trust.text}</motion.p>
            <motion.div variants={rise}>
              <a href={W.trust.href} className="btn btn-amber btn-shimmer">
                {W.trust.button} <ArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}