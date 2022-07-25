import React, { useEffect, useState, memo } from 'react';
import useSound from 'use-sound';
import eatSuccess1 from '../../assets/sounds/eat_success_1.mp3';
import eatSuccess2 from '../../assets/sounds/eat_success_2.mp3';

const Food = ({ food }) => {
  const style = {
    left: `${food[0]}px`,
    top: `${food[1]}px`,
  };
  return <div className='snake__point' style={style}></div>;
};

const Snake = ({ snakeDots }) => {
  return (
    <section className='snake__section'>
      {snakeDots.map((dot, index) => {
        const style = {
          left: `${dot[0]}px`,
          top: `${dot[1]}px`,
        };
        return <div className='snake__dot' key={index} style={style}></div>;
      })}
    </section>
  );
};

const getRandomCoordinates = () => {
  let x =
    Math.floor((Math.random() * (WIDTH - BLOCK_SIZE)) / BLOCK_SIZE + 1) *
    BLOCK_SIZE;
  let y =
    Math.floor((Math.random() * (HEIGHT - BLOCK_SIZE)) / BLOCK_SIZE + 1) *
    BLOCK_SIZE;
  return [x, y];
};

const BLOCK_SIZE = 8;
const WIDTH = 240;
const HEIGHT = 400;
const SNAKE_START = [
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
];
const POINT__START = [136, 264];
const SPEED__START = 100;

