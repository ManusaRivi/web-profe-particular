import { createBrowserRouter, Navigate } from "react-router-dom"
import PageLayout from "../layouts/pageLayout"
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Subjects from "../views/Subjects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home" replace />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: "/subjects",
                element: <Subjects />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router;
