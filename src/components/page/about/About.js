import React from 'react';
import './about.css';
import Navbar from '../../bars/Navbar';
import Footer from '../../bars/Footer';

export default function About() {
  return (
    <>
        <Navbar />
    <main>
    <h1>About Us</h1>
    <section class="card-container">
        <div class="card">
            <img src="images/testicon.png" alt="Card 1" />
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam diam, euismod malesuada nibh vulputate quis. Duis sed sapien a odio tincidunt euismod. Nam ac sapien sit amet arcu aliquet cursus nec sit amet velit.</p>
        </div>
        <div class="card">
            <img src="images/curator.png" alt="Card 2" />
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam diam, euismod malesuada nibh vulputate quis. Duis sed sapien a odio tincidunt euismod. Nam ac sapien sit amet arcu aliquet cursus nec sit amet velit.</p>
        </div>
        <div class="card">
            <img src="images/unboxlove.png" alt="Card 3" />
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam diam, euismod malesuada nibh vulputate quis. Duis sed sapien a odio tincidunt euismod. Nam ac sapien sit amet arcu aliquet cursus nec sit amet velit.</p>
        </div>
    </section>
</main>
<Footer />

    </>

    
  )
}
