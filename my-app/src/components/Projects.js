import project1 from "../images/project-1.svg";

export default function Projects() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects--inner">
        <p className="projects--title">
          <span className="red">Click on any project to learn more.</span>
        </p>
        <div className="projects--project">
          <img src={project1} alt="Project 1 Showcase"></img>
          <img src={project1} alt="Project 2 Showcase"></img>
          <img src={project1} alt="Project 3 Showcase"></img>
          <img src={project1} alt="Project 4 Showcase"></img>
        </div>
      </div>
    </div>
  );
}
