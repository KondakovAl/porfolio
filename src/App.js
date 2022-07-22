import React, { useEffect, useState } from "react";
import "./assets/scss/index.scss";

/*Components*/

import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import Footer from "./components/Footer/index";
import Slider from "./components/Slider";
import Form from "./components/Form/index";
import Aside from "./components/Aside/index";
import Tabs from "./components/Tabs/index";
import ProjectsCards from "./components/ProjectsCards/index";
import Modal from "./components/Modal/index";
import Button from "./components/Button";

/*Icons*/
import { ReactComponent as Telegram } from "./assets/images/telegram.svg";
import { ReactComponent as Instagram } from "./assets/images/instagram.svg";
import { ReactComponent as Vk } from "./assets/images/vk.svg";
import { ReactComponent as Github } from "./assets/images/github.svg";
//*Social Icons//

//*Education Icons//
import { ReactComponent as MPEIBach } from "./assets/images/MPEI-Bach.svg";
import { ReactComponent as MPEIMag } from "./assets/images/MPEI-Mag.svg";
import { ReactComponent as MPEICour } from "./assets/images/MPEI-Cour.svg";
import { ReactComponent as CoursesEng } from "./assets/images/Courses-Eng.svg";
import { ReactComponent as CoursesFront } from "./assets/images/Courses-Front.svg";

/*IMPORTING FROM INDEX*/
import { bachDiploma, Courses, CV, FCE } from "./images/index";

/*Interests*/
import { ReactComponent as Gaming } from "./assets/images/interests_gaming.svg";
import { ReactComponent as Volleyball } from "./assets/images/interests_volleyball.svg";
import { ReactComponent as Swimming } from "./assets/images/interests_swimming.svg";
import { ReactComponent as Tennis } from "./assets/images/interests_tennis.svg";
import { ReactComponent as Travelling } from "./assets/images/interests_travelling.svg";
import { ReactComponent as Camping } from "./assets/images/interests_camping.svg";

//*Skills Icons//
import { ReactComponent as Folder } from "./assets/images/folder.svg";
import { ReactComponent as Mail } from "./assets/images/mail.svg";
import { ReactComponent as Phone } from "./assets/images/phone.svg";
import { ReactComponent as DevelopmentIcon } from "./assets/images/development.svg";
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

//*Slides//
import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";
import slide4 from "./assets/images/slide4.jpg";
import slide5 from "./assets/images/slide5.jpg";
import slide6 from "./assets/images/slide6.jpg";
import slide7 from "./assets/images/slide7.jpg";

//*Cards Icons*/
import { ReactComponent as HTMLIconCard } from "./assets/images/html-card.svg";
import { ReactComponent as CSSIconCard } from "./assets/images/css-card.svg";
// import { ReactComponent as SassIconCard } from "./assets/images/sass-card.svg";
import { ReactComponent as ReactIconCard } from "./assets/images/react-card.svg";

/*Images*/
import project1 from "./assets/images/project1.png";
import project2 from "./assets/images/project2.png";

/*Burger*/

import { useWindowWidth } from "./hooks/useWindowWidth";

