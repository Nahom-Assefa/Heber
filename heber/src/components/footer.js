import React, {useEffect, useState} from 'react';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import {FaSquareInstagram, FaRegClock, FaTiktok, FaLocationDot} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";
import {Link as RouterLink} from 'react-router-dom';
import {Box, Typography, IconButton, Link as MuiLink, CircularProgress} from '@mui/material';
import useLoading from './setLoadingHook';

function Footer(props) {
  const [heberLogo, setLogo] = useState('');
  const [afroPrint, setAfricanPrint] = useState('');
  const {isLoading, stopLoading, startLoading} = useLoading();
  const {page} = props;
  const Assets = `*[_type == "headerImage" && (title == "Heber Logo White" || title == "Afro Div Print")]{image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();
        const data = await client.fetch(Assets);
        setLogo(urlFor(data[0].image).sharpen().url());
        setAfricanPrint(urlFor(data[1].image).sharpen().url());
        stopLoading();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [Assets, startLoading, stopLoading]);

  return(
    <>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <CircularProgress/>
        </Box>
      ) : (
        <Box sx={{
          backgroundColor: "#1F2A30",
          height: {xs: 'auto', sm: '500px', lg: '500px'},
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 2,
          color: 'white',
          position: 'relative',
          '@media (max-width: 768px)': {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'repeat(3, auto)',
            height: 'auto',
          },
        }}>
          {(page === 'home' || page === 'contact') && (
            <Box
              sx={{
                position: 'absolute',
                top: {xs: -12, sm: -2},
                left: 0,
                width: '100%',
                height: '2.5vh',
                overflow: 'hidden'
              }}
            >
              <img src={afroPrint} alt="African Print" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Box>
          )}
          <Box 
            sx={{
              textAlign: 'center',
              padding: 2,
              borderRight: '1px solid #ccc',
              '@media (max-width: 768px)': {
                borderRight: 'none',
                borderBottom: '1px solid #ccc',
              },
            }}>
            <Box sx={{mt: 5, mb: 3}}>
              <img src={heberLogo} alt="Heber Logo" style={{ maxWidth: '80%', height: 'auto'}} />
            </Box>
            <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', marginY: 2, fontSize: {md: "1.5em", lg: "2em"}}}>
              Where <span style={{ fontWeight: 'normal' }}>Community</span> Meets <span style={{ fontWeight: 'bold' }}>Culture</span>
            </Typography>
          </Box>
          <Box sx={{
            textAlign: 'center',
            padding: 2,
            borderRight: '1px solid #ccc',
            '@media (max-width: 768px)': {
              borderRight: 'none',
              borderBottom: '1px solid #ccc',
            },
          }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 5, mt: 5}}>
              Important Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <MuiLink component={RouterLink} to="/" sx={{ pb: { xs: 4, sm: 8 }, textDecoration: 'none', color: 'white' }}>Home</MuiLink>
              <MuiLink component={RouterLink} to="/market" sx={{ pb: {xs: 4, sm: 8 }, textDecoration: 'none', color: 'white' }}>Market</MuiLink>
              <MuiLink component={RouterLink} to="/about" sx={{ pb: {xs: 4, sm: 8 }, textDecoration: 'none', color: 'white' }}>About</MuiLink>
              <MuiLink component={RouterLink} to="/contact" sx={{ pb: { xs: 4, sm: 8 }, textDecoration: 'none', color: 'white' }}>Contact</MuiLink>
            </Box>
          </Box>
      
          <Box sx={{
            textAlign: 'left',
            padding: 2,
            '@media (max-width: 768px)': {
              borderRight: 'none',
              borderBottom: '1px solid #ccc',
            },
          }}>
            <Typography variant="h6" sx={{ color: 'white', mb: 10, mt: 5, textAlign: 'center' }}>
              Location And Working Hours
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white', mb: 7 }}>
              <FaLocationDot style={{ color: '#DAA520', fontSize: '26px', marginRight: '15px' }} />
              <Typography>3515 S Jefferson St, Falls Church, VA 22041</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
              <FaRegClock style={{ color: '#DAA520', fontSize: '24px', marginRight: '10px' }} />
              <Typography>Hours Open: Mon-Sun 09:00AM - 10:00PM</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 7 }}>
              <a href="https://www.tiktok.com/@heber.market.and.cafe?lang=en" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#DAA520' }}>
                <FaTiktok />
              </IconButton>
              </a>
              <a href="https://www.instagram.com/heber_market_cafe/" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#DAA520' }}>
                  <FaSquareInstagram />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61550639315206" target="_blank" rel="noopener noreferrer">
                <IconButton sx={{ color: '#DAA520' }}>
                  <FaFacebookSquare />
                </IconButton>
              </a>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Footer;
