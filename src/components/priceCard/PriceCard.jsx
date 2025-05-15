import React from "react";
import Button from "../button/Button";
import { Link } from "react-router";
import "./PriceCard.scss";
import { motion } from "framer-motion";

function PriceCard({ id, name, price, features }) {
  // Map names to their respective class types
  const typeClassMap = {
    Freelance: "type1",
    Business: "type2",
    Enterprise: "type3",
  };

  // Get the type class based on the name
  const typeClass = typeClassMap[name] || "";

  return (
    <>
      <motion.div
        className={`priceCardContainer ${name === "Business" && "type2"}`}
        key={id}
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Popular tag */}
        {name === "Business" ? (
          <h6 className="priceCardPopular">Most Popular</h6>
        ) : null}

        {/* Price Card Content */}
        <div className="priceCardContent">
          <h3>{name}</h3>
          <div>
            <p>Starts from</p>
            <h4 className={`priceCardPrice ${typeClass}`}>{price}</h4>
          </div>
          {name === "Business" ? (
            <Button name="Book a Free Consultation" type="btnType1" link="#" />
          ) : (
            <Button name="Book a Free Consultation" type="btnType2" link="#" />
          )}
          <ul className="priceCardFeatures">
            {features.map((feature, index) => (
              <li key={index}>
                <svg
                  className="w-[20px] h-[20px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 11.917 9.724 16.5 19 7.5"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          className="priceCardLinkWrapper"
          initial={{ y: 0 }}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link className="priceCardLink" to="#">
            Learn More
            <svg
              className="w-[24px] h-[24px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}

export default PriceCard;
