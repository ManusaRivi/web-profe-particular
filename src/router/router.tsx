import { createBrowserRouter, Navigate } from "react-router-dom"
import PageLayout from "../layouts/pageLayout"
import App from "../views/App";
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
                element: <App />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])

export default router;
