import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router";
import ScrollToTop from "./functions/scrollToTop.jsx";
import "./index.scss";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Services from "./pages/services/Services.jsx";
import ThemeProvider from "./functions/themeContext.jsx";
import Home2 from "./pages/home2/Home2.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Function to Scroll To Top of Page for React-Router when changing pages */}
        <ScrollToTop />

        <Routes>
          {/* Home Route */}
          <Route index element={<Home2 />} />

          {/* About Route */}
          <Route path="about" element={<About />} />

          {/* Services Route */}
          <Route path="services" element={<Services />} />

          <Route path="home2" element={<Home2 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
