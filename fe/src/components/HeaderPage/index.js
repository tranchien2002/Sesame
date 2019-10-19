import React, { Component } from 'react';

class HeaderPage extends Component {
  constructor() {
    super();
    this.state = {
      statusMenu: false
    };
  }
  clickMenu = () => {
    this.setState({
      statusMenu: !this.state.statusMenu
    });
  };
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-default'>
        <div className='container'>
          <a className='navbar-brand' href='#'>
            Default Color
          </a>
          <button
            onClick={this.clickMenu}
            className='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbar-default'
            aria-controls='navbar-default'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div
            className={
              this.state.statusMenu
                ? 'navbar-collapse collapse show'
                : 'navbar-collapse collapse'
            }
            id='navbar-default'
            style={{}}
          >
            <div className='navbar-collapse-header'>
              <div className='row'>
                <div className='col-6 collapse-brand'>
                  <a href='./index.html'>
                    <img alt='image' src='./assets/img/brand/blue.png' />
                  </a>
                </div>
                <div className='col-6 collapse-close'>
                  <button
                    onClick={this.clickMenu}
                    type='button'
                    className='navbar-toggler collapsed'
                    data-toggle='collapse'
                    data-target='#navbar-default'
                    aria-controls='navbar-default'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <ul className='navbar-nav ml-lg-auto'>
              <li className='nav-item'>
                <a className='nav-link nav-link-icon' href='#'>
                  <i className='ni ni-favourite-28' />
                  <span className='nav-link-inner--text d-lg-none'>
                    Discover
                  </span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link nav-link-icon' href='#'>
                  <i className='ni ni-notification-70' />
                  <span className='nav-link-inner--text d-lg-none'>
                    Profile
                  </span>
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link nav-link-icon'
                  href='#'
                  id='navbar-default_dropdown_1'
                  role='button'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <i className='ni ni-settings-gear-65' />
                  <span className='nav-link-inner--text d-lg-none'>
                    Settings
                  </span>
                </a>
                <div
                  className='dropdown-menu dropdown-menu-right'
                  aria-labelledby='navbar-default_dropdown_1'
                >
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <div className='dropdown-divider' />
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderPage;
