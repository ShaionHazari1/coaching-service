import ErrorPage from "../../Errorpage/ErrorPage";
import Blogs from "../../Page/Home/Blogs/Blogs";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Home/Login/Login";
import SignUp from "../../Page/Home/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
         errorElement:<ErrorPage></ErrorPage>,

        children:[
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
        ]
    }
]);
export default router;