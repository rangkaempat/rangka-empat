import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import background from "/src/assets/services-bg.webp";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";

function Services() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Web Design & Development Services | Rangka Empat Studio, Malaysia"
        description="Explore our full suite of services including custom web design, development, web apps, and digital solutions tailored for businesses in Malaysia and beyond."
        image="https://rangkaempat.com/og-images/home.jpg" //Change ref when image is done
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Web Design & Development",
          provider: {
            "@type": "Organization",
            name: "Rangka Empat Studio",
            url: "https://rangkaempat.com/services",
          },
          areaServed: {
            "@type": "Country",
            name: "Malaysia",
          },
          description:
            "We offer web design, web development, and digital services tailored for Malaysian businesses.",
        }}
      />
      <Navbar />
      <Hero
        title1="OUR"
        title2="SERVICES"
        subTitle="From branding to launch, we handle it all."
        button="WHO WE ARE"
        link="/about"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Services Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
