// import { motion, useReducedMotion } from "motion/react";
// import Photo from "../components/Photo.jsx";
// import Reveal from "../components/Reveal.jsx";
// import { Words, useIntro, EASE } from "../components/anim.jsx";
// import { SERVICES_PAGE as S } from "../data.js";
// import "./servicespage.css";

// const grid = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
// };
// const item = {
//   hidden: { opacity: 0, y: 26 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
// };

// function Tags({ list }) {
//   return (
//     <ul className="sp-tags">
//       {list.map((t) => (
//         <li key={t}>{t}</li>
//       ))}
//     </ul>
//   );
// }

// export default function ServicesPage() {
//   const reduce = useReducedMotion();
//   const ready = useIntro();
//   const initial = reduce ? "show" : "hidden";

//   return (
//     <>
//       {/* ---------- Hero ---------- */}
//       <section className="sp-hero" id="home">
//         <Photo src={S.hero.image} alt={S.hero.alt} label="Services hero photo" className="sp-hero-photo" eager />
//         <div className="sp-hero-shade" />

//         <div className="container">
//           <div className="sp-hero-content">
//             {ready && (
//               <>
//                 <h1>
//                   <span className="sp-h1-line"><Words text={S.hero.titleTop} delay={0.2} immediate /></span>
//                   <em className="sp-h1-line"><Words text={S.hero.titleAccent} delay={0.45} immediate /></em>
//                 </h1>

//                 <motion.p
//                   className="sp-hero-text"
//                   initial={reduce ? false : { opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
//                 >
//                   {S.hero.text}
//                 </motion.p>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Services ---------- */}
//       <section className="sp-services" id="services">
//         <div className="container">
//           <Reveal>
//             <header className="sp-head">
//               <p className="sp-label">{S.intro.eyebrow}</p>
//               <h2>{S.intro.title}</h2>
//               <p className="sp-head-text">{S.intro.text}</p>
//             </header>
//           </Reveal>

