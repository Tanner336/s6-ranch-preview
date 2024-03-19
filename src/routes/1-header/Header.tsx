import { Link, useLocation } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import logoImg from "@/assets/img/logo-sm.webp";

export function HeaderBody() {
    return (
        <div id="nav" role="navigation">
            {/* <Link to="/" className="logo">
                <img className="logo-img" alt="S6 Ranch Logo" src={logoImg} />
            </Link> */}

            <MainMenu />
        </div>
    );
}

export function Header() {
    const isHomePage = useLocation().pathname === "/";
    if (isHomePage) {
        return null;
    }
    return <HeaderBody />;
}
