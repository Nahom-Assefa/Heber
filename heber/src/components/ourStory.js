import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function OurStory() {
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
        height: '500px' 
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 500, 
          mb: 2 
        }}
      >
        How do you get to us? 📍
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
          backgroundColor: '#006400',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#004d00',
          },
        }}
        onClick={handleButtonClick}
      >
        Get directions
      </Button>
    </Box>
  );
}

export default OurStory;