import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './Pages/Intro';
import About from './Pages/About';
import Projects from './Pages/Projects';
import { Layout } from './Layout';


const App = () => {
  return (
    <Router>   
      <Routes>
        <Route element={<Layout/>}>
         <Route path="/" element={<Intro/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/Projects" element={<Projects/>}/>
        </Route>
      </Routes>  
    </Router>
  );
};

export default App;