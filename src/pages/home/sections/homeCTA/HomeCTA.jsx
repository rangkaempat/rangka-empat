import React from "react";
import "./HomeCTA.scss";
import WorkCard from "../../../../components/workCard/WorkCard";
import { workCardItems } from "../../../../data/workCardData";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import Button from "../../../../components/button/Button";

const features = [
  "Fully Custom Website",
  "Fast Loading",
  "Mobile Responsive",
  "SEO-Optimized",
  "High-Performing",
  "Secure & Reliable",
];

function HomeCTA() {
  return (
    <>
      <section className="sectionLight">
        <div className="sectionWrapper">
          <div className="sectionContent homeCTAContent">
            {/* Images */}
            <motion.div
              className="homeCTAImageContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                className="workCardContainer "
                key={workCardItems[0].id}
                variants={fadeInWithEase}
              >
                <img
                  className="workImage"
                  src={workCardItems[0].image}
                  alt={`${workCardItems[0].client} Image`}
                />
              </motion.div>
              <motion.div
                className="workCardContainer"
                key={workCardItems[1].id}
                variants={fadeInWithEase}
              >
                <img
                  className="workImage"
                  src={workCardItems[1].image}
                  alt={`${workCardItems[1].client} Image`}
                />
              </motion.div>
              <motion.div
                className="workCardContainer homeCTAImage"
                key={workCardItems[2].id}
                variants={fadeInWithEase}
              >
                <img
                  className="workImage"
                  src={workCardItems[2].image}
                  alt={`${workCardItems[2].client} Image`}
                />
              </motion.div>
            </motion.div>

            {/* Title & Description */}
            <motion.div
              className="homeCTATextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInWithEase}>
                Ready to Take Your Digital Presence to the
                <span> Next Level</span>?
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                Let's turn your ideas into a powerful online experience.
              </motion.p>

              <div className="homeCTABtnContainer">
                <Button
                  name="Book a Free Consultation"
                  type="btnType1"
                  link="#"
                  arrow={true}
                />
                <Button
                  name="View Our Plans"
                  type="btnType3"
                  link="#"
                  arrow={true}
                />
              </div>

              {/* Features */}

              <motion.ul
                className="homeCTAFeaturesContainer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInWithEase}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                      className="mr-2"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCTA;
