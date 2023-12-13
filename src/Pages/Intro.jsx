import React from "react";

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
            Hello! I'm Jesse Smith, a passionate software engineer on improving business.
        </p>
        </div>
    </div>
    );
};

export default Intro;

