import React, { useContext } from "react";
import { Link } from "react-router";

import "./HomeWork.scss";
import Button from "../../../../components/button/Button";
import WorkCard from "../../../../components/workCard/WorkCard";
import { workCardItems } from "../../../../data/workCardData";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import { ThemeContext } from "../../../../functions/themeContext";

function HomeWork() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper homeWorkWrapper">
          <div className="sectionContent">
            {/* Title & Description */}
            <motion.div
              className="homeWorkTextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInWithEase}>
                Our Featured Work.
              </motion.h2>
              <motion.p variants={fadeInWithEase}>
                See what we've built for our amazing clients.
                <br />
                Every project is a unique story of collaboration, creativity,
                and code.
              </motion.p>
            </motion.div>

            {/* Work Cards */}
            <motion.div
              className="homeWorkImageContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {workCardItems.slice(0, 3).map((item) => (
                <motion.div
                  className="homeWorkImageWrapper"
                  key={item.id}
                  variants={fadeInWithEase}
                >
                  <WorkCard
                    image={item.image}
                    client={item.client}
                    link={item.link}
                    type={item.type}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <Button
              name="View All Projects"
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

export default HomeWork;
