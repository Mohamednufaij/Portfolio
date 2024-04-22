// Header.js

// Header.js

import React from 'react';
import style from './main.module.css'; // Importing the CSS module for styling
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.name}>Mohamed Nufaij T K</h1>
            <nav>
                <ul className={style.navLinks}>
                    <li><Link to='/' className={style.active}>Home</Link></li>
                    <li><Link to='/skills' className={style.navLink}>Skills</Link></li>
                    <li><Link to='/projects' className={style.navLink}>Projects</Link></li>
                    <li><Link to='contact' className={style.navLink}>Contact Me</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

