import { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import HomeUSP from "./sections/homeUSP/HomeUSP";
import HomeHero from "./sections/homeHero/HomeHero";
import HomeServices from "./sections/homeServices/HomeServices";
import HomePricing from "./sections/homePricing/HomePricing";
import HomeForm from "./sections/homeForm/HomeForm";
import HomeClients from "./sections/homeClients/HomeClients";
import Footer from "../../components/footer/Footer";
import Seo from "../../components/Seo";

function Home2() {
  return (
    <>
      <Seo
        title="Rangka Empat Studio | We Design. We Code. We Deliver. We Care."
        description="Malaysia Custom Web Design, Web Development, Web Applications & Digital Solutions."
        image="https://rangkaempat.com/og-images/home.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rangka Empat Studio",
          url: "https://rangkaempat.com/",
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
      <HomeHero />
      <HomeClients />
      <HomeUSP />
      <HomeServices />
      <HomeForm />
      <Footer />
    </>
  );
}

export default Home2;
