import getWeb3 from '../utils/getWeb3';
import Factory from '../contracts/Factory.json';
import sesame from '../contracts/Sesame.json';
require('dotenv').config();

const networkId = '89';

export const WEB3_CONNECT = 'WEB3_CONNECT';
export const web3Connect = () => async (dispatch) => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  // if (web3.currentProvider.connection.networkVersion !== '3') {
  if (web3.currentProvider.connection.networkVersion !== '89') {
    alert('Unknown network, please change network to TomoChain network  ');
    console.log('test');
    return;
  }
  if (accounts.length > 0) {
    const account = accounts[0];
    let balance = await web3.eth.getBalance(account);
    balance = parseFloat(web3.utils.fromWei(balance)).toFixed(2);
    dispatch({
      type: WEB3_CONNECT,
      web3,
      account,
      balance
    });
  } else {
    console.log('Account not found');
  }
  dispatch(instantiateContracts());
};

export const INSTANTIATE_CONTRACT = 'INSTANTIATE_CONTRACT';
export const instantiateContracts = () => async (dispatch, getState) => {
  const state = getState();
  let web3 = state.tomo.web3;
  let factoryAddress = Factory.networks[networkId].address;
  let factory = new web3.eth.Contract(Factory.abi, factoryAddress, {
    transactionConfirmationBlocks: 1
  });
  dispatch({
    type: INSTANTIATE_CONTRACT,
    factory
  });
};

export const web3TomoWalletConnect = () => async (dispatch) => {
  var Web3 = require('web3');
  const web3 = new Web3(window.web3.currentProvider);
  window.web3.version.getNetwork((e, netId) => {
    if (netId !== networkId) {
      alert('Unknown network, please change network to TomoChain network');
      return;
    }
  });
  await new Promise((resolve, reject) => {
    window.web3.eth.getAccounts(async (e, accounts) => {
      if (accounts.length > 0) {
        const account = accounts[0];
        let balance = await web3.eth.getBalance(account);
        balance = parseFloat(web3.utils.fromWei(balance)).toFixed(2);
        dispatch({
          type: WEB3_CONNECT,
          web3,
          account,
          balance
        });
        dispatch(instantiateContracts());
        resolve();
      } else {
        reject();
        console.log('Account not found');
      }
    });
  });
};

export const GET_MY_DOORS = 'GET_MY_DOORS';
export const getMyDoors = () => async (dispatch, getState) => {
  const state = getState();
  let web3 = state.tomo.web3;
  const factory = state.tomo.factory;
  const account = state.tomo.account;
  let myDoorsAddress = await factory.methods.getAllSesameOf(account).call({ from: account });
  let myDoors = [];
  for (let i = 0; i < myDoorsAddress.length; i++) {
    let door = {
      address: '',
      instance: null,
      lock: null,
      startDate: null,
      endDate: null,
      cost: 0
    };

    door.instance = new web3.eth.Contract(sesame.abi, myDoorsAddress[i], {
      transactionConfirmationBlocks: 1
    });

    door.address = myDoorsAddress[i];
    door.lock = await door.instance.methods.lock().call();

    let startDate = await door.instance.methods.startDate().call();
    door.startDate = startDate.toNumber();

    let endDate = await door.instance.methods.endDate().call();
    door.endDate = endDate.toNumber();

    let cost = await door.instance.methods.cost().call();
    door.cost = cost.toNumber();
    myDoors.push(door);
  }
  dispatch({
    type: GET_MY_DOORS,
    myDoors
  });
};

export const GET_ALL_DOORS = 'GET_ALL_DOORS';
export const getAllDoors = () => async (dispatch, getState) => {
  const state = getState();
  let web3 = state.tomo.web3;
  const factory = state.tomo.factory;
  const account = state.tomo.account;
  let doorsAddress = await factory.methods.getAllSesames().call({ from: account });
  let doors = [];
  for (let i = 0; i < doorsAddress.length; i++) {
    let door = {
      address: '',
      instance: null,
      lock: null,
      startDate: null,
      endDate: null,
      cost: 0,
      renter: null
    };

    door.instance = new web3.eth.Contract(sesame.abi, doorsAddress[i], {
      transactionConfirmationBlocks: 1
    });

    door.address = doorsAddress[i];
    door.lock = await door.instance.methods.lock().call();

    let startDate = await door.instance.methods.startDate().call();
    door.startDate = startDate.toNumber();

    let endDate = await door.instance.methods.endDate().call();
    door.endDate = endDate.toNumber();

    let cost = await door.instance.methods.cost().call();
    door.cost = cost.toNumber();

    door.renter = await door.instance.methods.renter().call();
    doors.push(door);
  }
  dispatch({
    type: GET_ALL_DOORS,
    doors
  });
};
