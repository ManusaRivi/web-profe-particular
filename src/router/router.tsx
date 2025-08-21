import { createBrowserRouter, Navigate } from "react-router-dom"
import PageLayout from "../layouts/pageLayout"
import Home from "../views/Home";
import About from "../views/About";
import Contact from "../views/Contact";
import Subjects from "../views/Subjects";
import SubjectsLayout from "../layouts/subjectsLayout";
import French from "../views/subjects/French";
import English from "../views/subjects/English";
import Math from "../views/subjects/Math";
import Physics from "../views/subjects/Physics";
import Coding from "../views/subjects/Coding";

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
                element: <SubjectsLayout />,
                children: [
                    {
                        path: '/subjects',
                        element: <Subjects />
                    },
                    {
                        path: '/subjects/english',
                        element: <English />
                    },
                    {
                        path: '/subjects/french',
                        element: <French />
                    },
                    {
                        path: '/subjects/math',
                        element: <Math />
                    },
                    {
                        path: '/subjects/physics',
                        element: <Physics />
                    },
                    {
                        path: '/subjects/coding',
                        element: <Coding />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
], {
    basename: import.meta.env.BASE_URL
})

export default router;
