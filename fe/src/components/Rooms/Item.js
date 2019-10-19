import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import store from 'store';
import * as actions from 'actions';

class Item extends Component {
  constructor(props) {
    super(props);
  }

  async changeLock() {
    await this.props.item.instance.methods.changeLock().send({ from: this.props.tomo.account });
  }

  render() {
    const door = this.props.item.lock
      ? require('assets/img/close.jpg')
      : require('assets/img/open.jpg');
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
            <h5 className='card-title'>room</h5>
            <p className='card-text'>
              {!this.props.item.lock ? 'Door is opening' : 'Door is closing'}
            </p>
            <div className='row'>
              <div className='col-12'>
                {this.props.item.lock ? (
                  <button className='btn btn-success'>Open</button>
                ) : (
                  <button className='btn btn-dark'>Close</button>
                )}
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
export default compose(connect(mapStateToProps))(Item);
