import "./projects.css";
import "../../App.css";
import { useContext, useState } from "react";
// import ModalVideo from "react-modal-video";
import { Context } from "../../Context.js";
// import movie1 from "../../images/video1.jpg";
import closeTabTop from "../../images/close-tab-top.svg";
import exhibitA from "../../images/exhibit-a.png";
import exhibitB from "../../images/exhibit-b.png";

import closeTab from "../../images/close-tab.svg";

export default function ProjectOne() {
  // const [playVideo, setVideo] = useState(false);

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
        {/* {playVideo ? (
          <div className="project-x-movie">
            <iframe
              max-width="785px"
              max-height="785px"
              src="https://www.youtube.com/embed/3jArJkOi3lc?autoplay=1&rel=0"
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
        )} */}

        <h1>03</h1>
        <h1>YOOSHI RESTAURANT PROJECT</h1>
        <div className="project-x-main-text">
          <div className="project-x-main-text-inner">
            <div className="project-x-links">
              <a href="https://www.leodeleon.co/yooshi" target="_blank">
                <button className="close-btn">Live</button>
              </a>
              <a
                href="https://github.com/leodeleonkc/yooshi_japanese/tree/main/my-app"
                target="_blank"
              >
                <button className="close-btn">repo</button>
              </a>
            </div>
            <p>
              The Yooshi Japanese Cuisine project is a functional restaurant web
              app that allows users to look at a menu, add items to the basket,
              as well as find out more about this fictitious restaurant all
              wrapped in a beautiful retro style design, with some subtle
              animation and interactivity built in.
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
              This web app was built using HTML/CSS and React JS via the CRA
              npm. The product array is fetched from a local JSON file which
              mimics what a standard API fetch would return. The data is treated
              as a regular JSON and deconstructed as such. Each menu item comes
              in 3 different sizes, and the data also provides a list of
              ingredients that the user can access directly from the product
              card.
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
              The purpose of the project is to provide a real user experience
              that is fun, simple, and friendly. A lot of local restaurant
              websites lack this interaction and user friendliness, and I wanted
              to use React’s powerful toolbox to create what I’d love to have if
              I owned a restaurant.
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
              I designed this project inspired by a retro product card that I
              came across on Behance. I just loved the layout and the retro feel
              of the design, so I built my web app around it. I utilized assets
              from Envato Elements such as icons and food illustrations.
            </p>
            <br></br>
            <p>
              As far as user experience, one particular design decision on the
              mobile version of the web app, was to include a cart/basket option
              on each product card. After testing the site on my mobile, I felt
              that I needed to have quicker access to the “view cart” option
              which was missing from the original design. The desktop version
              doesn’t require it as it is easier to access the “view cart”
              option, and it also keeps the product cards less cluttered.
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
              I made heavy use of useContext and useState throughout the web
              app, as well as standard vanilla JavaScript for handling arrays.
              There is a lot of data that needs to be transferred between
              elements, such as how many items are contained in the cart array -
              information which is transferred to the NavBar component, the cart
              itself, and it’s generated in the product card component.
              Utilizing mere props would’ve required some workarounds and React
              acrobatics. Luckily, useContext is powerful enough to make this
              process a breeze.
            </p>
            <br></br>
            <p>
              I also used a super fun package called React-Parallax-Mouse, which
              allows the user to interact with elements on screen by moving the
              mouse around. The package attaches the position of these elements
              to the position of the mouse in the DOM and divides these values
              by individual factors determined by me, which causes each element
              to dynamically reposition at different rates based on mouse
              movement, giving the illusion of elements spread out in 3D space.
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
              The biggest thing I learned from this project was how to find
              workarounds to manage arrays in non-conventional ways.
            </p>{" "}
            <br></br>
            <p>
              When you have an array of objects and you need to delete one of
              those objects... how do you delete it when there is more than one
              iteration of the same object without any differentiation (same ID,
              same exact object repeated twice or more), but without deleting
              all the iterations of the object?
            </p>
            <br></br>
            <p>
              The conventional way would have you filter out a specific item
              based on its ID.
            </p>
            {/* <img src={exhibitA} alt="Exhibit A" /> */}
            <p>
              However, in this project when you add a menu item, you have 3 size
              options. The JSON does not contain a separate object for each
              size. Adding them to the cart in the specific size is easy, you
              simply pass an argument with the actual corresponding size.
              However, deleting it from the cart array is where it gets tricky,
              because there is only one ID for each item, but not for each size.
            </p>
            <br></br>
            <img
              style={{
                width: "100%",
              }}
              src={exhibitA}
              alt="Exhibit A"
            />
            <br></br>
            <p>
              If I want to add, say, a large bowl of ramen, then a medium one
              for my kid, but then my kid changes his mind and wants sushi
              instead, I want to delete the medium sized bowl, but not the large
              one, which I cannot accomplish with the conventional way.
            </p>
            <br></br>
            <p>
              The solution? After countless hours and a full sleepless night, I
              stopped looking at ways to identify each specific item by size or
              ID, and instead, went straight to the array, and found the
              specific item in its specific index in the array, and then
              filtered it out based on said index and not on anything else.
            </p>
            <br></br>
            <img
              style={{
                width: "100%",
              }}
              src={exhibitB}
              alt="Exhibit B"
            />
            <br></br>
            <br></br>
            <p>
              <strong>
                <i>What will I do differently next time?</i>
              </strong>
            </p>{" "}
            <p>
              <br></br>I was so focused on the functionality of this web app
              that I did not pay enough attention to the mobile version of it at
              the start, which later I regretted because I had to re-write and
              refactor a lot of code as I did not follow mobile-first practices
              from the start. This was a mistake I will not make again.
            </p>
            <br></br>
            <br></br>
            <p>
              One of the things that happens when you click on the basket (a
              modal), is that the app turns off your ability to scroll. However,
              if you add more than 4 different menu items to the cart, the
              content goes off-screen at the bottom. Had I considered this from
              the start, I would’ve found the workaround sooner and it would’ve
              not taken as much time to implement as everything from that point
              forward would’ve been built on it.
            </p>
            <br></br>
            <br></br>
            <p>
              I implemented a way to allow scrolling within the basket window
              and also added a fade effect as the content gets cut off at the
              top and bottom.
            </p>
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
