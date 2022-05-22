import React from "react";
import "./assets/scss/index.scss";
import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import Footer from "./components/Footer/index";

/*About-page Icons*/
import { ReactComponent as WidgetIcon } from "./assets/images/widget-icon.svg";

const App = () => {
  return (
    <div className="layout">
      <Header />
      <main className="about-page">
        <aside className="about-page__aside">
          <div className="widget">
            <div className="widget__header">
              <button className="widget__header-btn">
                <WidgetIcon className="widget__header-btn-icon" fill="white" />
                <span className="widget__header-btn-text">personal-info</span>
              </button>
            </div>
            <div className="widget__content"></div>
          </div>
          <div className="widget">
            <div className="widget__header">
              <button className="widget__header-btn">
                <WidgetIcon className="widget__header-btn-icon" fill="white" />
                <span className="widget__header-btn-text">contacts</span>
              </button>
            </div>
            <div className="widget__content"></div>
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
