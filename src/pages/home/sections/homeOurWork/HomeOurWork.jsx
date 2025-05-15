import React from "react";
import { Link } from "react-router";

import "./HomeOurWork.scss";
import Button from "../../../../components/button/Button";
import WorkCard from "../../../../components/workCard/WorkCard";
import { workCardItems } from "../../../../data/workCardData";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../../../functions/motionUtils";

function HomeOurWork() {
  return (
    <>
      <div className="sectionDarkGradient">
        <div className="sectionWrapper ourWorkWrapper">
          <div className="sectionContent">
            {/* Title & Description */}
            <div className="ourWorkTextContainer">
              <h2>Our Featured Work.</h2>
              <p>
                See what we've built for our amazing clients.
                <br />
                Every project is a unique story of collaboration, creativity,
                and code.
              </p>
            </div>

            {/* Work Cards */}
            <motion.div
              className="ourWorkImageContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {workCardItems.slice(0, 3).map((item) => (
                <motion.div key={item.id} variants={fadeInUp}>
                  <WorkCard image={item.image} client={item.client} />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <Button name="View All Projects" type="btnType2" link="#" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOurWork;
