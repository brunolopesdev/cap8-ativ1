import { GenericCard } from "../../components/Card/GenericCard"
import styles from './styles.module.css';
import { mockData } from "../../mocks/mockData";

export const Hobbies = () => {
    
    return (
        <>
            <section className={styles.page}>
                <h1>Hobbies</h1>
                <article className={styles.pageWrapper}>
                    {mockData.map((item) => (
                        <GenericCard title={item.nome} img={item.img} description={item.hobbies} key={item.id}/>
                    ))}
                </article>
            </section>
        </>
    )
}