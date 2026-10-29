import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { useIntro, EASE } from "./anim.jsx";
import { NAV } from "../data.js";

export default function Navbar() {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "#home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = `#${id}`;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "is-solid" : ""} ${open ? "is-open" : ""}`}
      initial={reduce ? false : { y: -100 }}
      animate={{ y: ready ? 0 : -100 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="nav-inner">
        <Logo size={74} />

        <nav className="nav-links" aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={active === n.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
              {active === n.href && (
                <motion.span layoutId="nav-underline" className="nav-underline" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </a>
          ))}
          <a href="#contact" className="btn btn-amber nav-cta-mobile" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>

        <a href="#contact" className="btn btn-amber btn-shimmer nav-cta">
          Contact Us
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>
  );
}
