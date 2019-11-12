import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { unregister } from './serviceWorker'
// import * as serviceWorker from './serviceWorker'; 이거 대신 export function 중 unregister만 가져온다

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

unregister();
/*
// serviceWorker.unregister();
serviceWorker의 unregister만 가져왔으므로 바로 호출가능.
*/ 
