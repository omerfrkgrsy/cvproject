import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer'
import App from './components/app';
import thunk from 'redux-thunk'
import "bootstrap/dist/css/bootstrap.min.css";

const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)