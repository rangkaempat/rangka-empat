import { motion } from "framer-motion";
import { Link } from "react-router";
import "./NavModal.scss";
import {
  ArrowCaretDown,
  Branding,
  Moon,
  SEO,
  SunLight,
  WebDesign,
  WebDev,
} from "../../data/Icons";

function NavModal({ setIsOpen, darkMode, toggleMode }) {
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.div
        key="nav2links"
        className={
          darkMode
            ? "sectionDark navModalContainer"
            : "sectionLight navModalContainer"
        }
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100vh", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="navModalWrapper">
          <Link className="navModalLink" to="/about" onClick={closeModal}>
            ABOUT
          </Link>
          <hr />
          <Link className="navModalLink" to="/services" onClick={closeModal}>
            SERVICES
            <ArrowCaretDown darkMode={darkMode} />
          </Link>

          <div className="navModalServicesLinks">
            <Link className="navModalLink" to="#" onClick={closeModal}>
              {Branding}
              BRANDING & IDENTITY
            </Link>

            <Link className="navModalLink" to="#" onClick={closeModal}>
              {WebDesign}
              WEB DESIGN & USER EXPERIENCE &#40;UI/UX&#41;
            </Link>

            <Link className="navModalLink" to="#" onClick={closeModal}>
              {WebDev}
              WEB DEVELOPMENT & DIGITAL SOLUTIONS
            </Link>

            <Link className="navModalLink" to="#" onClick={closeModal}>
              {SEO}
              DIGITAL MARKETING & SEO
            </Link>
          </div>
          <hr />

          <Link className="navModalLink" to="#" onClick={closeModal}>
            WORK
          </Link>
          <hr />
          <Link className="navModalLink" to="#" onClick={closeModal}>
            PRICING
          </Link>

          <hr />
          <div className="navModalBottom">
            <Link className="navModalLink" to="#" onClick={closeModal}>
              START YOUR PROJECT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={darkMode ? "#ffffff" : "#000000"}
                viewBox="0 0 256 256"
              >
                <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path>
              </svg>
            </Link>

            <Link className="navModalLink" to="#" onClick={closeModal}>
              CONTACT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={darkMode ? "#ffffff" : "#000000"}
                viewBox="0 0 256 256"
              >
                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
              </svg>
            </Link>

            <button
              onClick={toggleMode}
              className={
                darkMode
                  ? "navModalLink themeButton-dark"
                  : "navModalLink themeButton"
              }
            >
              {darkMode ? (
                <>
                  LIGHT MODE
                  {SunLight}
                </>
              ) : (
                <>
                  DARK MODE
                  {Moon}
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default NavModal;
