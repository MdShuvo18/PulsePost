import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllBlogs from "../Pages/AllBlogs";
import PrivateRoute from "../Component/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AddBlogs from "../Pages/AddBlogs";
import RecentBlogDetails from "../Pages/RecentBlogDetails";
import Wishlist from "../Component/WishList/Wishlist";
import Comment from "../Component/Comment";
import UpdateBlog from "../Component/UpdateBlog";
import Featured from "../Pages/Featured";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/addblogs',
                element: <PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
            },
            {
                path: '/blogdetails/:id',
                element: <PrivateRoute><RecentBlogDetails></RecentBlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-website-server-eight.vercel.app/blogdetails/${params.id}`)
            },
            {
                path: '/wishlistdetails/:id',
                element: <PrivateRoute><RecentBlogDetails></RecentBlogDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-website-server-eight.vercel.app/wishlist/${params.id}`)
            },
            {
                path: '/updateblog/:id',
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`https://blog-website-server-eight.vercel.app/addBlogCollection/${params.id}`)


            },
            {
                path: '/comment',
                element: <Comment></Comment>,
                // loader: () => fetch('https://blog-website-server-eight.vercel.app/comment')
            },
            {
                path: '/allblogs',
                element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>,
                loader: () => fetch('https://blog-website-server-eight.vercel.app/addBlogCollection')
            },
            {
                path: '/wishlist',
                element: <PrivateRoute><Wishlist></Wishlist></PrivateRoute>,

            },
            {
                path: '/featured',
                element: <Featured></Featured>
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