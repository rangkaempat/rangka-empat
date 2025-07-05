import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import navLogoDark from "/src/assets/logos/rangka-empat-studio-logo-dark.webp";
import navLogoLight from "/src/assets/logos/rangka-empat-studio-logo-light.webp";

import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../functions/themeContext";
import { popContainer, popItem } from "../../functions/motionUtils";
import IconButton from "../iconButton/IconButton";
import { Contact, Moon, Rocket, Sun } from "../../data/Icons";
import NavModal from "../navModal/NavModal";

export default function Navbar() {
  const { darkMode, toggleMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar Modal Toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Navbar Hide and Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // 🚫 Skip hiding logic when modal is open

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
  }, [lastScrollY, isOpen]);

  return (
    <>
      <motion.header
        className={
          darkMode
            ? "sectionDark navbarBackground"
            : "sectionLight navbarBackground"
        }
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <motion.div
          className="navbarContainer"
          variants={popContainer}
          initial="hidden"
          animate="visible"
        >
          {/* NAVBAR LOGO */}
          <motion.div variants={popItem}>
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
          </motion.div>

          {/* UTILITY NAV BUTTONS */}
          <motion.nav
            className="navButtonContainer"
            variants={popContainer}
            initial="hidden"
            animate="visible"
          >
            {/* LIGHT/DARK MODE BUTTON */}
            <motion.div variants={popItem}>
              <IconButton
                label={`${darkMode ? "LIGHT" : "DARK"} MODE`}
                icon={darkMode ? Sun : Moon}
                onClick={toggleMode}
                variants={popItem}
              />
            </motion.div>

            {/* START PROJECT BUTTON */}
            <motion.div variants={popItem}>
              <IconButton
                label="START YOUR PROJECT"
                icon={Rocket}
                variants={popItem}
                to="/start-your-project"
              />
            </motion.div>

            {/* CONTACT BUTTON */}
            <motion.div variants={popItem}>
              <IconButton
                label="CONTACT"
                icon={Contact}
                variants={popItem}
                to="/contact"
              />
            </motion.div>

            {/* MENU BUTTON*/}
            <motion.button
              className={darkMode ? "navButtonMenu" : "navButtonMenu light"}
              onClick={toggleMenu}
              variants={popItem}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="navButtonMenuText">MENU</div>
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <div className="navIcon">
                    <motion.svg
                      key="close"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.4 }}
                    >
                      <path d="M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                    </motion.svg>
                  </div>
                ) : (
                  <div className="navIcon">
                    <motion.svg
                      key="menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#000000"
                      viewBox="0 0 256 256"
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.4 }}
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z" />
                    </motion.svg>
                  </div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.nav>
        </motion.div>
      </motion.header>

      {/* Modal for Nav Links */}
      <AnimatePresence>
        {isOpen && (
          <NavModal
            setIsOpen={setIsOpen}
            darkMode={darkMode}
            toggleMode={toggleMode}
          />
        )}
      </AnimatePresence>

      <Outlet />
    </>
  );
}
