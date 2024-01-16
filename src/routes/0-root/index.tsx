import { Link, Outlet } from "react-router-dom";
import { Header } from "../1-header";
import { Footer } from "../3-footer";

export function Root() {
    return (<>
        <div className="w-full h-full bg-slate-800 grid grid-rows-[auto,1fr,auto]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    </>);
}