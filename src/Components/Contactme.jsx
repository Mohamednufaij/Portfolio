// Contact.js

import React from 'react';
import style from './main.module.css'; // Import CSS module for styling

const Contactme = () => {
  return (
    <div id={style.contactContainer}>
      <h2>Contact Me</h2>
      <div className={style.contactInfo}>
        <p><strong>Email:</strong> nufaijjufu321@gmail.com</p>
        <p><strong>Phone:</strong> +91 7994103145</p>
        <p><strong>Address:</strong>Taj,Aniyaram(po),Chokli,670672,Kannur,Kerala </p>
      </div>
    </div>
  );
};
export default Contactme;
