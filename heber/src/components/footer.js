import React from 'react';
import { FaSquareInstagram, FaRegClock, FaTiktok, FaLocationDot } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import footerCSS from '../css/footer.module.css'

function footer () {

  return (
    <footer style={{backgroundColor: "#1F2A30"}}>
      <div className={footerCSS.gridContainer}>
        <div className={`${footerCSS.gridItem} ${footerCSS.gridItemBorder}`}>Row 1</div>
        <div className={`${footerCSS.gridItem} ${footerCSS.gridItemBorder}`}>
          <h1 className={footerCSS.textColor}>Important Links</h1>
          <ul className={``}>
          {/* Use Link component for navigation */}
          <li className=""><Link to="/">Home</Link></li>
          <li className=""><Link to="/market">Market</Link></li>
          <li className=""><Link to="/about">About</Link></li>
          <li className=""><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className={footerCSS.gridItem}>
          <h1 className={footerCSS.textColor}>Location And Working Hours</h1>
          <div style={{display: 'flex', justifyContent: 'left', marginBottom: '10px', color: 'white', textAlign: 'left'}}>
            <FaLocationDot style={{color: '#DAA520', fontSize: '26px', marginRight: '15px'}} />
            3515 S Jefferson St, Falls Church, VA 22041
          </div>
          <div style={{display: 'flex', justifyContent: 'left', color: 'white', textAlign: "left"}}>
            <FaRegClock style={{color: '#DAA520', fontSize: '24px', marginRight: '10px'}} />
            Hours Open: <br/> 
            Mon-Sun 09:00AM - 10:00PM
          </div>
          <div className={footerCSS.socialIcons}>
            <FaTiktok style={{color: '#DAA520'}} />
            <FaSquareInstagram style={{color: '#DAA520'}} />
            <FaFacebookSquare style={{color: '#DAA520'}}  />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;