import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import ScrollToTop from "./functions/scrollToTop.jsx";
import "./index.scss";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";

export default function App() {
  return (
    // Change from HashRouter to BrowserRouter when deploying other than GitHub Pages
    // GitHub Pages does not support BrowserRouter, so use HashRouter instead
    <HashRouter>
      {/* Function to Scroll To Top of Page for React-Router when changing pages */}

      <ScrollToTop />

      <Routes>
        {/* Home Route */}
        <Route index element={<Home />} />

        {/* About Route */}
        <Route path="about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
