import { useEffect, useState } from "react";
import React from "react";
import Game from "../Game/index";

const words = ["HTML programmer", "CSS creator", "Frontend developer"];

const Intro = ({ introFlag, setIntroFlag }) => {
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
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 500 : 100, parseInt(Math.random() * 100)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    return () => setIntroFlag(false);
  }, []);

  return (
    <section className="home-page__intro intro">
      <div className="intro__about about">
        <span className="about__hello">Hi all. I am</span>
        <span className="about__name">Aleksandr Kondakov</span>
        <span className="about__position">
          &gt;
          {introFlag
            ? ` ${words[index].substring(0, subIndex)}`
            : "Frontend Developer"}
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
          <a href="https://github.com/KondakovAl" className="github__code_url">
            “https://github.com/KondakovAl”
          </a>
        </code>
      </div>
    </section>
  );
};

const HomePage = ({ introFlag, setIntroFlag }) => {
  return (
    <main className="home-page">
      <div className="home-page__wrapper">
        <Intro introFlag={introFlag} setIntroFlag={setIntroFlag} />
        <Game />
      </div>
    </main>
  );
};

export default HomePage;
