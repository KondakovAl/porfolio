import React from "react";

const Food = (dot) => {
  const style = {
    left: `${dot.dot[0]}%`,
    top: `${dot.dot[1]}%`,
  };
  return <div className="snake__point" style={style}></div>;
};

const Snake = (snakeDots) => {
  return (
    <section className="snake__section">
      {snakeDots.snakeDots.map((dot, index) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="snake__dot" key={index} style={style}></div>;
      })}
    </section>
  );
};

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const Game = () => {
  
  const [state, setState] = useState({
    food: getRandomCoordinates(),
    direction: "RIGHT",
    snakeDots: [
      [0, 0],
      [2, 0],
      [4, 0],
      [6, 0],
    ],
  });

  const componentDidMount = () => {
    document.onkeydown = onKeyDown;
  };

  const onKeyDown = (e) => {
    e = e || window.event;
    switch 
  };

  return (
    <section className="game__layout game">
      <div className="snake__board">
        <Snake snakeDots={state.snakeDots} />
        <Food dot={state.food} />
      </div>
      <div className="game__sidebar">
        <div className="game__instructions">
          <span className="game__comment">// use keyboard</span>
          <span className="game__comment">// arrows to play</span>
          <div className="game__keys">
            <div className="game__key game__key_top">
              <span className="game__arrow game__arrow_top"></span>
            </div>
            <div className="game__key game__key_left">
              <span className="game__arrow game__arrow_left"></span>
            </div>
            <div className="game__key game__key_bottom">
              <span className="game__arrow game__arrow_bottom"></span>
            </div>
            <div className="game__key game__key_right">
              <span className="game__arrow game__arrow_right"></span>
            </div>
          </div>
        </div>
        <div className="game__scores">
          <span className="game__comment">// food left</span>
          <div className="game__points-wrapper">
            <div className="game__points">
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
              <span className="game__point"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="game__mark game__mark_top-left">
        <span className="game__mark-close"></span>
      </div>
      <div className="game__mark game__mark_top-right">
        <span className="game__mark-close"></span>
      </div>
      <div className="game__mark game__mark_bottom-right">
        <span className="game__mark-close"></span>
      </div>
      <div className="game__mark game__mark_bottom-left">
        <span className="game__mark-close"></span>
      </div>
    </section>
  );
};

export default Game;
