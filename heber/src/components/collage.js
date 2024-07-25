import React, { useEffect, useState } from 'react';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import styles from '../css/Collage.module.css';

function Collage() {
  const [entirety, setEntirety] = useState('');
  const [, setCollageData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

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
        
        // Update state with fetched data
        setCollageData(data);

        data.forEach(function(a_item) {
          switch(a_item.title) {
            case "collage":
              setEntirety(urlFor(a_item.image).sharpen().url());
              break;
            default:
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error); // Could set a default banner URL or handle the error in another way
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading message or spinner
  }

  return (
    <div className={styles.collageDiv}>
      <img src={`${entirety}`} alt="Entirety" className={styles.collageImg} />
    </div>
  );
}

export default Collage;