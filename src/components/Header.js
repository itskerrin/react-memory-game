import Game from './Game';
import ScoreBoard from './ScoreBoard';

const Header = () => {
  return (
    <div>
      <h1>Memory Game</h1>
      <p>Click on a picture only once.</p>
      <ScoreBoard />
    </div>
  );
};

export default Header;
