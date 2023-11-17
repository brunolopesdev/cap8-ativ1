import styles from '../styles.module.css'

export const GenericCard = ({ title, description, img }) => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
            <article className={styles.cardWrapper}>
                <div className={styles.cardImage}>
                    <img src={img} alt="" />
                    <p>{title}</p>
                </div>
                <div className={styles.cardInfo}>
                    <p>{description}</p>
                </div>
            </article>
        </section>
    )
}