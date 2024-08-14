import React from 'react';
import Header from '../components/header';
import Offer from '../components/whatWeOffer';
import Menu from '../components/menu';
import About from '../components/about';
import Collage from '../components/collage'; 
import MailchimpForm from '../components/mailChimpForm';
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <section>
      <Header page='home'/>
      <Offer />
      <Menu />
      <About />
      <Collage />
      <MailchimpForm />
      <Footer page='home'/>
    </section>
  );
};

export default HomePage;
