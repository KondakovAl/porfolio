import React, { useEffect, useState } from "react";
import "./assets/scss/index.scss";

/*Components*/

import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import Footer from "./components/Footer/index";
import Form from "./components/Form/index";
import Aside from "./components/Aside/index";
import Tabs from "./components/Tabs/index";
import ProjectsCards from "./components/ProjectsCards/index";
import Modal from "./components/Modal/index";

/*Icons*/
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";
import { ReactComponent as Instagram } from "./assets/images/instagram.svg";
import { ReactComponent as Vk } from "./assets/images/vk.svg";
import { ReactComponent as Github } from "./assets/images/github.svg";
//*Social Icons//

//*Skills Icons//
import { ReactComponent as Folder } from "./assets/images/folder.svg";
import { ReactComponent as Mail } from "./assets/images/mail.svg";
import { ReactComponent as Phone } from "./assets/images/phone.svg";
import { ReactComponent as Development } from "./assets/images/development.svg";
import { ReactComponent as SkillsIcon } from "./assets/images/skills.svg";

import { ReactComponent as ReactIcon } from "./assets/images/react.svg";
import { ReactComponent as HTMLIcon } from "./assets/images/html.svg";
import { ReactComponent as CSSIcon } from "./assets/images/css.svg";
import { ReactComponent as JSIcon } from "./assets/images/js.svg";
import { ReactComponent as SassIcon } from "./assets/images/sass.svg";
import { ReactComponent as ReduxIcon } from "./assets/images/redux.svg";
import { ReactComponent as TSIcon } from "./assets/images/TS.svg";
import { ReactComponent as GitIcon } from "./assets/images/git.svg";
import { ReactComponent as FigmaIcon } from "./assets/images/figma.svg";

//*Cards Icons*/
import { ReactComponent as HTMLIconCard } from "./assets/images/html-card.svg";
import { ReactComponent as CSSIconCard } from "./assets/images/css-card.svg";
// import { ReactComponent as SassIconCard } from "./assets/images/sass-card.svg";
import { ReactComponent as ReactIconCard } from "./assets/images/react-card.svg";

/*Images*/
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";

