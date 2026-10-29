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

import Preloader from "./components/Preloader.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import { IntroContext } from "./components/anim.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  // keep the page still while the intro plays
  useEffect(() => {
    document.body.style.overflow = ready ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  return (
    <IntroContext.Provider value={ready}>
      <AnimatePresence>{!ready && <Preloader onDone={() => setReady(true)} />}</AnimatePresence>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Focus />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingActions />
    </IntroContext.Provider>
  );
}
