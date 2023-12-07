import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import About from './Pages/About';
import Projects from './Pages/Projects';


const App = () => {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Intro/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>  
    </Router>
  );
};

export default App;