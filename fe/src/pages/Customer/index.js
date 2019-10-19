import React, { Component } from 'react';

class Customer extends Component {
  render() {
    return (
      <div className='home'>
        <h1>Customer</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='card' style={{ width: '18rem' }}>
                <img
                  className='card-img-top'
                  src={require('assets/img/hs1.jpg')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='card' style={{ width: '18rem' }}>
                <img
                  className='card-img-top'
                  src={require('assets/img/hs1.jpg')}
                  alt='Card image cap'
                />
                <div className='card-body'>
                  <h5 className='card-title'>Card title</h5>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                  <a href='#' className='btn btn-primary'>
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Customer;