//           <motion.ul
//             className="sp-grid"
//             variants={grid}
//             initial={initial}
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {S.items.map((s) => (
//               <motion.li key={s.title} className="sp-card" variants={item}>
//                 <div className="sp-card-media">
//                   <Photo src={s.image} alt={s.alt} label={s.title} className="sp-card-photo" />
//                   <span className="sp-badge">{s.badge}</span>
//                 </div>
//                 <div className="sp-card-body">
//                   <h3>{s.title}</h3>
//                   <p>{s.text}</p>
//                   <Tags list={s.tags} />
//                 </div>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* wide card */}
//           <Reveal y={30}>
//             <article className="sp-card sp-feature">
//               <div className="sp-card-media">
//                 <Photo src={S.featured.image} alt={S.featured.alt} label={S.featured.title} className="sp-feature-photo" />
//                 <span className="sp-badge">{S.featured.badge}</span>
//               </div>
//               <div className="sp-feature-body">
//                 <p className="sp-label sp-label-amber">{S.featured.eyebrow}</p>
//                 <h3>{S.featured.title}</h3>
//                 <p>{S.featured.text}</p>
//                 <Tags list={S.featured.tags} />
//               </div>
//             </article>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------- Why choose us ---------- */}
//       <section className="sp-why" id="why">
//         <div className="container">
//           <Reveal>
//             <header className="sp-head">
//               <p className="sp-label">{S.why.eyebrow}</p>
//               <h2>{S.why.title}</h2>
//               <p className="sp-head-text">{S.why.text}</p>
//             </header>
//           </Reveal>

//           <Reveal y={30}>
//             <motion.ul
//               className="sp-why-bar"
//               variants={grid}
//               initial={initial}
//               whileInView="show"
//               viewport={{ once: true, amount: 0.3 }}
//             >
//               {S.why.items.map(({ icon: Icon, title, text }) => (
//                 <motion.li key={title} variants={item}>
//                   <span className="sp-why-icon"><Icon size={18} strokeWidth={1.6} /></span>
//                   <div>
//                     <b>{title}</b>
//                     <small>{text}</small>
//                   </div>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


import { motion, useReducedMotion } from "motion/react";
import PageHero from "../components/PageHero.jsx";
import Photo from "../components/Photo.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, EASE, stagger, rise } from "../components/anim.jsx";
import { Wipe } from "../components/pageAnim.jsx";
import { SERVICES_PAGE as S } from "../data.js";
import "./servicespage.css";

const SHADE =
  "linear-gradient(90deg, rgba(8,20,44,0.78) 0%, rgba(8,20,44,0.45) 55%, rgba(8,20,44,0.2) 100%)";

function Tags({ list }) {
  return (
    <ul className="sp-tags">
      {list.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";

  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        className="sp-hero"
        image={S.hero.image}
        mobileImage={S.hero.mobileImage}
        alt={S.hero.alt}
        label="Services hero photo"
        shade={SHADE}
        cue="services"
      >
        <div className="sp-hero-content">
          <h1>
            <span className="sp-h1-line"><Words text={S.hero.titleTop} delay={0.2} immediate /></span>
            <em className="sp-h1-line"><Words text={S.hero.titleAccent} delay={0.45} immediate /></em>
          </h1>

          <motion.p
            className="sp-hero-text"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          >
            {S.hero.text}
          </motion.p>
        </div>
      </PageHero>

      {/* ---------- Services ---------- */}
      <section className="sp-services" id="services">
        <div className="container">
          <header className="sp-head">
            <Reveal as="p" className="sp-label">{S.intro.eyebrow}</Reveal>
            <h2><Words text={S.intro.title} /></h2>
            <Reveal as="p" className="sp-head-text" delay={0.3}>{S.intro.text}</Reveal>
          </header>

          <motion.ul
            className="sp-grid"
            variants={stagger(0.1, 0.12)}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {S.items.map((s, i) => (
              <motion.li
                key={s.title}
                className="sp-card fx-hover"
                variants={rise}
                whileHover={reduce ? undefined : { y: -8 }}
              >
                <div className="sp-card-media">
                  <Wipe className="sp-card-photo" from={i % 2 ? "right" : "left"} delay={0.1}>
                    <Photo src={s.image} alt={s.alt} label={s.title} />
                  </Wipe>
                  <motion.span
                    className="sp-badge"
                    initial={reduce ? false : { opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                  >
                    {s.badge}
                  </motion.span>
                </div>
                <div className="sp-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <Tags list={s.tags} />
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* wide card */}
          <Reveal y={30}>
            <article className="sp-card sp-feature fx-hover">
              <div className="sp-card-media">
                <Wipe className="sp-feature-photo" from="left">
                  <Photo src={S.featured.image} alt={S.featured.alt} label={S.featured.title} />
                </Wipe>
                <motion.span
                  className="sp-badge"
                  initial={reduce ? false : { opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                >
                  {S.featured.badge}
                </motion.span>
              </div>
              <div className="sp-feature-body">
                <p className="sp-label sp-label-amber">{S.featured.eyebrow}</p>
                <h3>{S.featured.title}</h3>
                <p>{S.featured.text}</p>
                <Tags list={S.featured.tags} />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why choose us ---------- */}
      <section className="sp-why" id="why">
        <div className="container">
          <header className="sp-head">
            <Reveal as="p" className="sp-label">{S.why.eyebrow}</Reveal>
            <h2><Words text={S.why.title} /></h2>
            <Reveal as="p" className="sp-head-text" delay={0.3}>{S.why.text}</Reveal>
          </header>

          <Reveal y={30}>
            <motion.ul
              className="sp-why-bar"
              variants={stagger(0.15, 0.14)}
              initial={initial}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {S.why.items.map(({ icon: Icon, title, text }, i) => (
                <motion.li key={title} variants={rise}>
                  <span className="sp-why-icon fx-ring fx-float" style={{ "--i": i }}>
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <b>{title}</b>
                    <small>{text}</small>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}