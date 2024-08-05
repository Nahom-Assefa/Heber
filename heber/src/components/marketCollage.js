import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';

const all = `*[_type == "marketCollageImages"]{image, title}`;

function MarketCollage() {
  const [vegetables, setVegetables] = useState('');
  const [bakery, setBakery] = useState('');
  const [fruits, setFruits] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const whatWeOfferData = await client.fetch(all);

        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case 'Fresh Veggies':
              setVegetables(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Baked Good Items':
              setBakery(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Fresh Fruits':
              setFruits(urlFor(a_item.image).sharpen(10).url());
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ mt: 10, px: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
          <Box
            component="img"
            src={vegetables}
            alt="Fresh Vegetables"
            sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
            Fresh Vegetables
          </Typography>
          <Typography variant="body1">
            Explore the vibrant array of locally sourced produce, bursting with flavor and nutrients, at our market stalls. From crisp lettuce to plump tomatoes and everything in between, our selection promises not only freshness but also the satisfaction of supporting local growers and sustainable practices.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
            Fresh Bakery
          </Typography>
          <Typography variant="body1">
            Step into our bakery and let the enticing aroma of freshly baked delights envelop you, a symphony of flavors waiting to be savored. From crusty artisanal loaves to delicate pastries, each creation is a testament to our dedication to craftsmanship and quality ingredients, ensuring every bite is a moment of pure delight.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
          <Box
            component="img"
            src={bakery}
            alt="Fresh Bakery"
            sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 5, md: 5 }}>
          <Box
            component="img"
            src={fruits}
            alt="Fresh Fruits"
            sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 6, md: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
            Fresh Fruits
          </Typography>
          <Typography variant="body1">
            Step into a world of vibrant flavors and unbeatable freshness with our exquisite selection of farm-fresh fruit! From succulent strawberries bursting with sweetness to crisp apples that snap with every bite, our hand-picked fruits are a feast for your senses. Each piece is carefully selected to ensure you receive only the juiciest, most flavorful fruits nature has to offer.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MarketCollage;



