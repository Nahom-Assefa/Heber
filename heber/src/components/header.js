import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import client from '../api/sanityClient';
import { urlFor } from '../utils/imageURL';
import hCSS from '../css/Header.module.css';

function Header( props ) {
  const [banner, setBanner] = useState('');
  const [heberLogo, setLogo] = useState('');
  const [afroDivPrint, setAfroPrint] = useState('');
  const [menuIcon, setMenuIcon] = useState('');
  const [marketIcon, setMarketIcon] = useState('');
  const all = `*[_type == "headerImage"]{image, title}`;

  const { page } = props;
   
    useEffect(() => {
      async function fetchData() {
        try {
          const headerComponentData = await client.fetch(all);
          console.log( 'page', page );
          switch ( page ) {
            case 'home':
              headerComponentData.forEach(function(a_item) {
                switch(a_item.title) {
                  case "Home Page Banner Image": setBanner(urlFor(a_item.image).sharpen().url())
                    break;
                  case "Afro Div Print": setAfroPrint(urlFor(a_item.image).sharpen().url())
                    break;
                  case "Heber Logo White": setLogo(urlFor(a_item.image).sharpen().url())
                    break;
                  case "View Menu Icon": setMenuIcon(urlFor(a_item.image).sharpen().url())
                    break;
                  case "View Market Icon": setMarketIcon(urlFor(a_item.image).sharpen().url())
                    break;
                  default:
                    break;
                }
              })
              break;

              case 'market':
                headerComponentData.forEach(function(a_item) {
                  switch(a_item.title) {
                    case "Market Page Banner Image": setBanner(urlFor(a_item.image).sharpen().url())
                      break;
                    case "Heber Logo White": setLogo(urlFor(a_item.image).sharpen().url())
                      break;
                    default:
                      break;
                  }
                })
                break;
          
            default:
              break;
          }
          
        } catch (error) {
          console.error('Error fetching data:', error); // Could set a default banner URL or handle the error in another way
        }
      }
      fetchData();
    }, []);

  return (
    <>
    <header style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      // height: '500px'
      height: '50vmin'
    }}>
      <nav>
        <ul className={ hCSS.rip }>
          <li><img src={ heberLogo } alt=""/></li>
          <li className={hCSS.lineItem}><Link className={hCSS.anchor} to="/">Home</Link></li>
          <li className={hCSS.lineItem}><Link className={hCSS.anchor} to="/market">Market</Link></li>
          <li className={hCSS.lineItem}><Link className={hCSS.anchor} to="/about">About</Link></li>
          <li className={hCSS.lineItem}><Link className={hCSS.anchor} to="/careers">Careers</Link></li>

          <li className={hCSS.contactButtonContainer}>
            <button className={hCSS.contactButton}>Contact Us</button>
          </li>
        </ul>
      </nav>
      { page == 'home' && 
      <div>
        <h1 className={hCSS.pageTitle}> <span className={hCSS.nBold}>Where</span> <span className={hCSS.bold}>Community</span> <br/>
        <span className={hCSS.nBold}>Meets</span> <span className={hCSS.bold}>Culture</span></h1><br/>
        <p className={hCSS.pTitle}>Experience the vibrant fusion of Ethiopian heritage <br/> 
                                    and modern convenience at Heber Market & Cafe.</p>
        <span className={hCSS.vMenuButtonContainer}>
          <button className={hCSS.vMenuButton}>
            <img src={menuIcon} style={{ width: '18px', height: '18px', marginRight: '5px'}} alt="Menu Icon" />
            <span>View Menu</span>
          </button>
        </span>
        <span className={hCSS.vMarketButtonContainer}>
          <button className={hCSS.vMarketButton}>
            <img src={marketIcon} style={{ width: '18px', height: '15px', marginRight: '5px' }} alt="Menu Icon" />
            <span>View Market</span>
          </button>
        </span>
      </div>
    }
    </header>
    { page == 'home' && 
      <div><img src={`${afroDivPrint}`} alt="Example Image" className={hCSS.afroCover}/></div>
    }
    </>
  );
}

export default Header;
