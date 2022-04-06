import styles from './card.module.scss';

const Card = (props) => {
    return <article className={styles.cardContainer}>
        {props.children}
    </article>
}

export default Card;