import { useState } from 'react';
import Header from './Header';
import Container from './Container';

function Game() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [cardArray, setCardArray] = useState([]);

  // score, card and reset handlers
  const scoreHandler = () => {
    setScore((previousScore) => previousScore + 1);
  };

  const highestScoreHandler = () => {
    setHighestScore(score);
  };

  const cardArrayHandler = (cardId) => {
    setCardArray((previousArray) => [...previousArray, cardId]);
  };

  const resetGameHandler = () => {
    setScore(0);
    setCardArray([]);
  };

  // check if card has already been clicked, if not, increase the score
  const gameHandler = (cardId) => {
    if (!cardArray.includes(cardId)) {
      cardArrayHandler(cardId);
      scoreHandler();
    } else {
      highestScoreHandler();
      resetGameHandler();
    }
  };

  return (
    <div>
      <Header
        score={score}
        highestScore={highestScore}
        resetGame={resetGameHandler}
      />
      <Container
        gameHandler={gameHandler}
        score={score}
        highestScore={highestScore}
      />
    </div>
  );
}

export default Game;
