import React from "react";
import { fadeInWithEase } from "../../functions/motionUtils";
import { Link } from "react-router";
import { motion } from "framer-motion";

function ServicesCard({ image, title, description, tags }) {
  return (
    <Link to="#">
      <motion.div
        className="servicesCard"
        variants={fadeInWithEase}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <img src={image} alt={title} />
        <div className="servicesCardDetails">
          <h5>
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z" />
            </svg>
          </h5>
          <p>{description}</p>
          <ul className="servicesCardTagContainer">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Link>
  );
}

export default ServicesCard;
