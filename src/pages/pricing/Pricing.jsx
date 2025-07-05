// Pricing Page
// Description: Displays scrollable pricing cards (Web and Maintenance plans) with mouse drag and dot indicators.
// Features:
// - Drag-to-scroll support via horizontalDragScroll()
// - Visual scroll position via <ScrollDots />
// Reusable parts:
// - <PriceCard />, <ScrollDots />, horizontalDragScroll()

import React, { useRef, useState, useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";
import PriceCard from "../../components/priceCard/PriceCard";
import {
  maintenancePriceCardItems,
  webPriceCardItems,
} from "../../data/PriceCardData";
import "./Pricing.scss";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import horizontalDragScroll from "../../functions/horizontalDragScroll";
import ScrollDots from "../../components/scrollDots/ScrollDots";
import mediaQuery from "../../functions/mediaQuery";
import ContactForm from "../../components/contactForm/ContactForm";

function Pricing() {
  const { darkMode } = useContext(ThemeContext);
  const isDesktop = mediaQuery("(min-width: 1025px)");

  const webCardScrollRef = horizontalDragScroll();
  const maintenanceCardScrollRef = horizontalDragScroll();
  const cardWidth = 280 + 16; // assume 280px card + 1rem gap

  return (
    <>
      <Seo
        title="Pricing | Rangka Empat Studio – Web Design & Digital Packages"
        description="Discover pricing for our web design and development services tailored for startups, SMEs, and enterprises in Malaysia and beyond."
        image="https://rangkaempat.com/og-images/pricing.jpg" // Update when image is ready
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pricing – Rangka Empat Studio",
          url: "https://rangkaempat.com/pricing",
          description:
            "Transparent pricing for web design, development, and digital services by Rangka Empat Studio.",
          publisher: {
            "@type": "Organization",
            name: "Rangka Empat Studio",
            url: "https://rangkaempat.com",
            logo: {
              "@type": "ImageObject",
              url: "https://rangkaempat.com/logo.png",
            },
            sameAs: [
              "https://twitter.com/rangkaempat",
              "https://linkedin.com/company/rangka-empat-studio",
            ],
          },
        }}
      />

      <Navbar />
      <Hero
        title1="OUR"
        title2="PLANS"
        subTitle="Find the plan that suits your needs."
        button="GET STARTED"
        link="/start-your-project"
      />
      <section className="sectionDark">
        <motion.div
          className="sectionContent pricingSectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 className="textBold textXXL" variants={fadeInWithEase}>
            Web Design Plans
          </motion.h2>
          <motion.p className="textLight textS" variants={fadeInWithEase}>
            Bring your vision to life with our custom web design solutions
            tailored for startups, SMEs, and growing brands.
          </motion.p>
          <motion.p className="textLight" variants={fadeInWithEase}>
            Whether you need a sleek company profile, a product-focused landing
            page, or a fully functional e-commerce store, our design plans
            combine creativity, performance, and SEO best practices to help your
            business stand out.
          </motion.p>
          <motion.div
            ref={webCardScrollRef}
            className="priceCardWrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {webPriceCardItems.map((plan, index) => (
              <PriceCard
                key={index}
                id={plan.index}
                name={plan.name}
                starting={plan.starting}
                price={plan.price}
                target={plan.target}
                features={plan.features}
              />
            ))}
          </motion.div>
          {!isDesktop && (
            <ScrollDots
              containerRef={webCardScrollRef}
              totalItems={webPriceCardItems.length}
              itemWidth={cardWidth}
            />
          )}
        </motion.div>

        <motion.div
          className="sectionContent pricingSectionContent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 className="textBold textXXL" variants={fadeInWithEase}>
            Maintenance Plans
          </motion.h2>
          <motion.p className="textLight textS" variants={fadeInWithEase}>
            Keep your website secure, up-to-date, and performing at its best
          </motion.p>
          <motion.div
            ref={maintenanceCardScrollRef}
            className="priceCardWrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {maintenancePriceCardItems.map((plan, index) => (
              <PriceCard
                key={index}
                id={plan.index}
                name={plan.name}
                starting={plan.starting}
                price={plan.price}
                target={plan.target}
                features={plan.features}
              />
            ))}
          </motion.div>

          {!isDesktop && (
            <ScrollDots
              containerRef={maintenanceCardScrollRef}
              totalItems={maintenancePriceCardItems.length}
              itemWidth={cardWidth}
            />
          )}
        </motion.div>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
}

export default Pricing;
