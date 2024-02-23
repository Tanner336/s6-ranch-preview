import { RouterProvider } from "react-router-dom";
import { router } from "./routes/all-routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster, toast } from "sonner";
import { useEffect } from "react";
import { dynamicData } from "./store";

function useDinamicDataErrors() {
    useEffect(
        () => {
            if (dynamicData.error) {
                toast.error(`Error parsing data from the server. Please fix and try again later. Error: ${dynamicData.error} in file: ${dynamicData.filename}`);
                dynamicData.error = undefined;
            }
        }, []
    );
    return null;
}

export function App() {
    useDinamicDataErrors();
    return (<>
        <HelmetProvider context={{}}>
            <div className="min-h-screen grid place-items-center">
                <RouterProvider router={router} />
                <Toaster />
            </div>
        </HelmetProvider>
    </>);
}
