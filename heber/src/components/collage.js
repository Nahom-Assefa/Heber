import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { Box, CircularProgress } from '@mui/material';

const charcoal = '#5A5A5A';

function Collage() {
  const [entirety, setEntirety] = useState('');
  const [, setCollageData] = useState([]);
  const [loading, setLoading] = useState(true);

  const entireCollage = `
    *[_type == "collageImages"]{
      title,
      image {
        asset->{
          _type,
          url,
        }
      },
      order
    }
  `;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(entireCollage);
        
        setCollageData(data);

        data.forEach(function(a_item) {
          if (a_item.title === "collage") {
            setEntirety(urlFor(a_item.image).sharpen().url());
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: charcoal }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: charcoal, padding: 2, textAlign: 'center' }}>
      <img src={entirety} alt="Entirety" style={{ maxWidth: '100%', height: 'auto' }} />
    </Box>
  );
}

export default Collage;
