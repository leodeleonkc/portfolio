import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import headshot from "../images/headshot.png";
import thankYou from "../images/thank-you-headshot.svg";
import downArrow from "../images/down-arrow.svg";

function FadeInHero(props) {
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

export default function Hero() {
  function checkBox() {
    const navCheckBox = document.getElementById("toggle");
    navCheckBox.checked = !navCheckBox.checked;
  }

  return (
    <div id="hero" className="hero-container">
      <div className="hero--nav-mobile">
        <header>
          <input type="checkbox" id="toggle" className="hidden" />
          <label className="toggle-btn toggle-btn__cross" for="toggle">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </label>
          <nav>
            <ul>
              <li>
                <a onClick={checkBox} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={checkBox} href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a onClick={checkBox} href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={checkBox}
                  href="https://drive.google.com/file/d/1ZbVqUxlJcA86bLhIXND2oe9UK0YyAusI/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="hero--nav">
        <a href="#projects" className="hero--link">
          Projects
        </a>
        <a href="#about" className="hero--link">
          About Me
        </a>
        <a href="#contact" className="hero--link">
          Contact
        </a>
        <a
          className="hero--link"
          href="https://drive.google.com/file/d/1ZbVqUxlJcA86bLhIXND2oe9UK0YyAusI/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="hero--resume-btn">Résumé</button>
        </a>
      </div>
      <FadeInHero>
        <div className="hero--content">
          <div className="hero--description">
            <h1 className="hello">Hello, I'm Leo 👋🏻</h1>
            <hr className="hero--hr" />
            <p>
              A Kansas City based frontend{" "}
              <span className="red">software developer</span> with a strong
              background in motion graphics design and a passion for creating
              memorable and engaging{" "}
              <span className="red">
                web experiences with <strong>React</strong>
              </span>
              .
              <p>
                I am <span className="red">currently seeking</span> a frontend
                developer position. Scroll down to see my latest work and find
                out more about me!
              </p>
            </p>
          </div>
          <div className="hero--headshot">
            <img
              id="leo-thank-you"
              className="leo-thanks hidden"
              src={thankYou}
              alt="Leo's illustrated headshot with a speech bubble saying thank you for contacting me."
            ></img>
            <img
              id="leo"
              className="leo-headshot"
              src={headshot}
              alt="Leo's illustrated headshot"
            ></img>
          </div>
        </div>
      </FadeInHero>
      <div className="hero--down-arrow">
        <img src={downArrow} alt="Scroll down arrow, non-clickable" />
      </div>
    </div>
  );
}
