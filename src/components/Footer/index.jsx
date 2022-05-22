import React from "react";

/* SVG Icons*/
import { ReactComponent as Telegram } from "../../assets/images/telegram.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";
import { ReactComponent as Vk } from "../../assets/images/vk.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";

const index = () => {
  return (
    <footer className="footer">
      <div className="footer__social social">
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
          <Vk className="social__item" width="21" height="21" fill="#607B96" />
        </a>
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
