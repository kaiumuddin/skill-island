import {createBrowserRouter} from "react-router-dom";
import AddCourse from "../components/AddCourse";
import AddCourseVideo from "../components/AddCourseVideo";
import Blog from "../components/Blog";
import Certificate from "../components/Certificate";
import CheckOutPage from "../components/CheckOutPage";
import CourseDetail from "../components/CourseDetail";
import CourseLessons from "../components/CourseLessons";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import MyCourses from "../components/MyCourses";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('http://localhost:5000/courses')

            },
            {
                path: '/courseDetails/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/mycourses',
                element: <MyCourses></MyCourses>
            },
            {
                path: '/courselessons/:id',
                element: <CourseLessons></CourseLessons>,
                loader: ({params}) => fetch(`http://localhost:5000/courselessons/${params.id}`)

            },
            {
                path: '/addcourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: '/addcoursevideo',
                element: <AddCourseVideo></AddCourseVideo>
            },
            {
                path: '/certificate',
                element: <Certificate></Certificate>
            },
        ]
    }
]);

export default router;