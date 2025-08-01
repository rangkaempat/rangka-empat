import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/services-bg.webp";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";
import ServicesCard from "../../components/servicesCard/ServicesCard";
import {
  relatedProjectBranding,
  servicesCardsPage,
  servicesContent,
  servicesContent2,
  servicesContent3,
  servicesContent4,
} from "../../data/servicesCardData";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import "./Services.scss";
import ServicesCardPage from "../../components/servicesCard/ServicesCardPage";
import ContactForm from "../../components/contactForm/ContactForm";
import RelatedProjectCard from "../../components/servicesCard/RelatedProjectCard";
import { AccordionBlock } from "../../components/accordion/AccordionBlock";
function Services() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Web Design & Development Services | Rangka Empat Studio, Malaysia"
        description="Explore our full suite of services including custom web design, development, web apps, and digital solutions tailored for businesses in Malaysia and beyond."
        image="https://rangkaempat.com/og-images/home.jpg" //Change ref when image is done
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Design & Development",
          provider: {
            "@type": "Organization",
            name: "Rangka Empat Studio",
            url: "https://rangkaempat.com/services",
          },
          areaServed: {
            "@type": "Country",
            name: "Malaysia",
          },
          description:
            "We offer web design, web development, and digital services tailored for Malaysian businesses.",
        }}
      />
      <Navbar />
      <Hero
        title1="OUR"
        title2="SERVICES"
        subTitle="From branding to launch, we handle it all."
        button="WHO WE ARE"
        link="/about"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionContent">
          <motion.div
            className="servicesCardContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {servicesCardsPage.map((service, index) => (
              <ServicesCardPage
                key={index}
                number={service.number}
                image={service.image}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
          <motion.div
            className="serviceContentContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInWithEase}
          >
            <div className="serviceContent">
              <div className="leftCardTitle">
                <div className="leftCardTitleDetails">
                  <p className="textBold textXXXL" style={{ opacity: 0.5 }}>
                    01{" "}
                  </p>
                  <h3>BRANDING & IDENTITY</h3>
                </div>
              </div>
            </div>
            <div className="serviceContentDetails">
              <p className="textXL textRegular contentTitle">
                Your brand is more than a logo —
                <span
                  className="textXL textLight"
                  style={{ textTransform: "uppercase" }}
                >
                  it’s your story, your voice, and your promise.
                </span>
              </p>
              {servicesContent.map((service, index) => (
                <>
                  <AccordionBlock
                    title={service.title}
                    children={service.description}
                    darkMode={darkMode}
                  />
                </>
              ))}
              <div className="relatedProjectDiv">
                <p
                  className="textXXL textRegular contentTitle"
                  style={{
                    margin: "40px 0",
                  }}
                >
                  RELATED PROJECTS
                </p>
                <div className="relatedProjectCardDiv">
                  {relatedProjectBranding.map((service, index) => (
                    <RelatedProjectCard
                      key={index}
                      number={service.number}
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      tags={service.tags}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="serviceContentContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInWithEase}
          >
            <div className="serviceContent">
              <div className="leftCardTitle">
                <div className="leftCardTitleDetails">
                  <p className="textBold textXXXL" style={{ opacity: 0.5 }}>
                    02{" "}
                  </p>
                  <h3>WEB DESIGN & UX</h3>
                </div>
              </div>
            </div>
            <div className="serviceContentDetails">
              <p className="textXL textRegular contentTitle">
                Every screen, scroll, and interaction{" "}
                <span
                  className="textXL textLight"
                  style={{ textTransform: "uppercase" }}
                >
                  is created to{" "}
                </span>{" "}
                engage and drive results.
              </p>
              {servicesContent2.map((service, index) => (
                <>
                  <AccordionBlock
                    title={service.title}
                    children={service.description}
                    darkMode={darkMode}
                  />
                </>
              ))}
              <div className="relatedProjectDiv">
                <p
                  className="textXXL textRegular contentTitle"
                  style={{
                    margin: "40px 0",
                  }}
                >
                  RELATED PROJECTS
                </p>
                <div className="relatedProjectCardDiv">
                  {relatedProjectBranding.map((service, index) => (
                    <RelatedProjectCard
                      key={index}
                      number={service.number}
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      tags={service.tags}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="serviceContentContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInWithEase}
          >
            <div className="serviceContent">
              <div className="leftCardTitle">
                <div className="leftCardTitleDetails">
                  <p className="textBold textXXXL" style={{ opacity: 0.5 }}>
                    03{" "}
                  </p>
                  <h3>WEB DEVELOPMENT</h3>
                </div>
              </div>
            </div>
            <div className="serviceContentDetails">
              <p className="textXL textRegular contentTitle">
                Code That Powers Your Digital Vision
              </p>
              {servicesContent3.map((service, index) => (
                <>
                  <AccordionBlock
                    title={service.title}
                    children={service.description}
                    darkMode={darkMode}
                  />
                </>
              ))}
              <div className="relatedProjectDiv">
                <p
                  className="textXXL textRegular contentTitle"
                  style={{
                    margin: "40px 0",
                  }}
                >
                  RELATED PROJECTS
                </p>
                <div className="relatedProjectCardDiv">
                  {relatedProjectBranding.map((service, index) => (
                    <RelatedProjectCard
                      key={index}
                      number={service.number}
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      tags={service.tags}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="serviceContentContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInWithEase}
          >
            <div className="serviceContent">
              <div className="leftCardTitle">
                <div className="leftCardTitleDetails">
                  <p className="textBold textXXXL" style={{ opacity: 0.5 }}>
                    04{" "}
                  </p>
                  <h3>DIGITAL MARKETING & SEO</h3>
                </div>
              </div>
            </div>
            <div className="serviceContentDetails">
              <p className="textXL textRegular contentTitle">
                Rank Higher, Reach Further, Convert Better.
              </p>
              {servicesContent4.map((service, index) => (
                <>
                  <AccordionBlock
                    title={service.title}
                    children={service.description}
                    darkMode={darkMode}
                  />
                </>
              ))}
              <div className="relatedProjectDiv">
                <p
                  className="textXXL textRegular contentTitle"
                  style={{
                    margin: "40px 0",
                  }}
                >
                  RELATED PROJECTS
                </p>
                <div className="relatedProjectCardDiv">
                  {relatedProjectBranding.map((service, index) => (
                    <RelatedProjectCard
                      key={index}
                      number={service.number}
                      image={service.image}
                      title={service.title}
                      description={service.description}
                      tags={service.tags}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ContactForm />

      <Footer />
    </>
  );
}

export default Services;
