import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router";
import ScrollToTop from "./functions/scrollToTop.jsx";
import "./index.scss";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import ThemeProvider from "./functions/themeContext.jsx";
import ScrollTest from "./components/scrollTest/ScrollTest.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Work from "./pages/work/Work.jsx";
import Pricing from "./pages/pricing/Pricing.jsx";
import StartYourProject from "./pages/startYourProject/StartYourProject.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Function to Scroll To Top of Page for React-Router when changing pages */}
        <ScrollToTop />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="start-your-project" element={<StartYourProject />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="scrollTest" element={<ScrollTest />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
