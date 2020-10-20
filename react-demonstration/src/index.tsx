import './index.scss';
import React from 'react';
import Root from './root/Root';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import IReducer from './common/interface/IReducer';
import ItemsReducer from './components/items/state/ItemsReducer';
import LoaderReducer from './components/spinner/state/LoaderReducer';
import AccountReducer from './components/account/state/AccountReducer';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

const rootReducer =
  combineReducers({
    account: AccountReducer,
    loader: LoaderReducer,
    items: ItemsReducer
  } as IReducer);


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
