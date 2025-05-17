import React from "react";
import "./Navbar.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import navLogo from "/src/assets/rangka-empat-studio-logo.webp";

export default function Navbar() {
  return (
    <>
      <div className="navbarBackground">
        <div className="navbarContainer">
          {/* Navbar Logo */}
          <Link to="/">
            <img
              className="navlogo"
              src={navLogo}
              alt="Rangka Empat Studio Logo"
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
          <div className="navButtonContainer">
            <Button name="Contact" type="btnType4" link="#" arrow="true" />
            <Button name="Start Your Project" type="btnType0" link="#" />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
