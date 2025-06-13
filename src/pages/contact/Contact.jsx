import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";

function Contact() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Contact Us | Rangka Empat Studio – Kuala Lumpur Web Design & Digital Experts"
        description="Get in touch with Rangka Empat Studio, a web design and development team based in Kuala Lumpur, Malaysia. Reach out for inquiries, project collaborations, or consultations."
        image="https://rangkaempat.com/og-images/home.jpg" // Update when image is ready
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us – Rangka Empat Studio",
          url: "https://rangkaempat.com/contact",
          description:
            "Official contact page for Rangka Empat Studio, a Kuala Lumpur-based web design and development agency.",
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
        title1="GET IN"
        title2="TOUCH"
        subTitle="Reach out to us, we'll handle the rest."
        button="START YOUR PROJECT"
        link="/start-your-project"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">Contact Us Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
