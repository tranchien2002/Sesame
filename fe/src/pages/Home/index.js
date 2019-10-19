import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import RoomHome from '../../components/RoomHome';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Danh Sách Cho Thuê</h1>
        <div className='row justify-content-md-center'>
          {[1, 2, 3].map((x, i) => (
            <RoomHome item={x} key={i} />
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
  }
}

const mapStatetoProps = state => {
  return {
    tomo: state.tomo
  };
};

const mapDispatchToProps = dispatch => {
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
