import React from "react";

import Navbar from "./components/bars/Navbar";
import Homepage from "./components/page/homepage/Homepage";
import Footer from "./components/bars/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}
