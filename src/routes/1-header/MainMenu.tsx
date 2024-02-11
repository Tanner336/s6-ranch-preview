import { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";

export function MainMenu() {
    const loc = useLocation();

    const activeStyles = (path: string): CSSProperties => path === loc.pathname
        ? {
            color: "white",
            fontWeight: "bold",
            transform: 'scaleY(3.5)',
            display: 'inline-block',
        }
        : {};

    return (
        <ul className="nav-wrapper">
            <li className="nav-item">
                <Link to="/" style={activeStyles('/')}>Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/facility" style={activeStyles('/facility')}>Facility</Link>
            </li>
            <li className="nav-item">
                <Link to="/services" style={activeStyles('/services')}>Services</Link>
            </li>
            <li className="nav-item">
                <Link to="/reining" style={activeStyles('/reining')}>Reining</Link>
            </li>
            <li className="nav-item">
                <Link to="/breeding" style={activeStyles('/breeding')}>Breeding</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" style={activeStyles('/contact')}>Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/horses-for-sale" style={activeStyles('/horses-for-sale')}>Horses</Link>
            </li>
        </ul>
    );
}
