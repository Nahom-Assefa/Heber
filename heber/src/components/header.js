import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import client from '../api/sanityClient';
import {urlFor} from '../utils/imageURL';
import {Box, Button, Typography, CircularProgress} from '@mui/material';
import useLoading from './setLoadingHook';
import commonCSS from '../css/Common.module.css';
import {useScroll} from './scrollToTop';

function Header(props) {
  const [banner, setBanner] = useState('');
  const [heberLogo, setLogo] = useState('');
  const [afroPrint, setAfroPrint] = useState('');
  const [menuIcon, setMenuIcon] = useState('');
  const [marketIcon, setMarketIcon] = useState('');
  const {isLoading, startLoading, stopLoading} = useLoading();
  const navigate = useNavigate();
  const { scrollTo } = useScroll();
  const all = `*[_type == "headerImage"]{image, title}`;

  const { page } = props;
  const dynamicClass = page !== 'home' ? commonCSS.dynamicHeaderHeight : '';

  useEffect(() => {
    async function fetchData() {
      try {
        startLoading();

        const headerComponentData = await client.fetch(all);
        switch (page) {
          case 'home':
            headerComponentData.forEach(a_item => {
              switch (a_item.title) {
                case "Home Page Banner Image":
                  setBanner(urlFor(a_item.image).sharpen().flipHorizontal().url());
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
                  case "About Page Banner":
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
            case 'contact':
              headerComponentData.forEach(a_item => {
                switch (a_item.title) {
                  case "Contact Page Banner":
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
        
        stopLoading();
      } catch (error) {
        console.warn('Error fetching data:', error);
      }
    }
    fetchData();
  }, [page, all, startLoading, stopLoading]);

  const handleViewMarketClick = () => {
    navigate('/market'); // Navigate to the /market page
  };

  const handleViewMenuClick = () => {
    scrollTo('menuSection');
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
            backgroundImage: `url(${banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: {xs: '300px', sm: '500px', md: "500px"},
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
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
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Box component="img" src={heberLogo} alt="Heber Logo" sx={{ mb: {xs: 2, sm: 0}, width: { xs: '40px', sm: '50%', md: '70%', lg: '70%' } }} />
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={{color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '0.875em', md: '1.125em' } }}>Home</Button>
              </Link>
              <Link to="/market" style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '.875em', md: '1.125em' } }}>Market</Button>
              </Link>
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '.875em', md: '1.125em' } }}>About</Button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={{ color: 'white', mb: {xs: 1, sm: 0}, mx: {sm: 2}, fontSize: { xs: '0.500em', sm: '0.875em', md: '1.125em' } }}>Contact</Button>
              </Link>
            </Box>
          </Box>
          {page === 'home' && (
            <Box sx={{ mt: {xs: 3, sm: 4, md: 4 }}}>
              <Typography variant="h1" sx={{color: 'white', mt: {xs: 7, sm: 10, md: 0}, fontSize: {xs: '0.875em', sm: '2em', md: '2.5em', lg: '3em', xl: '3.5em'}}}>
                <span style={{ fontWeight: 'Semi-bold' }}>Where</span> <span style={{ fontWeight: 'bold' }}>Community</span> <br />
                <span style={{ fontWeight: 'Semi-bold' }}>Meets</span> <span style={{ fontWeight: 'bold' }}>Culture</span>
              </Typography>
              <Typography variant="body1" sx={{color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', fontWeight: 'Extra-bold', fontSize: {xs: '.25em', sm: '.6em', md: '.8em', lg: '1em', xl: '1em'}, mb: {xs: 1, sm: 2},}}>
                Experience the vibrant fusion of Ethiopian heritage <br />
                and modern convenience at Heber Market & Cafe.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'left', gap: 2 }}>
                <Button
                  variant="contained"
                  className={commonCSS.primaryBtn}
                  onClick={handleViewMenuClick}
                >
                  <img src={menuIcon} alt="Menu Icon" style={{ width: '18px', height: '18px', marginRight: '5px' }} />
                  View Menu
                </Button>
                <Button
                  variant="contained"
                  className={commonCSS.secondaryBtn}
                  onClick={handleViewMarketClick} 
                >
                  <img src={marketIcon} alt="Market Icon" style={{ width: '18px', height: '15px', marginRight: '5px' }} />
                  View Market
                </Button>
              </Box>
            </Box>
          )}
          {page === 'market' && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mt: {xs: 5, sm: 8, md: 10},
                textAlign: 'center',
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  color: 'white',
                  fontSize: {
                    xs: '3em',
                    sm: '4em',
                    md: '5em',
                    lg: '6em',
                  },
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 'bold',
                  textShadow: '5px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
              >
                Market
              </Typography>
            </Box>
          )}
          {page === 'contact' && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',   // Vertically center
                justifyContent: 'center', // Horizontally center
                textAlign: 'center',
                mt: {xs: 5, sm: 8, md: 10}
              }}
            >
              <Typography
                variant='h1'
                sx={{
                  color: 'white', // Ensures text is visible on various backgrounds
                  fontSize: {
                    xs: '3em',   // Adjust font size for extra small viewports
                    sm: '4em',   // Adjust font size for small viewports
                    md: '5em',   // Adjust font size for medium viewports
                    lg: '6em',  // Adjust font size for large viewports
                  },
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 'bold',
                  textShadow: '3px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
              >
                Contact
              </Typography>
            </Box>
          )}
          {(page === 'home' || page === 'contact') && (
            <Box
              sx={{
                position: 'absolute',
                bottom: {xs: -12, sm: -7},
                left: 0,
                width: '100%',
                height: '2.5vh',
                overflow: 'hidden'
              }}
            >
              <img src={afroPrint} alt="African Print" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
            </Box>
          )}
        </Box>
      )} 
    </>
  );
}

export default Header;