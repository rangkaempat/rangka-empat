import React from "react";
import Button from "../../../../components/button/Button";
import "./HomeOurPricing.scss";
import { Link } from "react-router";
import PriceCard from "../../../../components/priceCard/PriceCard";
import { webPriceCardItems } from "../../../../data/webPriceCardData";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../../functions/motionUtils";

function HomeOurPricing() {
  return (
    <>
      <div className="sectionDarkGradient homeOurPricingGradient">
        <div className="sectionWrapper homeOurPricingWrapper">
          <h2>Our Pricing.</h2>

          <div>
            <h4 className="homeOurPricingType">
              Web Design & Development Packages
            </h4>
            <motion.div
              className="homeOurPricingCardContainer"
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
                    details={item.details}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <Button name="View All Prices" type="btnType2" link="#" />
        </div>
      </div>
    </>
  );
}

export default HomeOurPricing;
