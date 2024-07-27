import React from 'react';
import Header from '../components/header';
import Offer from '../components/whatWeOffer';
import Menu from '../components/menu';
import About from '../components/about';
import Collage from '../components/collage'; 
import oCSS from '../css/Offer.module.css';
import Loyalty from '../components/loyaltyProgram';
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <section className={oCSS.offer}>
      <Header 
        page='home'
      />
      <Offer />
      <Menu />
      <About />
      <Collage />
      <Loyalty />
      <Footer />
      {/* Home page content */}
    </section>
  );
};

export default HomePage;
