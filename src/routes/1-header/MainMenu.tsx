import { CSSProperties, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils";
import { IconCross, IconHamburger } from "@/ui";

export function MainMenu() {
    const loc = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ref = useRef(null);
    useClickAway(ref, () => {
        CloseMenu();
    });

    function CloseMenu() {
        setIsMenuOpen(false);
    }

    const activeStyles = (path: string): CSSProperties =>
        path === loc.pathname
            ? {
                // color: "rgb(48, 180, 169)",
                // fontWeight: "bold",
                // transform: 'scaleY(1.5)',
                // display: 'inline-block',
                borderBottom: "1px solid rgb(48, 180, 169)",
            }
            : {};

    return (<>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IconCross /> : <IconHamburger />}
        </button>

        <ul ref={ref} className={classNames("nav-wrapper", isMenuOpen && "show-menu")}>
            <li className="nav-item" onClick={CloseMenu}>
                <Link to="/" style={activeStyles("/")}>
                    Home
                </Link>
            </li>
            <li className="nav-item" onClick={CloseMenu}>
                <Link to="/facility" style={activeStyles("/facility")}>
                    Facility
                </Link>
            </li>
            <li className="nav-item" onClick={CloseMenu}>
                <Link to="/services" style={activeStyles("/services")}>
                    Services
                </Link>
            </li>
            <li className="nav-item" onClick={CloseMenu}>
                <Link to="/horses-for-sale" style={activeStyles("/horses-for-sale")}>
                    For Sale
                </Link>
            </li>
            <li className="nav-item" onClick={CloseMenu}>
                <Link to="/breeding" style={activeStyles("/breeding")}>
                    Breeding
                </Link>
            </li>
            <li className="nav-item" onClick={CloseMenu}>
                <a href="#contact-us" style={activeStyles("#contact")}>
                    Contact
                </a>
            </li>
        </ul >
    </>);
}
