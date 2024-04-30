import React from 'react';
import style from './main.module.css'; // Import CSS module for styling
import img1 from './opengraph-icon-200x200.png'
import django from './opengraph-icon-200x200.png'
import react from './React.webp'
import sql from './sql7.jpg'
import html from './html1.jpeg' 
import css from './css.png'
import js from './js.png'
import boot from './bootstrap.jpg'
const Skills = () => {
  return (
    <div id={style.skillsContainer}>
      <div className={style.heading}>
        <h2>Let's Explore My Skills</h2>
      </div>
      <div className={style.skillsList}>
        <SkillItem name="Python" imageUrl={img1} />
        <SkillItem name="Django" imageUrl={django} />
        <SkillItem name="React js" imageUrl={react} />
        <SkillItem name="SQL" imageUrl={sql} />
        <SkillItem name="HTML5" imageUrl={html} />
        <SkillItem name="CSS3" imageUrl={css} />
        <SkillItem name="Javascript" imageUrl={js} />
        <SkillItem name="Bootstrap" imageUrl={boot} />
      </div>
    </div>
  );
};

const SkillItem = ({ name, imageUrl }) => {
  return (
    <div className={style.skillItem}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Skills;
