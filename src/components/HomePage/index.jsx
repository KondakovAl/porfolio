import React from "react";

const index = () => {
  return (
    <main className="home-page">
      <div className="home-page__wrapper">
        <section className="home-page__intro">
          <div className="home-page__about about">
            <span className="about__hello">Hi all. I am</span>
            <span className="about__name">Aleksandr Kondakov</span>
            <span className="about__position">&gt; Front-end developer</span>
          </div>
          <div className="home-page__github github">
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
        <section></section>
      </div>
    </main>
  );
};

export default index;
