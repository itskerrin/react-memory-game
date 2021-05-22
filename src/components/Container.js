import { useEffect, useState } from 'react';
import Cards from './Cards';
import blue from '../images/blue-card.jpg';
import darkblue from '../images/darkblue-card.jpg';
import limegreen from '../images/limegreen-card.jpg';
import magenta from '../images/magenta-card.jpg';
import orange from '../images/orange-card.jpg';
import pink from '../images/pink-card.jpg';
import purple from '../images/purple-card.jpg';
import red from '../images/red-card.jpg';
import seagreen from '../images/seagreen-card.jpg';
import yellow from '../images/yellow-card.jpg';

function Container(props) {
  const { gameHandler, score, highestScore } = props;

  let images = [
    { src: blue, title: 'Blue' },
    { src: darkblue, title: 'Dark Blue' },
    { src: limegreen, title: 'Lime Green' },
    { src: magenta, title: 'Magenta' },
    { src: orange, title: 'Orange' },
    { src: pink, title: 'Pink' },
    { src: purple, title: 'Purple' },
    { src: red, title: 'Red' },
    { src: seagreen, title: 'Sea Green' },
    { src: yellow, title: 'Yellow' },
  ];

  const [cards, setCards] = useState(images);

  const shuffleCards = (newShuffle) => {
    for (let i = newShuffle.length - 1; i > 0; i--) {
      let id = Math.floor(Math.random() * i);
      [newShuffle[id], newShuffle[i]] = [newShuffle[i], newShuffle[id]];
    }
  };

  useEffect(() => {
    const newShuffle = [...cards];
    shuffleCards(newShuffle);
    setCards(newShuffle);
  }, [score, highestScore]);

  return (
    <div>
      {cards.map((card) => (
        <Cards card={card} key={card.title} gameHandler={gameHandler} />
      ))}
    </div>
  );
}

export default Container;
