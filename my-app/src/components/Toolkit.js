import css from "../images/CSS.svg";
import Tailwind from "../images/Tailwind.svg";

import html55 from "../images/HTML5.svg";
import Bootstrap from "../images/Bootstrap.svg";
import JavaScript from "../images/JavaScript.svg";
import OpenAI from "../images/openai.svg";

import Next from "../images/next.svg";

import ReactJS from "../images/React.svg";
import ReactNative from "../images/React-Native.svg";

export default function Toolkit() {
  return (
    <div id="toolkit" className="toolkit-container">
      <div className="toolkit--content">
        <div className="toolkit--description">
          <h1 className="title">My Toolkit 💻</h1>
          <hr className="toolkit--hr" />
        </div>
        <div className="toolkit--skills">
          <img className="toolkit--item" src={html55} alt="HTML 5 Logo"></img>
          {/* <img className="toolkit--item" src={css} alt="CSS 3 Logo"></img> */}
          <img
            className="toolkit--item"
            src={Tailwind}
            alt="Tailwind CSS Logo"
          ></img>

          <img className="toolkit--item" src={OpenAI} alt="OpenAI Logo"></img>
          {/* <img
            className="toolkit--item"
            src={JavaScript}
            alt="JavaScript Logo"
          ></img> */}
          <img className="toolkit--item" src={Next} alt="NextJS Logo"></img>
          <img
            className="toolkit--item"
            src={ReactJS}
            alt="React JS Logo"
          ></img>
          <img
            className="toolkit--item"
            src={ReactNative}
            alt="React Native Icon"
          ></img>
        </div>
      </div>
    </div>
  );
}
