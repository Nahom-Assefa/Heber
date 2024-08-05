import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { FaSquareInstagram, FaRegClock, FaTiktok, FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Box, Typography, IconButton } from '@mui/material';

function Footer() {
  const [heberLogo, setLogo] = useState('');
  const logoAsset = `*[_type == "headerImage" && title == "Heber Logo White"]{image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(logoAsset);
        setLogo(urlFor(data[0].image).sharpen().url());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [logoAsset]);

  return(
  <Box sx={{
    backgroundColor: "#1F2A30",
    height: '500px', // Adjust height as needed
    padding: 3,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 2,
    color: 'white',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(3, auto)',
      height: 'auto',
    },
  }}>
    <Box sx={{
      textAlign: 'center',
      padding: 2,
      borderRight: '1px solid #ccc',
      '@media (max-width: 768px)': {
        borderRight: 'none',
        borderBottom: '1px solid #ccc',
      },
    }}>
      <img src={heberLogo} alt="Heber Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', marginY: 2 }}>
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
      <Typography variant="h6" sx={{ color: 'white', marginBottom: 2 }}>
        Important Links
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '4px 0' }}>Home</Link>
        <Link to="/market" style={{ textDecoration: 'none', color: 'white', padding: '4px 0' }}>Market</Link>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white', padding: '4px 0' }}>About</Link>
        <Link to="/careers" style={{ textDecoration: 'none', color: 'white', padding: '4px 0' }}>Careers</Link>
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
      <Typography variant="h6" sx={{ color: 'white', marginBottom: 2, textAlign: 'center' }}>
        Location And Working Hours
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white', marginBottom: 1 }}>
        <FaLocationDot style={{ color: '#DAA520', fontSize: '26px', marginRight: '15px' }} />
        <Typography>3515 S Jefferson St, Falls Church, VA 22041</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
        <FaRegClock style={{ color: '#DAA520', fontSize: '24px', marginRight: '10px' }} />
        <Typography>Hours Open: Mon-Sun 09:00AM - 10:00PM</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <IconButton sx={{ color: '#DAA520' }}><FaTiktok /></IconButton>
        <IconButton sx={{ color: '#DAA520' }}><FaSquareInstagram /></IconButton>
        <IconButton sx={{ color: '#DAA520' }}><FaFacebookSquare /></IconButton>
      </Box>
    </Box>
  </Box>
);
}

export default Footer;
