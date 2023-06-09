import React from "react";
// import { Carousel } from "react-responsive-carousel";
import DemoCarousel from "../../bars/Carousel";
import Navbar from "../../bars/Navbar";
import Footer from "../../bars/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />

      <main class="layout-content">
      <h1>StuffBox!</h1>
      <DemoCarousel />
      
      <section class="products">
        <div class="product">
          <img src="images/cigarbox.jpg" alt="Product 1" />
          <h3>Dominican Cigars</h3>
          <p>
            Pour yourself a glass and start your cigar journey off with a custom
            Dominican blend formulated to pair with your favorite bourbon. This
            nutty wrap includes hints of sweet honey that will blend with smoky
            bourbon notes—either on the rocks or in a cocktail.
          </p>
          <button>Buy Now</button>
        </div>
        <div class="product">
          <img src="/images/charboard2.jpg" alt="Product 2" />
          <h3>Charcuterie Boxes</h3>
          <p>
            Introducing our artisanal charcuterie board, a perfect centerpiece
            for your next gathering or a thoughtful gift for the food lover in
            your life. Each board is handcrafted from premium, sustainably
            sourced materials and carefully curated.
          </p>
          <button>Buy Now</button>
        </div>
        <div class="product">
          <img src="/images/forher.jpg" alt="Product 3" />
          <h3>Makeup Products</h3>
          <p>
            Our lineup includes high-quality products from trusted brands,
            including a range of foundation shades to match every skin tone, eye
            shadows that will make your eyes pop, and lipsticks that are sure to
            turn heads.
          </p>
          <button>Buy Now</button>
        </div>
      </section>

      <section class="testimonials">
        <h2>Testimonials</h2>
        <div class="testimonial">
          <p>
            "I absolutely love my StuffBox subscription! It has completely
            filled the void in my life that I didn't even know existed. It's
            like getting a surprise gift in the mail every month, which is the
            only thing keeping me going at this point."
          </p>
          <p>- Jessica Day, New York</p>
        </div>
        <div class="testimonial">
          <p>
            "I was hesitant to try a subscription box service at first, but I'm
            so glad I gave StuffBox a chance. It's like a fleeting moment of joy
            in the bleak and monotonous existence that is my life. Plus, the
            convenience of having it delivered right to my door is unbeatable,
            since I rarely leave my apartment these days."
          </p>
          <p>- Nick Miller, San Francisco</p>
        </div>
        <div class="testimonial">
          <p>
            "As someone who loves trying out new things, StuffBox is the perfect
            subscription service for me. Every month, I receive a box filled
            with items that I know I'll love, which distracts me from the
            futility of existence. Highly recommend, since it's the only thing
            that brings me even a hint of joy."
          </p>
          <p>- Winston Schmitt, London</p>
        </div>
      </section>
    </main>
    <Footer />

    </>

  );
}
