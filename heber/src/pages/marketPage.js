import React from 'react';
import Header from '../components/header';
import MarketOffer from '../components/marketOffer';
import oCSS from '../css/Market.module.css';
import Footer from '../components/footer';
import MarketCollage from '../components/marketCollage';
import MarketMap from '../components/marketMap';

const MarketPage = () => {
  return (
    <section className={ oCSS.offer }>
      <Header
        page='market'
      />
      <MarketCollage/>
      <MarketOffer/>
      <MarketMap/>
      <Footer />
    {/* Market Place page content */}
  </section>
  );
};

export default MarketPage;