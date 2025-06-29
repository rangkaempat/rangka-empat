import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Tagline.scss";

function Tagline() {
  return (
    <>
      <h2 className="textOverflow textL tagline">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          WE DESIGN.
        </motion.div>

        <motion.span
          className="textLight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typewriter
            words={["WE CODE."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          WE DELIVER.
        </motion.div>

        <motion.span
          className="textLight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, amount: 0.2 }}
        >
          WE CARE.
        </motion.span>
      </h2>
    </>
  );
}

export default Tagline;
