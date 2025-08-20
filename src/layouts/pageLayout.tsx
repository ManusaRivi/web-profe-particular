import { Outlet } from "react-router-dom";
import "../index.css";

export default function PageLayout() {
    return (
        <>
            <div className="navbar">
                <p style={{ margin: 0}}>
                    Clases particulares!
                </p>
            </div>
            <Outlet />
        </>
    )
}
