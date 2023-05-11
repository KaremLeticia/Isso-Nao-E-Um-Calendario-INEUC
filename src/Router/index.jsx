import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import ErrorPage from "../Pages/ErrorPage";
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