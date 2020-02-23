import {createStore, bindActionCreators, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import './index.sass';
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import reducer from './components/redux/reducer';
import reduxThunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))