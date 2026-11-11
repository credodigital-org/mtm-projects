// import { useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { User, Mail, Phone, Building2, MessageSquare, Send, MapPin, ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
// import Photo from "../components/Photo.jsx";
// import Reveal from "../components/Reveal.jsx";
// import { Words, useIntro, EASE } from "../components/anim.jsx";
// import { CONTACT, CONTACT_PAGE as C } from "../data.js";
// import "./contactpage.css";

// const EMPTY = { name: "", email: "", phone: "", type: "", message: "" };

// export default function ContactPage() {
//   const reduce = useReducedMotion();
//   const ready = useIntro();
//   const [form, setForm] = useState(EMPTY);
//   const [sent, setSent] = useState(false);

//   const set = (key) => (e) => {
//     setSent(false);
//     setForm((f) => ({ ...f, [key]: e.target.value }));
//   };

//   /* No backend: the message opens in WhatsApp, addressed to CONTACT.whatsappLink.
//      To use email or a form service instead, replace the body of this function. */
//   const onSubmit = (e) => {
//     e.preventDefault();
//     const text = [
//       "Hello MTM Projects, I would like to discuss a project.",
//       "",
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       `Phone: ${form.phone}`,
//       `Project type: ${form.type}`,
//       "",
//       form.message,
//     ].join("\n");
//     window.open(`${CONTACT.whatsappLink}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
//     setSent(true);
//     setForm(EMPTY);
//   };

//   const m = C.map;
//   const mapSrc = `https://www.google.com/maps?q=${m.lat},${m.lng}&z=15&output=embed`;
//   const mapLink = `https://www.google.com/maps?q=${m.lat},${m.lng}`;

//   return (
//     <>
//       {/* ---------- Hero ---------- */}
//       <section className="cp-hero" id="home">
//         <Photo src={C.hero.image} alt={C.hero.alt} label="Contact hero photo" className="cp-hero-photo" eager />
//         <div className="cp-hero-shade" />

//         <div className="container">
//           <div className="cp-hero-content">
//             {ready && (
//               <>
//                 <motion.p
//                   className="cp-kicker"
//                   initial={reduce ? false : { opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
//                 >
//                   {C.hero.kicker}
//                 </motion.p>

//                 <h1>
//                   <span className="cp-h1-line"><Words text={C.hero.titleTop} delay={0.2} immediate /></span>
//                   <em className="cp-h1-line"><Words text={C.hero.titleAccent} delay={0.45} immediate /></em>
//                 </h1>

//                 <motion.p
//                   className="cp-hero-text"
//                   initial={reduce ? false : { opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
//                 >
//                   {C.hero.text}
//                 </motion.p>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Form + details ---------- */}
//       <section className="cp-main" id="contact">
//         <div className="container cp-main-grid">
//           <Reveal y={36}>
//             <div className="cp-form-card">
//               <p className="cp-label">{C.form.eyebrow}</p>
//               <h2>{C.form.title}</h2>
//               <p className="cp-form-text">{C.form.text}</p>

//               <form className="cp-form" onSubmit={onSubmit}>
//                 <div className="cp-row2">
//                   <label className="cp-field">
//                     <User size={16} />
//                     <input type="text" placeholder="Your Name *" aria-label="Your name" required value={form.name} onChange={set("name")} autoComplete="name" />
//                   </label>
//                   <label className="cp-field">
//                     <Mail size={16} />
//                     <input type="email" placeholder="Your Email *" aria-label="Your email" required value={form.email} onChange={set("email")} autoComplete="email" />
//                   </label>
//                 </div>

//                 <label className="cp-field">
//                   <Phone size={16} />
//                   <input type="tel" placeholder="Phone Number *" aria-label="Phone number" required value={form.phone} onChange={set("phone")} autoComplete="tel" />
//                 </label>

//                 <label className="cp-field cp-field-select">
//                   <Building2 size={16} />
//                   <select aria-label="Project type" required value={form.type} onChange={set("type")}>
//                     <option value="" disabled>Project Type · Select an option</option>
//                     {C.form.projectTypes.map((t) => (
//                       <option key={t} value={t}>{t}</option>
//                     ))}
//                   </select>
//                   <ChevronDown size={16} className="cp-chevron" />
//                 </label>

//                 <label className="cp-field cp-field-area">
//                   <MessageSquare size={16} />
//                   <textarea
//                     rows={4}
//                     placeholder={"Your Message *\nTell us about your project..."}
//                     aria-label="Your message"
//                     required
//                     value={form.message}
//                     onChange={set("message")}
//                   />
//                 </label>

