import React from 'react';
import Header from '../components/header';
import Offer from '../components/whatWeOffer';
import Menu from '../components/menu';
import About from '../components/about';
import Collage from '../components/collage'; 
import oCSS from '../css/Offer.module.css';
import Connected from '../components/getConnected';
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
      <Connected />
      <Footer />
    </section>
  );
};

export default HomePage;
