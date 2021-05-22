import styles from './Header.module.css';

function Header(props) {
  const { score, highestScore } = props;

  return (
    <div>
      <h1>Memory Game</h1>
      <p>Click on a picture only once.</p>
      <h3 className={styles.scoreboard}>
        Current score: {score} | Highest score: {highestScore}
      </h3>
    </div>
  );
}

export default Header;
