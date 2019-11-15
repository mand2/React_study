import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import RootStore from './RootStore';

const root = new RootStore(); // rootstore 생성~~

ReactDOM.render(
  <Provider {...root}>
    {/* ...root 으로 스토어 모두 자동으로 설정 */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// 이전
// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();