import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Help from "../Pages/Help";

const Router = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/test",
            element: <div>test</div>
        },
        {
            path: "/ajuda",
            element: <Help/>
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router