import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import oCSS from '../css/Offer.module.css';

function Offer() {
  const [pastries, setPastries] = useState('');
  const [cBeans, setBeans] = useState('');
  const [hospitality, setHospitality] = useState('');
  const all = `*[_type == "whatWeOfferImages"]{image, title}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const whatWeOfferData = await client.fetch(all);

          whatWeOfferData.forEach(function(a_item) {
            switch(a_item.title) {
              case "Artisan Pastries": setPastries(urlFor(a_item.image).sharpen().url())
                break;
              case "Coffee Beans": setBeans(urlFor(a_item.image).sharpen().url())
                break;
              case "Warm Hospitality": setHospitality(urlFor(a_item.image).sharpen().url())
                break;
              default:
                break;
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);

  return (
    <>
    <div style={{
                  backgroundColor: '#F5F5F5',
                  height: '400px',
                  paddingTop: '200px'
                }}>
      <div>
        <h1 className={oCSS.title}> What We Offer </h1>
        <div className={oCSS.itemTitles}>
          <div>
            <img src={pastries} alt='' />
            <h3>Artisan Pastires</h3>
            <p> Indulge in our selection of <br/> 
                fresh pastries and bakery delights</p>
          </div>
          <div>
            <img src={cBeans} alt='' />
            <h3>High Quality Coffee</h3>
            <p>Savor the rich flavors of <br/>
                Ethiopian Coffee brewed to perfection</p>
          </div>
          <div>
            <img src={hospitality} alt='' />
            <h3>Warm Hospitality</h3>
            <p>Experience genuine hospitality <br/>
                from our friendly staff in a <br/>
                welcoming atmosphere</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Offer;