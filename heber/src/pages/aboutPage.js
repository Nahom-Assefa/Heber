import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import OurStory from '../components/ourStory';
import OurVision from '../components/ourVision';
import TimeLine from '../components/timeline';

const AboutPage = () => {
  return (
    <section>
      <Header page='about'/>
      <OurStory/>
      <OurVision/>
      <TimeLine/>
      <Footer page='about'/>
    {/* Market Place page content */}
  </section>
  );
};

export default AboutPage;