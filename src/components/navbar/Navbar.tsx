import styles from './Navbar.module.css';
import github from '../../assets/icons/github.svg';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navbarButton} href="/home">Inicio</a>
            <a className={styles.navbarButton} href="/about">Sobre mí</a>
            <a className={styles.navbarButton} href="/subjects">Materias</a>
            <a className={styles.navbarButton} href="/contact">Contacto</a>
            <a className={styles.navbarButton} style={{ borderLeft: ' 0.5px solid #eeeeee' }} href="https://github.com/ManusaRivi/web-profe-particular">
                <img src={github} alt="GitHub" />
                GitHub
            </a>
        </div>
    )
}
