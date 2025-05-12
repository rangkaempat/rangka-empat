import { React, useEffect } from "react";
import { Outlet, Link } from "react-router";
import "../../index.scss";
import Hero from "./sections/Hero";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  useEffect(() => {
    document.title =
      "Rangka Empat Studio | We Design. We Code. We Deliver. We Care."; // Quick solution
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div>Hello</div>
    </>
  );
}
