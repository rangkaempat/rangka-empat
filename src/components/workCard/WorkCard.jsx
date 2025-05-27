import React, { useContext } from "react";
import { Link } from "react-router";
import "./workCard.scss";
import { motion } from "framer-motion";

import favicontest from "/rangka-empat.svg";
import { ThemeContext } from "../../functions/themeContext";

function WorkCard({ id, image, client, link, type }) {
  const { darkMode, toggleMode } = useContext(ThemeContext);

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
        <div className="workClientFavicon">
          <img src={favicontest} alt={`${client} Image`} />
        </div>
        <div className="workClientName">{client}</div>
      </Link>
      {type && (
        <div className="workType">
          {type.includes("Web Design") && (
            <div className="workTypeIcon">
              {/* Web Design Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={darkMode ? "#ffffff" : "#000000"}
                viewBox="0 0 256 256"
              >
                <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"></path>
              </svg>
            </div>
          )}

          {type.includes("Web Development") && (
            <div className="workTypeIcon">
              {/* Web Development Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={darkMode ? "#ffffff" : "#000000"}
                viewBox="0 0 256 256"
              >
                <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
              </svg>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default WorkCard;
