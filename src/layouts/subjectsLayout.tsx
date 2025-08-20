import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';

export default function SubjectsLayout() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <Outlet />
        </div>
    )
}
