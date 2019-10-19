import React, { Component } from 'react';
import { common } from '../../helper/common_function';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';
const door = require('assets/img/hs1.jpg');

class RoomHome extends Component {
  constructor(props) {
    super(props);
  }

  booking = async () => {
    await this.props.tomo.factory.methods
      .booking(this.props.item.address)
      .send({ from: this.props.tomo.account, value: this.props.item.cost * 10 ** 18 });
    await store.dispatch(actions.getAllDoors());
  };

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
            <h5 className='card-title'>Sale</h5>
            <p className='row'>
              <p className='card-text text-left col-6 col-sm-12'>
                From: {common.timeConverter(this.props.item.startDate)}
              </p>
              <p className='card-text text-left col-6 col-sm-12'>
                To: {common.timeConverter(this.props.item.endDate)}
              </p>
            </p>

            <div className='row'>
              <div className='col-12'>
                <button className='btn btn-success' onClick={this.booking}>
                  Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tomo: state.tomo
  };
};
export default compose(connect(mapStateToProps))(RoomHome);
