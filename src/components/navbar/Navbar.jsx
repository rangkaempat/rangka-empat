import React from "react";
import "./Navbar.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <>
      <div className="navbarBackground">
        <div className="navbarContainer">
          {/* Navbar Logo */}
          <Link to="/">
            <img
              className="navlogo"
              src="/src/assets/rangka-empat-studio-logo.webp"
            />
          </Link>

          {/* Navlinks */}
          <div className="navlinkContainer">
            <Link className="navlink" to="/about">
              About
            </Link>
            <Link className="navlink" to="#">
              Services
            </Link>
            <Link className="navlink" to="#">
              Our Work
            </Link>
            <Link className="navlink" to="#">
              Pricing
            </Link>
          </div>

          {/* Navbar Button */}
          <Button name="Start Your Project" type="btnType1" link="#" />
        </div>
      </div>

      <Outlet />
    </>
  );
}
