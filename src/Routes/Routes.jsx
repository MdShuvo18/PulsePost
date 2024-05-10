import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllBlogs from "../Pages/AllBlogs";
import PrivateRoute from "../Component/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AddBlogs from "../Pages/AddBlogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
              
            },
            {
                path:'/addblogs',
                element:<PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
            },
            {
                path:'/allblogs',
                element:<PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            
        ]
    },
]);

export default router