import React, {useState} from 'react';
import {Box, TextField, Button, Typography} from '@mui/material';
import {FaEnvelope, FaPhone, FaTiktok, FaInstagram, FaFacebook} from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is in a invalid format - ex. xxxx@gmail.com';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    // Phone number validation
    if (formData.phone && !/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format (xxx) xxx-xxxx';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    // Formspree endpoint
    const formspreeUrl = "https://formspree.io/f/mgvwypaj";
  
    try {
      await axios.post(formspreeUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          flex: 1,
          mr: { md: 4 },
          mb: { xs: 4, md: 0 },
          textAlign: "center"
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', mb: 5, mt: 5, color: '#006400' }}>
          Connect with us
        </Typography>
        <Typography variant="body1" sx={{ mb: 5, color: '#006400' }}>
          Have questions, comments, or concerns? We'd love to hear from you!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          <FaEnvelope style={{ marginRight: '8px', color: "#DAA520" }} />
          <Typography variant="body1" sx={{color: '#006400'}}>Hebermarketllc@gmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5}}>
          <FaPhone style={{ marginRight: '8px', color: "#DAA520" }} />
          <Typography variant="body1" sx={{color: '#006400'}}>(703) 408-9959</Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1, color: '#DAA520' }}>
          Follow us:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
        <a href="https://www.tiktok.com/@heber.market.and.cafe?lang=en" target="_blank" rel="noopener noreferrer" style={{ color: '#006400' }}>
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/heber_market_cafe/" target="_blank" rel="noopener noreferrer" style={{ color: '#006400' }}>
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61550639315206" target="_blank" rel="noopener noreferrer" style={{ color: '#006400' }}>
          <FaFacebook />
        </a>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{ borderRadius: '16px' }}
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          sx={{ borderRadius: '16px' }}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ borderRadius: '16px' }}
        />
        <TextField
          label="Phone (optional)"
          name="phone"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ borderRadius: '16px' }}
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          sx={{ borderRadius: '16px' }}
        />
        <Button
          variant="contained"
          // className={`${commonCSS.primaryBtn}`}
          sx={{
            mt: 2,
            backgroundColor: '#006400',
            '&:hover': {
              backgroundColor: '#00A000', // Background color on hover
            },
            color: 'white',
            borderRadius: '16px',
            py: {
              xs: .5,
              sm: 1,   // Increase vertical padding for small viewports
              md: 1,   // Default padding for medium and larger viewports
            },
            px: {
              xs: .5,
              sm: 1,   // Increase horizontal padding for small viewports
              md: 2,   // Default padding for medium and larger viewports
            },
            fontSize: {
              xs: '.85em',
              sm: '.85rem', // Larger font size for small viewports
              md: '0.875rem', // Default font size for medium and larger viewports
            },
            minWidth: {
              xs: 'auto',
              sm: 'auto', // Ensure a minimum width for small viewports
              md: 'auto', // Default min width for medium and larger viewports
            },
            width: {
              xs: 'auto',
              sm: 'auto', // Maintain similar width for small viewports
              md: 'auto', // Default width for medium and larger viewports
            },
          }}
          onClick={handleSubmit}
        >
        Submit
        </Button>

      </Box>
    </Box>
  );
};

export default Contact;



