import React from "react";
import './Style.css';
import { Link } from "react-router-dom";

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
        <Link to="/">Intro</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <p>
            Hello! I'm Jesse Smith, a passionate software engineer with a focus on business.
        </p>
        </div>
    </div>
    );
};

export default Intro;

