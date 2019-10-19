import React, { Component } from 'react';
import { common } from '../../helper/common_function';
const door = require('assets/img/hs1.jpg');
class RoomHome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='col-lg-3 col-md-3 col-xs-12 mb-2'>
        <div className='card'>
          <img
            className='card-img-top'
            src={door}
            alt='Foo eating a sandwich.'
            style={{ height: '200px' }}
          />
          <div className='card-body'>
            <h5 className='card-title'>{this.props.item}</h5>
            <p className='row'>
              <p className='card-text text-left col-6 col-sm-12'>
                From: {common.timeConverter(1571470004)}
              </p>
              <p className='card-text text-left col-6 col-sm-12'>
                To: {common.timeConverter(1571478804)}
              </p>
            </p>

            <div className='row'>
              <div className='col-12'>
                <button className='btn btn-success'>Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RoomHome;
