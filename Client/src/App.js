import React from 'react';
import './App.css';
import Home from './pages/Home';
import Customer from './pages/Customer';
import DoorDeatil from './pages/DoorDetail';
import HeaderPage from './components/HeaderPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <div className='home'>
          <HeaderPage />
          <section className='section section-lg section-hero section-shaped'>
            {/* Background circles */}
            <div className='shape shape-style-1 shape-primary'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/mydoor' component={Customer} />
            </Switch>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                x={0}
                y={0}
                viewBox='0 0 2560 100'
                preserveAspectRatio='none'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