/*Game Param*/
const Game = memo(() => {
  const [snakeDots, setSnakeDots] = useState(SNAKE_START);
  const [food, setFood] = useState(POINT__START);
  const [speed, setSpeed] = useState(SPEED__START);
  const [direction, setDirection] = useState('DOWN');
  const [score, setScore] = useState(0);
  const [alive, setAlive] = useState(false);
  const [gameStatus, setGameStatus] = useState('idle');

  /*Sounds*/
  const [onEatSuccess1] = useSound(eatSuccess1, { volume: 0.25 });
  const [onEatSuccess2] = useSound(eatSuccess2, { volume: 0.9 });

  const randomEatSounds = () => {
    const eatSounds = [onEatSuccess1(), onEatSuccess2()];

    let random = Math.floor(Math.random() * eatSounds.length);
    return eatSounds[random];
  };

  useEffect(() => {
    checkIfOutOfBorders();
    checkIfCollaped();
    checkIfEat();
    checkScore();
    setTimeout(() => moveSnake(snakeDots), speed);
  }, [snakeDots, alive, speed]);

  useEffect(() => {
    const onKeyDown = (e) => {
      e = e || window.event;
      switch (e.keyCode) {
        case 38:
        case 87:
          !['DOWN', 'UP'].includes(direction) && setDirection('UP');
          break;
        case 40:
        case 83:
          !['DOWN', 'UP'].includes(direction) && setDirection('DOWN');
          break;
        case 37:
        case 65:
          !['LEFT', 'RIGHT'].includes(direction) && setDirection('LEFT');
          break;
        case 39:
        case 68:
          !['LEFT', 'RIGHT'].includes(direction) && setDirection('RIGHT');
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [direction]);

  const moveSnake = () => {
    if (alive === true) {
      let dots = [...snakeDots];
      let head = dots[dots.length - 1];

      switch (direction) {
        case 'RIGHT':
          head = [head[0] + BLOCK_SIZE, head[1]];
          break;
        case 'LEFT':
          head = [head[0] - BLOCK_SIZE, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + BLOCK_SIZE];
          break;
        case 'UP':
          head = [head[0], head[1] - BLOCK_SIZE];
          break;

        default:
          break;
      }
      dots.push(head);
      dots.shift();
      setSnakeDots([...dots]);
    }
  };

  const checkIfEat = () => {
    let head = snakeDots[snakeDots.length - 1];
    let myfood = food;

    if (head[0] === myfood[0] && head[1] === myfood[1]) {
      setFood(getRandomCoordinates());
      randomEatSounds();
      enLargeSnake();
      increaseSpeed();
      setScore(score + 1);
    }
  };

  const checkIfOutOfBorders = () => {
    let dots = [...snakeDots];
    let head = dots[dots.length - 1];
    if (head[0] >= WIDTH || head[1] >= HEIGHT || head[0] < 0 || head[1] < 0) {
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

  const enLargeSnake = () => {
    let newSnake = [...snakeDots];
    newSnake.unshift([]);
    setSnakeDots(newSnake);
  };

  const increaseSpeed = () => {
    if (speed > 10) {
      setSpeed(speed - 1);
    }
  };

  const checkScore = () => {
    if (score >= 10) {
      onGameWin();
    }
  };

  const onGameOver = () => {
    setAlive(false);
    setGameStatus('failed');
  };

  const onGameWin = () => {
    setAlive(false);
    setGameStatus('win');
  };

  const rePlay = () => {
    setSnakeDots(SNAKE_START);
    setFood(POINT__START);
    setSpeed(SPEED__START);
    setGameStatus('playing');
    setDirection('DOWN');
    setScore(0);
    setAlive(true);
  };

  return (
    <section className='game__layout game'>
      <div className='snake__board'>
        <Snake snakeDots={snakeDots} />
        <Food food={food} />
        <div className='snake__score'>{score}</div>
        {gameStatus !== 'idle' && gameStatus !== 'playing' && (
          <section className='snake__section_game-over game-over'>
            <span className='game-over__text'>
              {gameStatus === 'win' ? 'WELL DONE!' : 'GAME OVER!'}
            </span>
            <span
              className='game-over__button'
              onClick={() => {
                rePlay();
              }}
            >
              start-again
            </span>
          </section>
        )}
        {gameStatus === 'idle' && (
          <button
            className='game-start__button'
            onClick={() => {
              rePlay();
            }}
          >
            start-game
          </button>
        )}
      </div>
      <div className='game__sidebar'>
        <div className='game__instructions'>
          <span className='game__comment'>// use keyboard</span>
          <span className='game__comment'>// arrows to play</span>
          <div className='game__keys'>
            <div
              className={`game__key game__key_top `}
              onClick={() => {
                !['DOWN', 'UP'].includes(direction) && setDirection('UP');
              }}
            >
              <span className='game__arrow game__arrow_top'></span>
            </div>
            <div
              className='game__key game__key_left'
              onClick={() => {
                !['LEFT', 'RIGHT'].includes(direction) && setDirection('LEFT');
              }}
            >
              <span className='game__arrow game__arrow_left'></span>
            </div>
            <div
              className='game__key game__key_bottom'
              onClick={() => {
                !['DOWN', 'UP'].includes(direction) && setDirection('DOWN');
              }}
            >
              <span className='game__arrow game__arrow_bottom'></span>
            </div>
            <div
              className='game__key game__key_right'
              onClick={() => {
                !['LEFT', 'RIGHT'].includes(direction) && setDirection('RIGHT');
              }}
            >
              <span className='game__arrow game__arrow_right'></span>
            </div>
          </div>
        </div>
        <div className='game__scores'>
          <span className='game__comment'>// food left</span>
          <div className='game__points-wrapper'>
            <div className='game__points'>
              <span
                className={`game__point ${score > 0 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 1 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 2 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 3 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 4 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 5 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 6 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 7 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 8 ? '--active' : ''}`}
              ></span>
              <span
                className={`game__point ${score > 9 ? '--active' : ''}`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className='game__mark game__mark_top-left'>
        <span className='game__mark-close'></span>
      </div>
      <div className='game__mark game__mark_top-right'>
        <span className='game__mark-close'></span>
      </div>
      <div className='game__mark game__mark_bottom-right'>
        <span className='game__mark-close'></span>
      </div>
      <div className='game__mark game__mark_bottom-left'>
        <span className='game__mark-close'></span>
      </div>
    </section>
  );
});

export default Game;
