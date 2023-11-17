import { GenericCard } from "../../components/Card/GenericCard"
import styles from './styles.module.css';
import { mockData } from "../../mocks/mockData";

export const Formacao = () => {
    
    return (
        <>
            <section className={styles.page}>
                <h1>Formação</h1>
                <article className={styles.pageWrapper}>
                    {mockData.map((item) => (
                        <GenericCard title={item.nome} img={item.img} description={item.formacao} key={item.id}/>
                    ))}
                </article>
            </section>
        </>
    )
}