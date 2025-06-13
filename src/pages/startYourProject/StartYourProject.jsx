import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";

function StartYourProject() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <Seo
        title="Start Your Project | Rangka Empat Studio – Web Design & Digital Solutions"
        description="Kickstart your custom web design or development project with Rangka Empat Studio. Fill out our onboarding form to help us understand your goals and vision."
        image="https://rangkaempat.com/og-images/start-your-project.jpg" // Update when image is ready
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Start Your Project – Rangka Empat Studio",
          url: "https://rangkaempat.com/start-your-project",
          description:
            "A guided onboarding process for clients to submit project details, goals, and technical requirements to Rangka Empat Studio.",
          mainEntity: {
            "@type": "Service",
            name: "Project Onboarding & Consultation",
            serviceType: "Web Design and Development Consultation",
            provider: {
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
          },
        }}
      />

      <Navbar />
      <Hero
        title1="START YOUR"
        title2="PROJECT"
        subTitle="Hey there! Ready to get started?"
        button="PRICING"
        link="/pricing"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper">
          <div className="sectionContent">StartYourProject Section</div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default StartYourProject;
