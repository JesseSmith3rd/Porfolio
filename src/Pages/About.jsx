// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";

const About = () => {
  return (
    <>
    <div className='AboutMe'>
      <h1>About Me</h1>
        I am an Engineer with five years of experience in Software Development. 
        <h1>Programming Languages</h1>
        <li>JavaScript</li>
        <li>.NET</li> 
        <li>Java</li> 
        <li>Python</li>
        <h2>Degrees</h2>
        <li>Masters of Information Systems</li>
        <li>Bachelors of Science in Information Technology</li>
        <li>Associate of Arts</li>
        <h1>Certification</h1>
        <li>Advanced Software Development</li> 
      </div>
    </>
  );
};

export default About;
