import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/argon.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import * as actions from './actions';

const appRoot = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appRoot
);

window.addEventListener('load', async () => {
  if (window.web3) {
    if (window.web3.currentProvider.isMetaMask) {
      store.dispatch(actions.web3Connect());
    } else if (window.web3.currentProvider.isTomoWallet) {
      store.dispatch(actions.web3TomoWalletConnect());
    }
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
