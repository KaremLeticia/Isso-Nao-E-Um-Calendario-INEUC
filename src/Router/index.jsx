import {
    createBrowserRouter,
    RouterProvider,
    useNavigate
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Help from "../Pages/Help";
import UserProvider from '../Context/UserContext'

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/Home",
            element: <Home/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/test",
            element: <div>test</div>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/ajuda",
            element: <Help/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/signup",
            element: <SignUp/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/Try",
            element: <UserProvider/>,
            errorElement: <ErrorPage />,
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router