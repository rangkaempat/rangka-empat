import React from "react";
import "./Footer.scss";
import { Outlet, Link } from "react-router";
import { motion } from "framer-motion";
import footerLogo from "/src/assets/rangka-empat-studio-logo-footer.webp";
import homeHeroBg2 from "/src/assets/home-hero-bg-2.webp";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
} from "../../data/socialLogos";

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
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    to: "https://www.facebook.com/rangkaempatstudio",
    icon: FacebookIcon,
  },
  {
    name: "TikTok",
    to: "https://www.tiktok.com/@rangkaempat",
    icon: TikTokIcon,
  },
  {
    name: "LinkedIn",
    to: "https://www.linkedin.com/company/rangka-empat-studio",
    icon: LinkedInIcon,
  },
];

export default function Footer() {
  return (
    <>
      <div
        className="sectionBackground footerBackground"
        style={{ backgroundImage: `url(${homeHeroBg2})` }}
      >
        <div className="sectionBackgroundBlur footerBackgroundGradient">
          <div className="sectionWrapper footerWrapper">
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
                <motion.h2 className="footerh2" variants={fadeInWithEase}>
                  We Design. <span>We Code.</span>
                  <br />
                  We Deliver. <span>We Care.</span>
                </motion.h2>
              </motion.div>

              {/* Footer Socials */}
              <motion.div
                className="footerlinkContainerLogo"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInWithEase}
                      whileHover={{ y: -5 }}
                    >
                      <a
                        className="footerlink"
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={40} color="#ededed" />
                      </a>
                    </motion.div>
                  );
                })}
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
