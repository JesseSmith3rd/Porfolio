import React from "react";
import './Style.css';

const Intro = () => {
    return (        
        <div className='.intro-container'>
             <div className='.profile-image-container'>
            <img
            className="profile-image"
            src="/images/profile.jpeg"
            alt="Jesse Smith" 
            />

        </div>,     
    <div className="intro-text">
        <h1>Jesse  Smith</h1>
        <p>
            Hello! I'm Jesse Smith, a passionate software engineer with a focus on business.
        </p>
        <h2>About Me</h2>
        I am a Engineer with a background in technology. My interest is in Software Development. 
        <h2>Degrees</h2>
        <li>Masters of Information Systems</li>
        <li>Bachelors of Science in Information technology</li>
        <li>Associate of Arts</li>
        <li>Advanced Software Developer Certificate</li>
        <h2>Projects</h2>
        <ul>
        <li>Project 1: Brief description</li>
        <li>Project 2: Brief description</li>
        {/* Add more projects as needed */}
        </ul>
        </div>
    </div>
    );
};

export default Intro;

