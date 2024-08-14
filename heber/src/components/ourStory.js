import React from 'react';
import {Box, Typography} from '@mui/material';

function OurStory() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textAlign: 'center', 
        height: 'auto', 
        px: 2
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, mt: 2 }}>
        Our Story
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="body1" sx={{ mb: 2, fontWeight: 'medium', fontFamily: '"Poppins", "Comic Sans MS", "Cursive", sans-serif', lineHeight: 3 }}>
          <span style={{ color: '#DAA520' }}>Drawing inspiration from our habesha roots.</span>  
          &nbsp;We infuse every aspect of our Market & Cafe with the vibrant spirit of our culture.
          From the bold flavors of our traditional coffee ceremony to the soul-satisfying menu options.
          Each experience at Heber Market & Cafe is a celebration of heritage and community.
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="body1" sx={{ fontWeight: 'medium', fontFamily: '"Poppins", "Comic Sans MS", "Cursive", sans-serif', lineHeight: 3 }}>
          But beyond the food and drink, what truly sets us apart is our commitment to fostering a sense of belonging,
          and bringing the community together and people of all backgrounds to a rich experience. Here, everyone is welcome,
          from locals stopping by for their daily fix to travelers seeking a taste of something new.
          Heber Market & Cafe is more than just a place to refuel,
          <span style={{ color: '#006400' }}> it's a place to reconnect, to unwind, and to feel at home. </span> 
        </Typography>
      </Box>
    </Box>
  );
}

export default OurStory;
