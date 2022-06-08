import React from "react";

const ProjectsCard = ({ title, direction, src, alt, description, stack }) => {
  return (
    <div className="projects__card card">
      <div className="card__header">
        <span className="card__header-title">{title}</span>
        <span className="card__header-direction">// _{direction}</span>
      </div>
      <div className="card__main">
        <div className="card__main-image-container">
          <img src={src} alt={alt} className="card__main-image" />
          <div className="card__main-icons-container">
            {stack.map((item, index) => (
              <div className="card__main-icon-container" key={index}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        <div className="card__main-container">
          <p className="card__main-description">{description}</p>
          <button className="card__main-button form__button">
            view-project
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsCards = ({ cards }) => {
  return (
    <div className="projects__cards">
      {cards.map((card, index) => (
        <ProjectsCard {...card} key={index} index={index} />
      ))}
    </div>
  );
};

export default ProjectsCards;
