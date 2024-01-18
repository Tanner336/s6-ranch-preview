import { RouterProvider } from "react-router-dom";
import { router } from "./routes/all-routes";

export function App() {
    return (<>
        <div className="min-h-screen grid place-items-center">
            <RouterProvider router={router} />
        </div>
    </>);
}
