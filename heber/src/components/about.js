import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import aCSS from '../css/About.module.css';

function About() {
  const [coffeeGuy, setCoffeeGuy] = useState('');
  const [africanPrint, setPrint] = useState('');
  const [logo, setLogo] = useState('');

  const all = `*[_type == "AboutImages"]{image, title}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const aboutData = await client.fetch(all);

          aboutData.forEach(function(a_item) {
            switch(a_item.title) {
              case "About Us Image": setCoffeeGuy(urlFor(a_item.image).sharpen().url())
                break;
              case "African Print": setPrint(urlFor(a_item.image).sharpen().url())
                break;
              case "Logo White": setLogo(urlFor(a_item.image).sharpen().url())
                break;
              default:
                break;
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error); // Could set a default banner URL or handle the error in another way
        }
      }
      fetchData();
    }, []);

  return (
    <>


    <div className={aCSS.aboutSection}>
      <div className={aCSS.aboutImage1}>
        <img src={coffeeGuy} className= {aCSS.aboutImage2} alt="About Us" />
      </div>
      <div className={aCSS.aboutContent}>
        <div className={aCSS.aboutImage1}>
          <img src={logo} alt="Logo" />
        </div>
        <h2 className={aCSS.aboutUsh2}>About Us</h2>
        <p className={aCSS.aboutUsP}>
          At Heber Market & Cafe we're more than a coffee shop; we're a gathering place where traditions thrive and friendships flourish.
          Rooted in our Ethiopian heritage, we're dedicated to fostering a sense of belonging within our diverse community.
          Join us for a taste of authenticity and warmth.
        </p>
        <p>
          Our mission is to deliver the best experience to our customers and to continuously innovate to meet their needs.
        </p>
        <div className={aCSS.learnMoreContainer}>
          <button className={aCSS.learnMoreBtn}>Learn More</button>
        </div>
        <div>
          <img src={`${africanPrint}`} alt="Example Imag" className={aCSS.africanCover} />
        </div>
      </div>
    </div>
    </>
  );
}

export default About;