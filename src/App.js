import React from "react";

import Navbar from "./components/bars/Navbar";
import Homepage from "./components/page/homepage/Homepage";
import Footer from "./components/bars/Footer";
import About from './components/page/about/About';
import Products from "./components/page/products/Products";
import Contact from "./components/page/contact/Contact";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className= 'App'>
      <BrowserRouter>
      <Routes>
      <Route path= '/' element={<Homepage />} />
      <Route path= '/about' element={<About />} />
      <Route path= '/products' element={<Products />} />
      <Route path= '/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

// export default function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Homepage />
//       <Footer />
//       <About />
//       <Products />
//       <Contact />

//     </div>
//   );
// }
