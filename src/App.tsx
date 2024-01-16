import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, ErrorPage, Staff } from "./routes";
import { AboutBreed } from "./routes/about-breed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/staff",
        element: <Staff />,
    },
    {
        path: "/AboutBreed",
        element: <AboutBreed />,
    },
]);

export function App() {
    return (<>
        <div className="min-h-screen grid place-items-center">
            <RouterProvider router={router} />
        </div>
    </>);
}
