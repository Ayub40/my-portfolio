import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Home";
import About from "../Pages/About";
import Project from "../Pages/Project";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'project',
                element: <Project></Project>
            }
        ]
    },
]);