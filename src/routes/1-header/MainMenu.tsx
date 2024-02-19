import { CSSProperties } from "react";
import { Link, useLocation } from "react-router-dom";
import { classNames } from "../../utils";

export function MainMenu({ isOpen }: { isOpen: boolean }) {
  const loc = useLocation();

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

  return (
    <ul className={classNames("nav-wrapper", isOpen && "show-menu")}>
      <li className="nav-item">
        <Link to="/" style={activeStyles("/")}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/facility" style={activeStyles("/facility")}>
          Facility
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/services" style={activeStyles("/services")}>
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/horses-for-sale" style={activeStyles("/horses-for-sale")}>
          For Sale
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/breeding" style={activeStyles("/breeding")}>
          Breeding
        </Link>
      </li>
      <li className="nav-item">
        <a href="#contact-us" style={activeStyles("#contact")}>
          Contact
        </a>
      </li>
    </ul>
  );
}
