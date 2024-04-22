import React from 'react';
import style from './main.module.css'; // Import CSS module for styling
import img from './images/Screenshot (10).png'
import img1 from './images/Screenshot (9).png'
import img2 from './images/Screenshot (8).png'
import img3 from './images/Screenshot (11).png'
import img4 from './images/Screenshot (13).png'
import img5 from './images/Screenshot (14).png'
import img6 from './images/Screenshot (15).png'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Employee Profile Management System",
      description: 
      "Here we create a profile card containing the username, company name, and salary of an employee. After entering the details it will be stored in a JSON file then we can update and edit the profile cards"
              ,
      images: [img2, img1,]
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "Created a Clone Website of Netflix using React JS and with the help of API provided by the movie database as a backend."
      ,
      images: [img3, img4, ]
    },
    {
      id: 3,
      title: "Human Behaviour Analysis Using Twitter",
      description: "Predicting the human behavior using his Twitter Tweets, We have Used a linear regression algorithm to predict the Behaviour. We did the project using languages like Python Django ,Postgressql,HTML, CSS, and Javascript."
      ,
      images: [, img5, img6]
    }
  ];

  return (
    
    <div>
        <h1>My Projects</h1>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <div className={style.projectContainer}>
      <div className={style.projectDescription}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className={style.projectImages}>
        {project.images.map((image, index) => (
          <div key={index} className={style.imageContainer}>
            <img src={image} alt={`Project ${project.id} Image ${index+1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

