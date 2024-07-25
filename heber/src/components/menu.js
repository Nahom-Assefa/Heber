import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Typography, Box, Tab, Tabs } from '@mui/material';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import menuCSS from '../css/Menu.module.css';

const TabPanel = (props) => {
  const { value, index, list1, list2, ...other } = props;

  return (
    <div style={{ marginBottom: "20px" }} {...other}>
      <div className={`lefther tab-menu-list ${value === index ? 'active' : ''}`}>
        {list1}
      </div>
      <div className={`tab-menu-list ${value !== index ? 'active' : ''}`}>
        {list2}
      </div>
      <style>{`
        .tab-menu-list {
          opacity: 0.5;
          transition: opacity 0.3s;
          display: inline-block;
        }

        .lefther {
          margin-right: 80px;
        }

        .tab-menu-list.active {
          opacity: 1;

        }
      `}</style>
    </div>
  );
};

const Menu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={menuCSS.bckgrndSize}>
      <h1 className={menuCSS.title}> Menu </h1>
      <p className={menuCSS.para}> Discover our exceptional coffee and bakery creations</p>
      <Container sx={{ paddingTop: '10px', textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Coffee" />
            <Tab label="Market" />
          </Tabs>
        </Box>
        <TabPanel 
          value={value} 
          index={0} 
          list1={
            <ul className='coffeeList'>
              <li className='coffeeItem'>Item 1</li>
              <li className='coffeeItem'>Item 2</li>
              <li className='coffeeItem'>Item 3</li>
            </ul>
          }
          list2={
            <ol className='marketList'>
              <li className='marketItem'>Item A</li>
              <li className='marketItem'>Item B</li>
              <li className='marketItem'>Item C</li>
            </ol>
          } 
        />
        <style>{`
          .coffeeList, .marketList {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
  
          .coffeeItem, .marketItem {
            margin-bottom: 10px;
            padding: 5px 10px;
            border-radius: 5px;
            display: inline-block;
          }
  
          .coffeeList li {
            padding-right: 20px; /* Adjust as needed */
          }
          
  
  
  
          .marketList, .coffeeList {
            background-color: #e0e0e0; /* Slightly lighter gray background */
          }
        `}</style>
      </Container>
      <div className={menuCSS.pdfBtnContainer}>
        <button className={menuCSS.pdfBtn}>View Full PDF menu</button>
      </div>
    </div>
    </>
  );

    // <>
    // <div style={{
    //               backgroundColor: 'white',
    //               backgroundSize: '100% auto',
    //               backgroundRepeat: 'no-repeat',
    //               backgroundPosition: 'center center',
    //               height: '500px',
    //               paddingTop: '60px'
    //             }}>
    //   <div>
    //     
    //     <p className={menuCSS.p}> Discover our Exceptional Coffee and Bakery Creations.</p>
    //     <div>
    //       <div>
    //         <img src={pastries} alt='' />
    //         <h3>Artisan Pastires</h3>
    //         <p> Indulge in our selection of <br/> 
    //             fresh pastries and bakery delights</p>
    //       </div>
    //       <div>
    //         <img src={cBeans} alt='' />
    //         <h3>High Quality Coffee</h3>
    //         <p>Savor the rich flavors of <br/>
    //             Ethiopian Coffee brewed to perfection</p>
    //       </div>
    //       <div>
    //         <img src={hospitality} alt='' />
    //         <h3>Warm Hospitality</h3>
    //         <p>Experience genuine hospitality <br/>
    //             from our friendly staff in a <br/>
    //             welcoming atmosphere</p>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <div><img src={`${afroDivPrint}`} alt="Example Image" className={hCSS.afroCover}/></div> */}
    // </div>
    // </>
  };

export default Menu;