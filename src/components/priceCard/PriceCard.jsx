import React, { useContext } from "react";
import Button from "../button/Button";
import { Link } from "react-router";
import "./PriceCard.scss";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInWithEase,
  staggerContainer,
} from "../../functions/motionUtils";
import { ThemeContext } from "../../functions/themeContext";

function PriceCard({ id, name, starting, price, target, features }) {
  const { darkMode } = useContext(ThemeContext);

  // Map names to their respective class types
  const typeClassMap = {
    Starter: "priceType1",
    Business: "priceType2",
    Enterprise: "priceType3",
  };

  // Get the type class based on the name
  const typeClass = typeClassMap[name] || "";

  return (
    <>
      <motion.div
        className={`priceCardContainer ${name === "Business" && "type2"}`}
        key={id}
        variants={fadeInWithEase}
      >
        {/* Popular tag */}
        {name === "Business" ? (
          <h6 className="priceCardPopular">Most Popular</h6>
        ) : null}

        {/* Price Card Content */}
        <div className="priceCardContent">
          <h3 className={`priceCardName ${typeClass}`}>{name}</h3>
          <div>
            <p>{starting}</p>
            <h4 className={`priceCardPrice textXL ${typeClass}`}>
              <span className="textM">RM</span>
              {price}
            </h4>
            <p className="priceCardTarget">{target}</p>
          </div>

          {/* Price Card Features */}
          <motion.ul
            className="priceCardFeatures"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.li key={index} variants={fadeInWithEase}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  // fill={darkMode ? "#f2f2f2" : "#323232"}
                  fill="#f2f2f2"
                  viewBox="0 0 256 256"
                >
                  <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
                </svg>
                {feature}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* CTA Button */}
        {name === "Business" ? (
          <Button
            name="Book a Free Consultation"
            // type={darkMode ? "btnType1" : "btnType1-light"}
            type="btnType1"
            link="/contact"
          />
        ) : (
          <Button
            name="Book a Free Consultation"
            // type={darkMode ? "btnType2" : "btnType2-light"}
            type="btnType2"
            link="/contact"
          />
        )}
      </motion.div>
    </>
  );
}

export default PriceCard;
