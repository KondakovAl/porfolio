import React from "react";

/*Icons*/
import { ReactComponent as Github } from "../../assets/images/github.svg";

const index = ({ socials }) => {
  return (
    <footer className="footer">
      <div className="footer__social social">
        <span className="social__text">find me in:</span>
        {socials.map((social, index) => (
          <a href={social.href} className="social__item-link" key={index}>
            <>{social.pic}</>
          </a>
        ))}
      </div>
      <a href="https://github.com/KondakovAl" className="social-github">
        <span className="social-github__username">@KondakovAl</span>
        <div className="social-github__item">
          <Github
            className="social-github__item-icon"
            width="20"
            height="21"
            fill="#607B96"
          />
        </div>
      </a>
    </footer>
  );
};

export default index;
