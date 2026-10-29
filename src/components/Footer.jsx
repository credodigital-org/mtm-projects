import { motion, useReducedMotion } from "motion/react";
import { Phone, MessageCircle, Mail, AtSign, Globe, MapPin } from "lucide-react";
import Logo from "./Logo.jsx";
import { EASE, stagger } from "./anim.jsx";
import { CONTACT } from "../data.js";

const QUICK = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Project", "#focus"],
  ["Careers", "#contact"],
  ["Contact", "#contact"],
];

const col = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer className="footer">
      <motion.div
        className="container footer-grid"
        variants={stagger(0, 0.12)}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="footer-brand" variants={col}>
          <Logo size={64} />
        </motion.div>

        <motion.div variants={col}>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {QUICK.map(([label, href]) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={col}>
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li><Phone size={12} /> <a href={`tel:${CONTACT.tel}`}>Tel: {CONTACT.tel}</a></li>
            <li><MessageCircle size={12} /> <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer">WA: {CONTACT.whatsapp}</a></li>
            <li><Mail size={12} /> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><AtSign size={12} /> {CONTACT.instagram}</li>
            <li><Globe size={12} /> {CONTACT.facebook}</li>
          </ul>
        </motion.div>

        <motion.div className="footer-address" variants={col}>
          <span className="pin"><MapPin size={14} /></span>
          <div>
            <b>MTM PROJECTS MANAGEMENT</b>
            <span>{CONTACT.address}</span>
          </div>
        </motion.div>
      </motion.div>

      <p className="footer-copy">© 2026 MTM PROJECT MANAGEMENT</p>
    </footer>
  );
}
