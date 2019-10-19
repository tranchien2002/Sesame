import React from 'react';
import './App.css';
import Home from './pages/Home';
import Customer from './pages/Customer';
import DoorDetail from './pages/DoorDetail';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/customer/:address' component={Customer} />
          <Route path='/door/:id' component={DoorDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
