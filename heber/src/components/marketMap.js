import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function MarketMap() {
  const handleButtonClick = () => {
    const placeName = 'Heber Market & Cafe, Falls Church, VA';
    const encodedAddress = encodeURIComponent(placeName);
    window.open(`https://www.google.com/maps?q=${encodedAddress}`, '_blank');
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: '500px',
      }}
    >
      <Typography 
        variant="h2"
        sx={{ 
          fontFamily: 'Cinzel, serif',
          mb: 2 
        }}
      >
        Location
      </Typography>
      <Box
        sx={{
          background: "#FFA500",
          padding: 4,
          borderRadius: 2,
          maxWidth: '500px',
          height: "300px",
          margin: '0 auto',
          mb: 5,
          boxShadow: 3,
        }}
      > 
        <Typography 
          variant="h4" 
          sx={{ 
            fontSize: "1.5em",
            mb: 2,
            fontfamily: "'Great Vibes', cursive"
          }}
        >
          Find us just off the intersection of Jefferson street and Leesburg Pike! 💣
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4 
          }}
        >
  
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 5,
            backgroundColor: '#1F2A30',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#2a3a43',
            },
          }}
          onClick={handleButtonClick}
        >
          Get directions 📍
        </Button>
      </Box>
    </Box>
  );
}

export default MarketMap;