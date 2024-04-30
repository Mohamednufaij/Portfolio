import React from 'react';
import style from './main.module.css'; // Corrected import path
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contactme from './Contactme';
import Footer from './Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Header';

const Main = () => {
  return (
    <div className="App">
      
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contactme/>
      <Footer/>
    </div>
  );
}
export default Main;

  {/* <header id={style.header}>
        <h1>Mohamed Nufaij TK</h1>
        <nav className={style.menubar}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header> */}
      {/* <section id="about">
        <h2>About Me</h2>
        <p>I'm a passionate web developer with expertise in ReactJS.</p>
        <img src="" alt="" />
      </section> */}
      
      {/* <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
          <a href="#">Live Demo</a>
          <a href="#">GitHub</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
          <a href="#">Live Demo</a>
          <a href="#">GitHub</a>
        </div>
        {/* Add more project items here 
      </section>*/}
      
      
      {/* <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: john.doe@example.com</p>
        <p>LinkedIn: <a href="#">John Doe</a></p>
      </section> */}
      

      {/* <footer>
        <p>&copy; 2024 John Doe</p>
      </footer> */}