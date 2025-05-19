import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import navLogo from "/src/assets/rangka-empat-studio-logo-2.webp";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../functions/themeContext";

export default function Navbar() {
  const { darkMode, toggleMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.div
        className="navbarBackground"
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <button onClick={toggleMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <div className="navbarContainer">
          {/* Navbar Logo */}
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
          >
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
            <Button name="Contact" type="btnType5" link="#" arrow="true" />
            <Button name="Start Your Project" type="btnType0" link="#" />
          </div>

          <div className="navMenuIcon" onClick={toggleMenu}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.svg
                  key="close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#000000"
                  viewBox="0 0 40 40"
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 180, scale: 1 }}
                  exit={{ rotate: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M9.4,11.2l19.4,19.4c0.5,0.5,1.3,0.5,1.8,0s0.5-1.3,0-1.8L11.2,9.4c-0.5-0.5-1.3-0.5-1.8,0S8.9,10.7,9.4,11.2z M28.8,9.4L9.4,28.8c-0.5,0.5-0.5,1.3,0,1.8s1.3,0.5,1.8,0l19.4-19.4c0.5-0.5,0.5-1.3,0-1.8C30.1,8.9,29.3,8.9,28.8,9.4z" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  initial={{ rotate: 0, scale: 0.8 }}
                  animate={{ rotate: 180, scale: 1 }}
                  exit={{ rotate: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Modal for Nav Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="navlinks"
            className="navModalLinkContainer"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {[
              { to: "/about", label: "About" },
              { to: "#", label: "Services" },
              { to: "#", label: "Our Work" },
              { to: "#", label: "Pricing" },
            ].map((link, index) => (
              <Link
                key={index}
                className="navModalLink"
                to={link.to}
                onClick={() => {
                  setIsOpen(false);
                  document.body.style.overflow = "auto";
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Navbar Button */}
            <Button
              name="Contact"
              type="btnType7"
              link="#"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            />
            <Button
              name="Start Your Project"
              type="btnType6"
              link="#"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    </>
  );
}
