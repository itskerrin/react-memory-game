import styles from './Header.module.css';

function Header(props) {
  const { score, highestScore, resetGame } = props;

  return (
    <div>
      <h1>Memory Game</h1>
      <p>
        Click on a colour, but make sure not to click the same colour twice!
      </p>
      <h3 className={styles.scoreboard}>
        Current score: {score} | Highest score: {highestScore}
      </h3>
    </div>
  );
}

export default Header;