//                 <button type="submit" className="btn btn-amber cp-submit">
//                   <Send size={15} /> {C.form.button} <ArrowRight size={15} />
//                 </button>
//                 <p className="cp-status" role="status">{sent ? C.form.success : ""}</p>
//               </form>
//             </div>
//           </Reveal>

//           <Reveal y={36} delay={0.12}>
//             <div className="cp-details">
//               <p className="cp-label">{C.details.eyebrow}</p>
//               <h2>{C.details.title}</h2>
//               <p className="cp-details-text">{C.details.text}</p>

//               <ul className="cp-info">
//                 {C.details.items.map(({ icon: Icon, title, lines, href }) => (
//                   <li key={title}>
//                     <span className="cp-info-icon"><Icon size={17} strokeWidth={1.8} /></span>
//                     <div>
//                       <b>{title}</b>
//                       {lines.map((line, i) =>
//                         i === 0 && href ? (
//                           <a key={line} href={href}>{line}</a>
//                         ) : (
//                           <span key={line} className={i === 0 ? "" : "cp-note"}>{line}</span>
//                         )
//                       )}
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               <div className="cp-follow">
//                 <b>{C.details.followTitle}</b>
//                 <ul>
//                   {C.details.socials.map(({ icon: Icon, label, href }) => (
//                     <li key={label}>
//                       <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
//                         <Icon size={15} />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>

//       {/* ---------- Map ---------- */}
//       <section className="cp-map-section">
//         <div className="container cp-map-grid">
//           <Reveal>
//             <div className="cp-map-intro">
//               <p className="cp-label">{m.eyebrow}</p>
//               <h2>{m.title}</h2>
//               <div className="cp-address">
//                 <span className="cp-address-pin"><MapPin size={15} /></span>
//                 <div>
//                   <b>{m.name}</b>
//                   <span>{m.address}</span>
//                 </div>
//               </div>
//             </div>
//           </Reveal>

//           <Reveal delay={0.12}>
//             <div className="cp-map">
//               <iframe
//                 title="MTM Projects Management location map"
//                 src={mapSrc}
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               />
//               <div className="cp-map-card">
//                 <p><MapPin size={13} /> {m.landmarkLabel}</p>
//                 <b>{m.landmarkTitle}</b>
//                 <span>{m.landmarkText}</span>
//               </div>
//               <div className="cp-map-pills">
//                 <span className="cp-coords">{m.coords}</span>
//                 <a href={mapLink} target="_blank" rel="noopener noreferrer" className="cp-open">
//                   {m.linkText} <ExternalLink size={13} />
//                 </a>
//               </div>
//             </div>
//           </Reveal>
//         </div>
//       </section>
//     </>
//   );
// }


