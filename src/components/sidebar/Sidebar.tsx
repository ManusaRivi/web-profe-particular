import styles from  './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <a href="/web-profe-particular/subjects/english">Inglés</a>
            <a href="/web-profe-particular/subjects/french">Francés</a>
            <a href="/web-profe-particular/subjects/math">Matemáticas</a>
            <a href="/web-profe-particular/subjects/physics">Física</a>
            <a href="/web-profe-particular/subjects/coding">Programación</a>
        </div>
    )
}