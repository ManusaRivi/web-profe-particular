import { createBrowserRouter, Navigate } from "react-router-dom"
import PageLayout from "../layouts/pageLayout"
import Home from "../views/Home";
import About from "../views/About";

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
            }
        ]
    }
])

export default router;
