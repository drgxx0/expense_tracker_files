import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'Containers/App';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import uiReducer from 'store/reducers/uiReducer'
import authReducer from './store/reducers/authReducer'
import xpReducer from './store/reducers/xpReducer'

import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    xp: xpReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
