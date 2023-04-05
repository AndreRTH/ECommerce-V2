import React from "react";
import "./navbar.css";
import logo from "../../images/package.png";

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img id="logo" src={logo} alt="Logo" />{" "}
          </li>
          <li>
            <a href="index.html">Home</a>{" "}
          </li>
          <li>
            <a href="about.html">About</a>{" "}
          </li>
          <li>
            <a href="products.html">Products</a>{" "}
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
