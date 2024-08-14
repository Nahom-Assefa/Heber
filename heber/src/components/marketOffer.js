import React, {useEffect, useState} from 'react';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import {Box, Typography, CircularProgress} from '@mui/material';
import useLoading from './setLoadingHook';

function MarketOffer() {
  const [commitment, setCommitment] = useState('');
  const [sustain, setSustain] = useState('');
  const [hospitality, setHospitality] = useState('');
  const {isLoading, startLoading, stopLoading} = useLoading();
  const all = `*[_type == "marketOfferImages"]{image, title}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          startLoading();

          const whatWeOfferData = await client.fetch(all);
          whatWeOfferData.forEach(function(a_item) {
            switch(a_item.title) {
              case "Commitment": setCommitment(urlFor(a_item.image).sharpen().url())
                break;
              case "Sustainability Practices": setSustain(urlFor(a_item.image).sharpen().url())
                break;
              case "Warm Hospitality": setHospitality(urlFor(a_item.image).sharpen().url())
                break;
              default:
                break;
            }
          })

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
          <Typography variant="h2" align="center" sx={{ mb: 4, fontFamily: 'Cinzel, serif'}}>
            Our Values
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
              <img src={commitment} alt="Farm" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Commitment
              </Typography>
              <Typography sx={{ mt: 1 }}>
                We prioritize our customers by delivering quality, trust,
                and satisfaction in every interaction.
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
              <img src={sustain} alt="Sustainability" />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Sustainability
              </Typography>
              <Typography sx={{ mt: 1 }}>
                We partner with ethical suppliers, ensuring every product
                we offer is as responsible as it is exceptional.
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
              <img src={hospitality} alt="cultural diversity" />
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
      )}
    </>
  );
}

export default MarketOffer;