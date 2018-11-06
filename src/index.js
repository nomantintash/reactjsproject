import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/home';
import * as serviceWorker from './serviceWorker';
import './app.css';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store = { createStoreWithMiddleware (reducers, {}, applyMiddleware (ReduxThunk)) }>
  <BrowserRouter>
    <div>
        <App/>
    </div>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
