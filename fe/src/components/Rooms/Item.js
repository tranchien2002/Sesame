import React from 'react';

const Item = props => {
  const door = props.status
    ? require('assets/img/close.jpg')
    : require('assets/img/open.jpg');
  return (
    <div className='col-lg-3 col-md-3 col-xs-12 mb-2 col-'>
      <div className='card'>
        <img
          className='card-img-top'
          src={door}
          alt='Foo eating a sandwich.'
          style={{ height: '200px' }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{props.item}</h5>
          <p className='card-text'>
            {!props.status ? 'Door is opening' : 'Door is closing'}
          </p>
          <div className='row'>
            <div className='col-12'>
              {props.status ? (
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
};
export default Item;
