import React, { Component } from 'react';
import Room from '../../components/Rooms/Item';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { room: 'Room 1', status: true },
      { room: 'Room 2', status: true },
      { room: 'Room 3', status: false }
    ];
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
        <h1 className='text-white'>Phòng của bạn</h1>
        <div className='row justify-content-md-center'>
          {this.props.tomo.myDoors.map((x) => (
            <Room item={x} />
          ))}
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

export default compose(connect(mapStateToProps))(Customer);
