import styles from "./card.module.scss";

const Card = (props) => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.cardContainerContent}>{props.children}</div>
    </article>
  );
};

export default Card;
