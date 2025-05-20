import React, { useContext } from "react";
import { Outlet, Link } from "react-router";
import "./HomeServices.scss";
import { ThemeContext } from "../../../../functions/themeContext";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import { servicesCards } from "../../../../data/servicesCardData";
import ServicesCard from "../../../../components/servicesCard/ServicesCard";

function HomeServices() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper homeServicesWrapper">
          <div className="sectionContent homeServicesContent">
            <motion.div
              className="homeServicesHeading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInWithEase}>
                Our 4 Key Service Pillars
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                We offer a comprehensive suite of digital services across four
                core pillars – Branding & Identity, Web Design & User
                Experience, Web Development & Digital Solutions, and Digital
                Marketing & SEO.
                <br />
                <br />
                Bringing strategy, creativity, and technology to elevate your
                brand and empower your business for long-term success.
              </motion.p>
            </motion.div>

            {/* Services Cards */}
            <motion.div
              className="homeServicesCardContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {servicesCards.map((service, index) => (
                <ServicesCard
                  key={index}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeServices;
