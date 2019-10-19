import getWeb3 from '../utils/getWeb3';
import Factory from '../contracts/Factory.json';
require('dotenv').config();

const networkId = '89';

export const WEB3_CONNECT = 'WEB3_CONNECT';
export const web3Connect = () => async (dispatch) => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  // if (web3.currentProvider.connection.networkVersion !== '3') {
  if (web3.currentProvider.networkVersion !== '89') {
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
  let myDoors = await factory.methods.getAllSesameOf(account).call({ from: account });
  let doors = [];
  console.log(myDoors);
};
