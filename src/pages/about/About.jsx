import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

function About() {
  useEffect(() => {
    document.title = "Rangka Empat Studio | Who We Are.";
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}

export default About;
