import React, {useEffect, useState} from 'react';
import {IoStorefrontOutline} from "react-icons/io5";
import {GiAfrica} from "react-icons/gi";
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import {Box, Typography, CircularProgress} from '@mui/material';
import commonCSS from '../css/Common.module.css';
import useLoading from './setLoadingHook';

function Offer() {
  const [cBeans, setBeans] = useState('');
  const {isLoading, startLoading, stopLoading} = useLoading('');
  const all = `*[_type == "whatWeOfferImages"]{image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();

        const whatWeOfferData = await client.fetch(all);
        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case "Coffee Beans":
              setBeans(urlFor(a_item.image).sharpen().url());
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
  }, [all, startLoading, stopLoading]);
  
  return (
    <>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <CircularProgress/>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: '#F5F5F5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'auto',
            paddingX: 2,
            paddingY: 4, // Added vertical padding
            height: { xs: 'auto', md: '500px', lg: '500px', xl: '500px'}, // Allow height to adjust based on content
            maxWidth: '100%', // Ensure the width does not exceed 100%
          }}
        >
          <Typography variant="h4" align="center" className={commonCSS.title} sx={{ mb: 4 }}>
            What We Offer
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row' },
              justifyContent: 'center',
              gap: 4,
              maxWidth: '1200px',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                flex: '1',
                maxWidth: { xs: '100%', sm: '300px' },
                img: {
                  maxWidth: { xs: '80%', sm: '100%' },
                  height: 'auto',
                },
                typography: {
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                },
              }}
            >
              <IoStorefrontOutline style={{ fontSize: '50px', color: '#006400' }} />
              <Typography variant="h6" sx={{ mt: 3 }}>
                International Market
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Discover the world on your plate <br />
                where cultures unite from across the globe.
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                flex: '1',
                maxWidth: { xs: '100%', sm: '300px' },
                img: {
                  maxWidth: { xs: '80%', sm: '100%' },
                  height: 'auto',
                },
                typography: {
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                },
              }}
            >
              <img src={cBeans} alt="High Quality Coffee" />
              <Typography variant="h6" sx={{ mt: 1.5 }}>
                High Quality Coffee
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Savor the rich flavors of
                Ethiopian Coffee brewed to perfection.
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                flex: '1',
                maxWidth: { xs: '100%', sm: '300px' },
                img: {
                  maxWidth: { xs: '80%', sm: '100%' },
                  height: 'auto',
                },
                typography: {
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                },
              }}
            >
              <GiAfrica style={{ fontSize: '50px', color: '#DAA520' }} />
              <Typography variant="h6" sx={{ mt: 2.5 }}>
                Restaurant
              </Typography>
              <Typography sx={{ mt: 1 }}>
                Experience the heart of Ethiopian and Eritrean cuisine
                Where tradition meets flavor.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Offer;