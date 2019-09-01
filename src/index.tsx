import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import reducer from "./common/Reducer";
import * as serviceWorker from './serviceWorker';
import { IImState } from './common/State';
import { IAction } from './core/Action';
import { createLogger } from "redux-logger";

const store = createStore<IImState, IAction, {}, {}>(reducer, applyMiddleware(createLogger({
    stateTransformer: (state: IImState) => state.toJS(),
})));

const rootRender = () => ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />, document.getElementById('root'));
rootRender();
store.subscribe(rootRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
