import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import loyaltyCSS from '../css/LoyaltyProgram.module.css';
import { TextField, Button, Box, Container, Typography } from '@mui/material';


function Loyalty() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log(formData);
  };

  const [hmmBeans, setHmmBeans] = useState('');
  const [afroPrint, setAfricanPrint] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const coffeeBean = `*[_type == "loyaltyProgram"]{image, title}`;
  const africanPrint = `*[_type == "AboutImages" && title == "African Print"] {image, title}`;

  useEffect(() => {
    async function fetchData() {
      try {
        const coffeeBeanImg = await client.fetch(coffeeBean);
        const africanPrintImg = await client.fetch(africanPrint);

        const combinedFetch = [coffeeBeanImg[0], africanPrintImg[0]];

        console.log(combinedFetch);
  
        combinedFetch.forEach(function(a_item) {
          switch(a_item.title) {
            case "hmm beans": setHmmBeans(urlFor(a_item.image).sharpen().url())
              break;
            case "African Print": setAfricanPrint(urlFor(a_item.image).sharpen().url())
            break;
            default:
              break;
          }
        });
  
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Ensure loading is false even if there's an error
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <p>Loading...</p>
        </div>
      ) : ( <div>
              <div style={{
                backgroundColor: '#F5F5F5',
                height: '100%',
                paddingTop: "150px",
                paddingBottom: "150px",
                backgroundImage: `url(${hmmBeans})`,
                backgroundRepeat: 'no-repeat',
              }}>
                <div>
                  <div className={loyaltyCSS.titleDescription}>
                    <h1 className={loyaltyCSS.title}> Join Our Loyalty Program</h1>
                    <p> Join our loyalty program and unlock exclusive rewards with every visit. <br/> 
                          Because at Heber Market & Cafe your loyalty is our greatest reward.</p>
                  </div>
                    <Container maxWidth="sm">
                      <Box 
                        component="form" 
                        onSubmit={handleSubmit} 
                        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                      >
                        {/* <Typography variant="h4" component="h1" gutterBottom>
                          Sign Up
                        </Typography> */}
                        <TextField 
                          label="Name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          variant="outlined" 
                          required
                          InputProps={{
                            style: {
                              borderRadius: '22px'
                            }
                          }}
                        />
                        <TextField 
                          label="Email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          variant="outlined" 
                          required
                          InputProps={{
                            style: {
                              borderRadius: '22px'
                            }
                          }}
                        />
                        <TextField 
                          label="Password" 
                          name="password" 
                          type="password" 
                          value={formData.password} 
                          onChange={handleChange} 
                          variant="outlined" 
                          required
                          InputProps={{
                            style: {
                              borderRadius: '22px'
                            }
                          }}
                        />
                        <Button sx={{ borderRadius: '22px',
                                      height: "40px",
                                      backgroundColor: '#006400',
                                                        '&:hover': {backgroundColor: '#004d00'}
                                    }} type="submit" variant="contained" >
                          Submit
                        </Button>
                      </Box>
                    </Container>
                </div>
              </div>
              <div>
                <img src={`${afroPrint}`} alt="" className={loyaltyCSS.africanCover} />
              </div>
            </div>
)}
    </>
  );
}

export default Loyalty;