import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./css/HostLayout.css";

export default function Host() {
  const activeStyles = {
    textDecoration: "underline",
    textUnderlineOffset: "2px",
    color: "var(--clr-dark-black)",
    fontWeight: "700",
  };

  return (
    <main className="main-host-layout">
      <nav className="host-navbar">
        <NavLink end style={({ isActive }) => (isActive ? activeStyles : null)} to={"."}>
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to={"income"}>
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to={"vans"}>
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyles : null)} to={"reviews"}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
}
