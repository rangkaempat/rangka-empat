import React from "react";
import "./HomeForm.scss";
import { motion } from "framer-motion";
import { Link } from "react-router";
import homeFormImage from "/src/assets/homeFormImage.webp";
import homeFormBG from "/src/assets/homeFormBG.webp";
import {
  fadeInWithEase,
  staggerContainer,
} from "../../../../functions/motionUtils";
import ButtonForm from "../../../../components/button/ButtonForm";
import { useForm } from "react-hook-form";

const features = [
  "Fully Custom Website",
  "Fast Loading",
  "Mobile Responsive",
  "SEO-Optimized",
  "High-Performing",
  "Secure & Reliable",
];

function HomeForm() {
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
      <section className="sectionLight">
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

              <div className="homeFormBtnContainer">
                <motion.div
                  className="workCardContainer"
                  variants={fadeInWithEase}
                >
                  <img src={homeFormImage} alt={`Form Image`} />
                </motion.div>
              </div>
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
                  <ButtonForm name="Send Message" type="btnType0" />
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
