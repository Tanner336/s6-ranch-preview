import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError() as any;
    //console.log('our', error);

    return (
        <div id="error-page">
            <h1 className="text-red-500">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Go back to the main page</Link>
        </div>
    );
}
