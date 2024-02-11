import { Link, Outlet } from "react-router-dom";
import { Header } from "../1-header";
import { Footer } from "../3-footer";

export function Root() {
    return (<>
        <Header />
        <Outlet />
        <Footer />
    </>);
}