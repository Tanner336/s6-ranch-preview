import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, ErrorPage, Breeding, Contact, Facility, Home, Reining, Services } from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/facility",
                element: <Facility />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/reining",
                element: <Reining />,
            },
            {
                path: "/breeding",
                element: <Breeding />,
            },
            {
                path: "/contact",
                element: <Contact />,
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
