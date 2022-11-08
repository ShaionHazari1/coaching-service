import ErrorPage from "../../Errorpage/ErrorPage";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
]);
export default router;