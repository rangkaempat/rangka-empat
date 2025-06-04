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

function Home2() {
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <Navbar2 />
      <HomeHero2 />
      <HomeClients />
      <HomeUSP />
      <HomeServices />
      <HomeWork />
      <HomePricing />
      <HomeCTA />
      <HomeForm />
      <Footer2 />
    </>
  );
}

export default Home2;
