import React from "react";
import Button from "../../../../components/button/Button";
import "./HomePricing.scss";
import { Link } from "react-router";
import PriceCard from "../../../../components/priceCard/PriceCard";
import { webPriceCardItems } from "../../../../data/PriceCardData";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../../functions/motionUtils";

function HomePricing() {
  return (
    <>
      <section className="sectionDarkGradient homePricingGradient">
        <div className="sectionWrapper homePricingWrapper">
          <div className="sectionContent">
            <h2>Our Pricing Plans.</h2>

            <h4 className="homePricingType">Web Design & Development Plans</h4>
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
                    price={item.price}
                    target={item.target}
                    features={item.features}
                  />
                </motion.div>
              ))}
            </motion.div>

            <Button name="View All Plans" type="btnType2" link="#" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePricing;
