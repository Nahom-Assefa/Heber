import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { Box, Typography, TextField, Button } from '@mui/material';
import commonCSS from '../css/Common.module.css';

function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState('');
  const [afroPrint, setAfricanPrint] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const africanPrintQuery = `*[_type == "AboutImages" && title == "African Print"] {image, title}`;
  const phoneRegex = /^[0-9]*$/;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(africanPrintQuery);
        setAfricanPrint(urlFor(data[0].image).sharpen().url());
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [africanPrintQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setStatus('Please fill in all required fields');
      return;
    }

    if (formData.phone && !phoneRegex.test(formData.phone)) {
      setStatus('Please enter a valid phone number without hyphens or non-numeric characters!');
      return;
    }

    const payload = {
      email_address: formData.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: formData.name.split(' ')[0],
        LNAME: formData.name.split(' ')[1] || '',
        PHONE: formData.phone
      }
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setStatus(data.status);
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: '#F5F5F5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            py: 10,
            px: 2,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box sx={{ mb: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h4" className={commonCSS.title} sx={{ mb: 2 }}>
                Get Connected With Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                At Heber Market and Cafe, we take pride in offering the finest Ethiopian coffee and dining experience with a unique international market twist!
                We invite you to stay in the loop with our latest news, special promotions, and delightful surprises by sharing your details with us.
                Let’s brew something wonderful together!
              </Typography>
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2, mx: 'auto', maxWidth: 400 }}
            >
              <TextField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    borderRadius: '22px',
                  }
                }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  sx: {
                    borderRadius: '22px',
                  }
                }}
              />
              <TextField
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
                InputProps={{
                  sx: {
                    borderRadius: '22px',
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: '22px',
                  height: 40,
                  backgroundColor: '#006400',
                  '&:hover': { backgroundColor: '#004d00' }
                }}
              >
                Submit
              </Button>
              {status && <Typography>{status}</Typography>}
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              maxHeight: '200px', // Adjust as needed
              overflow: 'hidden',
            }}
          >
            <img src={afroPrint} alt="African Print" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default Connect;