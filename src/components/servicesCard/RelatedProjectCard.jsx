import React from "react";
import { fadeInWithEase } from "../../functions/motionUtils";
import { Link } from "react-router";
import { motion } from "framer-motion";
import "./ServicesCard.scss";

function RelatedProjectCard({ image, number, title, description, link, tags }) {
  return (
    <Link to={link} className="linkDiv">
      <motion.div className="relatedProjectCardPage" variants={fadeInWithEase}>
        <p className="cardNumber textL textRegular">{number}</p>
        <div className="relatedProjectCardImageWrapper">
          <img src={image} alt={title} className="relatedProjectCardImage" />
          <div className="relatedProjectCardPageGradient" />
          <div className="cardTagDiv">
            {tags.map((tag, index) => (
              <span key={index} className="cardTag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relatedProjectCardContent">
          <h3 className="cardTitle">{title}</h3>
          <p className="cardDesc">{description}</p>
          <div className="cardTags"></div>
        </div>
      </motion.div>
    </Link>
  );
}

export default RelatedProjectCard;
