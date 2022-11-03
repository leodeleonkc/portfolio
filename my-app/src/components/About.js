import aboutMe from "../images/about-me.png";

export default function About() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="about" className="about-container">
      <div className="about--content">
        <div className="about--image">
          <img src={aboutMe} alt="Leo's illustrated headshot"></img>
        </div>
        <div className="about--description">
          <h1 className="title">About Me 👨🏻‍💻</h1>
          <hr className="about--hr" />
          <p>
            Hello again! Thank you for scrolling this far. I recently graduated{" "}
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                openInNewTab(
                  "https://scrimba.com/certificate/uWRDMWuy/gfrontend"
                )
              }
              className="red"
            >
              Scrimba Front End Developer Career Path
            </span>{" "}
            bootcamp.{" "}
          </p>
          <p>
            When I'm not coding, I am building miniatures and
            <span className="red"> making short films</span> about my process. I
            am also passionate about spending quality time with my family, and
            having multiple creative outlets.
          </p>
        </div>
      </div>
    </div>
  );
}
