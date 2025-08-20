import styles from  './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <a href="/subjects/english">Inglés</a>
            <a href="/subjects/french">Francés</a>
            <a href="/subjects/math">Matemáticas</a>
            <a href="/subjects/physics">Física</a>
            <a href="/subjects/coding">Programación</a>
        </div>
    )
}