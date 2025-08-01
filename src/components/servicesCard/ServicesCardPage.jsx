import React from "react";
import { fadeInWithEase } from "../../functions/motionUtils";
import { Link } from "react-router";
import { motion } from "framer-motion";
import "./ServicesCard.scss";

function servicesCardPage({ image, number, title, description, link }) {
  return (
    <Link to={link}>
      <motion.div className="servicesCardPage" variants={fadeInWithEase}>
        <img src={image} alt={title} />
        <div className="servicesCardPageGradient" />
        <div className="servicesCardPageDetails">
          <p className="textBold textXXXL" style={{ opacity: 0.5 }}>
            {number}
          </p>
          <h3>{title}</h3>
        </div>
        <div className="servicesCardPageDetailsDesc">
          <p className="textLight textXXS">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default servicesCardPage;
