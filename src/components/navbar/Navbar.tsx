import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navbarButton} href="/home">Inicio</a>
            <a className={styles.navbarButton}>Sobre mí</a>
            <a className={styles.navbarButton}>Materias</a>
            <a className={styles.navbarButton}>Contacto</a>
        </div>
    )
}