const data = {
  links: [
    { name: "hello" },
    { name: "about-me" },
    { name: "projects" },
    { name: "contact-me" },
  ],

  images: [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
    <img key={slide5} src={slide5} />,
    <img key={slide6} src={slide6} />,
    <img key={slide7} src={slide7} />,
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
      // prompt: "",
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
      prompt: "*Prohibited in Russia",
    },
    {
      pic: (
        <Vk width="21" height="21" fill="#607B96" className="social__item" />
      ),
      href: "https://vk.com/jessepaul",
      // prompt: "",
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
      // prompt: "",
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
          {
            name: "development",
            pic: <DevelopmentIcon fill="cornflowerblue" />,
          },
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
        stack: ["HTML", "CSS"],
        icons: [{ icon: <HTMLIconCard /> }, { icon: <CSSIconCard /> }],
      },
      {
        title: "Portfolio page",
        direction: "front-end",
        src: project2,
        alt: "project",
        description:
          "It is my first React practice in which I have created my own portfolio in React, using SCSS and React hooks.",
        stack: ["React", "Sass"],
        icons: [
          { icon: <ReactIconCard /> },
          { icon: <SassIcon fill="#CD6799" /> },
        ],
      },
    ],
  },

  info: {
    bio: {
      title: "Soft-Skills",
      skills: [
        { skill: "Organization" },
        { skill: "Planning" },
        { skill: "Analysis" },
        { skill: "Logical reasoning" },
        { skill: "Active listeting" },
        { skill: "Self-motivation" },
        { skill: "Experimentation" },
        { skill: "Questioning" },
        { skill: "Self-management" },
        { skill: "Calmness" },
      ],
    },

    interests: {
      title: "Interests",
      interests: [
        { icon: <Travelling fill="white" />, interest: "Travelling" },
        { icon: <Camping fill="white" />, interest: "Camping" },
        { icon: <Volleyball fill="white" />, interest: "Volleyball" },
        { icon: <Swimming fill="white" />, interest: "Swimming" },
        { icon: <Tennis fill="white" />, interest: "Tennis" },
        { icon: <Gaming fill="white" />, interest: "Gaming" },
      ],
    },

    education: [
      {
        step: "SkillCocks University",
        icon: <CoursesFront fill="white" />,
        place: "Self-taught",
        location: "Planet Earth",
        specialization: "Frontend Developer",
        time: "2022 - Present",
        href: CV,
        download: "CV",
      },
      {
        step: "Cambridge Certificate",
        icon: <CoursesEng fill="white" />,
        place: "Surgut school of foreign languages",
        location: "Surgut",
        specialization: "FCE (B2 Upper-Intermediate)",
        time: "2010 - 2017",
        href: FCE,
        download: "certificate",
      },
      {
        step: "University",
        icon: <MPEIBach fill="white" />,
        place: "Moscow Power Engineering Institute",
        location: "Moscow",
        specialization:
          "Bachelor's Degree (Electrical Power Systems and Networks)",
        time: "2017 - 2021",
        href: bachDiploma,
        download: "diploma",
      },
      {
        step: "University",
        icon: <MPEICour fill="white" />,
        place: "Moscow Power Engineering Institute",
        location: "Moscow",
        specialization:
          "Retraining courses (Translator in the field of professional communication)",
        time: "2017 - 2019",
        href: Courses,
        download: "courses",
      },
      {
        step: "University",
        icon: <MPEIMag fill="white" />,
        place: "Moscow Power Engineering Institute",
        location: "Moscow",
        specialization:
          "Master's Degree (Engineering in electric power industry)",
        time: "2021 - Present",
        href: "",
        download: "",
      },
    ],

    development: {
      title: "Experience",
      development: [
        {
          time: "6 months",
          company: "self-learning",
          description: `I love developing great frontends and React is the one I feel most confident. I use React, SASS, and Typescript mostly. I've developed some react apps as PET projects, you can check it in the tab "_projects".`,
        },
      ],
    },

    skills: {
      title: "Hard-Skills",
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
  },
};

