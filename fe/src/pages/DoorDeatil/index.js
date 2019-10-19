import React, { Component } from 'react';

class DoorDetail extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Door Detail</h1>
        <div className='row'>
          <div className='col-6'>
            <div className='card style-door' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src={require('assets/img/close.jpg')}
                alt='Card image cap'
              />
              <div className='card-body'>
                <button className='btn btn-danger btn-block'>Close</button>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='card style-door' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src={require('assets/img/open.jpg')}
                alt='Card image cap'
              />
              <div className='card-body'>
                <button className='btn btn-success btn-block'>Open</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DoorDetail;
