import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import Navbar from './components/bars/Navbar';
import Footer from './components/bars/Footer'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

ReactDOM.render(
    <div>
      <Navbar />
    </div>,
    document.getElementById('nav')
  );


  ReactDOM.render(
    <div>
      <Footer />
    </div>,
    document.getElementById('foot')
  );