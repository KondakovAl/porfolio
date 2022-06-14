import { useEffect, useState } from "react";
import React from "react";

const words = ["HTML programmer", "CSS creator", "Frontend developer"];

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <main className="home-page">
      <div className="home-page__wrapper">
        <section className="home-page__intro intro">
          <div className="intro__about about">
            <span className="about__hello">Hi all. I am</span>
            <span className="about__name">Aleksandr Kondakov</span>
            <span className="about__position">
              &gt;{` ${words[index].substring(0, subIndex)}`}
            </span>
          </div>
          <div className="intro__github github">
            <span className="github__comment">
              // complete the game to continue
            </span>
            <span className="github__comment">
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
        <section className="game__layout game">
          <div className="game__board"></div>
          <div className="game__sidebar">
            <div className="game__instructions">
              <span className="game__comment">// use keyboard</span>
              <span className="game__comment">// arrows to play</span>
              <div className="game__keys">
                <div className="game__key game__key_top">
                  <span className="game__arrow game__arrow_top"></span>
                </div>
                <div className="game__key game__key_left">
                  <span className="game__arrow game__arrow_left"></span>
                </div>
                <div className="game__key game__key_bottom">
                  <span className="game__arrow game__arrow_bottom"></span>
                </div>
                <div className="game__key game__key_right">
                  <span className="game__arrow game__arrow_right"></span>
                </div>
              </div>
            </div>
            <div className="game__scores">
              <span className="game__comment">// food left</span>
              <div className="game__points-wrapper">
                <div className="game__points">
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                </div>
                <div className="game__points">
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                  <span className="game__point"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="game__mark game__mark_top-left">
            <span className="game__mark-close"></span>
          </div>
          <div className="game__mark game__mark_top-right">
            <span className="game__mark-close"></span>
          </div>
          <div className="game__mark game__mark_bottom-right">
            <span className="game__mark-close"></span>
          </div>
          <div className="game__mark game__mark_bottom-left">
            <span className="game__mark-close"></span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
