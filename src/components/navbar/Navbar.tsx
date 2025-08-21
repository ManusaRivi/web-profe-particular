import styles from './Navbar.module.css';
import github from '../../assets/icons/github.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <Link className={styles.navbarButton} to="/home">Inicio</Link>
            <Link className={styles.navbarButton} to="/about">Sobre mí</Link>
            <Link className={styles.navbarButton} to="/subjects">Materias</Link>
            <Link className={styles.navbarButton} to="/contact">Contacto</Link>
            <a className={styles.navbarButton} style={{ borderLeft: ' 0.5px solid #eeeeee' }} href="https://github.com/ManusaRivi/web-profe-particular" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" />
                GitHub
            </a>
        </div>
    )
}
