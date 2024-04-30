// Header.js

// Header.js

import React from 'react';
import style from './main.module.css'; // Importing the CSS module for styling
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header id={style.header}>
            <h1 className={style.name}></h1>
            <nav>
                <ul className={style.navLinks}>
                    <li><a href="" className={style.active}>Home</a></li>
                    <li><a href="#skillsContainer" className={style.navLink}>Skills</a></li>
                    <li><a href="#Projects"className={style.navLink}>Projects</a></li>
                    <li><a href=".contactContainer"className={style.navLink}>Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
