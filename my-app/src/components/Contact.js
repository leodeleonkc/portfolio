import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import youtube from "../images/youtube.svg";

export default function Contact() {
  const [status, setStatus] = useState("Send Message");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    setStatus("Sending...");

    try {
      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_KEY
      );
      reset();
    } catch (e) {
      console.log(e);
    }

    setStatus("Message Sent!");
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
            <span className="red">say hello</span>, contact me on social media,
            or send me a message!
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("name", {
                required: true,
              })}
              id="name"
              placeholder="name"
              autocomplete="off"
              required="Please enter your name."
            />
            <label className="hidden" htmlFor="email">
              email
            </label>
            <input
              className="contact--input"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              id="email"
              placeholder="email"
              required="Please enter a valid email address"
            />
            <label className="hidden" htmlFor="message" autocomplete="off">
              message
            </label>
            <textarea
              className="contact--input contact--msg"
              name="message"
              {...register("message", {
                required: true,
              })}
              id="message"
              placeholder="message"
              required="Please enter a valid message"
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
