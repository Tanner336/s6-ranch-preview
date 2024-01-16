import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (<>
        <div className="w-full h-full bg-red-500">

            <div id="nav" role="navigation">

                <div className="logo">
                    <img className="logo-img" alt="logo" src="./src/assets/img/logo-sm.png" />
                    <p className="logo-text">
                        <Link to="/" />
                    </p>
                </div>

                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={isMenuOpen ? "menu-icon" : "close-icon"} />
                </button>

                {/* <button className="hamburger">
                    <div className="menu-icon" />
                    <div className="close-icon" />
                </button>
                */}

                <ul className="nav-wrapper">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/facility">Facility</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reining">Reining</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/breeding">Breeding</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>


        </div>
    </>);
}