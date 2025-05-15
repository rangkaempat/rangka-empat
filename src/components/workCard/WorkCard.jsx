import React from "react";
import { Link } from "react-router";
import "./workCard.scss";
import { motion } from "framer-motion";

function WorkCard({ id, image, client, link }) {
  return (
    <motion.div
      className="workCardContainer"
      key={id}
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link className="workImage" to={link}>
        <img src={image} alt={`${client} Image`} />
      </Link>
      <Link className="workClient" to="#">
        {client}
      </Link>
    </motion.div>
  );
}

export default WorkCard;
