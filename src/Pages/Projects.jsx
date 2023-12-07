import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>    
      <h1>Projects Page</h1>
        <ul>
        <li>Project 1: Brief description</li>
        <li>Project 2: Brief description</li>
        </ul>
        <Link to="/">Intro</Link>,
        <Link to="/About">About</Link>
    </>
  );
};

export default Projects;