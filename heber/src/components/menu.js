import React, { useState } from 'react';
import { Container, Box, Tab, Tabs, Typography, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import commonCSS from '../css/Common.module.css';

const TabPanel = ({ value, list1, list2, ...other }) => {
  return (
    <Box
      sx={{
        display: { xs: 'block', sm: 'flex' }, // Stack vertically on small screens, side by side on larger screens
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        width: '100%',
        marginBottom: 2,
      }}
      {...other}
    >
      <Box
        sx={{
          flex: 1,
          opacity: value === 0 ? 1 : 0.5,
          transition: 'opacity 0.3s',
          marginBottom: { xs: 2, sm: 0 }, // Margin adjustment for stacking
        }}
      >
        {list1}
      </Box>
      <Box
        sx={{
          flex: 1,
          opacity: value === 1 ? 1 : 0.5,
          transition: 'opacity 0.3s',
          marginBottom: { xs: 2, sm: 0 }, // Margin adjustment for stacking
        }}
      >
        {list2}
      </Box>
    </Box>
  );
};

const Menu = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{height: {md: "auto", lg: "500px"}}}>
      <Typography variant="h1" className={commonCSS.title}>
        Menu
      </Typography>
      <Typography variant="body1" className={commonCSS.para}>
        A list of our specialty restaurant and market options 🚀 <br/>
        Discover more when you stop by on-site!
      </Typography>
      <Container sx={{ paddingTop: '10px', textAlign: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens, side by side on larger screens
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: 'auto' } }}>
            <Tabs value={value} className={commonCSS.tabs} onChange={handleChange} aria-label="menu tabs" orientation={isSmallScreen ? 'vertical' : 'horizontal'}>
              <Tab label="Specialty Restaurant Items"/>
              <Tab label="Specialty Market Items"/>
            </Tabs>
          </Box>
        </Box>
        <TabPanel
          value={value}
          list1={
            <List className={commonCSS.restaurantPadding} sx={{color: "#006400" }}>
              {['Kitfo Sandwhich', 'Tibs Sandwhich', 'Heber Keremela Kurt', 'Gored Gored', 'Chicken Tibs'].map((item, index) => (
                <ListItem key={index} className="coffeeItem">
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          }
          list2={
            <List className={commonCSS.marketPadding} sx={{color: "#DAA520" }}>
              {['Injera', 'Halal meat', 'Ambasha', 'Ethiopian Spices', 'Raw Ethiopian Coffee'].map((item, index) => (
                <ListItem key={index} className="marketItem">
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          }
        />
      </Container>
    </Box>
  );
};

export default Menu;
