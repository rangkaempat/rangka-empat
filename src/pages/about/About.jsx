import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/about-bg-2.webp";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";
import AboutWhoWeAre from "./sections/aboutWhoWeAre/AboutWhoWeAre";
import ContactForm from "../../components/contactForm/ContactForm";
import AboutOurProcess from "./sections/aboutOurProcess/AboutOurProcess";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="About Us | Rangka Empat Studio – Kuala Lumpur Web Design & Digital Experts"
        description="Learn about Rangka Empat Studio, a web design and development studio based in Kuala Lumpur. We combine creativity and code to deliver impactful digital solutions."
        image="https://rangkaempat.com/og-images/home.jpg" //Change ref when image is done
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rangka Empat Studio",
          url: "https://rangkaempat.com/about",
          logo: "https://rangkaempat.com/logo.png",
          description:
            "Web design and development studio in Malaysia offering digital solutions.",
          sameAs: [
            "https://twitter.com/rangkaempat",
            "https://linkedin.com/company/rangka-empat-studio",
          ],
        }}
      />

      <Navbar />
      <Hero
        title1="ABOUT"
        title2="US"
        subTitle="Designers, Developers & Problem-Thinkers."
        button="VIEW OUR WORK"
        link="/work"
      />
      <AboutWhoWeAre />
      {/* <AboutOurProcess /> */}
      <ContactForm />
      <Footer />
    </>
  );
}

export default About;
