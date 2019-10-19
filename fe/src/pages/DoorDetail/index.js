import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';

class DoorDetail extends Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    if (!window.web3) return;
    if (window.web3.currentProvider.isMetaMask) {
      await store.dispatch(actions.web3Connect());
    } else if (window.web3.currentProvider.isTomoWallet) {
      await store.dispatch(actions.web3TomoWalletConnect());
    }
    await store.dispatch(actions.getMyDoors());
    console.log(this.props.tomo.myDoors);
  }
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
const mapStateToProps = (state) => {
  return {
    tomo: state.tomo
  };
};

export default compose(connect(mapStateToProps))(DoorDetail);
