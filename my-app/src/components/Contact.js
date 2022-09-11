import { useState } from "react";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import youtube from "../images/youtube.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div id="contact" className="contact-container">
      <div className="contact--content">
        <div className="contact--description">
          <h1 className="title">Let's Connect 💬</h1>
          <hr className="contact--hr" />
          <p>
            If you consider me a good candidate for an{" "}
            <span className="red">open position</span>, or if you'd like to
            discuss a freelance project, else if you just want to{" "}
            <span className="red">say hello</span>, please drop me a message!
          </p>
          <div className="contact--icons">
            <a
              href="https://www.linkedin.com/in/leo-de-leon-0510741b5/"
              rel="noreferrer"
              target="_blank"
              aria="A link to Leo's LinkedIn profile"
            >
              <img
                className="contact--item"
                src={linkedin}
                alt="LinkedIn Logo"
              ></img>
            </a>

            <a
              href="https://github.com/leodeleonkc"
              rel="noreferrer"
              target="_blank"
              aria="A link to Leo's GitHub profile"
            >
              <img
                className="contact--item"
                src={github}
                alt="GitHub Logo"
              ></img>
            </a>

            <a
              href="https://www.youtube.com/channel/UCqEAmChJTWZrJ0Odh4jrkwg"
              rel="noreferrer"
              target="_blank"
              aria="A link to Leo's YouTube channel"
            >
              {" "}
              <img
                className="contact--item"
                src={youtube}
                alt="YouTube Logo"
              ></img>
            </a>
          </div>
        </div>
        <div className="contact--form">
          <form action="thankyou/thanks" method="POST" name="contact">
            <input
              className="contact--input"
              type="hidden"
              name="form-name"
              value="contact"
            />
            <label for="name" className="hidden">
              name
            </label>
            <input
              className="contact--input"
              type="text"
              name="name"
              id="name"
              placeholder="name"
              autocomplete="off"
              required=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="hidden" for="email">
              email
            </label>
            <input
              className="contact--input"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="hidden" for="message" autocomplete="off">
              message
            </label>
            <textarea
              className="contact--input contact--msg"
              name="message"
              id="message"
              placeholder="message"
              required=""
            ></textarea>
            <div class="submit-container">
              <button
                className="send--btn"
                type="submit"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
