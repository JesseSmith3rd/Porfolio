// About.js
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>    
      <h1>About Page</h1>

      <h2>About Me</h2>
        I am a Engineer with a background in technology. My interest is in Software Development. 
        <h2>Degrees</h2>
        <li>Masters of Information Systems</li>
        <li>Bachelors of Science in Information technology</li>
        <li>Associate of Arts</li>
        <li>Advanced Software Developer Certificate</li>
        <Link to="/">Intro</Link>,
        <Link to="/Projects">Projects</Link>
    </>
  );
};

export default About;
