import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';
import { common } from '../../helper/common_function';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  changeLock = async () => {
    // const axios = require('axios');
    // await axios.get('http://10.0.4.110:3000/door/' + this.props.item.address);
    await this.props.item.instance.methods
      .changeLock()
      .send({ from: this.props.tomo.account });
    let res = await fetch(
      'http://10.0.4.110:3000/door/' + this.props.item.address,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      }
    );
    await store.dispatch(actions.getMyDoors());
  };

  render() {
    const door = this.props.item.lock
      ? require('assets/img/close.jpg')
      : require('assets/img/open.jpg');
    return (
      <div className='col-lg-3 col-md-3 col-xs-12 mb-5'>
        <div className='card shadow-sm'>
          <img
            className='card-img-top img-door-xs height-200 mt-3'
            src={door}
            alt='Foo eating a sandwich.'
          />
          <div className='card-body'>
            <h5 className='card-title'>room</h5>
            <div>
              <p className='card-text text-md-left text-xs-center'>
                From: {common.timeConverter(this.props.item.startDate)}
              </p>
              <p className='card-text text-md-left text-xs-center'>
                To: {common.timeConverter(this.props.item.endDate)}
              </p>
            </div>
            <div className='row mt-3'>
              <div className='col-12'>
                {this.props.item.lock ? (
                  <button
                    className='btn btn-success btn-block'
                    onClick={this.changeLock}
                  >
                    Open
                  </button>
                ) : (
                  <button
                    className='btn btn-dark btn-block'
                    onClick={this.changeLock}
                  >
                    Close
                  </button>
                )}
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
export default compose(connect(mapStateToProps))(Item);
