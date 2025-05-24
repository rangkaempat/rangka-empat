import React, { useContext } from "react";
import Button from "../../../../components/button/Button";
import "./HomePricing.scss";
import { Link } from "react-router";
import PriceCard from "../../../../components/priceCard/PriceCard";
import {
  maintenancePriceCardItems,
  webPriceCardItems,
} from "../../../../data/PriceCardData";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import { ThemeContext } from "../../../../functions/themeContext";

function HomePricing() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper homePricingWrapper">
          <div className="sectionContent">
            <motion.div
              className="homePricingTextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInWithEase}>
                Our Pricing Plans.
              </motion.h2>
              <motion.h4 className="homePricingType" variants={fadeInWithEase}>
                Web Design & Development Plans
              </motion.h4>
            </motion.div>

            <motion.div
              className="homePricingCardContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {webPriceCardItems.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <PriceCard
                    name={item.name}
                    starting={item.starting}
                    price={item.price}
                    target={item.target}
                    features={item.features}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.div
              className="homePricingTextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h4 className="homePricingType" variants={fadeInWithEase}>
                Web Maintenance Plans
              </motion.h4>
            </motion.div>

            <motion.div
              className="homePricingCardContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {maintenancePriceCardItems.map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <PriceCard
                    name={item.name}
                    starting={item.starting}
                    price={item.price}
                    target={item.target}
                    features={item.features}
                  />
                </motion.div>
              ))}
            </motion.div> */}

            <Button
              name="View All Plans"
              type="btnType3"
              link="#"
              arrow={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePricing;
