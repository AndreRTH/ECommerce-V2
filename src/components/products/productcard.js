import React from 'react';

function ProductCard(props) {
  const { image, title, description, price } = props;
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
      <button>Buy Now</button>
    </div>
  );
}

function ProductContainer() {
  const products = [
    {
      image: 'images/charboard2.jpg',
      title: 'Charcuterie Box!',
      description:
        "Introducing our Charcuterie Box, the perfect addition to any wine night or gathering with friends and family. Each month, subscribers will receive a selection of cured meats, cheeses, crackers, nuts, and other accompaniments from the best artisans around the world.This Charcuterie Box will elevate any occasion.",
      price: '$59.99',
    },
    {
      image: 'images/theoutdoorsman.jpg',
      title: 'The Outdoorsman',
      description:
        'Our Hiking and Camping Supply Box includes over $70 worth of essential gear for your next outdoor adventure, such as camping cookware, headlamp, water filter and camping stove. Perfect for any level of outdoor enthusiast, this box is a great value and will help you make the most of your time in nature.',
      price: '$59.99',
    },
    // Add more products here
  ];

  return (
    <main>
      <section className="product-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </main>
  );
}

export default ProductContainer;