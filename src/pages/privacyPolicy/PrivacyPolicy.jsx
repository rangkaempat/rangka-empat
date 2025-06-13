import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";

function PrivacyPolicy() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Privacy Policy | Rangka Empat Studio – Your Data & Rights"
        description="Read the privacy practices of Rangka Empat Studio. Learn how we collect, use, and protect your personal data while using our digital services."
        image="https://rangkaempat.com/og-images/privacy.jpg" // Replace with final OG image path
        noIndex={false} // Set to true only if you don’t want this page indexed
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy",
          url: "https://rangkaempat.com/privacy-policy",
          description:
            "Details on how Rangka Empat Studio collects, uses, and safeguards personal data in accordance with applicable laws.",
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
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">PrivacyPolicy Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
