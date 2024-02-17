import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainMenu } from "./MainMenu";
import { IconCross, IconHamburger } from "../../ui/icons";

export function HeaderBody() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div id="nav" role="navigation">

            <Link to="/" className="logo">
                <img className="logo-img" alt="logo" src="./src/assets/img/logo-sm.png" />
            </Link>

            {/* <div className="logo">
                <img className="logo-img" alt="logo" src="./src/assets/img/logo-sm.png" />
                <p className="logo-text">
                    <Link to="/" />
                </p>
            </div>
 */}
            <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {/* <div className={isMenuOpen ? "close-icon" : "menu-icon"} /> */}
                {isMenuOpen ? <IconCross /> : <IconHamburger />}
            </button>

            {/* <button className="hamburger">
                    <div className="menu-icon" />
                    <div className="close-icon" />
                </button>
                */}

            <MainMenu isOpen={isMenuOpen}/>
        </div>
    );
}

export function Header() {
    const isHomePage = useLocation().pathname === "/";
    if (isHomePage) {
        return null;
    }
    return (
        <HeaderBody />
    );
}
