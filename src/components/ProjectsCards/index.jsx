import React from "react";
import Button from "../Button";

/*Images For Projects*/
import project1 from "../../assets/images/project1.png";
import project2 from "../../assets/images/project2.png";

const modalData = [
  {
    name: "Ava App website",
    about:
      "In this project I used HTML + CSS without preprocessors and try to use JS just a little. Also I make some CSS animations",
    stack: "HTML, CSS, JS",
    date: "May, 2022",
    vercel: "https://ava-app-two.vercel.app/",
    src: project1,
  },
  {
    name: "Portfolio page",
    about:
      "This is my first project, that I made using React and SCSS, I also used following libraries: react-hook-form and react-scrollbar-custom",
    stack: "HTML, SCSS, React",
    date: "June, 2022",
    vercel: "https://porfolio-green.vercel.app/",
    src: project2,
  },
];

const ProjectsCard = ({
  title,
  direction,
  src,
  alt,
  description,
  icons,
  setIsModalOpen,
  setModalInfo,
  index,
}) => {
  return (
    <div className="projects__card card">
      <div className="card__header">
        <span className="card__header-title">{title}</span>
        <span className="card__header-direction">\\ _{direction}</span>
      </div>
      <div className="card__main">
        <div className="card__main-image-container">
          <img src={src} alt={alt} className="card__main-image" />
          <div className="card__main-icons-container">
            {icons.map((icon, index) => (
              <div className="card__main-icon-container" key={index}>
                {icon.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="card__main-container">
          <p className="card__main-description">{description}</p>
          <Button
            className={"card__main-button"}
            onClick={() => {
              setModalInfo(modalData[index]);
              setIsModalOpen(true);
            }}
          >
            view-project
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsCards = ({
  cards,
  setIsModalOpen,
  setModalInfo,
  filtredCards,
}) => {
  return (
    <div className="projects__cards">
      {cards.map((card, index) => (
        <ProjectsCard
          {...card}
          key={index}
          index={index}
          setIsModalOpen={setIsModalOpen}
          setModalInfo={setModalInfo}
        />
      ))}
    </div>
  );
};

export default ProjectsCards;
