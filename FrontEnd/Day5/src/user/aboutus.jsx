import React from 'react';
import { Link } from 'react-router-dom';
import "./aboutus.css"
import Footer from '../pages/footer';
import Navbar1 from '../components/Navbar1';
export default function Addboat() {

    return (
<>
  <title>About Us Page</title>
  <Navbar1/>
  <header className="masthead" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <p className="masthead-intro"> Welcome </p>
    <h1 className="masthead-heading"> MarinaGetaways</h1>
  </header>
  <section className="introduction-section">
    <h1>Welcome to Our Boat House</h1>
    <p> your gateway to unforgettable aquatic experiences! Nestled at the intersection of luxury and serenity, Our Boat House offers a curated collection of exquisite houseboat accommodations for those seeking a unique retreat on the water. Immerse yourself in the tranquil beauty of our carefully selected locations, each boasting its own charm and scenic vistas.

    Our user-friendly platform provides a seamless booking experience, allowing you to effortlessly browse through a range of houseboats. From the comfort of your home, embark on a journey to find the perfect floating abode for your next adventure. Whether you crave a peaceful getaway or an exciting aquatic escapade, Our Boat House is your trusted companion.
    
    Revolutionizing the way you plan and book your aquatic retreats, Our Boat House prioritizes your comfort and satisfaction. Discover the magic of the sea with us, and let your dreams set sail on the waters of luxury and relaxation. Book your houseboat experience today with Our Boat House!</p>
    <h2> Embark on a Journey with Us</h2>
    <p>
      {" "}
      Coding and programming are awesome because the internet is built on these
      two features. We want to be web developers because we wish to get a job in
      the future that surrounds the work of coding and prWhether you're seeking a romantic retreat, a family adventure, or a solo escape, MarinaGetaways invites you to embark on a journey where the magic of the sea meets the comfort of home. Discover the allure of waterfront living and create lasting memories with us.ogramming.{" "}
    </p>
  </section>
  <Footer/>
</>
    );
    }