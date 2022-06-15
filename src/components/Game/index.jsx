import { React, useCallback, useEffect, useState } from "react";

const Food = ({ food }) => {
  const style = {
    left: `${food[0]}%`,
    top: `${food[1]}%`,
  };
  return <div className="snake__point" style={style}></div>;
};

const Snake = ({ snakeDots }) => {
  return (
    <section className="snake__section">
      {snakeDots.map((dot, index) => {
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
  const [snakeDots, setSnakeDots] = useState([
    [0, 0],
    [2, 0],
    [4, 0],
    [6, 0],
    [8, 0],
    [10, 0],
    [12, 0],
    [14, 0],
  ]);
  const [food, setFood] = useState(getRandomCoordinates);
  const [direction, setDirection] = useState("RIGHT");
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    checkIfOutOfBorders();
    setTimeout(() => moveSnake(snakeDots), speed);
  }, [snakeDots]);

  useEffect(() => {
    const onKeyDown = (e) => {
      e = e || window.event;
      switch (e.keyCode) {
        case 38:
          !["DOWN", "UP"].includes(direction) && setDirection("UP");
          break;
        case 40:
          !["DOWN", "UP"].includes(direction) && setDirection("DOWN");
          break;
        case 37:
          !["LEFT", "RIGHT"].includes(direction) && setDirection("LEFT");
          break;
        case 39:
          !["LEFT", "RIGHT"].includes(direction) && setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [direction, setDirection]);

  const moveSnake = useCallback(
    (snakeDots, eaten) => {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;

        default:
          break;
      }
      if (direction) {
        dots.push(head);

        eaten ? setFood(getRandomCoordinates()) : dots.shift();

        setSnakeDots([...dots]);
      }
    },
    [direction]
  );

  const checkIfOutOfBorders = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  };

  const onGameOver = () => {
    // alert(`Game Over. Lenght of the snake is ${snakeDots.length - 1}`);
  };

  return (
    <section className="game__layout game">
      <div className="snake__board">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
        <section className="snake__section_game-over game-over">
          <span className="game-over__text">game over!</span>
          <span className="game-over__button">start-again</span>
        </section>
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
