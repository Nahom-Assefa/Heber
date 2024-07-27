import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import oCSS from '../css/Offer.module.css';

function MarketOffer() {
  const [farm, setFarm] = useState('');
  const [sustain, setSustain] = useState('');
  const [cultural, setCultural] = useState('');
  const all = `*[_type == "marketOfferImages"]{image, title}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const whatWeOfferData = await client.fetch(all);

          whatWeOfferData.forEach(function(a_item) {
            switch(a_item.title) {
              case "Farm To Table": setFarm(urlFor(a_item.image).sharpen().url())
                break;
              case "Sustainability Practices": setSustain(urlFor(a_item.image).sharpen().url())
                break;
              case "Cultural Diversity": setCultural(urlFor(a_item.image).sharpen().url())
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
        <div className={oCSS.itemTitles}>
          <div>
            <img src={farm} alt='' />
            <h3 style={ { fontSize: 'xx-large' } }>Farm-to-Table Freshness</h3>
            <p>Experience the epitome of freshness as our market proudly showcases a direct link between local farmers and your table.</p>
          </div>
          <div>
            <img src={sustain} alt='' />
            <h3 style={ { fontSize: 'xx-large' } }>Sustainable Practices</h3>
            <p>We're dedicated to sustainability, offering eco-friendly packaging and reducing food waaste to ensure every purchase supports a greener future.</p>
          </div>
          <div>
            <img src={cultural} alt='' />
            <h3 style={ { fontSize: 'xx-large' } }>Cultural Diversity</h3>
            <p>Our market offers a divers range of traditional and fusion dishes, showcasing culinary diversity from around the world, right in your neighborhood.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MarketOffer;