import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import styles from './subjectsLayout.module.css';

export default function SubjectsLayout() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Outlet />
        </div>
    )
}
