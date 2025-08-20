import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navbarButton} href="/home">Inicio</a>
            <a className={styles.navbarButton} href="/about">Sobre mí</a>
            <a className={styles.navbarButton} href="/subjects">Materias</a>
            <a className={styles.navbarButton} href="/contact">Contacto</a>
        </div>
    )
}
