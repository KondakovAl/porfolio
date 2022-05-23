import React, { useState } from "react";
import "./assets/scss/index.scss";
import Header from "./components/Header/index";
import Widget from "./components/Widget/index";
import HomePage from "./components/HomePage/index";
import Footer from "./components/Footer/index";

/*About-page Icons*/
/*Tabs Icons*/
import { ReactComponent as TabsProf } from "./assets/images/tabs-prof.svg";
import { ReactComponent as TabsPers } from "./assets/images/tabs-pers.svg";

const App = () => {
  const [active, setActive] = useState();

  return (
    <div className="layout">
      <Header />
      <main className="about-page">
        <aside className="about-page__aside aside">
          <nav className="aside__tabs tabs">
            <a className="tabs__item-link">
              <TabsProf
                className="tabs__item"
                width="24"
                height="25"
                fill="#607B96"
              />
            </a>
            <a className="tabs__item-link">
              <TabsPers
                className="tabs__item"
                width="24"
                height="25"
                fill="#607B96"
              />
            </a>
          </nav>
          <div className="aside__content">
            <Widget
              title={"personal-info"}
              active={active}
              setActive={setActive}
            />
            <Widget
              title={"professional-info"}
              active={active}
              setActive={setActive}
            />
            <Widget title={"contacts"} active={active} setActive={setActive} />
          </div>
        </aside>
        <div className="about-page__content"></div>
      </main>
      {/* <HomePage /> */}
      <Footer />
    </div>
  );
};

export default App;
