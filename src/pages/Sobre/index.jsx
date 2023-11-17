import { useState } from "react";
import { Card } from "../../components/Card"
import styles from './styles.module.css';
import { mockData } from "../../mocks/mockData";

export const Sobre = () => {
    const [globalAddress, setGlobalAddress] = useState(null);

    const handleSetAddress = (newAddress) => {
        setGlobalAddress(newAddress);
    };

    return (
        <>
            <section className={styles.page}>
                <h1>Sobre</h1>
                <article className={styles.pageWrapper}>
                    {mockData.map((item) => (
                        <Card title={item.nome} img={item.img} description={item.idade} buttonLabel={item.cep} setAddress={handleSetAddress} key={item.id}/>
                    ))}
                </article>

                {globalAddress && (
                    <div style={{ textAlign: 'center', backgroundColor: '#f1f1f1', width: '300px', padding: '5px' }}>
                        <p>Rua: {globalAddress.logradouro}</p>
                        <p>Bairro: {globalAddress.bairro}</p>
                        <p>Cidade: {globalAddress.localidade}</p>
                        <p>Estado: {globalAddress.uf}</p>
                    </div>
                )}
            </section>
        </>
    )
}