import React from 'react';
import { FaSquareInstagram, FaRegClock } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
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
          <div style={{display: 'flex', justifyContent: 'left', marginBottom: '10px'}}>
            <CiLocationOn style={{color: '#DAA520', fontSize: '3vw'}} />
          </div>
          <div style={{display: 'flex', justifyContent: 'left'}}>
            <FaRegClock style={{color: '#DAA520', fontSize: '2.3vw'}} />
          </div>
          <div id='socialIcons'>
            <AiFillTikTok style={{color: '#DAA520', fontSize: '3.3vw'}} />
            <FaSquareInstagram style={{color: '#DAA520', fontSize: '3vw'}} />
            <FaFacebookSquare style={{color: '#DAA520', fontSize: '3vw'}}  />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;