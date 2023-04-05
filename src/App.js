import React from "react";

import Navbar from "./components/bars/Navbar";
import Homepage from "./components/page/homepage/Homepage";
import Footer from "./components/bars/Footer";
import About from './components/page/about/About';
import Products from "./components/page/products/Products";
import Contact from "./components/page/contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Homepage />
      <Footer />
      <About />
      <Products />
      <Contact />

    </div>
  );
}
