import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RoomHome from '../../components/RoomHome';
import store from 'store';
import * as actions from 'actions';
class Home extends Component {
  render() {
    const list = this.props.tomo.doors.filter(
      (x) => x.renter === '0x0000000000000000000000000000000000000000'
    );
    return (
      <div className='container'>
        <h1 className='text-white'>Danh Sách Cho Thuê</h1>
        <div className='row justify-content-md-center'>
          {list.map((x, i) => (
            <Room item={x} key={i} />
          ))}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    if (!window.web3) return;
    if (window.web3.currentProvider.isMetaMask) {
      await store.dispatch(actions.web3Connect());
    } else if (window.web3.currentProvider.isTomoWallet) {
      await store.dispatch(actions.web3TomoWalletConnect());
    }
    await store.dispatch(actions.getAllDoors());
  }
}

const mapStatetoProps = (state) => {
  return {
    tomo: state.tomo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    instantiateContracts: () => dispatch({ type: 'instantiateContracts' })
  };
};

export default compose(
  connect(
    mapStatetoProps,
    mapDispatchToProps
  )
)(Home);
