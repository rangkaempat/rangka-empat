// Home.js

import React from "react";
import { Link } from "react-router-dom";  // Correct import for react-router-dom

export default function Home() {
  return (
    <div>
      <h1>Welcome to Rangka Empat Studio</h1>
      <p>Your digital partner for innovative solutions.</p>

      {/* Link to Hero Page */}
      <Link to="/hero">Go to Hero Page</Link>
    </div>
  );
}
