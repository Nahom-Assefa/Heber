import React from 'react';
import Header from '../components/header';
import MarketOffer from '../components/marketOffer';
import Footer from '../components/footer';
import MarketCollage from '../components/marketCollage';
import MarketMap from '../components/marketMap';

const MarketPage = () => {
  return (
    <section>
      <Header page='market'/>
      <MarketCollage/>
      <MarketOffer/>
      <MarketMap/>
      <Footer page='market'/>
    {/* Market Place page content */}
  </section>
  );
};

export default MarketPage;