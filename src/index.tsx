import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import reducer from "./common/Reducer";
import * as serviceWorker from './serviceWorker';
import { IImState } from './common/State';
import { IAction } from './core/Action';

const store = createStore<IImState, IAction, {}, {}>(reducer);

const rootRender = () => ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />, document.getElementById('root'));
rootRender();
store.subscribe(rootRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
