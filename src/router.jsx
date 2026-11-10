import { useEffect, useState } from "react";

/* Tiny client-side router (no extra dependency).
   Pages: "/" (Home) and "/about". "/#services" = Home, scrolled to that section. */

function read() {
  return { pathname: window.location.pathname.replace(/\/+$/, "") || "/", hash: window.location.hash };
}

export function useLocation() {
  const [loc, setLoc] = useState(read);
  useEffect(() => {
    const update = () => setLoc(read());
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return loc;
}

export function navigate(to) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

/* Drop-in <a> that changes page without a reload (so the intro loader doesn't replay). */
export function Link({ to, onClick, children, ...rest }) {
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === "_blank") return;
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}