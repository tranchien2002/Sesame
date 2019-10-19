import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HeaderPage from '../../components/HeaderPage';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <HeaderPage />
        <section className='section section-lg section-hero section-shaped'>
          {/* Background circles */}
          <div className='shape shape-style-1 shape-primary'>
            <span className='span-150' />
            <span className='span-50' />
            <span className='span-50' />
            <span className='span-75' />
            <span className='span-100' />
            <span className='span-75' />
            <span className='span-50' />
            <span className='span-100' />
            <span className='span-50' />
            <span className='span-100' />
          </div>
          {/* SVG separator */}
          <div className='separator separator-bottom separator-skew zindex-100'>
            <svg
              x={0}
              y={0}
              viewBox='0 0 2560 100'
              preserveAspectRatio='none'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <polygon className='fill-white' points='2560 0 2560 100 0 100' />
            </svg>
          </div>
          <div className='container'>
            <h1>Danh Sách Cho Thuê</h1>
            <div className='row'>
              <div className='col-4'>
                <div className='card' style={{ width: '18rem' }}>
                  <img
                    className='card-img-top'
                    src={require('assets/img/hs1.jpg')}
                    alt='Foo eating a sandwich.'
                  />
                  <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
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
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href='#' className='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
