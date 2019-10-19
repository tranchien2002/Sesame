import React, { Component } from 'react';

class HeaderDoor extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-default position-fixed'>
        <div className='row width-100'>
          <div className='col-10 text-left'>
            <a className='navbar-brand' href='#'>
              R&D . SunKey
            </a>
          </div>
          <div className='col-2 float-right'>
            <a href='/'>
              <button
                type='button'
                className='btn btn-sm btn-primary btn-tooltip'
              >
                Home
              </button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderDoor;
