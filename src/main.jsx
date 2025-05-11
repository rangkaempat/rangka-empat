import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router";
import './index.scss'

import ScrollToTop from "./ScrollToTop.jsx";
import Home from "./pages/home/Home.jsx";

export default function App() {
  return (

    // Change from HashRouter to BrowserRouter when deploying other than GitHub Pages
    // GitHub Pages does not support BrowserRouter, so use HashRouter instead
    <HashRouter>
      
      {/* Function to Scroll To Top of Page for React-Router when changing pages */}
      <ScrollToTop />
      
      <Routes>
        {/* Layout = Navbar */}
        {/* <Route path="/" element={<Layout />} /> */}

        <Route index element={<Home />} />

      </Routes>

    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);