import React from 'react';
import './footer.css';
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import {FiMail  } from "react-icons/fi";

const fontStyles = { margin: "5px", fontSize: '25px'};
const Footer =()=> {
  return (
    <footer className="footer">
      <div className="info">
        <p>© {new Date().getFullYear()} Music Blog. </p>
      </div>
      <div>
        {/* <p className='self-center'>Seguinos</p> */}
        <div className='flex'><FiMail style={fontStyles}/><FaFacebookSquare style={fontStyles}/><FaInstagram style={fontStyles}/></div>
      </div>
    </footer>
  );
}

export default Footer;

