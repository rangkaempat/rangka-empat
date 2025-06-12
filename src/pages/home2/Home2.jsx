import { useEffect } from "react";
import Navbar2 from "../../components/navbar2/Navbar2";
import HomeUSP from "../home/sections/homeUSP/HomeUSP";
import HomeHero2 from "./sections/homeHero2/HomeHero2";
import HomeServices from "../home/sections/homeServices/HomeServices";
import HomeWork from "../home/sections/homeWork/HomeWork";
import HomePricing from "../home/sections/homePricing/HomePricing";
import HomeCTA from "../home/sections/homeCTA/HomeCTA";
import HomeForm from "../home/sections/homeForm/HomeForm";
import HomeClients from "../home/sections/homeClients/HomeClients";
import Footer2 from "../../components/footer2/Footer2";
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
      <Navbar2 />
      <HomeHero2 />
      <HomeClients />
      <HomeUSP />
      <HomeServices />
      <HomeForm />
      <Footer2 />
    </>
  );
}

export default Home2;
