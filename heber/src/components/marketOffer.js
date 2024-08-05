// import React, { useEffect, useState } from 'react';
// import client from '../api/sanityClient';
// import { urlFor } from '../utils/imageURL';
// import oCSS from '../css/Offer.module.css';

// function MarketOffer() {
//   const [farm, setFarm] = useState('');
//   const [sustain, setSustain] = useState('');
//   const [cultural, setCultural] = useState('');
//   const all = `*[_type == "marketOfferImages"]{image, title}`;
  
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const whatWeOfferData = await client.fetch(all);

//           whatWeOfferData.forEach(function(a_item) {
//             switch(a_item.title) {
//               case "Farm To Table": setFarm(urlFor(a_item.image).sharpen().url())
//                 break;
//               case "Sustainability Practices": setSustain(urlFor(a_item.image).sharpen().url())
//                 break;
//               case "Cultural Diversity": setCultural(urlFor(a_item.image).sharpen().url())
//                 break;
//               default:
//                 break;
//             }
//           })
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       }
//       fetchData();
//     }, []);

//   return (
//     <>
//     <div style={{
//                   backgroundColor: '#F5F5F5',
//                   height: '400px',
//                   paddingTop: '200px'
//                 }}>
//       <div>
//         <div className={oCSS.itemTitles}>
//           <div>
//             <img src={farm} alt='' />
//             <h3 style={ { fontSize: 'xx-large' } }>Farm-to-Table Freshness</h3>
//             <p>Experience the epitome of freshness as our market proudly showcases a direct link between local farmers and your table.</p>
//           </div>
//           <div>
//             <img src={sustain} alt='' />
//             <h3 style={ { fontSize: 'xx-large' } }>Sustainable Practices</h3>
//             <p>We're dedicated to sustainability, offering eco-friendly packaging and reducing food waaste to ensure every purchase supports a greener future.</p>
//           </div>
//           <div>
//             <img src={cultural} alt='' />
//             <h3 style={ { fontSize: 'xx-large' } }>Cultural Diversity</h3>
//             <p>Our market offers a divers range of traditional and fusion dishes, showcasing culinary diversity from around the world, right in your neighborhood.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default MarketOffer;




import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import { Box, Typography } from '@mui/material';

function MarketOffer() {
  const [farm, setFarm] = useState('');
  const [sustain, setSustain] = useState('');
  const [cultural, setCultural] = useState('');
  const all = `*[_type == "marketOfferImages"]{image, title}`;
  
    useEffect(() => {
      async function fetchData() {
        try {
          const whatWeOfferData = await client.fetch(all);

          whatWeOfferData.forEach(function(a_item) {
            switch(a_item.title) {
              case "Farm To Table": setFarm(urlFor(a_item.image).sharpen().url())
                break;
              case "Sustainability Practices": setSustain(urlFor(a_item.image).sharpen().url())
                break;
              case "Cultural Diversity": setCultural(urlFor(a_item.image).sharpen().url())
                break;
              default:
                break;
            }
          })
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      fetchData();
    }, []);
  
  return (
    <Box
      sx={{
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        paddingX: 2,
        paddingY: 4, // Added vertical padding
        height: { xs: 'auto', md: '500px', lg: '500px', xl: '500px'}, // Allow height to adjust based on content
        maxWidth: '100%', // Ensure the width does not exceed 100%
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        What We Offer
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row', lg: 'row', xl: 'row' },
          justifyContent: 'center',
          gap: 4,
          maxWidth: '1200px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            flex: '1',
            maxWidth: { xs: '100%', sm: '300px' },
            img: {
              maxWidth: { xs: '80%', sm: '100%' },
              height: 'auto',
            },
            typography: {
              fontSize: { xs: '1rem', sm: '1.25rem' },
            },
          }}
        >
          <img src={farm} alt="Farm" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Artisan Pastries
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Indulge in our selection of <br />
            fresh pastries and bakery delights
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            flex: '1',
            maxWidth: { xs: '100%', sm: '300px' },
            img: {
              maxWidth: { xs: '80%', sm: '100%' },
              height: 'auto',
            },
            typography: {
              fontSize: { xs: '1rem', sm: '1.25rem' },
            },
          }}
        >
          <img src={sustain} alt="Sustainability" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            High Quality Coffee
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Savor the rich flavors of <br />
            Ethiopian Coffee brewed to perfection
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            flex: '1',
            maxWidth: { xs: '100%', sm: '300px' },
            img: {
              maxWidth: { xs: '80%', sm: '100%' },
              height: 'auto',
            },
            typography: {
              fontSize: { xs: '1rem', sm: '1.25rem' },
            },
          }}
        >
          <img src={cultural} alt="cultural diversity" />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Warm Hospitality
          </Typography>
          <Typography sx={{ mt: 1 }}>
            Experience genuine hospitality <br />
            from our friendly staff in a <br />
            welcoming atmosphere
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MarketOffer;