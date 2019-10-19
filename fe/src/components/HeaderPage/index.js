import React, { Component } from 'react';

class HeaderPage extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-default position-fixed'>
        <div className='row width-100'>
          <div className='col-9 col-sm-10 text-left'>
            <a className='navbar-brand' href='#'>
              R&D . SunKey
            </a>
          </div>
          <div className='col-3 col-sm-2 float-right'>
            <a href='/mydoor'>
              <button type='button' className='btn btn-sm btn-primary'>
                MyHome
              </button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderPage;
