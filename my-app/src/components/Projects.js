import { useState, useContext } from "react";
import { Context } from "../Context.js";
import ProjectOne from "./projects/ProjectOne";
import ProjectTwo from "./projects/ProjectTwo";
import ProjectThree from "./projects/ProjectThree";

import "../App.css";
import project1 from "../images/portfolio-webapp.png";
import project2 from "../images/petfinder-webapp.png";
import project3 from "../images/yooshi-webapp.png";

import projectComingSoon from "../images/project-coming-soon.svg";

export default function Projects() {
  const [whatProject, setWhatProject] = useState("");
  const { isClosed, setIsClosed } = useContext(Context);

  console.log(whatProject);

  function handleClick(p) {
    setWhatProject(p);
    setIsClosed(false);
    setTimeout(() => {
      window.location.href = "#single-project";
    }, "100");
  }

  return (
    <div id="projects">
      {isClosed ? (
        <div className="projects-container">
          <div className="projects--inner">
            <p className="projects--title">
              <span className="red">Click on any project to learn more.</span>
            </p>
            <div className="projects--project">
              <img
                onClick={() => handleClick("one")}
                className="projects--img"
                src={project1}
                alt="Project 1 Showcase"
              ></img>
              <img
                onClick={() => handleClick("two")}
                className="projects--img"
                src={project2}
                alt="Project 2 Showcase"
              ></img>
              <img
                onClick={() => handleClick("three")}
                className="projects--img"
                src={project3}
                alt="Project 3 Showcase"
              ></img>
              <img
                className="projects--img"
                src={projectComingSoon}
                alt="Project 4 Showcase"
              ></img>
            </div>
          </div>
        </div>
      ) : !isClosed && whatProject === "one" ? (
        <ProjectOne />
      ) : !isClosed && whatProject === "two" ? (
        <ProjectTwo />
      ) : !isClosed && whatProject === "three" ? (
        <ProjectThree />
      ) : null}
    </div>
  );
}
