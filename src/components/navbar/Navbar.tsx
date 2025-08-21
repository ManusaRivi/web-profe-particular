import styles from './Navbar.module.css';
import github from '../../assets/icons/github.svg';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navbarButton} href="/web-profe-particular/home">Inicio</a>
            <a className={styles.navbarButton} href="/web-profe-particular/about">Sobre mí</a>
            <a className={styles.navbarButton} href="/web-profe-particular/subjects">Materias</a>
            <a className={styles.navbarButton} href="/web-profe-particular/contact">Contacto</a>
            <a className={styles.navbarButton} style={{ borderLeft: ' 0.5px solid #eeeeee' }} href="https://github.com/ManusaRivi/web-profe-particular">
                <img src={github} alt="GitHub" />
                GitHub
            </a>
        </div>
    )
}
