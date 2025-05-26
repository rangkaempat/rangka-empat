import React, { useContext } from "react";
import "./Footer2.scss";
import { Link } from "react-router";
import { ThemeContext } from "../../functions/themeContext";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Footer2() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper footerWrapper">
          <div className="sectionContent footerContent2">
            <hr />
            <div className="footerTopContainer">
              <Link to="#" className="footerLink">
                ABOUT
              </Link>
              <Link to="#" className="footerLink">
                SERVICES
              </Link>
              <Link to="#" className="footerLink">
                WORK
              </Link>
              <Link to="#" className="footerLink">
                PRICING
              </Link>
            </div>

            <div className="footerSocialsContainer">
              <Link
                to="https://www.instagram.com/rangkaempatstudio"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill={darkMode ? "#ffffff" : "#000000"}
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </Link>
              <Link
                to="https://www.facebook.com/rangkaempatstudio"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill={darkMode ? "#ffffff" : "#000000"}
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </Link>
              <Link
                to="https://www.tiktok.com/@rangkaempat"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill={darkMode ? "#ffffff" : "#000000"}
                  viewBox="0 0 256 256"
                >
                  <path d="M224,72a48.05,48.05,0,0,1-48-48,8,8,0,0,0-8-8H128a8,8,0,0,0-8,8V156a20,20,0,1,1-28.57-18.08A8,8,0,0,0,96,130.69V88a8,8,0,0,0-9.4-7.88C50.91,86.48,24,119.1,24,156a76,76,0,0,0,152,0V116.29A103.25,103.25,0,0,0,224,128a8,8,0,0,0,8-8V80A8,8,0,0,0,224,72Zm-8,39.64a87.19,87.19,0,0,1-43.33-16.15A8,8,0,0,0,160,102v54a60,60,0,0,1-120,0c0-25.9,16.64-49.13,40-57.6v27.67A36,36,0,1,0,136,156V32h24.5A64.14,64.14,0,0,0,216,87.5Z"></path>
                </svg>
              </Link>
              <Link
                to="https://www.linkedin.com/company/rangka-empat-studio"
                className="footerLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill={darkMode ? "#ffffff" : "#000000"}
                  viewBox="0 0 256 256"
                >
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                </svg>
              </Link>
            </div>

            <div className="footerTopContainer">
              <h2>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We Design.
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Typewriter
                    words={["We Code."]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={5000}
                  />
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  We Deliver.
                </motion.div>

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  We Care.
                </motion.span>
              </h2>
            </div>

            <hr />

            <div className="footerBottomContainer">
              <div className="footerBottomLinks">
                <Link to="#" className="footerLink">
                  SITEMAP
                </Link>
                <Link to="#" className="footerLink">
                  PRIVACY POLICY
                </Link>
              </div>

              <h5>
                COPYRIGHT © 2025 RANGKA EMPAT STUDIO
                <br />
                ALL RIGHTS RESERVED
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
