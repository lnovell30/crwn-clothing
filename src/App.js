import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.css';


const HatsPage = () => (
    <div>
      <h1> HATS PAGE </h1>
    </div>
)
function App() {
  return (
    <div>
      <switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
