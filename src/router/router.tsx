import { createBrowserRouter } from "react-router-dom"
import PageLayout from "../layouts/pageLayout"
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <PageLayout />,
        children: [
            {
                path: '/',
                element: <App />
            }
        ]
    }
])

export default router;
