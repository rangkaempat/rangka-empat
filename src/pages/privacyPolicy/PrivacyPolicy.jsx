import React, { useEffect, useContext } from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../functions/themeContext";
import Seo from "../../components/Seo";
import "./PrivacyPolicy.scss";

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
      <Hero
        title1="PRIVACY"
        title2="POLICY"
        subTitle="Your privacy is our top priority."
        button="GET IN TOUCH"
        link="/contact"
      />
      <section className={darkMode ? "sectionDark" : "sectionLight"}>
        <div className="sectionWrapper privacyWrapper">
          <h2 className="textRegular textXS">
            Last updated: <span className="textLight">13 June 2025</span>
          </h2>

          <hr />

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Who We Are</h2>
            <p>
              This website (“rangkaempat.com”) is owned and operated by Rangka
              Empat Studio, a creative studio based in Kuala Lumpur, Malaysia.
              We specialise in branding, web design, and digital solutions. If
              you have any questions about this policy or how we handle personal
              data, please contact us at: 📧 we@rangakaempat.com
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Our Commitment</h2>
            <p>
              We value your privacy. This policy explains how we collect, store,
              and use your personal data in line with data protection laws such
              as the General Data Protection Regulation (GDPR) and Malaysia's
              Personal Data Protection Act (PDPA).
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">What Data We Collect and Why</h2>
            <div>
              <h3 className="textRegular textM">A. Website Analytics</h3>
              <br />
              <p>
                We use tools like Google Analytics to help us understand how
                visitors use our site — such as pages viewed, time spent, and
                device/browser type. 🔒 This data is anonymised and cannot be
                used to personally identify you.
              </p>
            </div>

            <div>
              <h3 className="textRegular textM">B. Contact Forms</h3>
              <br />
              <p>If you contact us via forms on our website, we collect:</p>
              <br />
              <ul className="privacyList">
                <li>Your name</li>
                <li>Email address</li>
                <li>Optional project details or message</li>
              </ul>
              <br />
              <p>
                We use this information solely to respond to your inquiry or
                follow up on project-related discussions.
              </p>
            </div>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and collect
              anonymised tracking data. You can disable cookies via your browser
              settings. Doing so may limit some features of our website.
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">
              How We Store and Protect Your Data
            </h2>
            <ul className="privacyList">
              <li>
                We store form submissions securely using encrypted protocols.
              </li>
              <li>Email communications are handled via secure servers.</li>
              <li>Only authorised team members have access to your data.</li>
            </ul>
            <p>
              We take appropriate technical and organisational measures to
              prevent unauthorised access, disclosure, alteration, or
              destruction of personal data.
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Your Rights</h2>
            <h3 className="textRegular textXS">You have the right to:</h3>
            <ul className="privacyList">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or deletion of your data</li>
              <li>Withdraw consent to data processing</li>
              <li>Object to or restrict how we process your data</li>
              <li>
                File a complaint with a data protection authority if needed
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at:{" "}
              <a href="mailto:we@rangkaempat.com">we@rangkaempat.com</a>
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">International Data Transfers</h2>
            <p>
              If any of our services or processors store data outside Malaysia
              or the EU, we ensure appropriate safeguards are in place, such as
              compliance with EU-U.S. Privacy Frameworks or standard contractual
              clauses.
            </p>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Data Retention</h2>
            <h3 className="textRegular textM">
              We only retain personal data for as long as necessary:
            </h3>
            <ul className="privacyList">
              <li>
                Contact form data: 12–24 months (for project/client follow-up)
              </li>
              <li>Newsletter data: Until you unsubscribe</li>
            </ul>
          </div>

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Changes to This Policy</h2>
            <p>
              This policy may be updated periodically. We recommend checking
              this page occasionally. Major changes will be timestamped in the
              change log below.
            </p>
          </div>

          <hr />

          <div className="sectionContent privacyContent">
            <h2 className="textBold textXL">Change Log</h2>
            <h3 className="textRegular textXS">
              13 June 2025 –{" "}
              <span className="textLight">Privacy Policy created</span>
            </h3>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
