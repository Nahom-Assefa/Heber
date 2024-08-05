import React from 'react';
import Header from '../components/header';
import MarketOffer from '../components/marketOffer';
import oCSS from '../css/Market.module.css';
import Footer from '../components/footer';
import MarketCollage from '../components/marketCollage';
import MarketMap from '../components/marketMap';
import OurStory from '../components/ourStory';

const MarketPage = () => {
  return (
    <section className={ oCSS.offer }>
      <Header
        page='about'
      />
      <OurStory/>
      <MarketOffer/>
      <MarketMap/>
      <Footer />
    {/* Market Place page content */}
  </section>
  );
};

export default MarketPage;