import React, { Component } from 'react';
import Room from '../../components/Rooms/Item';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = [
      { room: 'Room 1', status: true },
      { room: 'Room 2', status: true },
      { room: 'Room 3', status: false }
    ];
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-white'>Danh Sách Cho Thuê</h1>
        <div className='row justify-content-md-center'>
          {this.state.map(x => (
            <Room item={x.room} status={x.status} />
          ))}
        </div>
      </div>
    );
  }
}

export default Customer;
