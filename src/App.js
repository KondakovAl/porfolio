import React, { useEffect, useState } from "react";
import "./assets/scss/index.scss";
import Header from "./components/Header/index";
import Widget from "./components/Widget/index";
import HomePage from "./components/HomePage/index";
import Footer from "./components/Footer/index";
import Form from "./components/Form/index";

/*About-page Icons*/
import { ReactComponent as Close } from "./assets/images/close.svg";

const data = {
  links: [
    { name: "hello" },
    { name: "about-me" },
    { name: "projects" },
    { name: "contact-me" },
  ],

  widgets: [
    {
      title: "personal-info",
      links: [
        { name: "bio", color: "#E99287" },
        { name: "interests", color: "#43D9AD" },
        { name: "education", color: "#3A49A4" },
      ],
    },
    {
      title: "professional-info",
      links: [
        { name: "1", color: "#E99287" },
        { name: "2", color: "#43D9AD" },
        { name: "3", color: "#3A49A4" },
      ],
    },
    {
      title: "contacts",
      links: [
        { name: "s", color: "#E99287" },
        { name: "a", color: "#43D9AD" },
        { name: "s", color: "#3A49A4" },
      ],
    },
  ],
};

const App = () => {
  const [variant, setVariant] = useState("hello");

  return (
    <div className="layout">
      <Header variant={variant} setVariant={setVariant} links={data.links} />
      {variant === "hello" && <HomePage />}
      {variant === "about-me" && (
        <>
          <main className="about-page">
            <aside className="about-page__aside aside">
              <div className="aside__content">
                {data.widgets.map((widget, index) => (
                  <Widget
                    key={index}
                    title={widget.title}
                    links={widget.links}
                  />
                ))}
              </div>
            </aside>
            <div className="about-page__content">
              <div className="file-tabs">
                <div className="file-tabs__tab">
                  <div className="file-tabs__tab-title">personal-info</div>
                  <button className="file-tabs__tab-close">
                    <Close
                      className="file-tabs__tab-close-icon"
                      width="11"
                      height="10"
                      fill="#607B96"
                    />
                  </button>
                </div>
              </div>
              <div className="info__scroll">
                <div className="info__container">
                  <div className="info__personal-info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus totam quas asperiores id est odio dolores sequi
                    debitis nihil nostrum corrupti vel, odit perferendis impedit
                    accusantium obcaecati non eveniet architecto! Repudiandae
                    saepe fugiat quibusdam expedita perferendis soluta dolor
                    magnam voluptatibus, deleniti accusamus, est autem minima
                    consectetur id iste! Minus illum quas sequi facere velit
                    voluptas architecto eligendi facilis laborum fuga! Eaque
                    numquam, sed aspernatur quasi rem aspe overflow: hidden;
                    laudantium aliquid dolor, et explicabo! Laborum impedit
                    vitae est molestiae! Commodi ad nesciunt id iure illo. Vitae
                    aliquid aut maxduntspiciatis incidunt
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
      {variant === "contact-me" && (
        <>
          <main className="contact-page">
            <aside className="contact-page__aside aside">
              <div className="aside__content">
                {data.widgets.map((widget, index) => (
                  <Widget
                    key={index}
                    title={widget.title}
                    links={widget.links}
                  />
                ))}
              </div>
            </aside>
            <div className="contact-page__form">
              <Form />
            </div>
            <div className="contact-page__represent"></div>
          </main>
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
