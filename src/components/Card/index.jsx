import { useState } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

export const Card = ({ title, description, img, buttonLabel, setAddress }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleAddress = async (cep) => {
        try {
            setLoading(true)
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

            setAddress(data)
        } catch (err) {
            setLoading(false)
            setError('Ocorreu um erro')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section style={{ display: 'flex', flexDirection: 'column' }}>
            <article className={styles.cardWrapper}>
                <div className={styles.cardImage}>
                    <img src={img} alt="" />
                    <p>{title}, {description}.</p>
                </div>
                <div className={styles.cardInfo}>
                    {loading ? <BeatLoader color={'#123abc'} loading={loading} size={15} /> : (
                        <button onClick={() => handleAddress(buttonLabel)}>{buttonLabel}</button>
                    )}
                    {error && (
                        <p className={styles.error}>{error}</p>
                    )}
                </div>
            </article>
        </section>
    )
}