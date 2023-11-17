import styles from './styles.module.css';

export const Navbar = () => {
    return (
        <>
            <nav className={styles.navContainer}>
                <ul>
                    <li className={styles.navItems}><a href="/">Sobre</a></li>
                    <li className={styles.navItems}><a href="/experiencia">Experiência</a></li>
                    <li className={styles.navItems}><a href="/formacao">Formação</a></li>
                    <li className={styles.navItems}><a href="/hobbies">Hobbies</a></li>
                </ul>
            </nav>
        </>
    )
}