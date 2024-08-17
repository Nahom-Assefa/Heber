import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography, CircularProgress} from '@mui/material';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import useLoading from './setLoadingHook';

const all = `*[_type == "marketCollageImages"]{image, title}`;

function MarketCollage() {
  const [commodities, setCommodities] = useState('');
  const [kurt, setKurt] = useState('');
  const [spices, setSpices] = useState('');
  const {isLoading, startLoading, stopLoading} = useLoading();

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading()

        const whatWeOfferData = await client.fetch(all);
        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case 'Commodities':
              setCommodities(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Meat':
              setKurt(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Exotic Spices':
              setSpices(urlFor(a_item.image).sharpen(10).url());
              break;
            default:
              break;
          }
        });

        stopLoading();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [startLoading, stopLoading]);

  return (
    <>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <CircularProgress/>
        </Box>
      ) : (
        <Box sx={{ mt: 10, px: 2 }}>
          <Typography variant='h2' sx={{textAlign: 'center', mb: 3, fontFamily: 'Cinzel, serif'}}> Offerings </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
              <Box
                component="img"
                src={commodities}
                alt="commodities"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, fontFamily: "'Montserrat', serif", textAlign: 'center' }}>
                Commodities
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium', fontFamily: 'Cormorant Garamond, serif', lineHeight: {md: 1, lg: 2}}}>
              Discover an array of global goods and authentic African products, from exotic spices to handcrafted goods
              to everyday products, fresh produce and more! Our market not only offers diverse selections but also embodies
              the spirit and warmth of African hospitality. Experience the dynamic energy and rich variety of products
              that reflect global cultures, offering something special with every visit."
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1,  fontFamily: "'Montserrat', serif", textAlign: 'center'}}>
                Fresh Meat
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium', fontFamily: 'Cormorant Garamond, serif', lineHeight: {md: 1, lg: 2}}}>
                Kurt, a traditional Ethiopian delicacy, offers a deep dive into Ethiopia's rich culinary heritage.
                This unique dish, made from raw minced beef, is seasoned with a blend of traditional spices and herbs,
                often including mitmita and niter kibbeh. Kurt has been a part of Ethiopian cuisine for centuries,
                reflecting the country’s history of communal dining and celebration. Its preparation and consumption
                are steeped in cultural significance, often enjoyed during special occasions and gatherings. By trying
                Kurt, you’re not just tasting a dish; you’re experiencing a piece of Ethiopian history and tradition,
                celebrated for its bold flavors and time-honored preparation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
              <Box
                component="img"
                src={kurt}
                alt="Kurt"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 5, md: 5 }}>
              <Box
                component="img"
                src={spices}
                alt="Spices"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 6, md: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, fontFamily: "'Montserrat', serif", textAlign: 'center' }}>
                Spices
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium', fontFamily: 'Cormorant Garamond, serif', lineHeight: 2 }}>
                Discover the world of flavors at our market, where our carefully curated selection of spices invites you
                to elevate every dish you create. From the warmth of Ethiopian berbere to the earthy complexity of cumin,
                our spices are sourced from around the globe, bringing authentic tastes to your kitchen. Whether you’re
                crafting a familiar recipe or experimenting with new flavors, our spices are the key to unlocking culinary
                magic. Each jar holds the essence of tradition, waiting to transform your meals into something extraordinary.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default MarketCollage;



