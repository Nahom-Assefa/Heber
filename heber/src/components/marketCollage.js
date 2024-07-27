import React, { useEffect, useState } from 'react';
import oCSS from '../css/Market.module.css';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
const all = `*[_type == "marketCollageImages"]{image, title}`;

function MarketCollage() {

    const [ vegetables, setVegetables ] = useState( '' );
    const [ bakery, setBakery ] = useState( '' );
    const [ fruits, setFruits ] = useState( '' );


    useEffect(() => {
        async function fetchData() {
          try {
            const whatWeOfferData = await client.fetch( all );
  
            whatWeOfferData.forEach(function(a_item) {
              switch(a_item.title) {
                case "Fresh Veggies": setVegetables(urlFor(a_item.image).sharpen().url())
                  break;
                case "Baked Good Items": setBakery(urlFor(a_item.image).sharpen().url())
                  break;
                case "Fresh Fruits": setFruits(urlFor(a_item.image).sharpen().url())
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
        <div class={ oCSS.gridContainer }>
            <div class="grid-item item1"><img src={vegetables} alt='' style={ { height: '50vmin', width: '50vmin' } } /></div>
            <div class={ oCSS.gridItem2 }>
              <header style={ { fontWeight: 500, fontSize: 'x-large' } }>Fresh Vegetables</header>
              <p>Explore the vibrant array of locally sourced produce, bursting with flavor and nutrients, at our market stalls. From crisp lettuce to plump tomatoes and everything in between, our selection promises not only freshness but also the satisfaction of supporting local growers and sustainable practices.</p>
            </div>
            <div class={ oCSS.gridItem2 }>
                <header style={ { fontWeight: 500, fontSize: 'x-large' } }>Fresh Bakery</header>
                <p>Step into our bakery and let the enticing aroma of freshly baked delights envelop you, a symphony of flavors waiting to be savored. From crusty artisanal loaves to delicate pastries, each creation is a testament to our dedication to craftsmanship and quality ingrediants, ensuring every bite is a moment of pure delight.</p>
            </div>
            <div class="grid-item item4"><img src={bakery} alt='' style={ { height: '50vmin', width: '50vmin' } } /></div>
            <div class="grid-item item5"><img src={fruits} alt='' style={ { height: '50vmin', width: '50vmin' } } /></div>
            <div class={ oCSS.gridItem6 }>
                <header style={ { fontWeight: 500, fontSize: 'x-large' } }>Fresh Fruits</header>
                <p>Step into a world of vibrant flavors and unbeatable freshness with our exquisite selection of farm-fresh fruit! From succulent strawberries bursting with sweetness to crisp apples that snap with every bite, our hand-picked fruits are a feast for your senses. Each piece is carefully selected to ensure you receive only the juiciest, most flavorful fruits nature has to offer.</p>
            </div>
        </div>
  );
}

export default MarketCollage;