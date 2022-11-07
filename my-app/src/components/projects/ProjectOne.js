import "./projects.css";
import "../../App.css";
import { useContext, useState } from "react";
import { Context } from "../../Context.js";
import movie1 from "../../images/video1.jpg";
import closeTabTop from "../../images/close-tab-top.svg";

import closeTab from "../../images/close-tab.svg";

export default function ProjectOne() {
  const [playVideo, setVideo] = useState(false);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const { setIsClosed } = useContext(Context);
  function handleClose() {
    setIsClosed(true);
    setTimeout(() => {
      window.location.href = "#projects";
    }, "200");
  }

  return (
    <div className="project-x-wrapper" id="single-project">
      <div className="close-tab-div">
        <img
          onClick={handleClose}
          className="close-tab-img"
          src={closeTabTop}
          alt="Close Tab"
        />
      </div>
      <div className="project-x-inner">
        {playVideo ? (
          <div className="project-x-movie">
            <iframe
              max-width="785px"
              max-height="785px"
              src="https://www.youtube.com/embed/U_Fhj-KcwQg?autoplay=1&rel=0"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        ) : (
          <img
            className="project-x-img"
            onClick={() => setVideo(true)}
            src={movie1}
            alt="Watch the movie"
          />
        )}

        <h1>01</h1>
        <h1>PORTFOLIO PROJECT</h1>
        <div className="project-x-main-text">
          <div className="project-x-main-text-inner">
            <div className="project-x-links">
              <button
                onClick={() =>
                  openInNewTab("https://github.com/leodeleonkc/portfolio")
                }
                className="close-btn"
              >
                repo
              </button>
            </div>
            <p>
              Hello! My name is Leo de Leon, and this is my portfolio project.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>How did I build it?</i>
              </strong>
            </p>
            <br></br>
            <p>
              This is the first React website I’ve ever made, and I created it
              after only one week of React training.
            </p>
            <br></br>
            <p>
              Yes… it’s mostly a static website, but I built it using npm
              create-react-app on VS Code and local server. I am particularly
              proud of this project because I have been planning it since the
              day I began learning to code, so having built it from the ground
              up was a major milestone for me.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What problem did I set out to fix?</i>
              </strong>
            </p>
            <br></br>
            <p>
              It is important to have a creative way to showcase my work, so I
              wanted something minimalist, well designed, and highly functional.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What were some of the design decisions?</i>
              </strong>
            </p>
            <br></br>
            <p>
              Like so many things, it all started with some inspiration. I
              looked at dozens, if not hundreds of portfolio websites, and while
              many of them were incredibly inspiring, I decided to keep things
              simple from the beginning.
            </p>
            <br></br>
            <p>
              I created the design in Figma, and had a lot of really great
              feedback from both designers and developers. After hours of design
              work, tweaks and tests, I was ready to build.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What packages did I use to solve challenges?</i>
              </strong>
            </p>
            <br></br>
            <p>
              I utilized several packages to make the web app work properly.
              JSemail was a life saver so my contact form would work without
              needing to set up a backend.
            </p>
            <br></br>
            <p>
              I created a hamburger menu entirely in CSS, and utilized a scroll
              detect function within React to display content on scroll, and
              only once per page load.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What did I learn?</i>
              </strong>
            </p>
            <br></br>
            <p>
              I learned that React is meant to make my work easier and less
              repetitive. At times it was frustrating because I was overthinking
              solutions that I would implement with vanilla JavaScript, but the
              solution was much simpler… like having React record form field
              values in real time, as opposed to waiting until a submit button
              is clicked on which makes things run faster and more efficiently
              in the DOM.
            </p>{" "}
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What will I do differently next time?</i>
              </strong>
            </p>{" "}
            <p>
              <br></br>
              If I were to start this project over, I would have made sure I
              completely understood the concept of props and passing information
              from one component to another, and would’ve spent less time trying
              to figure out how to set up an email server on express and node.js
              which was completely unnecessary for this project and would’ve
              saved me a lot of time.
            </p>{" "}
            <br></br>
            <br></br>
            <p>
              If you think I’m a good fit for your company, please be sure to
              reach out via the contact form on my website, where you can also
              download my resume and find me on LinkedIn.
            </p>
          </div>
        </div>
        {/* <button className="close-btn" onClick={handleClose}>
          close
        </button> */}
      </div>
      <div className="close-tab-div">
        <img
          onClick={handleClose}
          className="close-tab-img"
          src={closeTab}
          alt="Close Tab"
        />
      </div>
    </div>
  );
}
