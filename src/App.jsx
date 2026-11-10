// import { useEffect, useState } from "react";
// import { AnimatePresence } from "motion/react";

// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Services from "./components/Services.jsx";
// import WhyChoose from "./components/WhyChoose.jsx";
// import Focus from "./components/Focus.jsx";
// import Process from "./components/Process.jsx";
// import CtaBanner from "./components/CtaBanner.jsx";
// import Footer from "./components/Footer.jsx";

// import Preloader from "./components/Preloader.jsx";
// import ScrollProgress from "./components/ScrollProgress.jsx";
// import FloatingActions from "./components/FloatingActions.jsx";
// import { IntroContext } from "./components/anim.jsx";

// export default function App() {
//   const [ready, setReady] = useState(false);

//   // keep the page still while the intro plays
//   useEffect(() => {
//     document.body.style.overflow = ready ? "" : "hidden";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [ready]);

//   return (
//     <IntroContext.Provider value={ready}>
//       <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>

//       <ScrollProgress />
//       <Navbar />
//       <main>
//         <Hero />
//         <Services />
//         <Focus />
//         <CtaBanner />
//         <Process />
//         <WhyChoose />
//         <About />
//       </main>
//       <Footer />
//       <FloatingActions />
//     </IntroContext.Provider>
//   );
// }


import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import WhyChoose from "./components/WhyChoose.jsx";
import Focus from "./components/Focus.jsx";
import Process from "./components/Process.jsx";
import CtaBanner from "./components/CtaBanner.jsx";
import Footer from "./components/Footer.jsx";

import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import FocusPage from "./pages/FocusPage.jsx";
import WhyPage from "./pages/WhyPage.jsx";

import Preloader from "./components/Preloader.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import { IntroContext } from "./components/anim.jsx";
import { useLocation } from "./router.jsx";

/* route -> page component. Anything not listed shows the Home page. */
const PAGES = {
  "/about": AboutPage,
  "/services": ServicesPage,
  "/focus": FocusPage,
  "/why": WhyPage,
};

export default function App() {
  const [ready, setReady] = useState(false);
  const { pathname, hash } = useLocation();
  const Page = PAGES[pathname];

  // keep the page still while the intro plays
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  /* after a page change: jump to the #section if there is one, otherwise to the top */
  useEffect(() => {
    if (!ready) return;
    if (hash) {
      const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView(), 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, ready]);

  return (
    <IntroContext.Provider value={ready}>
      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        {Page ? (
          <Page />
        ) : (
          <>
            <Hero />
            <Services />
            <Focus />
            <CtaBanner />
            <Process />
            <WhyChoose />
            <About />
          </>
        )}
      </main>
      <Footer />
      <FloatingActions />
    </IntroContext.Provider>
  );
}