import { Link, NavLink } from "react-router-dom";
import "./css/NavBar.css";

import logo from "../images/logo.png";

export default function Nav() {
  return (
    <header>
      <nav className="main-nav">
        <Link className="logo" to="/">
          #VANLIFE
        </Link>
        <div className="link-container">
          <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="host">
            Host
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-active" : ""} to="vans">
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
