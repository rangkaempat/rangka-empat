import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import navLogoDark from "/src/assets/rangka-empat-studio-logo-dark.webp";
import navLogoLight from "/src/assets/rangka-empat-studio-logo-light.webp";

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
        className={
          darkMode
            ? "sectionDark navbarBackground"
            : "sectionLight navbarBackground"
        }
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
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
              src={darkMode ? navLogoDark : navLogoLight}
              alt="Rangka Empat Studio Logo"
            />
          </Link>

          {/* Navlinks */}
          <div className="navlinkContainer">
            <Link className="navlink" to="/about">
              About
            </Link>
            <Link className="navlink" to="/services">
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
            <button onClick={toggleMode} className="themeButton">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
                </svg>
              )}
            </button>
            <Button
              name="Contact"
              type={darkMode ? "btnType4-dark" : "btnType4"}
              link="#"
              arrow="true"
            />
            <Button name="Start Your Project" type="btnType0" link="#" />
          </div>

          <div
            className={darkMode ? "navMenuIcon navMenuIconDark" : "navMenuIcon"}
            onClick={toggleMenu}
          >
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
            className={
              darkMode
                ? "sectionDark navModalLinkContainer"
                : "sectionLight navModalLinkContainer"
            }
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {[
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
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
              type={darkMode ? "btnType4-mobile-dark" : "btnType4-mobile"}
              link="#"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            />
            <Button
              name="Start Your Project"
              type="btnType0-mobile"
              link="#"
              onClick={() => {
                setIsOpen(false);
                document.body.style.overflow = "auto";
              }}
            />

            <button onClick={toggleMode} className="themeButton">
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#f2f2f2"
                  viewBox="0 0 256 256"
                >
                  <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path>
                </svg>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    </>
  );
}
