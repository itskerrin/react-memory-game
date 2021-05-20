import { useState } from 'react';

const Game = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  // score, card and reset handlers
  const scoreHandler = () => {
    setScore((previousScore) => previousScore + 1);
  };

  const highScoreHandler = () => {
    setHighScore(score);
  };

  const cardArrayHandler = (cardId) => {
    setCardArray((previousArray) => [...previousArray, cardId]);
  };

  const resetGameHandler = () => {
    setScore(0);
    setCardArray([]);
  };

  return <div></div>;
};

export default Game;
