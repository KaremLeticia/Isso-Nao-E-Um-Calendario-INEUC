import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Help from "../Pages/Help";

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
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router