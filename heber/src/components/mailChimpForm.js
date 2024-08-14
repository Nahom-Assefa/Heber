import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import commonCSS from '../css/Common.module.css';

function MailchimpForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({}); // Object to hold validation errors
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    let newErrors = {};

    // Validate phone number format
    if (phone && !phoneRegex.test(phone)) {
      formIsValid = false;
      newErrors.phone = 'Phone number must be in the format (xxx) xxx-xxxx';
    }

    // Validate required fields
    // Validate email format
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      formIsValid = false;
      newErrors.email = 'Email address must be ex. xxxxx@gmail.com';
    }

    if (!firstName) {
      formIsValid = false;
      newErrors.firstName = 'First name is required';
    }
    if (!lastName) {
      formIsValid = false;
      newErrors.lastName = 'Last name is required';
    }

    if (formIsValid) {
      // Reset errors and fields
      setErrors({});
      setStatus('Submitting...');
      
      // Submit the form programmatically
      const form = document.getElementById('mc-embedded-subscribe-form');
      if (form) {
        form.submit();
      }

      // Reset the form fields after submission
      setEmail('');
      setFirstName('');
      setLastName('');
      setPhone('');
    } else {
      // Set errors
      setErrors(newErrors);
      setStatus('Please fix the errors above.');
    }
  };

  return (
    <>
      <Typography sx={{textAlign: 'center', mt: 2}} variant="h2" gutterBottom>
        Join Our Community
      </Typography>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="body1" sx={{ mb: 4 }}>
          We invite you to stay in the loop with our latest news, special promotions, and delightful
          surprises by sharing your details with us. Whether you're here for the first time or returning
          for your favorites, we love recognizing familiar faces. Keep coming back, and you'll discover
          that loyalty has its rewards.
      </Typography>
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #F5F5F5 30%, #F5F5F5 100%)',
          padding: 4,
          borderRadius: 2,
          maxWidth: '350px',
          margin: '0 auto',
          mb: 5,
          boxShadow: 3,
        }}
      >
        <Typography sx={{textAlign: 'center', mt: 2, fontFamily: '"Pacifico", "Comic Sans MS", cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'}} variant="h3" gutterBottom>
          Sign Up 👇🏾
        </Typography>
        <form
          action="https://gmail.us14.list-manage.com/subscribe/post?u=3f8fed633d9e78f5fbfbadb1d&amp;id=72c54e1a6a&amp;f_id=0070bee5f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email Address"
            name="EMAIL"
            required
            fullWidth
            margin="normal"
            variant="outlined"
            className={commonCSS.primaryInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="First Name"
            name="FNAME"
            required
            fullWidth
            margin="normal"
            variant="outlined"
            className={commonCSS.primaryInput}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            label="Last Name"
            name="LNAME"
            required
            fullWidth
            margin="normal"
            variant="outlined"
            className={commonCSS.primaryInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            label="Phone Number"
            name="PHONE"
            fullWidth
            margin="normal"
            variant="outlined"
            className={commonCSS.primaryInput}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={commonCSS.subscribeBtn}
            sx={{ mt: 3}}
          >
            Subscribe
          </Button>
          {status && <Typography variant="body2" color="error" sx={{ mt: 2 }}>{status}</Typography>}
        </form>
      </Box>
    </>
  );
}

export default MailchimpForm;

