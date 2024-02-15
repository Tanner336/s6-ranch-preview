import { RouterProvider } from "react-router-dom";
import { router } from "./routes/all-routes";
import { HelmetProvider } from "react-helmet-async";

export function App() {
    return (<>
        <HelmetProvider context={{}}>
            <div className="min-h-screen grid place-items-center">
                <RouterProvider router={router} />
            </div>
        </HelmetProvider>
    </>);
}
