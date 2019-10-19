import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HeaderPage from '../../components/HeaderPage';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HeaderPage />
        <h1>HomePage</h1>
        <div className='row'>
          <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src={require('assets/img/hs1.jpg')}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src={require('assets/img/hs1.jpg')}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div className='card' style={{ width: '18rem' }}>
              <img
                className='card-img-top'
                src={require('assets/img/hs1.jpg')}
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>Card title</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href='#' className='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props);
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
