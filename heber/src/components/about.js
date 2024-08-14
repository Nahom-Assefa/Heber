import React, {useEffect, useState} from 'react';
import {Box, Typography, Button, CircularProgress} from '@mui/material';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import commonCSS from '../css/Common.module.css';
import useLoading from './setLoadingHook';
import {useNavigate} from 'react-router-dom';


function About() {
  const [coffeeGuy, setCoffeeGuy] = useState('');
  const [africanPrint, setPrint] = useState('');
  const [logo, setLogo] = useState('');
  const navigate = useNavigate();
  const {isLoading, startLoading, stopLoading} = useLoading();

  const all = `*[_type == "AboutImages"]{image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();

        const aboutData = await client.fetch(all);
        aboutData.forEach(function(a_item) {
          switch(a_item.title) {
            case "About Us Image": setCoffeeGuy(urlFor(a_item.image).sharpen(10).url());
              break;
            case "African Print": setPrint(urlFor(a_item.image).sharpen(10).url());
              break;
            case "Logo White": setLogo(urlFor(a_item.image).sharpen(10).url());
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

  const aboutBtnHandler = () => {
    navigate('/about'); // Navigate to the /market page
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <CircularProgress/>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxSizing: 'border-box',
            pt: 2,
            pb: 4,
            backgroundColor: "#F5F5F5"
          }}
        >
          <Box
            sx={{
              flex: 1,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={coffeeGuy}
              alt="About Us"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#FFA500',
              position: 'relative',
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
            <Typography variant="h2" align="center" className={commonCSS.title} sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography sx={{ mb: 2, lineHeight: 1.4 }}>
              At Heber Market & Cafe we're more than a coffee shop; we're a gathering place where traditions thrive and friendships flourish.
              Rooted in our Ethiopian heritage, we're dedicated to fostering a sense of belonging within our diverse community.
              Join us for a taste of authenticity and warmth.
            </Typography>
            <Typography sx={{ mb: 2, lineHeight: 1.4 }}>
              Our mission is to deliver the best experience to our customers and to continuously innovate to meet their needs.
            </Typography>
            <Box
              sx={{
                textAlign: 'center',
                marginBottom: 7,
              }}
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  paddingX: 3,
                  paddingY: 1,
                  borderRadius: 20,
                  ':hover': {
                    backgroundColor: '#00A000',
                  },
                }}
                onClick={aboutBtnHandler}
              >
                Learn More
              </Button>
            </Box>
            <Box
              sx={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                left: 0,
              }}
            >
              <img
                src={africanPrint}
                alt="African Print"
                style={{
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default About;
