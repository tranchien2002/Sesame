import * as actions from '../actions';

const initialState = {
  web3: null,
  account: null,
  balance: 0,
  myDoors: [],
  doors: [],
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

    case actions.GET_ALL_DOORS:
      return {
        ...state,
        doors: action.doors
      };
    default:
      return state;
  }
};

export default tomoReducer;
