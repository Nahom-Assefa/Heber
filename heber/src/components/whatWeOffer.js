import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { Box, Typography } from '@mui/material';
import commonCSS from '../css/Common.module.css';

function Offer() {
  const [pastries, setPastries] = useState('');
  const [cBeans, setBeans] = useState('');
  const [hospitality, setHospitality] = useState('');
  const all = `*[_type == "whatWeOfferImages"]{image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const whatWeOfferData = await client.fetch(all);

        whatWeOfferData.forEach((a_item) => {
          switch (a_item.title) {
            case "Artisan Pastries":
              setPastries(urlFor(a_item.image).sharpen().url());
              break;
            case "Coffee Beans":
              setBeans(urlFor(a_item.image).sharpen().url());
              break;
            case "Warm Hospitality":
              setHospitality(urlFor(a_item.image).sharpen().url());
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
          <img src={pastries} alt="Artisan Pastries" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Artisan Pastries
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Indulge in our selection of <br />
            fresh pastries and bakery delights
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
          <Typography variant="h6" sx={{ mt: 2 }}>
            High Quality Coffee
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Savor the rich flavors of <br />
            Ethiopian Coffee brewed to perfection
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
          <img src={hospitality} alt="Warm Hospitality" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Warm Hospitality
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Experience genuine hospitality <br />
            from our friendly staff in a <br />
            welcoming atmosphere
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Offer;