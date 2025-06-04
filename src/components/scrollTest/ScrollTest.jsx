import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ScrollTest.scss";

const Section = ({ children, bgColor }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // When top of section hits bottom of viewport to when bottom hits top
  });

  // Opacity from 0 to 1 and back to 0
  // [Start, Mid, End], [Opacity: 0, Opacity: 1, Opacity: 0]
  const opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0.9, 1, 1.3]);

  return (
    <section
      ref={ref}
      className="scroll-section"
      style={{ backgroundColor: bgColor }}
    >
      <motion.h1 style={{ opacity, scale }} className="scroll-text">
        {children}
        <br />
        <motion.div style={{ fontSize: 16 }}>{scrollYProgress}</motion.div>
      </motion.h1>
    </section>
  );
};

export default function ScrollTest() {
  return (
    <>
      <Section bgColor="#ffffff00">Welcome to Section One</Section>
      <Section bgColor="#ffffff00">Hello from Section Two</Section>
      <Section bgColor="#ffffff00">Hello from Section Three</Section>
    </>
  );
}
