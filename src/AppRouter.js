// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Intro from './components/Intro';
import About from './components/About';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Intro} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
