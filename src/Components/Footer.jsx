// Footer.js

import React from 'react';
import style from './main.module.css'; // Import CSS module for styling
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