const Bio = ({ bio }) => {
  return (
    <article className="bio">
      <p className="bio__text">
        <span className="bio__text_peach">Hello World!</span> I'm{" "}
        <span className="bio__text_light">Aleksandr Kondakov</span>,{" "}
        <span className="bio__text_light-green">a Front-End Web Developer</span>{" "}
        based out Moscow. I started my jorney as a developer in{" "}
        <span className="bio__text_light">February 2022</span> and I still
        exploring technologies and frameworks that catch my interest.
      </p>
      <p className="bio__text">
        I'm aware this is a fast growing, morden industry. Therefore, I made
        sure to learn and use frameworks and tools such as{" "}
        <span className="bio__text_blue">React</span>,{" "}
        <span className="bio__text_blue">TypeScript</span>,{" "}
        <span className="bio__text_blue">Redux</span>,{" "}
        <span className="bio__text_blue">SASS</span> in order to effeciently
        build websites using laterst tools.
      </p>
      <p className="bio__text">
        I'm now looking for a junior dev position to finaly kick start to my
        career and learn amoung professionals.{" "}
        <span className="bio__text_light">Drop me a line</span> in the contact
        form in the tab "_contact-me" or check me at socials below, also you can
        look at tab "contacts" in sidebar to call me or write a letter.
      </p>
      <div className="bio__soft-skills soft-skills">
        <h2 className="soft-skills__title title">{bio.title}</h2>
        <div className="soft-skills__item-container">
          {bio.skills.map((skill, index) => (
            <div className="soft-skills__item" key={index}>
              {skill.skill}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

const Interests = ({ interests }) => {
  return (
    <div className="interests">
      <h2 className="interests__title title">{interests.title}</h2>
      <ul className="interests__container">
        {interests.interests.map((int, index) => (
          <li className="interests__item-container" key={index}>
            <div className="interests__icon-container">{int.icon}</div>
            <div className="interest__text">{int.interest}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Education = ({ education }) => {
  return (
    <div className="education">
      {education.map((ed, index) => (
        <div className="education__content" key={index}>
          <div className="education__step">{ed.step}</div>
          <div className="education__description-container">
            <div className="education__icon-container">{ed.icon}</div>
            <p className="education__text">
              <span className="education__text_light">{ed.place} </span>/{" "}
              {ed.location}
            </p>
          </div>
          <div className="education__description-container">
            <p className="education__text">
              {ed.specialization} / {ed.time}
            </p>
          </div>
          {ed.href && ed.download ? (
            <div className="education__link-container">
              <a
                href={ed.href}
                download={`${ed.download}.pdf`}
                className="education__link"
              >
                <Button
                  className={"education__button"}
                >{`download-${ed.download}`}</Button>
              </a>
            </div>
          ) : (
            <Button className={"education__button"} disabled>
              ...in process
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

const Development = ({ development }) => {
  return (
    <div className="development">
      <h2 className="development__title title">{development.title}</h2>
      <div className="development__container">
        {development.development.map((dev, index) => (
          <div className="development__content" key={index}>
            <p className="development__text_colored">{dev.time}</p>
            <p className="development__text">
              <span className="development__text_option">company:</span>
              {dev.company}
            </p>
            <p className="development__text">
              <span className="development__text_option">description:</span>
              {dev.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <div className="skill__title title">{skills.title}</div>
      <ul className="skills__container">
        {skills.skills.map((skill, index) => (
          <li className="skills__content" key={index}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

const Projects = ({ cards, setIsModalOpen, setModalInfo, filtredCards }) => {
  return (
    <section className="layout__section projects">
      <ProjectsCards
        filtredCards={filtredCards}
        cards={cards}
        setIsModalOpen={setIsModalOpen}
        setModalInfo={setModalInfo}
      />
    </section>
  );
};

const Represent = ({ formInner }) => {
  const getTime = () => {
    let date = new Date();

    let hours = date.getHours();
    hours = hours < 10 ? `0${hours}` : hours;

    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    let seconds = date.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return { hours, minutes, seconds };
  };

  const [timeNow, setTimeNow] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      setTimeNow(getTime());
    }, 1000);
  }, []);

  return (
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
          <span className="line__text_orange">"{formInner?.name}"</span>,
        </code>
      </div>
      <div className="line">
        <div className="line__number">5</div>
        <code className="line__text">
          <span className="line__text_blue">email:</span>
          <span className="line__text_orange">"{formInner?.email}"</span>,
        </code>
      </div>
      <div className="line">
        <div className="line__number">6</div>
        <code className="line__text">
          <span className="line__text_blue">message:</span>
          <span className="line__text_orange">"{formInner?.message}"</span>,
        </code>
      </div>
      <div className="line">
        <div className="line__number">7</div>
        <code className="line__text">
          <span className="line__text_blue">time:</span>
          <time className="line__text_orange">
            "{`${timeNow.hours}:${timeNow.minutes}:${timeNow.seconds}`}"
          </time>
          ,
        </code>
      </div>
      <div className="line">
        <div className="line__number">8</div>
        <code className="line__text">
          <span className="line__text_blue">date:</span>
          <time className="line__text_orange">
            "{new Date().toDateString()}"
          </time>
          ,
        </code>
      </div>
      <div className="line">
        <div className="line__number">9</div>
        <code className="line__text">&#125;</code>
      </div>
      <div className="line">
        <div className="line__number">10</div>
        <code className="line__text"></code>
      </div>
      <div className="line">
        <div className="line__number">11</div>
        <code className="line__text">
          <span className="line__text_blue">button</span>.
          <span className="line__text_blue">addEventListener</span>
          &#40;<span className="line__text_orange">'click'</span>, &#40; &#41;{" "}
          <span className="line__text_pink">=&gt;</span>
        </code>
      </div>
      <div className="line">
        <div className="line__number">12</div>
        <code className="line__text">
          <span className="line__text_blue">form</span>.
          <span className="line__text_blue">send</span>&#40;
          <span className="line__text_blue">message</span>&#41;;
        </code>
      </div>
      <div className="line">
        <div className="line__number">13</div>
        <code className="line__text">&#125;&#41;</code>
      </div>
    </div>
  );
};

const App = () => {
  /*Main Navigation*/
  const [variant, setVariant] = useState("hello");
  /*Change Main Info+Tabs*/
  const [activeInfo, setActiveInfo] = useState("bio");
  const [activeTab, setActiveTab] = useState("personal-info");
  /*CheckBoxes Filtration*/
  const [stateWithCheckbox, setStateWithCheckbox] = useState([]);

  const [filtredCards, setFiltredCards] = useState([]);

  // useEffect(() => {
  //   setFiltredCards(
  //     data.projects.cards.filter((card) => {
  //       if (
  //         card.stack.some((stackItem) => stateWithCheckbox.includes(stackItem))
  //       ) {
  //         return card;
  //       }
  //       return null;
  //     })
  //   );
  // }, [stateWithCheckbox]);

  /*Modals*/
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  /*Form*/
  const [formInner, setFormInner] = useState(null);
  /*Flag for Typping Effect*/
  const [introFlag, setIntroFlag] = useState(true);

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="layout">
      <Header
        variant={variant}
        setVariant={setVariant}
        links={data.links}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
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
            />
            <div className="about-page__content">
              <Tabs
                variant={variant}
                activeTab={activeTab}
                activeInfo={activeInfo}
              />
              <section
                className={
                  activeInfo
                    ? `info__content info__${activeInfo}`
                    : `info__content`
                }
              >
                {activeInfo === "bio" && <Bio {...data.info} />}
                {activeInfo === "interests" && <Interests {...data.info} />}
                {activeInfo === "education" && <Education {...data.info} />}
                {activeInfo === "development" && <Development {...data.info} />}
                {activeInfo === "skills" && <Skills {...data.info} />}
              </section>
            </div>
            <div className="about-page__slider-container">
              <Slider img={data.images} />
            </div>
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
              stateWithCheckbox={stateWithCheckbox}
              setStateWithCheckbox={setStateWithCheckbox}
            />
            <div className="project-page__content">
              <Tabs variant={variant} stateWithCheckbox={stateWithCheckbox} />
              <Projects
                {...data.projects}
                filtredCard={filtredCards}
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
            <section className="contact-page__form">
              <Form setFormInner={setFormInner} />
            </section>
            <section className="contact-page__represent represent">
              <Represent formInner={formInner} />
            </section>
          </main>
        </>
      )}
      <Footer socials={data.socials} />
    </div>
  );
};

export default App;
