import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography, CircularProgress} from '@mui/material';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import useLoading from './setLoadingHook';

const all = `*[_type == "CollageImages"]{image, title}`;

function Collage() {
  const [injera, setInjera] = useState('');
  const [bakedGoods, setBakedGoods] = useState('');
  const [jebena, setJebena] = useState('');
  const {isLoading, stopLoading, startLoading} = useLoading()

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();

        const whatWeOfferData = await client.fetch(all);
        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case 'Injera':
              setInjera(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Baked Goods':
              setBakedGoods(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Jebena Ceremony':
              setJebena(urlFor(a_item.image).sharpen(10).url());
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
        <Box sx={{ px: 2, backgroundColor: "#F5F5F5", pb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
              <Box
                component="img"
                src={injera}
                alt="injera"
                sx={{ width: { xs: '100%', sm: '80%', md: '99%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, textAlign: 'center' }}>
                Injera
              </Typography>
              <Typography variant="body1" sx={{lineHeight: {md: 2, lg: 2, xl: 2}}}>
                Our tibs with injera and tere siga offers a symphony of tastes and textures, starting with tender, spiced beef tibs 
                that are perfectly seared to lock in their juices. This is complemented by tere siga, fresh raw meat prepared with 
                the utmost care, offering a unique and authentic experience. At our restaurant, we pride ourselves
                on delivering an unforgettable culinary adventure that not only tantalizes your taste buds but also immerses you in the
                rich cultural heritage of Ethiopia.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 4, md: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, textAlign: 'center' }}>
                Fresh Bakery
              </Typography>
              <Typography variant="body1" sx={{lineHeight: {md: 2, lg: 2}}}>
                Step into our bakery and let the enticing aroma of freshly baked delights envelop you,
                a symphony of flavors waiting to be savored. From crusty artisanal loaves to delicate pastries,
                each creation is a testament to our dedication to craftsmanship and quality ingredients,
                ensuring every bite is a moment of pure delight.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
              <Box
                component="img"
                src={bakedGoods}
                alt="Baked Goods"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 5, md: 5 }}>
              <Box
                component="img"
                src={jebena}
                alt="Jebena"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 6, md: 6 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, textAlign: 'center' }}>
                Coffee
              </Typography>
              <Typography variant="body1" sx={{lineHeight: {md: 1.5, lg: 2, xl: 2}}}>        
                Ethiopian coffee is renowned worldwide for its rich, complex flavors and deep cultural significance. 
                At the heart of this tradition is the Jebena coffee ceremony, an authentic experience that goes beyond
                just drinking coffee. Using a jebena, a traditional clay pot, coffee beans are roasted, ground, and brewed
                right before your eyes, connecting you to the birthplace of coffee itself. This ceremony is not just about
                the coffee; it's about community, conversation, and culture. Visit our store to experience this
                timeless ritual and taste coffee as it was meant to be enjoyed—fresh, aromatic, and profoundly satisfying.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default Collage;