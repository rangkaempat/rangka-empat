import React from "react";
import "./Footer.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import { motion } from "framer-motion";
import footerLogo from "/src/assets/rangka-empat-studio-logo-footer.webp";
import logo from "/src/assets/rangka-empat-studio-logo.webp";
import facebooklogo from "/src/assets/logoFacebook.webp";
import instagramlogo from "/src/assets/logoInstagram.webp";
import linkedinlogo from "/src/assets/logoLinkedin.webp";
import tiktoklogo from "/src/assets/logoTiktok.webp";
import homeHeroBg from "/src/assets/home-hero-bg.webp";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

const footerLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Our Work", to: "/our-work" },
  { name: "Pricing", to: "/pricing" },
];

const socialLinks = [
  {
    name: "Instagram",
    to: "https://www.instagram.com/rangkaempatstudio",
    logo: instagramlogo,
  },
  {
    name: "Facebook",
    to: "https://www.facebook.com/rangkaempatstudio",
    logo: facebooklogo,
  },
  {
    name: "TikTok",
    to: "https://www.tiktok.com/rangkaempat",
    logo: tiktoklogo,
  },
  {
    name: "LinkedIn",
    to: "https://www.linkedin.com/company/rangka-empat-studio",
    logo: linkedinlogo,
  },
];

export default function Footer() {
  return (
    <>
      <div
        className="sectionBackground"
        style={{ backgroundImage: `url(${homeHeroBg})` }}
      >
        <div className="sectionBackgroundBlur">
          <div className="sectionWrapper">
            <div className="sectionContent footerContent">
              {/* Footer Links */}
              <motion.div
                className="footerlinkContainer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.h5 className="footerlink" variants={fadeInWithEase}>
                  Quick Links
                </motion.h5>

                {footerLinks.map((link, index) => (
                  <motion.div key={index} variants={fadeInWithEase}>
                    <Link className="footerlink" to={link.to}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer Centre */}
              <motion.div
                className="footerCentre"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInWithEase}>
                  <Link to="/">
                    <img
                      className="footerlogo"
                      src={footerLogo}
                      alt="Rangka Empat Studio Logo"
                    />
                  </Link>
                </motion.div>
                <motion.h1 className="footerh1" variants={fadeInWithEase}>
                  We Design. <span>We Code.</span>
                  <br />
                  We Deliver. <span>We Care.</span>
                </motion.h1>
              </motion.div>

              {/* Footer Socials */}
              <motion.div
                className="footerlinkContainerLogo"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {socialLinks.map((link, index) => (
                  <motion.div key={index} variants={fadeInWithEase}>
                    <Link
                      className="footerlink"
                      to={link.to}
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="footerlogo"
                        src={link.logo}
                        alt={`${link.name} Logo`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              {/* footer Logo */}
            </div>
          </div>
          <div className="sectionWrapper">
            <div className="sectionContent footerContent">
              <motion.div
                className="footerlinkBottom"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInWithEase}>
                  <Link className="footerlink" to="/sitemap">
                    Sitemap
                  </Link>
                </motion.div>
                <span>•</span>
                <motion.div variants={fadeInWithEase}>
                  <Link className="footerlink" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </motion.div>
                <span>•</span>
                <motion.div variants={fadeInWithEase}>
                  <Link className="footerlink" to="cookies">
                    Cookies
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.p className="footerCopyright" variants={fadeInWithEase}>
                  &copy; {new Date().getFullYear()} Rangka Empat Studio (BRN)
                  <br></br>
                  All Rights Reserved
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
