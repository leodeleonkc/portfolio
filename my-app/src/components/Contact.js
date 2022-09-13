import { useState } from "react";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import youtube from "../images/youtube.svg";

export default function Contact() {
  const [status, setStatus] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5002/components/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Message Sent!");
    let result = await response.json();
    console.log(result.status);
    details = {
      name: (name.value = ""),
      email: (email.value = ""),
      message: (message.value = ""),
    };
    console.log("Thanks!");
    document.getElementById("leo").classList.add("hidden");
    document.getElementById("leo-thank-you").classList.remove("hidden");
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };
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
          <form onSubmit={handleSubmit}>
            <input
              className="contact--input"
              type="hidden"
              name="form-name"
              value="contact"
            />
            <label htmlFor="name" className="hidden">
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
            />
            <label className="hidden" htmlFor="email">
              email
            </label>
            <input
              className="contact--input"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required=""
            />
            <label className="hidden" htmlFor="message" autocomplete="off">
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
              <button className="send--btn" type="submit">
                {status}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