import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { User, Mail, Phone, Building2, MessageSquare, Send, MapPin, ExternalLink, ChevronDown, ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import { Words, EASE, stagger, rise } from "../components/anim.jsx";
import { CONTACT, CONTACT_PAGE as C } from "../data.js";
import "./contactpage.css";

const SHADE =
  "linear-gradient(90deg, rgba(14,18,28,0.78) 0%, rgba(14,18,28,0.5) 50%, rgba(14,18,28,0.12) 100%)";

const EMPTY = { name: "", email: "", phone: "", type: "", message: "" };

export default function ContactPage() {
  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setSent(false);
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  /* No backend: the message opens in WhatsApp, addressed to CONTACT.whatsappLink.
     To use email or a form service instead, replace the body of this function. */
  const onSubmit = (e) => {
    e.preventDefault();
    const text = [
      "Hello MTM Projects, I would like to discuss a project.",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Project type: ${form.type}`,
      "",
      form.message,
    ].join("\n");
    window.open(`${CONTACT.whatsappLink}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setSent(true);
    setForm(EMPTY);
  };

  const m = C.map;
  const mapSrc = `https://www.google.com/maps?q=${m.lat},${m.lng}&z=15&output=embed`;
  const mapLink = `https://www.google.com/maps?q=${m.lat},${m.lng}`;

  const pop = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 18 } },
  };

  return (
    <>
      {/* ---------- Hero ---------- */}
      <PageHero
        className="cp-hero"
        image={C.hero.image}
        mobileImage={C.hero.mobileImage}
        alt={C.hero.alt}
        label="Contact hero photo"
        shade={SHADE}
        cue="contact"
      >
        <div className="cp-hero-content">
          <motion.p
            className="cp-kicker"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {C.hero.kicker}
          </motion.p>

          <h1>
            <span className="cp-h1-line"><Words text={C.hero.titleTop} delay={0.2} immediate /></span>
            <em className="cp-h1-line"><Words text={C.hero.titleAccent} delay={0.45} immediate /></em>
          </h1>

          <motion.p
            className="cp-hero-text"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          >
            {C.hero.text}
          </motion.p>
        </div>
      </PageHero>

      {/* ---------- Form + details ---------- */}
      <section className="cp-main" id="contact">
        <div className="container cp-main-grid">
          <Reveal y={36}>
            <div className="cp-form-card">
              <p className="cp-label">{C.form.eyebrow}</p>
              <h2><Words text={C.form.title} /></h2>
              <p className="cp-form-text">{C.form.text}</p>

              <motion.form
                className="cp-form"
                onSubmit={onSubmit}
                variants={stagger(0.2, 0.09)}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="cp-row2" variants={rise}>
                  <label className="cp-field">
                    <User size={16} />
                    <input type="text" placeholder="Your Name *" aria-label="Your name" required value={form.name} onChange={set("name")} autoComplete="name" />
                  </label>
                  <label className="cp-field">
                    <Mail size={16} />
                    <input type="email" placeholder="Your Email *" aria-label="Your email" required value={form.email} onChange={set("email")} autoComplete="email" />
                  </label>
                </motion.div>

                <motion.label className="cp-field" variants={rise}>
                  <Phone size={16} />
                  <input type="tel" placeholder="Phone Number *" aria-label="Phone number" required value={form.phone} onChange={set("phone")} autoComplete="tel" />
                </motion.label>

                <motion.label className="cp-field cp-field-select" variants={rise}>
                  <Building2 size={16} />
                  <select aria-label="Project type" required value={form.type} onChange={set("type")}>
                    <option value="" disabled>Project Type · Select an option</option>
                    {C.form.projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="cp-chevron" />
                </motion.label>

                <motion.label className="cp-field cp-field-area" variants={rise}>
                  <MessageSquare size={16} />
                  <textarea
                    rows={4}
                    placeholder={"Your Message *\nTell us about your project..."}
                    aria-label="Your message"
                    required
                    value={form.message}
                    onChange={set("message")}
                  />
                </motion.label>

                <motion.button type="submit" className="btn btn-amber btn-shimmer cp-submit" variants={rise}>
                  <Send size={15} /> {C.form.button} <ArrowRight size={15} />
                </motion.button>

                <div className="cp-status" role="status" aria-live="polite">
                  <AnimatePresence>
                    {sent && (
                      <motion.p
                        key="ok"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        {C.form.success}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            </div>
          </Reveal>

          <Reveal y={36} delay={0.12}>
            <div className="cp-details">
              <p className="cp-label">{C.details.eyebrow}</p>
              <h2><Words text={C.details.title} /></h2>
              <p className="cp-details-text">{C.details.text}</p>

              <motion.ul
                className="cp-info"
                variants={stagger(0.2, 0.12)}
                initial={initial}
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {C.details.items.map(({ icon: Icon, title, lines, href }, i) => (
                  <motion.li key={title} variants={rise}>
                    <span className="cp-info-icon fx-ring fx-float" style={{ "--i": i }}>
                      <Icon size={17} strokeWidth={1.8} />
                    </span>
                    <div>
                      <b>{title}</b>
                      {lines.map((line, li) =>
                        li === 0 && href ? (
                          <a key={line} href={href}>{line}</a>
                        ) : (
                          <span key={line} className={li === 0 ? "" : "cp-note"}>{line}</span>
                        )
                      )}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="cp-follow">
                <b>{C.details.followTitle}</b>
                <motion.ul
                  variants={stagger(0.2, 0.1)}
                  initial={initial}
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {C.details.socials.map(({ icon: Icon, label, href }) => (
                    <motion.li key={label} variants={pop}>
                      <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                        <Icon size={15} />
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Map ---------- */}
      <section className="cp-map-section">
        <div className="container cp-map-grid">
          <div className="cp-map-intro">
            <Reveal as="p" className="cp-label">{m.eyebrow}</Reveal>
            <h2><Words text={m.title} /></h2>
            <Reveal delay={0.3}>
              <div className="cp-address">
                <span className="cp-address-pin fx-float"><MapPin size={15} /></span>
                <div>
                  <b>{m.name}</b>
                  <span>{m.address}</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="cp-map">
              <iframe
                title="MTM Projects Management location map"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <motion.div
                className="cp-map-card"
                initial={reduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              >
                <p><i className="live-dot" /> {m.landmarkLabel}</p>
                <b>{m.landmarkTitle}</b>
                <span>{m.landmarkText}</span>
              </motion.div>
              <motion.div
                className="cp-map-pills"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
              >
                <span className="cp-coords">{m.coords}</span>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="cp-open">
                  {m.linkText} <ExternalLink size={13} />
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}