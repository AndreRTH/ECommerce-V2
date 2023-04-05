import React from "react";
import "./navbar.css";
import logo from "../../images/package.png";
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img id="logo" src={logo} alt="Logo" />{" "}
          </li>
          <li>
            <Link to='/' >Home</Link>{" "} 
          </li>
          <li>
            <Link to='/about' >About</Link>{""}
          </li>
          <li>
            <Link to='/products' >Products</Link>{" "}
          </li>
          <li>
            <Link to='/contact' >Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
