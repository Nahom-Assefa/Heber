import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { Box, Button, Typography } from '@mui/material';
import commonCSS from '../css/Common.module.css';

function Header(props) {
  const [banner, setBanner] = useState('');
  const [heberLogo, setLogo] = useState('');
  const [afroDivPrint, setAfroPrint] = useState('');
  const [menuIcon, setMenuIcon] = useState('');
  const [marketIcon, setMarketIcon] = useState('');
  const all = `*[_type == "headerImage"]{image, title}`;

  const { page } = props;
  const dynamicClass = page !== 'home' ? commonCSS.ok : '';

  useEffect(() => {
    async function fetchData() {
      try {
        const headerComponentData = await client.fetch(all);
        switch (page) {
          case 'home':
            headerComponentData.forEach(a_item => {
              switch (a_item.title) {
                case "Home Page Banner Image":
                  setBanner(urlFor(a_item.image).sharpen().url());
                  break;
                case "Afro Div Print":
                  setAfroPrint(urlFor(a_item.image).sharpen().url());
                  break;
                case "Heber Logo White":
                  setLogo(urlFor(a_item.image).sharpen().url());
                  break;
                case "View Menu Icon":
                  setMenuIcon(urlFor(a_item.image).sharpen().url());
                  break;
                case "View Market Icon":
                  setMarketIcon(urlFor(a_item.image).sharpen().url());
                  break;
                default:
                  break;
              }
            });
            break;
          case 'market':
            headerComponentData.forEach(a_item => {
              switch (a_item.title) {
                case "Market Page Banner Image":
                  setBanner(urlFor(a_item.image).sharpen().url());
                  break;
                case "Heber Logo White":
                  setLogo(urlFor(a_item.image).sharpen().url());
                  break;
                default:
                  break;
              }
            });
            break;
            case 'about':
              headerComponentData.forEach(a_item => {
                switch (a_item.title) {
                  case "About Page Banner Image":
                    setBanner(urlFor(a_item.image).sharpen().url());
                    break;
                  case "Heber Logo White":
                    setLogo(urlFor(a_item.image).sharpen().url());
                    break;
                  case "Afro Div Print":
                    setAfroPrint(urlFor(a_item.image).sharpen().url());
                    break;
                  default:
                    break;
                }
              });
            break;
          default:
            break;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [page]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: {sm: '500px', md: "500px"},
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
        className={dynamicClass}
      >
        <Box
          sx={{
            display: 'flex',         
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '0'
            }}
          >
            <Box component="img" src={heberLogo} alt="Heber Logo" sx={{ mb: {xs: 2, sm: 0}, width: { xs: '10%', sm: '30%', md: '30%', lg: '25%' } }} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '0.875em', md: '1.125em' } }}>Home</Button>
            </Link>
            <Link to="/market" style={{ textDecoration: 'none' }}>
              <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '.875em', md: '1.125em' } }}>Market</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '.875em', md: '1.125em' } }}>About</Button>
            </Link>
            <Link to="/careers" style={{ textDecoration: 'none' }}>
              <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '0.875em', md: '1.125em' } }}>Careers</Button>
            </Link>
            <Button variant="outlined" className={commonCSS.contactBtn} >Contact</Button>
          </Box>
        </Box>
        {page === 'home' && (
          <Box sx={{ mt: {xs: 2, sm: 3, md: 4 }}}>
            <Typography variant="h1" sx={{color: 'white', fontSize: {xs: '0.875em', sm: '2em', md: '2.5em', lg: '3em', xl: '3.5em'}, mb: {xs: 1, sm: 2},}}>
              <span style={{ fontWeight: 'normal' }}>Where</span> <span style={{ fontWeight: 'bold' }}>Community</span> <br />
              <span style={{ fontWeight: 'normal' }}>Meets</span> <span style={{ fontWeight: 'bold' }}>Culture</span>
            </Typography>
            <Typography variant="body1" sx={{color: 'white', fontSize: {xs: '.25em', sm: '.6em', md: '.8em', lg: '1em', xl: '1em'}, mb: {xs: 1, sm: 2},}}>
              Experience the vibrant fusion of Ethiopian heritage <br />
              and modern convenience at Heber Market & Cafe.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'left', gap: 2 }}>
              <Button
                variant="contained"
                className={commonCSS.primaryBtn}
              >
                <img src={menuIcon} alt="Menu Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
                View Menu
              </Button>
              <Button
                variant="contained"
                className={commonCSS.secondaryBtn}
              >
                <img src={marketIcon} alt="Market Icon" style={{ width: '18px', height: '15px', marginRight: '5px' }} />
                View Market
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      {page !== 'market' && (
        <Box sx={{ width: '100%', height: '100%' }}>
          <img src={afroDivPrint} alt="African Print" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
        </Box>
      )}
    </>
  );
}

export default Header;

