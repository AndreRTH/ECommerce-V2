import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
// import Navbar from "./components/bars/Navbar";
// import Footer from "./components/bars/Footer";

// https://stackoverflow.com/questions/71698035/error-target-container-is-not-a-dom-element-with-react
// //
// ReactDOM.createRoot(
//   document.getElementById("root"),
// )
// .render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );
// //

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(<Navbar />, document.getElementById("nav"));

// ReactDOM.render(
//   <div>
//     <Footer />
//   </div>,
//   document.getElementById("foot")
// );
