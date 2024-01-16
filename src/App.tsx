import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, ErrorPage, Staff } from "./routes";
import { AboutBreed } from "./routes/about-breed";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <div className="bg-green-400">34444</div>,
            },
            {
                path: "/staff",
                element: <Staff />,
            },
            {
                path: "/AboutBreed",
                element: <AboutBreed />,
            },
        ],
    },
   
]);

export function App() {
    return (<>
        <div className="min-h-screen grid place-items-center">
            <RouterProvider router={router} />
        </div>
    </>);
}
