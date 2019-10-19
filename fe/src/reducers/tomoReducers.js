import * as actions from '../actions';

const initialState = {
  web3: null,
  account: null,
  balance: 0,
  myDoors: [],
  factory: null
};

const tomoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.WEB3_CONNECT:
      return {
        ...state,
        web3: action.web3,
        account: action.account,
        balance: action.balance
      };
    case actions.INSTANTIATE_CONTRACT:
      return {
        ...state,
        factory: action.factory
      };

    case actions.GET_MY_DOORS:
      return {
        ...state,
        myDoors: action.myDoors
      };
    default:
      return state;
  }
};

export default tomoReducer;
