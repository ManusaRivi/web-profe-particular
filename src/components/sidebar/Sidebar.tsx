
import { Link } from 'react-router-dom';
import styles from  './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Link to="/subjects/english">Inglés</Link>
            <Link to="/subjects/french">Francés</Link>
            <Link to="/subjects/math">Matemáticas</Link>
            <Link to="/subjects/physics">Física</Link>
            <Link to="/subjects/coding">Programación</Link>
        </div>
    )
}