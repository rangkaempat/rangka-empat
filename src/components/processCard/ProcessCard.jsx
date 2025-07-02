import React from "react";
import "./ProcessCard.scss";
import Button from "../button/Button";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";

function ProcessCard({ id, title, description, features, image }) {
  return (
    <>
      <motion.div
        className="ProcessCardContent"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="ProcessCardText">
          <motion.h3 variants={fadeInWithEase}>
            <span className="textBold textXXXL number">{id}</span>
            <br />
            <span className="textBold textXL">{title}</span>
          </motion.h3>
          <motion.p variants={fadeInWithEase}>{description}</motion.p>

          <Button
            name="Start Your Project"
            type="btnType1"
            link="/start-your-project"
            arrow="rocket"
          />
        </motion.div>

        <motion.div className="ProcessCardImg" variants={fadeInWithEase}>
          <img src={image} alt="" />
          <motion.ul
            className="textLight textXS"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <motion.li variants={fadeInWithEase}>
                  <motion.div
                    className="circle"
                    variants={fadeInWithEase}
                  ></motion.div>
                  {feature}
                </motion.li>
                {index !== features.length - 1 && (
                  <motion.div
                    className="hr-line"
                    variants={fadeInWithEase}
                  ></motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ProcessCard;
