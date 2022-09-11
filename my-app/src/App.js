import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";

function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div className={`fade-in ${isVisible ? "is-visible" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Hero />
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Toolkit />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}
