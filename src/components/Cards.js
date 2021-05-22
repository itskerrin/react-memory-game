import styles from './Cards.module.css';

function Cards(props) {
  const {
    card: { src, title },
    gameHandler,
  } = props;

  return (
    <div>
      <button className={styles.button} onClick={gameHandler.bind(this, title)}>
        <figure>
          <img src={src} alt={title} />
          <figcaption className={styles.caption}>{title}</figcaption>
        </figure>
      </button>
    </div>
  );
}

export default Cards;
