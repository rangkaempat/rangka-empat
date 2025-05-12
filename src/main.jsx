import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";  // Correct import for react-router-dom
import './index.scss';
import Hero from './pages/home/Hero.jsx';
import ScrollToTop from "./ScrollToTop.jsx";
import Home from "./pages/home/Home.jsx";

export default function App() {
  return (
    // HashRouter is used for GitHub Pages; BrowserRouter should be used for other environments
    <HashRouter>
      
      {/* Function to Scroll To Top of Page when changing pages */}
      <ScrollToTop />
      
      <Routes>
        {/* Home Route */}
        <Route index element={<Home />} />
        
        {/* Hero Route */}
        <Route path="/hero" element={<Hero />} />
      </Routes>

    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
