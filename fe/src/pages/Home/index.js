import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Room from '../../components/Rooms/Item';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Danh Sách Cho Thuê</h1>
        <div className='row'>
          {[1, 2, 3].map(x => (
            <Room item={x} />
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
