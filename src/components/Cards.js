import styles from './Cards.module.css';

function Cards(props) {
  const {
    card: { src, title },
    gameHandler,
  } = props;

  return (
    <div className={styles.grid}>
      <button className={styles.button} onClick={gameHandler.bind(this, title)}>
        <figure>
          <img src={src} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </button>
    </div>
  );
}

export default Cards;
