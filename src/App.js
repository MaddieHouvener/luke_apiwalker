import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <h1>API Walker</h1>
      <Router>
        <Navbar path="/" />
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
