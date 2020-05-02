import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="menu">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/discover">Discover</NavLink>
    </div>
  );
}
