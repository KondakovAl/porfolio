import React from "react";
import "./assets/scss/index.scss";

/* SVG Icons for Footer*/
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";
import { ReactComponent as Instagram } from "./assets/images/instagram.svg";
import { ReactComponent as Vk } from "./assets/images/vk.svg";
import { ReactComponent as Github } from "./assets/images/github.svg";

function App() {
  return (
    <div className="layout">
      {/* Header Component */}
      <header className="header">
        <span className="logo">aleksandr-kondakov</span>
        <nav className="navigation">
          <a href="" className="navigation__item">
            _hello
          </a>
          <a href="" className="navigation__item">
            _about-me
          </a>
          <a href="" className="navigation__item">
            _projects
          </a>
          <a href="" className="navigation__item">
            _contact-me
          </a>
        </nav>
      </header>
      {/* Home-page Component */}
      <main className="home-page">
        <div className="home-page__wrapper">
          <section className="home-page__intro">
            <div className="about">
              <span className="about__salute">Hi all. I am</span>
              <span className="about__name">Aleksandr Kondakov</span>
              <span className="about__position">> Front-end developer</span>
            </div>
            <div className="github">
              <span className="github__comment">
                // complete the game to continue
              </span>
              <span className="github__game">
                // you can also see it on my Github page
              </span>
              <code className="github__code">
                <span className="github__code_const">const</span>
                <span className="github__code_link">githubLink</span>
                <span className="github__code_equal">=</span>
                <a
                  href="https://github.com/KondakovAl"
                  className="github__code_url"
                >
                  “https://github.com/KondakovAl”
                </a>
              </code>
            </div>
          </section>
          <section></section>
        </div>
      </main>
      {/* Footer Component */}
      <footer className="footer">
        <div className="social">
          <span className="social__text">find me in:</span>
          <a href="https://t.me/JessePaul1" className="social__item-link">
            <Telegram
              className="social__item"
              width="21"
              height="17"
              fill="#607B96"
            />
          </a>
          <a
            href="https://instagram.com/kondakoval"
            className="social__item-link"
          >
            <Instagram
              className="social__item"
              width="21"
              height="21"
              fill="#607B96"
            />
          </a>
          <a href="https://vk.com/jessepaul" className="social__item-link">
            <Vk
              className="social__item"
              width="21"
              height="21"
              fill="#607B96"
            />
          </a>
        </div>
        <a href="https://github.com/KondakovAl" className="social-gthb">
          <span className="social-gthb__username">@KondakovAl</span>
          <div className="social-gthb__item">
            <Github
              className="social-gthb__item-pic"
              width="20"
              height="21"
              fill="#607B96"
            />
          </div>
        </a>
      </footer>
    </div>
  );
}

export default App;
