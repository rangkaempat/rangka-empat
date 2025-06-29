import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";
import WorkProjects from "./sections/workProjects/WorkProjects";
import ContactForm from "../../components/contactForm/ContactForm";

function Work() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Our Work | Rangka Empat Studio – Kuala Lumpur Web Design & Digital Experts"
        description="Explore our portfolio of custom web design and development projects by Rangka Empat Studio. See how we bring creative digital solutions to life."
        image="https://rangkaempat.com/og-images/work.jpg" // Update when image is ready
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Our Work – Rangka Empat Studio",
          url: "https://rangkaempat.com/work",
          description:
            "A showcase of completed web design and development projects by Rangka Empat Studio.",
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
        title2="WORK"
        subTitle="A collection of projects we're proud to call ours."
        button="WHAT WE DO"
        link="/services"
      />
      <WorkProjects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Work;
