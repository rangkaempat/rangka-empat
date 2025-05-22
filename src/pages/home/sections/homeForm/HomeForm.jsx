import React, { useContext } from "react";
import "./HomeForm.scss";
import { motion } from "framer-motion";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import ButtonForm from "../../../../components/button/ButtonForm";
import { useForm } from "react-hook-form";
import { ThemeContext } from "../../../../functions/themeContext";

import CTAform1 from "/src/assets/CTAform1.webp";
import CTAform2 from "/src/assets/CTAform2.webp";
import CTAform3 from "/src/assets/CTAform3.webp";
import CTAform4 from "/src/assets/CTAform4.webp";
import CTAform5 from "/src/assets/CTAform5.webp";

const features = [
  "Fully Custom Website",
  "Fast Loading",
  "Mobile Responsive",
  "SEO-Optimized",
  "High-Performing",
  "Secure & Reliable",
];

function HomeForm() {
  const { darkMode } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent homeFormContent">
            {/* Title & Description */}
            <motion.div
              className="homeFormTextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInWithEase} className="h2width100">
                <span>Let's Build</span> The Future
                <br></br>
                Together.
              </motion.h2>
              <motion.p variants={fadeInWithEase} className="description1">
                Get in touch with our digital experts.
              </motion.p>
              <motion.p variants={fadeInWithEase} className="description2">
                We’ll figure out the best solution for your
                <br></br>
                needs.
              </motion.p>

              <motion.div
                className="homeFormImageContainer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                whileHover={{ y: -10 }}
                whileTap={{ y: -10 }}
              >
                <motion.img
                  src={CTAform1}
                  alt="CTA Form 1"
                  variants={fadeInWithEase}
                />
                <motion.img
                  src={CTAform2}
                  alt="CTA Form 2"
                  className="homeFormImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                />
                <motion.img
                  src={CTAform3}
                  alt="CTA Form 3"
                  className="homeFormImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    transition: { delay: 0.2 },
                  }}
                />
                <motion.img
                  src={CTAform4}
                  alt="CTA Form 4"
                  className="homeFormImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    transition: { delay: 0.4 },
                  }}
                />
                <motion.img
                  src={CTAform5}
                  alt="CTA Form 5"
                  className="homeFormImage"
                  variants={fadeInWithEase}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                    transition: { delay: 0.6 },
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="homeFormTextContainer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
                <motion.div className="formGroupName">
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register("fullName", {
                      required: "Full Name is required",
                    })}
                  />
                  {errors.fullName && (
                    <p className="error">{errors.fullName.message}</p>
                  )}
                </motion.div>
                <div className="formContainerHalf">
                  <div className="formGroupHalf">
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="error">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="formGroupHalf">
                    <input
                      type="text"
                      placeholder="Phone"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Only numbers allowed",
                        },
                      })}
                    />
                    {errors.countryCode && (
                      <p className="error">{errors.countryCode.message}</p>
                    )}
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className="formGroup">
                  <textarea
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  ></textarea>
                  {errors.message && (
                    <p className="error">{errors.message.message}</p>
                  )}
                </div>

                <div className="ButtonContainer">
                  <ButtonForm name="Send Message" type="btnType1-form" />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeForm;
