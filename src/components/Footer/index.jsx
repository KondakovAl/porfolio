import React from 'react';
import { memo } from 'react';

/*Icons*/
import { ReactComponent as Telegram } from '../../assets/images/telegram.svg';
import { ReactComponent as Instagram } from '../../assets/images/instagram.svg';
import { ReactComponent as Vk } from '../../assets/images/vk.svg';
import { ReactComponent as Github } from '../../assets/images/github.svg';

const dataFooter = {
  socials: [
    {
      pic: (
        <Telegram
          width='21'
          height='17'
          fill='#607B96'
          className='social__item'
        />
      ),
      href: 'https://t.me/JessePaul1',
      // prompt: "",
    },
    {
      pic: (
        <Instagram
          width='21'
          height='21'
          fill='#607B96'
          className='social__item'
        />
      ),
      href: 'https://instagram.com/kondakoval',
      prompt: '*Prohibited in Russia',
    },
    {
      pic: (
        <Vk width='21' height='21' fill='#607B96' className='social__item' />
      ),
      href: 'https://vk.com/jessepaul',
      // prompt: "",
    },
    {
      pic: (
        <Github
          width='21'
          height='21'
          fill='#607B96'
          className='social__item social-github__item-icon'
        />
      ),
      href: 'https://github.com/KondakovAl',
      // prompt: "",
    },
  ],
};

const Footer = memo(() => {
  return (
    <footer className='footer'>
      <div className='footer__social social'>
        <span className='social__text'>find me in:</span>
        {dataFooter.socials.map((social, index) => (
          <a href={social.href} className='social__item-link' key={index}>
            {!social.prompt ? (
              <>{social.pic}</>
            ) : (
              <>
                {social.pic}
                <div className='social__item-prompt'>{social.prompt}</div>
              </>
            )}
          </a>
        ))}
      </div>
      <a href='https://github.com/KondakovAl' className='social-github'>
        <span className='social-github__username'>@KondakovAl</span>
        <div className='social-github__item'>
          <Github
            className='social-github__item-icon'
            width='20'
            height='21'
            fill='#607B96'
          />
        </div>
      </a>
    </footer>
  );
});

export default Footer;
