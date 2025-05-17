import React from "react";
import "./Footer.scss";
import { Outlet, Link } from "react-router";
import Button from "../button/Button";
import { motion } from "framer-motion";
import footerLogo from "/src/assets/rangka-empat-studio-logo-footer.webp";
import facebooklogo from "/src/assets/logoFacebook.webp";
import instagramlogo from "/src/assets/logoInstagram.webp";
import linkedinlogo from "/src/assets/logoLinkedin.webp";
import tiktoklogo from "/src/assets/logoTiktok.webp";

import { fadeInWithEase } from "../../functions/motionUtils";
export default function Footer() {
  return (
    <>
      <div className="footerBackground">
        <div className="footerContainer">
          {/* footerlinks */}
          <div className="footerlinkContainer">
            <Link className="footerlink" to="/about">
              Home
            </Link>
            <Link className="footerlink" to="/about">
              About
            </Link>
            <Link className="footerlink" to="#">
              Services
            </Link>
            <Link className="footerlink" to="#">
              Our Work
            </Link>
            <Link className="footerlink" to="#">
              Testimonials
            </Link>
            <Link className="footerlink" to="#">
              Pricing
            </Link>
          </div>
          <div className="footerCentre">
            <Link to="/">
              <img
                className="footerlogo"
                src={footerLogo}
                alt="Rangka Empat Studio Logo"
              />
            </Link>
            <motion.h1 className="footerh1" variants={fadeInWithEase}>
              We Design. <span>We Code.</span>
              <br />
              We Deliver. <span>We Care.</span>
            </motion.h1>
          </div>
          <div className="footerlinkContainerLogo">
            <Link className="footerlink" to="/about">
              <img
                className="footerlogo"
                src={instagramlogo}
                alt="Rangka Empat Studio Logo"
              />
            </Link>
            <Link className="footerlink" to="/about">
              <img
                className="footerlogo"
                src={facebooklogo}
                alt="Rangka Empat Studio Logo"
              />
            </Link>
            <Link className="footerlink" to="#">
              <img
                className="footerlogo"
                src={tiktoklogo}
                alt="Rangka Empat Studio Logo"
              />
            </Link>
            <Link className="footerlink" to="#">
              <img
                className="footerlogo"
                src={linkedinlogo}
                alt="Rangka Empat Studio Logo"
              />{" "}
            </Link>
          </div>
          {/* footer Logo */}
        </div>
        <div className="footerContainer">
          <div className="footerlinkBottom">
            <Link className="footerlink" to="/about">
              Sitemap
            </Link>
            <span>•</span>
            <Link className="footerlink" to="/about">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link className="footerlink" to="#">
              Cookies
            </Link>
          </div>
          <div className="footerCopyright">
            © 2025 Rangka Empat Studio (BRN)
            <br></br>
            All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
