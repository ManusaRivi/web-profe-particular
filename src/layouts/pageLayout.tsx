import { Outlet } from "react-router-dom";
import "../index.css";
import Navbar from "../components/navbar/Navbar";

export default function PageLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
