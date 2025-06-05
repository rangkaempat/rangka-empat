import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/about-bg-2.webp";
import { ThemeContext } from "../../functions/themeContext";
import Navbar2 from "../../components/navbar2/Navbar2";
import Footer2 from "../../components/footer2/Footer2";
import Seo from "../../components/Seo";

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

      <Navbar2 />
      <Hero
        title="Turning Coffee & Conversations into"
        titleSpan="Ideas That Move"
        desc="We’re Rangka Empat Studio – a passionate team of creators, developers, and problem-solvers, united by a shared love for crafting meaningful digital experiences."
        background={background}
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">About Us Section</div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}

export default About;
