import React, { Component } from 'react';
import { common } from '../../helper/common_function';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';
const door = require('assets/img/hs1.jpg');
const img_price = require('assets/img/price.png');
const list_name = [
  'Homestay đà lạt',
  'Hotel Mộc Châu',
  'RiverPark Homestay',
  'Sac Lo Homestay',
  'Little Leo Homestay'
];
class RoomHome extends Component {
  constructor(props) {
    super(props);
  }

  booking = async () => {
    await this.props.tomo.factory.methods
      .booking(this.props.item.address)
      .send({
        from: this.props.tomo.account,
        value: this.props.item.cost * 10 ** 18
      });
    await store.dispatch(actions.getAllDoors());
    window.location.href = `/mydoor`;
  };

  render() {
    return (
      <div className='col-lg-3 col-md-3 col-xs-12 mb-5'>
        <div className='card shadow-sm'>
          <img
            className='card-img-top width-100'
            src={door}
            alt='Foo eating a sandwich.'
          />
          <div className='card-body'>
            <h5 className='card-title'>
              {this.props.index > 5
                ? list_name[this.props.index % 5]
                : list_name[this.props.index]}
            </h5>
            <div>
              <p className='card-text text-md-left text-xs-center'>
                From: {common.timeConverter(this.props.item.startDate)}
              </p>
              <p className='card-text text-md-left text-xs-center'>
                To: {common.timeConverter(this.props.item.endDate)}
              </p>
            </div>
            <div className='mt-3'>
              <img src={img_price} width='32px' />
              <b>
                <span> {this.props.item.cost} Coin</span>
              </b>
            </div>
            <div className='row mt-3'>
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
const mapStateToProps = state => {
  return {
    tomo: state.tomo
  };
};
export default compose(connect(mapStateToProps))(RoomHome);
