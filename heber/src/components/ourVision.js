import React, {useEffect, useState} from 'react';
import {Box, Grid, Typography, CircularProgress} from '@mui/material';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import useLoading from './setLoadingHook';

const all = `*[_type == "Vision"]{image, title}`;

function OurVision() {
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');
  const {isLoading, startLoading, stopLoading} = useLoading();

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();

        const whatWeOfferData = await client.fetch(all);
        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case 'Vision':
              setVision(urlFor(a_item.image).sharpen(10).url());
              break;
            case 'Mission':
              setMission(urlFor(a_item.image).sharpen(10).url());
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
        <Box sx={{ mt: 10, px: 2, backgroundColor: "#ECECEC", pb: 2, height: 'auto' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
              <Box
                component="img"
                src={vision}
                alt="vision"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
            <Grid sx={{mt: {sm: 0, md: 10}}} item xs={12} md={6} order={{ xs: 2, md: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, textAlign: 'center' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'medium', fontFamily: '"Poppins", "Comic Sans MS", "Cursive", sans-serif', lineHeight: 3 }}>
                At Heber Market & Cafe, we envision a world where cultural diversity is celebrated, and communities thrive in environments
                filled with warmth, authenticity, and connection. We aspire to be a beacon of Ethiopian heritage, spreading the joy of tradition,
                and fostering a sense of belonging wherever we go.
              </Typography>
            </Grid>
            <Grid sx={{mt: {sm: 0, md: 10}}} item xs={12} md={6} order={{ xs: 4, md: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 1, textAlign: 'center' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 'medium', fontFamily: '"Poppins", "Comic Sans MS", "Cursive", sans-serif', lineHeight: 3 }}>
                Our mission at Heber Market & Cafe is to create a welcoming space where people from all walks of life can come together to experience
                the richness of Ethiopian culture. Through our commitment to serving authentic cuisine and traditional coffee, we aim to provide
                not just nourishment for the body, but also nourishment for the soul.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 3, md: 4 }}>
              <Box
                component="img"
                src={mission}
                alt="Mission"
                sx={{ width: { xs: '100%', sm: '80%', md: '100%' }, height: 'auto' }}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

export default OurVision;