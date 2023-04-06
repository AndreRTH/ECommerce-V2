import React from 'react';
import './productcard.css';

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
    {
      image:'images/makeup.jpg',
      title: 'Makeup Box',
      description:
      'Our Makeup Box is packed with a variety of high-quality makeup products from top brands. Each box includes a mix of full-size and deluxe-sample size products, such as eyeshadows, lipsticks, mascaras, and more. Perfect for trying new products or stocking up on favorites, this makeup box is a great way to update your beauty routine.',
      price: '$59.99',
    },
    {
      image: 'images/dnd.jpg',
      title: 'D&D Box',
      description:
      'Our Dungeons and Dragons Box is the perfect addition to any D&D campaign. Each box includes a variety of items such as dice, miniatures, maps and adventure modules, all selected to enhance your D&D experience. Whether you are a seasoned dungeon master or just starting out, this box is a great way to take your gaming to the next level.',
      price: '$59.99',
    },
    {
      image: 'images/cigarbox.jpg',
      title: 'Cigar Box',
      description: 
      'Our cigar box includes a curated selection of premium cigars from renowned brands. Each box includes a variety of cigars to suit different preferences, from rich and full-bodied to smooth and mild. Perfect for cigar aficionados or those looking to try something new, this box is a great way to enjoy the luxury of a fine cigar.',
      price: '$59.99',
    },
    {
      image: 'images/womensclothes.jpg',
      title: 'Assorted Womens Clothes Box',
      description: 
      'Our Womens Clothing Box includes a curated selection of stylish and trendy clothing items. Each box includes a variety of pieces such as dresses, tops, pants, and accessories, all selected to suit different occasions and styles. Perfect for updating your wardrobe or trying out new looks, this box is a great way to refresh your style.',
      price: '$59.99',
    },
    {
      image: 'images/womenaccessories.jpg',
      title: 'Womens Accessories',
      description: 
      'Our Womens Accessory Box includes a curated selection of stylish and trendy accessories. Each box includes a variety of items such as jewelry, scarfs, bags, sunglasses, and more, all selected to complement different looks and styles. Perfect for updating your wardrobe or trying out new accessory styles, this box is a great way to refresh your look',
      price: '$59.99',
    },
    {
      image: 'images/cheesebox.jpg',
      title: 'Assorted Cheese Box',
      description:
      'Our Cheese Box includes a curated selection of delicious and premium cheeses from around the world. Each box includes a variety of different types and flavors of cheese such as cheddar, brie, gouda, blue cheese, and more, all carefully selected to suit different palates. Perfect for cheese lovers, this box is a great way to explore and enjoy different cheeses.',
      price: '$59.99',
    },
    {
      image: 'images/mexicancandy.jpg',
      title: 'Mexican Candy Box',
      description:
      'Our Mexican Candy Box includes a curated selection of delicious and authentic Mexican candies. Each box includes a variety of different types and flavors of candies such as tamarindo, lollipops, gummies, chocolates, and more, all carefully selected to represent the diverse and delicious candies that can be found in Mexico. ',
      price: '',
    },
    {
      image: 'images/butcherbox.jpg',
      title: 'Butcher Box',
      description:
      'Our Meat Box includes a curated selection of high-quality cuts of meat from premium sources. Each box includes a variety of different types and cuts of meat such as beef, pork, chicken, and more, all carefully selected to suit different tastes and cooking styles. Perfect for meat lovers, this box is a great way to explore and enjoy different cuts of meat from premium sources.',
      price: '$59.99',
    },
    {
      image: 'images/cooking.jpg',
      title: 'Premium Cookware Box',
      description:
      'Our Cookware Box includes a curated selection of high-quality cookware from premium brands. Each box includes a variety of items such as pots, pans, knives, utensils, and more, all carefully selected to suit different cooking styles and needs. Perfect for those who love to cook, this box is a great way to explore and enjoy different cookware from premium brands.',
      price: '$59.99',
    },
    {
      image: 'images/Meow.jpg',
      title: 'Meowmazon Box',
      description:
      'What is this? A crossever episode? Our Meowmazon Box is a collaborative box made with Meowmazon to give you a box of assorted premium cat toys and trinkets that your cat is certain to love.',
      price: '$59.99',
    },

  ];

  return (
    <main>
      <h1>Products</h1>
      <section className="product-container">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
    </main>
  );
}

export default ProductContainer;