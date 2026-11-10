import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { useIntro, EASE } from "./anim.jsx";
import { Link, useLocation } from "../router.jsx";
import { NAV } from "../data.js";

export default function Navbar() {
  const reduce = useReducedMotion();
  const ready = useIntro();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onPage = pathname !== "/"; // e.g. /about: the page itself is the active link
  const [section, setSection] = useState("home");

  useEffect(() => {
    const ids = NAV.map((n) => n.section).filter(Boolean);
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      });
      setSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isActive = (n) => (onPage ? n.to === pathname : n.section === section);

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
            <Link
              key={n.to}
              to={n.to}
              className={isActive(n) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {n.label}
              {isActive(n) && (
                <motion.span layoutId="nav-underline" className="nav-underline" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </Link>
          ))}
          <Link to="/#contact" className="btn btn-amber nav-cta-mobile" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </nav>

        <Link to="/#contact" className="btn btn-amber btn-shimmer nav-cta">
          Contact Us
        </Link>

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