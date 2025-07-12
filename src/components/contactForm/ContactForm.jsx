import React, { useContext } from "react";
import "./ContactForm.scss";
import { motion } from "framer-motion";
import { fadeInWithEase, staggerContainer } from "../../functions/motionUtils";
import ButtonForm from "../button/ButtonForm";
import { useForm } from "react-hook-form";
import Button from "../button/Button";
import { ThemeContext } from "../../functions/themeContext";

const features = [
  "Fully Custom Website",
  "Fast Loading",
  "Mobile Responsive",
  "SEO-Optimized",
  "High-Performing",
  "Secure & Reliable",
];

function ContactForm() {
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
        <div className="sectionContent contactFormContent">
          {/* Title & Description */}
          <motion.div
            className="contactFormTextContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInWithEase} className="textXXXL textBold">
              CONNECT WITH US
            </motion.h2>
            <motion.p variants={fadeInWithEase} className="textLight textXS">
              Whether you’re a startup, small business, or established brand,
              we’re here to help you
              <span className="textBold"> create something extraordinary.</span>
            </motion.p>
            <ul className="contactFormContact">
              <motion.li className="textLight textXS" variants={fadeInWithEase}>
                • EMAIL{" "}
                <a href="mailto:we@rangkaempat.com" className="textRegular">
                  we@rangkaempat.com
                </a>
              </motion.li>
              <motion.li className="textLight textXS" variants={fadeInWithEase}>
                • PHONE{" "}
                <a href="tel:+6016-2694377" className="textRegular">
                  016-2694377
                </a>
              </motion.li>
              <motion.li className="textLight textXS" variants={fadeInWithEase}>
                • LOCATION{" "}
                <a
                  href="https://www.google.com/maps?sca_esv=c00251c694cd13aa&rlz=1C1UEAD_enMY1144MY1144&output=search&q=kuala+lumpur&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeuyr9ljWioGWIw0oasFed3q5v-jrTO4UFmLjWc-eQrSDAn5yCiUOywCEMyD2GzPsD4p6NxyE0nWcubdFo_geguuEzTyhb5YnZGp9oc-5cJgdOWVqSlpwqlRFBrxaDT9YXk-Cdymu63-zeABH1e7STtPakvrAsNBjNpc49sGHXpjHEuW6dw&entry=mc&ved=1t:200715&ictx=111"
                  className="textRegular"
                  target="blank__"
                >
                  KL, MY.
                </a>
              </motion.li>
            </ul>
            <Button
              name="Get in Touch"
              type={darkMode ? "btnType1" : "btnType1-light"}
              link="/contact"
              arrow="contact"
            />
          </motion.div>

          <motion.div
            className="contactFormTextContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
              <motion.div className="formGroupName" variants={fadeInWithEase}>
                <label htmlFor="fullName" className="textL textLight">
                  • NAME*
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="> John Doe"
                  autoComplete="name"
                  {...register("fullName", {
                    required: "Full Name is required*",
                  })}
                />
                {errors.fullName && (
                  <p className="error">{errors.fullName.message}</p>
                )}
              </motion.div>
              <div className="formContainerHalf">
                <motion.div className="formGroupHalf" variants={fadeInWithEase}>
                  <label htmlFor="email" className="textL textLight">
                    • EMAIL*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="> johndoe@email.com"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required*",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </motion.div>

                <motion.div className="formGroupHalf" variants={fadeInWithEase}>
                  <label htmlFor="phone" className="textL textLight">
                    • PHONE
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="> +60123456789"
                    autoComplete="tel"
                    {...register("phone", {
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
                </motion.div>
              </div>
              <motion.div className="formGroup" variants={fadeInWithEase}>
                <label htmlFor="message" className="textL textLight">
                  • MESSAGE*
                </label>
                <textarea
                  id="message"
                  placeholder="> Hi! I'd like a website design for my company."
                  {...register("message", {
                    required: "Message is required*",
                  })}
                ></textarea>
                {errors.message && (
                  <p className="error">{errors.message.message}</p>
                )}
              </motion.div>

              <div className="ButtonContainer">
                <ButtonForm
                  name="Send Message"
                  type={darkMode ? "btnType1" : "btnType1-light"}
                  arrow
                />
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
