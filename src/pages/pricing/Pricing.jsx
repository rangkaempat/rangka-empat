import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";

function Pricing() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Pricing | Rangka Empat Studio – Web Design & Digital Packages"
        description="Discover pricing for our web design and development services tailored for startups, SMEs, and enterprises in Malaysia and beyond."
        image="https://rangkaempat.com/og-images/pricing.jpg" // Update when image is ready
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Pricing – Rangka Empat Studio",
          url: "https://rangkaempat.com/pricing",
          description:
            "Transparent pricing for web design, development, and digital services by Rangka Empat Studio.",
          publisher: {
            "@type": "Organization",
            name: "Rangka Empat Studio",
            url: "https://rangkaempat.com",
            logo: {
              "@type": "ImageObject",
              url: "https://rangkaempat.com/logo.png",
            },
            sameAs: [
              "https://twitter.com/rangkaempat",
              "https://linkedin.com/company/rangka-empat-studio",
            ],
          },
        }}
      />

      <Navbar />
      <Hero
        title1="OUR"
        title2="PLANS"
        subTitle="Find the plan that suits your needs."
        button="GET STARTED"
        link="/start-your-project"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Pricing Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Pricing;