const data = {
  links: [
    { name: "hello" },
    { name: "about-me" },
    { name: "projects" },
    { name: "contact-me" },
  ],

  socials: [
    {
      pic: (
        <Telegram
          width="21"
          height="17"
          fill="#607B96"
          className="social__item"
        />
      ),
      href: "https://t.me/JessePaul1",
    },
    {
      pic: (
        <Instagram
          width="21"
          height="21"
          fill="#607B96"
          className="social__item"
        />
      ),
      href: "https://instagram.com/kondakoval",
    },
    {
      pic: (
        <Vk width="21" height="21" fill="#607B96" className="social__item" />
      ),
      href: "https://vk.com/jessepaul",
    },
    {
      pic: (
        <Github
          width="21"
          height="21"
          fill="#607B96"
          className="social__item social-github__item-icon"
        />
      ),
      href: "https://github.com/KondakovAl",
      github: true,
    },
  ],

  widgets: {
    "about-me": [
      {
        title: "personal-info",
        links: [
          { name: "bio", pic: <Folder fill="#E99287" /> },
          { name: "interests", pic: <Folder fill="#43D9AD" /> },
          { name: "education", pic: <Folder fill="#3A49A4" /> },
        ],
      },
      {
        title: "professional-info",
        links: [
          { name: "development", pic: <Development fill="cornflowerblue" /> },
          { name: "skills", pic: <SkillsIcon fill="#C98BDF" /> },
        ],
      },
      {
        title: "contacts",
        links: [
          {
            name: "kondakovalse@gmail.com",
            pic: <Mail fill="#607B96" />,
            linkType: "email",
          },
          {
            name: "+79224170901",
            pic: <Phone fill="#607B96" />,
            linkType: "phone",
          },
        ],
      },
    ],
    projects: [
      {
        title: "projects",
        links: [
          {
            name: "HTML",
            pic: <HTMLIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
          {
            name: "CSS",
            pic: <CSSIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
          {
            name: "Sass",
            pic: <SassIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
          {
            name: "React",

            pic: <ReactIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
          {
            name: "TS",
            pic: <TSIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
          {
            name: "Redux",

            pic: <ReduxIcon fill="rgba(96, 123, 150, 0.4)" />,
            withCheckBox: true,
          },
        ],
      },
    ],

    "contact-me": [
      {
        title: "contacts",
        links: [
          {
            name: "kondakovalse@gmail.com",
            pic: <Mail fill="#607B96" />,
            linkType: "email",
          },
          {
            name: "+79224170901",
            pic: <Phone fill="#607B96" />,
            linkType: "phone",
          },
        ],
      },
      {
        title: "find-me-also-in",
        links: [
          { name: "1", color: "#E99287" },
          { name: "2", color: "#43D9AD" },
          { name: "3", color: "#3A49A4" },
        ],
      },
    ],
  },

  projects: {
    cards: [
      {
        title: "Ava App website",
        direction: "front-end",
        src: project1,
        alt: "project",
        description:
          "This website is a project, that I did to сonsolidate my skills after learning HTML and CSS.",
        stack: [{ icon: <HTMLIconCard /> }, { icon: <CSSIconCard /> }],
      },
      {
        title: "Portfolio page",
        direction: "front-end",
        src: project2,
        alt: "project",
        description:
          "It is my first React practice in which I have created my own portfolio in React, using SCSS and React hooks.",
        stack: [
          { icon: <ReactIconCard /> },
          { icon: <SassIcon fill="#CD6799" /> },
        ],
      },
    ],
  },

  info: {
    skills: [
      {
        icon: <HTMLIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "HTML",
        progress: "90",
      },
      {
        icon: <CSSIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "CSS",
        progress: "80",
      },
      {
        icon: <JSIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "JS",
        progress: "50",
      },
      {
        icon: <SassIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "Sass",
        progress: "60",
      },
      {
        icon: <ReactIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "React",
        progress: "20",
      },
      {
        icon: <ReduxIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "Redux",
        progress: "5",
      },
      {
        icon: <TSIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "TS",
        progress: "5",
      },
      {
        icon: <GitIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "Git",
        progress: "30",
      },
      {
        icon: <FigmaIcon fill="rgba(96, 123, 150, 0.4)" />,
        name: "Figma",
        progress: "95",
      },
    ],
  },
};

const Projects = ({ cards, setIsModalOpen, setModalInfo }) => {
  return (
    <section className="layout__section projects">
      <ProjectsCards
        cards={cards}
        setIsModalOpen={setIsModalOpen}
        setModalInfo={setModalInfo}
      />
    </section>
  );
};

const Skills = ({ skills, index }) => {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <div className="skills__content" key={index}>
          <div className="skills__icon">{skill.icon}</div>
          <div className="skills__text">{skill.name}</div>
          <div className="skills__progress">
            <div
              className="skills__progress-done"
              style={{
                maxWidth: `${skill.progress}%`,
              }}
            >
              {skill.progress}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  /*Main Navigation*/
  const [variant, setVariant] = useState("hello");
  /*Change Main Info+Tabs*/
  const [activeInfo, setActiveInfo] = useState("skills");
  const [activeTab, setActiveTab] = useState("personal-info");
  /*CheckBoxes Filtration*/
  const [stateWithCheckbox, setStateWithCheckbox] = useState([]);
  const [checkbox, setCheckbox] = useState([]);

  /*Modals*/
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  /*Form*/
  const [formInner, setFormInner] = useState(null);
  /*Flag for Typping Effect*/
  const [introFlag, setIntroFlag] = useState(true);

  return (
    <div className="layout">
      <Header variant={variant} setVariant={setVariant} links={data.links} />
      {variant === "hello" && (
        <HomePage introFlag={introFlag} setIntroFlag={setIntroFlag} />
      )}
      {variant === "about-me" && (
        <>
          <main className="about-page">
            <Aside
              className={"about-page"}
              variant={variant}
              widgets={data.widgets}
              activeInfo={activeInfo}
              setActiveInfo={setActiveInfo}
              setActiveTab={setActiveTab}
              stateWithCheckbox={stateWithCheckbox}
              setStateWithCheckbox={setStateWithCheckbox}
              checkbox={checkbox}
              setCheckbox={setCheckbox}
            />
            <div className="about-page__content">
              <Tabs activeTab={activeTab} activeInfo={activeInfo} />
              <div className="info__scroll">
                <div className="info__container">
                  <section
                    className={
                      activeInfo
                        ? `info__content info__${activeInfo}`
                        : `info__content`
                    }
                  >
                    {activeInfo === "skills" && <Skills {...data.info} />}
                  </section>
                </div>
              </div>
            </div>
            <div className="about-page__later">is under development</div>
          </main>
        </>
      )}
      {variant === "projects" && (
        <>
          <main className="project-page">
            <Aside
              className={"project-page"}
              variant={variant}
              widgets={data.widgets}
            />
            <div className="project-page__content">
              <Tabs />
              <Projects
                {...data.projects}
                setModalInfo={setModalInfo}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
            <Modal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              modalInfo={modalInfo}
            />
          </main>
        </>
      )}
      {variant === "contact-me" && (
        <>
          <main className="contact-page">
            <Aside
              className={"contact-page"}
              variant={variant}
              widgets={data.widgets}
            />
            <div className="contact-page__form">
              <Form setFormInner={setFormInner} />
            </div>
            <div className="contact-page__represent">
              <div className="represent__lines">
                <div className="line">
                  <div className="line__number">1</div>
                  <code className="line__text">
                    <span className="line__text_pink">const </span>
                    <span className="line__text_blue">
                      button <span className="line__text_pink"> = </span>
                      document
                    </span>
                    .<span className="line__text_blue">querySelector</span>
                    &#40;<span className="line__text_orange">'#sendBtn'</span>
                    &#41;;
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">2</div>
                  <code className="line__text"></code>
                </div>
                <div className="line">
                  <div className="line__number">3</div>
                  <code className="line__text">
                    <span className="line__text_pink">const </span>
                    <span className="line__text_blue">message </span>
                    <span className="line__text_pink"> = </span>
                    &#123;
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">4</div>
                  <code className="line__text">
                    <span className="line__text_blue">name:</span>
                    <span className="line__text_orange">
                      "{formInner?.name}"
                    </span>
                    ,
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">5</div>
                  <code className="line__text">
                    <span className="line__text_blue">email:</span>
                    <span className="line__text_orange">
                      "{formInner?.email}"
                    </span>
                    ,
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">6</div>
                  <code className="line__text">
                    <span className="line__text_blue">message:</span>
                    <span className="line__text_orange">
                      "{formInner?.message}"
                    </span>
                    ,
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">7</div>
                  <code className="line__text">
                    <span className="line__text_blue">date:</span>
                    <time className="line__text_orange">
                      "{new Date().toDateString()}"
                    </time>
                    ,
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">8</div>
                  <code className="line__text">&#125;</code>
                </div>
                <div className="line">
                  <div className="line__number">9</div>
                  <code className="line__text"></code>
                </div>
                <div className="line">
                  <div className="line__number">10</div>
                  <code className="line__text">
                    <span className="line__text_blue">button</span>.
                    <span className="line__text_blue">addEventListener</span>
                    &#40;<span className="line__text_orange">'click'</span>,
                    &#40; &#41; <span className="line__text_pink">=&gt;</span>
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">11</div>
                  <code className="line__text">
                    <span className="line__text_blue">form</span>.
                    <span className="line__text_blue">send</span>&#40;
                    <span className="line__text_blue">message</span>&#41;;
                  </code>
                </div>
                <div className="line">
                  <div className="line__number">12</div>
                  <code className="line__text">&#125;&#41;</code>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
      <Footer socials={data.socials} />
    </div>
  );
};

export default App;
