import React, { useContext } from "react";
import Navbar2 from "../../components/navbar2/Navbar2";
import HomeUSP from "../home/sections/homeUSP/HomeUSP";
import HomeHero2 from "./sections/homeHero2/HomeHero2";
import HomeServices from "../home/sections/homeServices/HomeServices";
import HomeWork from "../home/sections/homeWork/HomeWork";
import HomePricing from "../home/sections/homePricing/HomePricing";
import HomeCTA from "../home/sections/homeCTA/HomeCTA";
import HomeForm from "../home/sections/homeForm/HomeForm";
import Footer from "../../components/footer/Footer";

function Home2() {
  return (
    <>
      <Navbar2 />
      <HomeHero2 />
      <HomeUSP />
      <HomeServices />
      <HomeWork />
      <HomePricing />
      <HomeCTA />
      <HomeForm />
      <Footer />
    </>
  );
}

export default Home2;
