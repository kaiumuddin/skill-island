import {createBrowserRouter} from "react-router-dom";
import Blog from "../components/Blog";
import CourseDetail from "../components/CourseDetail";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://skill-island-server-kaiumuddin.vercel.app/courses')

            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`https://skill-island-server-kaiumuddin.vercel.app/courses/${params.id}`)

            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]
    }
]);

export default router;