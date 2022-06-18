import React, { useCallback, useEffect, useState } from "react";

const Food = ({ food }) => {
  const style = {
    left: `${food[0]}px`,
    top: `${food[1]}px`,
  };
  return <div className="snake__point" style={style}></div>;
};

const Snake = ({ snakeDots }) => {
  return (
    <section className="snake__section">
      {snakeDots.map((dot, index) => {
        const style = {
          left: `${dot[0]}px`,
          top: `${dot[1]}px`,
        };
        return <div className="snake__dot" key={index} style={style}></div>;
      })}
    </section>
  );
};

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 8;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 8;
  return [x, y];
};

const Game = () => {
  const [snakeDots, setSnakeDots] = useState([
    [88, 96],
    [88, 104],
    [88, 112],
    [88, 120],
    [88, 128],
    [88, 136],
    [88, 144],
    [88, 152],
    [88, 160],
    [88, 168],
    [88, 176],
    [96, 176],
    [104, 176],
    [112, 176],
    [120, 176],
    [128, 176],
    [136, 176],
    [136, 184],
    [136, 192],
    [136, 200],
    [136, 208],
    [136, 216],
    [136, 224],
    [136, 232],
  ]);

  const [food, setFood] = useState(getRandomCoordinates());
  const [direction, setDirection] = useState("DOWN");
  const [speed, setSpeed] = useState(100);
  const [score, setScore] = useState(0);
  // const [isGameWin, setIsGameWin] = useState(false);
  const [alive, setAlive] = useState(false);

  useEffect(() => {
    checkIfOutOfBorders();
    checkIfCollaped();
    checkIfEat();
    setTimeout(() => moveSnake(snakeDots), speed, alive);
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
    (snakeDots) => {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case "RIGHT":
          head = [head[0] + 8, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 8, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 8];
          break;
        case "UP":
          head = [head[0], head[1] - 8];
          break;

        default:
          break;
      }
      if (direction) {
        dots.push(head);
        dots.shift();
        setSnakeDots([...dots]);
      }
    },
    [direction]
  );

  const checkIfOutOfBorders = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    if (head[0] >= 240 || head[1] >= 400 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  };

  const checkIfCollaped = () => {
    let snake = [...snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        onGameOver();
      }
    });
  };

  const checkIfEat = async () => {
    let head = snakeDots[snakeDots.length - 1];
    let myfood = food;

    if (head[0] === myfood[0] && head[1] === myfood[1]) {
      setFood(getRandomCoordinates());
      console.log(score);
      console.log(speed);
      await enLargeSnake();
      // increaseSpeed();
      setScore(score + 1);
    }
  };

  const enLargeSnake = async () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 10);
    }
  };

  const onGameOver = () => {
    setAlive(false);
    // alert(`Game Over. Lenght of the snake is ${snakeDots.length - 1}`);
    setDirection(null);
  };

  const rePlay = () => {
    setDirection("RIGHT");
    setScore(0);
    setAlive(true);
  };

  const onWin = () => {};

  return (
    <section className="game__layout game">
      <div className="snake__board">
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
        {/* <button className="game-start__button">start-game</button>
        <section className="snake__section_game-over game-over">
          <span className="game-over__text">game over!</span>
          <button className="game-over__button">start-again</button>
        </section> */}
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
